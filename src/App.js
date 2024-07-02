import React, { useState } from "react";
import Note from "./Note";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import submitIcon from "./submit.svg";

// console.log(uuidv4());
const App = () => {
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (content.trim() !== "") {
      setNotes([...notes, { id: uuidv4(), content }]);
      setContent("");
    }
  };

  const updateNoteContent = (noteToUpdateID, newContent) => {
    setNotes(
      notes.map((note) =>
        note.id === noteToUpdateID ? { ...note, content: newContent } : note
      )
    );
  };

  const deleteNote = (noteToDeleteID) => {
    setNotes(notes.filter((note) => note.id !== noteToDeleteID));
  };

  return (
    <div className="App">
      <h1 className="Heading">TO-DO</h1>
      <div className="AddNote">
        <textarea
          placeholder="Take a Note...."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          cols="50"
        />
        <img
          className="submitIcon"
          src={submitIcon}
          alt="submit"
          onClick={addNote}
        />
      </div>
      <div className="NotesList">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            updateNoteContent={updateNoteContent}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
