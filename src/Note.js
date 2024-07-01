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
    updateNoteContent(note, editContent);
    setIsEdit(false);
  };
  const handleDeleteClick = () => {
    deleteNote(note);
  };

  return (
    <div className="Note">
      {isEdit ? (
        <div className="AddNote">
          <input
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="editInput"
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
          <h1 onClick={handleEditClick}>{note.content}</h1>
        </div>
      )}
    </div>
  );
};

export default Note;
