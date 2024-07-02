import React, { useState } from "react";
import Note from "./Note";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import submitIcon from "./submit.svg";

// console.log(uuidv4());
const App = () => {
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState(
    JSON.parse(window.localStorage.getItem("Notes"))
  );

  const addNote = () => {
    if (content.trim() !== "") {
      var newNotes = [...notes, { id: uuidv4(), content }];
      setNotes(newNotes);
      setContent("");
      window.localStorage.setItem("Notes", JSON.stringify(newNotes));
    }
  };

  const updateNoteContent = (noteToUpdateID, newContent) => {
    var newNotes = notes.map((note) =>
      note.id === noteToUpdateID ? { ...note, content: newContent } : note
    );
    setNotes(newNotes);
    window.localStorage.setItem("Notes", JSON.stringify(newNotes));
  };

  const deleteNote = (noteToDeleteID) => {
    var newNotes = notes.filter((note) => note.id !== noteToDeleteID);
    setNotes(newNotes);
    window.localStorage.setItem("Notes", JSON.stringify(newNotes));
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
