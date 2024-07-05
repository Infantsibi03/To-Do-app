import React, { useState } from "react";
import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNoteContent, deleteNote } from "./Redux/notesSlice.js";
import "./App.css";
import submitIcon from "./submit.svg";

const App = () => {
  const [content, setContent] = useState("");
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  const hanldeAddNote = () => {
    if (content.trim() !== "") {
      dispatch(
        addNote({
          content,
        })
      );
      setContent("");
    }
  };

  const handleUpdateNoteContent = (noteToUpdateID, newContent) => {
    dispatch(
      updateNoteContent({
        noteToUpdateID,
        newContent,
      })
    );
  };

  const handleDeleteNote = (noteToDeleteID) => {
    dispatch(
      deleteNote({
        noteToDeleteID,
      })
    );
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
          onClick={hanldeAddNote}
        />
      </div>
      <div className="NotesList">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            handleUpdateNoteContent={handleUpdateNoteContent}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
