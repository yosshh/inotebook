import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let Navigate = useNavigate()
  const handleLogout = ()=> {
    localStorage.removeItem('auth-token')
    Navigate('/login')
  }
  let location = useLocation();
  React.useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          iNotebook
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse text-white"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item text-white">
              <Link
                className={`nav-link ${
                  location.pathname === "/home" ? "active" : ""
                } `}
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                } `}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('auth-token')?<form className="d-flex">
            <Link className="btn btn-light mx-2" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-light mx-2" to="/signup" role="button">
              SignUp
            </Link>
          </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
