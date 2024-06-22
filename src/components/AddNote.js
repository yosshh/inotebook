import React from "react";
import { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "",
    description: "",
    tag: ""})
    props.showAlert('Note Added Successfully', 'success')
  };
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h1>Add Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              onChange={onchange}
              type="text"
              value={note.title}
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              onChange={onchange}
              type="text"
              className="form-control"
              id="description"
              value={note.description}
              name="description"
              minLength={5}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              onChange={onchange}
              type="text"
              className="form-control"
              value={note.tag}
              id="tag"
              name="tag"
              minLength={5}
              required
            />
          </div>
          <button
            type="submit"
            disabled={note.title.length<5 || note.description.length<5}
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
