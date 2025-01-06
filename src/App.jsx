import React, { useState } from "react";
import Head from "./Heading";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([]); // State to store notes
  const [noteTitle, setNoteTitle] = useState(""); // State for note title
  const [noteText, setNoteText] = useState(""); // State for note content

  // Function to add a new note
  const addNote = () => {
    if (noteTitle !== "" && noteText !== "") {
      setNotes([...notes, { title: noteTitle, content: noteText }]);
      setNoteTitle(""); // Clear title input
      setNoteText(""); // Clear content input
    }
  };

  // Function to delete a note
  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index); // Remove note at index
    setNotes(updatedNotes);
  };

  return (
    <div>
      <Head />
      
      {/* Input for writing a new note */}
      <div className="note-input">
        <input
          type="text"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>

      {/* Render notes dynamically */}
      <div className="notes-list">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index} // Pass index as id
            title={note.title}
            content={note.content}
            onDelete={deleteNote} // Pass delete function
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
