// Import necessary hooks and libraries
import { useEffect, useState } from "react";
import "./AddNotePage.css"; // Import CSS for styling
import { useNavigate, useParams } from "react-router-dom"; // Hooks for navigation and URL parameters
import axios from "axios"; // Library for making HTTP requests

// EditNotePage component for updating an existing note
const EditNotePage = ({ updateNote }) => {
  // State variables for managing form inputs
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  // Extract the `slug` parameter from the URL
  const { slug } = useParams();
  // Hook to enable navigation between routes
  const navigate = useNavigate();

  // Fetch the note data when the component mounts or the `slug` changes
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8008/notes/${slug}`)
      .then((res) => {
        // Populate the form fields with the fetched note data
        setTitle(res.data.title);
        setBody(res.data.body);
        setCategory(res.data.category);
      })
      .catch((err) => {
        console.log(err.message); // Log any errors
      });
  }, [slug]);

  // Object to hold the updated note data
  const updateNoteObject = {
    title: title,
    body: body,
    category: category,
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate that all fields are filled
    if (!title && !body && !category) return;

    // Update the note and navigate to the note's detail page
    updateNote(updateNoteObject, slug);
    navigate(`/notes/${slug}`);
  };

  // Render the form for editing a note
  return (
    <form onSubmit={handleSubmit}>
      <h5>Update Note</h5>

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
        Update Note
      </button>
    </form>
  );
};

// Export the EditNotePage component as the default export
export default EditNotePage;