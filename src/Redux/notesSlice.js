import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  notes: JSON.parse(window.localStorage.getItem("Notes")) || [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,

  reducers: {
    addNote: (state, action) => {
      const { content } = action.payload;
      const newNote = { id: uuidv4(), content };
      state.notes.push(newNote);
      localStorage.setItem("Notes", JSON.stringify(state.notes));
      return state;
    },

    updateNoteContent: (state, action) => {
      //   console.log("In update note");
      const { noteToUpdateID, newContent } = action.payload;
      const updatedNotes = state.notes.map((note) =>
        note.id === noteToUpdateID ? { ...note, content: newContent } : note
      );
      localStorage.setItem("Notes", JSON.stringify(updatedNotes));
      state.notes = updatedNotes;
      return state;
    },

    deleteNote: (state, action) => {
      const { noteToDeleteID } = action.payload;
      const newNotes = state.notes.filter((note) => note.id !== noteToDeleteID);
      localStorage.setItem("Notes", JSON.stringify(newNotes));
      state.notes = newNotes;
      return state;
    },
  },
});

export const { addNote, updateNoteContent, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
