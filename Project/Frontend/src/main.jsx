// Import necessary libraries and components
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the app
import App from './App.jsx'; // Import the main App component
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS for styling
import './index.css'; // Import custom CSS for additional styling

// Create a root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element
root.render(
  <React.StrictMode>
    {/* Wrap the App component in StrictMode for development checks */}
    <App />
  </React.StrictMode>,
);