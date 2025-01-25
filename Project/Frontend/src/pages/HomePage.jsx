// Import necessary components
import React from "react";
import Filter from "../components/Filter"; // Import the Filter component
import NoteCardContainer from "../components/NoteCardContainer"; // Import the NoteCardContainer component

// HomePage component to display the main content of the application
const HomePage = ({ notes, loading, handleFilterText }) => {
  return (
    <>
      {/* Display a message if no notes are found */}
      {notes.length < 1 ? (
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>
          There is no note found with the search phrase above
        </h4>
      ) : (
        // Render the Filter component if notes are available
        <Filter handleFilterText={handleFilterText} />
      )}

      {/* Render the NoteCardContainer to display the list of notes */}
      <NoteCardContainer notes={notes} loading={loading} />
    </>
  );
};

// Export the HomePage component as the default export
export default HomePage;