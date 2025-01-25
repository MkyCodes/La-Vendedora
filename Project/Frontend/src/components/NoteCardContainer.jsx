// Import necessary components
import React from "react";
import NoteCard from "./NoteCard"; // Import the NoteCard component
import Loader from "./Loader"; // Import the Loader component

// NoteCardContainer component to display a list of notes
const NoteCardContainer = ({ notes, loading }) => {
  return (
    <div className="container">
      <div className="note-has-grid row">
        {/* Display the loader if the data is still loading */}
        {loading && <Loader loading={loading} />}

        {/* Map through the notes array and render a NoteCard for each note */}
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

// Export the NoteCardContainer component as the default export
export default NoteCardContainer;