// Function to format an ISO date string into a readable format
export function FormatDate(isoString) {
    // Create a Date object from the ISO string
    const date = new Date(isoString);
  
    // Format the date using the 'en-GB' locale
    return date
      .toLocaleString("en-GB", {
        year: "numeric", // Display the full year (e.g., 2023)
        month: "long", // Display the full month name (e.g., October)
        day: "2-digit", // Display the day as two digits (e.g., 05)
        hour: "2-digit", // Display the hour as two digits (e.g., 02)
        minute: "2-digit", // Display the minute as two digits (e.g., 09)
        second: "2-digit", // Display the second as two digits (e.g., 07)
        hour12: true, // Use 12-hour clock format (e.g., 2:09:07 PM)
      })
      .replace(",", ""); // Remove the comma between the date and time
  }