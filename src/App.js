import React, { useState } from "react";
import Note from "./Note";
import "./App.css";
import submitIcon from "./submit.svg";

const App = () => {
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (content.trim() !== "") {
      setNotes([...notes, { content }]);
      setContent("");
    }
  };

  const updateNoteContent = (noteToUpdate, newContent) => {
    setNotes(
      notes.map((note) =>
        note === noteToUpdate ? { ...note, content: newContent } : note
      )
    );
  };
  const deleteNote = (noteToDelete) => {
    setNotes(notes.filter((note) => note !== noteToDelete));
  };
  return (
    <div className="App">
      <h1>TO-DO</h1>
      <div className="AddNote">
        <input
          placeholder="Take a Note...."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <img
          className="submitIcon"
          src={submitIcon}
          alt="submit"
          onClick={addNote}
        />
      </div>
      <div className="NotesList">
        {notes.map((note, index) => (
          <Note
            key={index}
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
