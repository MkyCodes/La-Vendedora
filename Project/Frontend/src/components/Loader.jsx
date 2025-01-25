// Import necessary libraries and components
import React from "react";
import ClipLoader from "react-spinners/ClipLoader"; // Import the ClipLoader spinner component

// Custom CSS override for the spinner
const override = {
  display: "block", // Ensure the spinner is displayed as a block element
  margin: "0 auto", // Center the spinner horizontally
  borderColor: "purple", // Set the spinner's border color to purple
};

// Loader component to display a loading spinner
const Loader = ({ loading }) => {
  return (
    <ClipLoader
      loading={loading} // Control the visibility of the spinner
      cssOverride={override} // Apply custom CSS styles
      size={350} // Set the size of the spinner
      aria-label="Loading Spinner" // Accessibility label
      data-testid="loader" // Test ID for testing purposes
    />
  );
};

// Export the Loader component as the default export
export default Loader;