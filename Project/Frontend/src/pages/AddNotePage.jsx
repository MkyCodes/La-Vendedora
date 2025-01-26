// Import necessary hooks and libraries
import React, { useState } from "react";
import "./AddNotePage.css"; // Import CSS for styling
import { useNavigate } from "react-router-dom"; // Hook for programmatic navigation

// AddNotePage component for creating a new note
const AddNotePage = ({ addNote }) => {
  // State variables for managing form inputs
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  // Hook to enable navigation between routes
  const navigate = useNavigate();

  // Object to hold the new note data
  const newNote = {
    title: title,
    body: body,
    category: category,
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate that all fields are filled
    if (!title && !body && !category) {
      return;
    }

    // Add the new note and navigate back to the home page
    addNote(newNote);
    navigate("/");
    console.log(newNote); // Log the new note for debugging
  };

  // Render the form for adding a new note
  return (
    <form onSubmit={handleSubmit}>
      <h5>Add New Note</h5>

      {/* Title input field */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter note's title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state
        />
      </div>

      {/* Content textarea field */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={4}
          placeholder="Enter note's content"
          value={body}
          onChange={(e) => setBody(e.target.value)} // Update body state
        ></textarea>
      </div>

      {/* Category dropdown field */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Note's category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value={category}
          style={{ height: "40px" }}
          onChange={(e) => setCategory(e.target.value)} // Update category state
        >
          <option value="">Pick a category</option>
          <option value="BUSINESS">Business</option>
          <option value="PERSONAL">Personal</option>
          <option value="IMPORTANT">Important</option>
        </select>
      </div>

      {/* Submit button */}
      <button
        className="btn btn-primary d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        Add Note
      </button>
    </form>
  );
};

// Export the AddNotePage component as the default export
export default AddNotePage;