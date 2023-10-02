/* eslint-disable react/prop-types */
// Import React and necessary dependencies
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// Import icons and images
import Logo from "../../assets/LOGO.svg";
import Bar from "../../assets/bar.svg";
import Layers from "../../assets/3-layers.svg";
import Users from "../../assets/users.svg";
import Message from "../../assets/solar_chat-line-broken.svg";
import Setting from "../../assets/settings.svg";
import Avatar from "../../assets/Avatar.png";
import Logout from "../../assets/log-out.svg";
import Small from "../../assets/small-background.svg";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

// Sidebar component with props for sidebar visibility and toggle function
const Sidebar = ({ sidebarVisible, toggleSidebar }) => {
  // State to manage the selected button
  const [selectedButton, setSelectedButton] = useState(null);

  // Define button data for the main section
  const Buttons = [
    {
      image: Bar,
      name: "Dashboard",
    },
    {
      image: Layers,
      name: "Projects",
    },
    {
      image: Users,
      name: "Staffing",
    },
    {
      image: Message,
      name: "Messages",
    },
  ];

  // Define button data for the support section
  const Support = [
    {
      image: Bar,
      name: "Support",
    },
    {
      image: Setting,
      name: "Settings",
    },
  ];

  // Function to handle button clicks
  const handleButtonClick = (index) => {
    setSelectedButton(index);
    // If the screen width is less than 768px, toggle the sidebar on button click
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  // Set the z-index of the sidebar based on its visibility
  const sidebarZIndex = sidebarVisible ? 10 : -1;

  return (
    <div>
      <div>
        {/* Button to toggle the sidebar visibility */}
        <button
          className={`${
            sidebarVisible
              ? "lg:hidden fixed top-4 left-4 z-50 text-white"
              : "lg:hidden absolute top-4 left-4 z-50 text-white"
          }`}
          onClick={toggleSidebar}
        >
          {/* Display close icon if sidebar is visible, otherwise display menu icon */}
          {sidebarVisible ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div
        // Set the z-index of the sidebar
        style={{ zIndex: sidebarZIndex }}
        className={`${
          sidebarVisible
            ? "transform translate-x-0 transition-transform duration-300 ease-in-out"
            : "transform -translate-x-full transition-transform duration-300 ease-in-out"
        } lg:translate-x-0 fixed lg:relative flex flex-col items-center h-screen w-80 bg-white backdrop-blur-lg bg-opacity-[5%] font-poppins border border-[#475467] border-opacity-[50%]`}
      >
        {/* Background image */}
        <img
          className="absolute pt-20 opacity-[50%] z-[-1]"
          src={Small}
          alt={Small}
        />
        {/* Logo */}
        <img className="mt-7 mb-10" src={Logo} alt="Logo" />
        {/* Main section buttons */}
        <div className="flex flex-col gap-y-4">
          {Buttons.map((button, index) => (
            <div
              key={index}
              className={`flex flex-row gap-x-2 pl-5 py-3 rounded-md w-60 cursor-pointer ${
                selectedButton === index ? "bg-[#101215]" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <img src={button.image} alt={button.name} />
              <h3 className="text-white text-lg">{button.name}</h3>
            </div>
          ))}
        </div>
        {/* Support section buttons */}
        <div className="flex flex-col gap-y-4 mt-[17vh] lg:mt-[25vh]">
          {Support.map((support, index) => (
            <div
              key={index}
              className={`flex flex-row gap-x-2 pl-5 py-3 rounded-md w-60 cursor-pointer ${
                selectedButton === index + Buttons.length ? "bg-[#101215]" : ""
              }`}
              onClick={() => handleButtonClick(index + Buttons.length)}
            >
              <img src={support.image} alt={support.name} />
              <h3 className="text-white text-lg">{support.name}</h3>
            </div>
          ))}
        </div>
        {/* Divider */}
        <div className="bg-[#475467] h-[2px] w-60 mt-5 rounded-md"></div>
        {/* User information */}
        <div className="flex flex-row gap-x-4 mt-5 justify-center items-center">
          <img src={Avatar} alt={Avatar} />
          <div className="text-white">
            <p className="font-bold">Olivia Rhye</p>
            <p>olivia@untitledui.com</p>
          </div>
          <img src={Logout} alt={Logout} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
