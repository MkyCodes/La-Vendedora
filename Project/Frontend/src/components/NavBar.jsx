import React from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar = ({ searchText, handelSearchText }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand" to="/">
          <h4 className="text-light fw-bold">SmartList</h4>
        </Link>

        <div className="d-flex align-items-center">
          <div className="input-group input-group-lg rounded-5 shadow-sm">
            <input
              type="text"
              className="form-control border-0 rounded-start-3 px-3 py-2"
              placeholder="Search"
              value={searchText}
              onChange={(e) => handelSearchText(e.target.value)}
              style={{ height: "40px" }}
            />
            <button className="btn btn-outline-light rounded-end-3 px-4 py-2" style={{ height: "40px" }}>
              Search
            </button>
          </div>
        </div>

        <Link to="/add-note" style={{ textDecoration: "none" }}>
          <button
            className="btn btn-primary d-flex align-items-center rounded-pill shadow-lg hover-effect"
            type="button"
          >
            <FaSquarePlus className="me-2 fs-5" /> Add Notes
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
