// Import React and necessary dependencies
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

// Import CSS stylesheets
import "./App.css";
import "./styles/tailwind.css";

// Import custom components
import Sidebar from "./components/sidebar/sidebar";
import Background from "./assets/background.svg";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  // State to manage the visibility of the sidebar based on screen size
  const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth >= 768);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Add a resize event listener to update sidebar visibility on screen size changes
  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      setSidebarVisible(window.innerWidth >= 768);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only once during component initialization

  return (
    <>
      <div className="bg-[#1F2129]">
        {/* Background image */}
        <img
          className="absolute h-screen w-screen opacity-[60%]"
          src={Background}
          alt="Background"
        />
        {/* Container for the main content */}
        <div className="flex flex-row">
          {/* Sidebar component with visibility controlled by state */}
          <Sidebar sidebarVisible={sidebarVisible} toggleSidebar={toggleSidebar} />
          {/* Dashboard component */}
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
