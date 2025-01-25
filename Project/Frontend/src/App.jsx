// Import necessary hooks, components, and libraries
import { useState, useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import AddNotePage from "./pages/AddNotePage";
import EditNotePage from "./pages/EditNotePage";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// Main App component
const App = () => {
  // State variables for managing notes, loading state, and search/filter functionality
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filterText, setFilterText] = useState("");

  // Handler to update the filter text state
  const handleFilterText = (val) => {
    setFilterText(val);
  };

  // Handler to update the search text state
  const handelSearchText = (val) => {
    setSearchText(val);
  };

  // Filter notes based on the selected category
  const filteredNotes =
    filterText === "BUSINESS"
      ? notes.filter((note) => note.category === "BUSINESS")
      : filterText === "PERSONAL"
      ? notes.filter((note) => note.category === "PERSONAL")
      : filterText === "IMPORTANT"
      ? notes.filter((note) => note.category === "IMPORTANT")
      : notes;

  // Fetch notes based on search text
  useEffect(() => {
    if (searchText.length < 3) return; // Only search if the search text has 3 or more characters
    axios
      .get(`http://127.0.0.1:8008/notes-search/?search=${searchText}`)
      .then((res) => {
        console.log(res.data);
        setNotes(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [searchText]);

  // Fetch all notes on component mount
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://127.0.0.1:8008/notes/")
      .then((res) => {
        setNotes(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Function to add a new note
  const addNote = (data) => {
    axios
      .post("http://127.0.0.1:8008/notes/", data)
      .then((res) => {
        setNotes([...notes, data]);
        toast.success("A new note has been added");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Function to update an existing note
  const updateNote = (data, slug) => {
    axios
      .put(`http://127.0.0.1:8008/notes/${slug}/`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Note updated successfully");
      })
      .catch((err) => console.log(err.message));
  };

  // Function to delete a note
  const deleteNote = (slug) => {
    axios
      .delete(`http://127.0.0.1:8008/notes/${slug}/`)
      .catch((err) => console.log(err.message));
  };

  // Define the application routes using React Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout
            searchText={searchText}
            handelSearchText={handelSearchText}
          />
        }
      >
        <Route
          index
          element={
            <HomePage
              notes={filteredNotes}
              loading={isLoading}
              handleFilterText={handleFilterText}
            />
          }
        />
        <Route path="/add-note" element={<AddNotePage addNote={addNote} />} />
        <Route
          path="/edit-note/:slug"
          element={<EditNotePage updateNote={updateNote} />}
        />
        <Route
          path="/notes/:slug"
          element={<NoteDetailPage deleteNote={deleteNote} />}
        />
      </Route>
    )
  );

  // Render the router provider to enable routing in the app
  return <RouterProvider router={router} />;
};

// Export the App component as the default export
export default App;