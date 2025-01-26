// Import necessary hooks, components, and libraries
import { useEffect, useState } from "react";
import { BiSolidTrashAlt } from "react-icons/bi"; // Delete icon
import { FiEdit } from "react-icons/fi"; // Edit icon
import { Link, useParams, useNavigate } from "react-router-dom"; // Routing utilities
import "./NoteDetailPage.css"; // Import CSS for styling
import axios from "axios"; // Library for making HTTP requests
import { FormatDate } from "../components/FormatDate"; // Utility to format dates
import Modal from "../components/Modal"; // Modal component for confirmation dialogs

// NoteDetailPage component to display details of a specific note
const NoteDetailPage = ({ deleteNote }) => {
  // State variables for managing note data and modal visibility
  const [note, setNote] = useState({});
  const { slug } = useParams(); // Extract the `slug` parameter from the URL
  const [isOpen, setIsOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Function to toggle the modal's visibility
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle note deletion
  const handleDelete = async () => {
    try {
      await deleteNote(slug); // Call the deleteNote function passed as a prop
      setNote({}); // Clear the note state
      navigate("/"); // Navigate back to the home page
    } catch (error) {
      console.error("Error deleting note:", error); // Log any errors
    }
  };

  // Fetch the note data when the component mounts or the `slug` changes
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8008/notes/${slug}`)
      .then((res) => {
        setNote(res.data); // Update the note state with fetched data
      })
      .catch((err) => {
        console.log(err.message); // Log any errors
      });
  }, [slug]);

  return (
    <>
      {/* Container for displaying note details */}
      <div className="note-container">
        {/* Note title */}
        <h3 className="title">{note.title}</h3>

        {/* Display creation and update dates */}
        <span className="d-flex justify-content-center">
          <p className="note-date font-12 text-muted me-5">
            Created: {FormatDate(note.created)}
          </p>
          <p className="note-date font-12 text-muted me-5">
            Last Updated: {FormatDate(note.updated)}
          </p>
        </span>

        {/* Buttons for editing and deleting the note */}
        <span className="button-group">
          {/* Link to the edit page */}
          <Link to={`/edit-note/${slug}`}>
            <button className="btn btn-primary">
              <FiEdit />
              <span>Edit</span>
            </button>
          </Link>

          {/* Button to open the delete confirmation modal */}
          <button className="btn btn-danger" onClick={handleIsOpen}>
            <BiSolidTrashAlt />
            <span>Delete</span>
          </button>
        </span>

        {/* Note body/content */}
        <p className="description">{note.body}</p>
      </div>

      {/* Render the modal for delete confirmation if `isOpen` is true */}
      {isOpen && (
        <Modal
          handleIsOpen={handleIsOpen} // Function to close the modal
          deleteNote={handleDelete} // Function to handle note deletion
        />
      )}
    </>
  );
};

// Export the NoteDetailPage component as the default export
export default NoteDetailPage;