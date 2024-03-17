import React, { useState } from "react";
import Header from "./components/header/Header";
import { v4 as uuid } from "uuid";
import NotesList from "./components/notes-list/NotesList";

function App() {
  const [notes, setNotes] = useState([]);

  const addNotes = () => {
    const data = {
      id: uuid(),
    };
    notes.push(data);
    setNotes([...notes]);
  };

  const deleteNotes = (id) => {
    const deletedNotes = notes.filter((item) => item.id !== id);
    setNotes(deletedNotes);
  };

  return (
    <div className="container">
      <Header addNotes={addNotes} />
      <NotesList notes={notes} deleteNotes={deleteNotes} />
    </div>
  );
}

export default App;
