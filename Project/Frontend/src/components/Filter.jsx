import React from "react";

const Filter = ({ handleFilterText }) => {
  return (
    <div
      className="container"
      style={{
        width: "250px",
        margin: "20px auto",
        position: "relative",
      }}
    >
      <select
        className="form-select"
        aria-label="Default select example"
        style={{
          height: "50px",
          width: "100%",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "25px",
          border: "2px solid #62d1f7",
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          appearance: "none", // Remove default arrow
          WebkitAppearance: "none", // Remove default arrow for Safari
          MozAppearance: "none", // Remove default arrow for Firefox
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          outline: "none", // Remove default focus outline
          backgroundImage: "none", // Remove any background image (arrow shadow)
        }}
        onChange={(e) => handleFilterText(e.target.value)}
        onMouseEnter={(e) => {
          e.target.style.borderColor = "#ff5050"; // Change border color on hover
          e.target.style.transform = "scale(1.02)"; // Slightly enlarge on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.borderColor = "#62d1f7"; // Reset border color
          e.target.style.transform = "scale(1)"; // Reset size
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "#ff5050"; // Change border color on focus
          e.target.style.transform = "scale(1.02)"; // Slightly enlarge on focus
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#62d1f7"; // Reset border color
          e.target.style.transform = "scale(1)"; // Reset size
        }}
      >
        <option value="">All Notes</option>
        <option value="BUSINESS">Business</option>
        <option value="PERSONAL">Personal</option>
        <option value="IMPORTANT">Important</option>
      </select>
      {/* Custom dropdown arrow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          pointerEvents: "none", // Ensure clicks go to the select element
        }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#62d1f7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Filter;