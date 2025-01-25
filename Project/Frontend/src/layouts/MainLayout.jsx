// Import necessary components and libraries
import React from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component
import { Outlet } from "react-router-dom"; // Outlet for rendering nested routes
import { ToastContainer } from "react-toastify"; // Toast notifications container
import "react-toastify/dist/ReactToastify.css"; // CSS for toast notifications

// MainLayout component to define the overall structure of the application
const MainLayout = ({ searchText, handelSearchText }) => {
  return (
    <>
      {/* Render the navigation bar with search functionality */}
      <NavBar searchText={searchText} handelSearchText={handelSearchText} />

      {/* Toast container for displaying notifications */}
      <ToastContainer />

      {/* Outlet for rendering nested routes */}
      <Outlet />
    </>
  );
};

// Export the MainLayout component as the default export
export default MainLayout;