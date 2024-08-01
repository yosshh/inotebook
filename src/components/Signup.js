import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  let navigate = useNavigate();
  const [credentials, setcredentials] = useState({name: "", email: "", password: "", cpassword: "" });
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { name, email, password } = credentials;
      const response = await fetch("http://localhost:5000/api/auth/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      console.log(json);
      if (json && json.success) {
        localStorage.setItem("auth-token", json.authToken);
        props.showAlert("Account Created Successfully", "success");
        navigate("/home");
      } else {
        props.showAlert("Invalid Credentials", "danger");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      props.showAlert("Failed to create account", "danger");
    }
  };
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={onchange}
            id="name"
            required
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={onchange}
            id="email"
            required
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={onchange}
            className="form-control"
            id="password"
            minLength={5}
            required
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onchange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
