// rafce ---> For importing the template of the react

import React from 'react';
import {ReactNavbar} from "overlay-navbar";
// import logo from "../../images/logo.png";
import logo from "../../../images/logo.png";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";

const options = {
    burgerColorHover: "#FFB100",
    logo,
    logoWidth: "20vmax",
    background: "none",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#FFB100",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#FFB100",
    link1Margin: "1vmax",

    profileIcon:true,
    profileIconColor: "rgba(35, 35, 35,0.8)",
    ProfileIconElement: MdAccountCircle, 
    searchIcon:true,
    searchIconColor: "rgba(35, 35, 35,0.8)",
    SearchIconElement:MdSearch,
    cartIcon:true,
    cartIconColor: "rgba(35, 35, 35,0.8)",
    CartIconElement:MdAddShoppingCart,

    profileIconUrl: "/login",
    // profileIconColor: "rgba(35, 35, 35,0.8)",
    // searchIconColor: "rgba(35, 35, 35,0.8)",
    // cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#FFB100",
    searchIconColorHover: "#FFB100",
    cartIconColorHover: "#FFB100",
    cartIconMargin: "1vmax",
};

const Header = () => {
  return (
    <ReactNavbar {...options} />
  )
}

export default Header;