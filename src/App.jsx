import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新しいノートの内容",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
