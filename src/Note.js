import React, { useEffect, useState } from "react";
import submitIcon from "./submit.svg";
import deletIcon from "./delete.svg";

const Note = ({ note, updateNoteContent, deleteNote }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(note.content);

  useEffect(() => {
    setEditContent(note.content);
  }, [note]);

  const handleEditClick = () => {
    setIsEdit(true);
  };

  const handleSaveClick = () => {
    updateNoteContent(note.id, editContent);
    setIsEdit(false);
  };
  console.log("the note is" + note);
  const handleDeleteClick = () => {
    deleteNote(note.id);
  };

  return (
    <div className="Note">
      {isEdit ? (
        <div className="AddNote">
          <textarea
            className="editInputArea"
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows="4"
            cols="50"
          />
          <img
            className="submitIcon"
            src={submitIcon}
            alt="submit"
            onClick={handleSaveClick}
          />
          <img
            className="deletIcon"
            src={deletIcon}
            alt="delete"
            onClick={handleDeleteClick}
          />
        </div>
      ) : (
        <div>
          <h1 className="savedNote" onClick={handleEditClick}>
            {note.content}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Note;
