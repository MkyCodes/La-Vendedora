// Import necessary functions and plugins
import { defineConfig } from 'vite'; // Import the `defineConfig` function from Vite
import react from '@vitejs/plugin-react'; // Import the React plugin for Vite

// Export the Vite configuration object
export default defineConfig({
  // Specify the plugins to be used in the project
  plugins: [
    react(), // Enable the React plugin for Fast Refresh and JSX support
  ],
});