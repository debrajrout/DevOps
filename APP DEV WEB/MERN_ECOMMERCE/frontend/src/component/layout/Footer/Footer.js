import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile Phone.</p>
          <img src={playStore} alt = "PlayStore" />
          <img src={appStore} alt = "AppStore" />
        </div>

        <div className = "midFooter">
          <h1>ECOMMERCE.</h1>
          <p>High Quality is our first Priority.</p>
          <p>Copyrights 2022 &copy; Sourav Kumar Bhunia</p>
        </div>

        <div className = "rightFooter">
          <h4>Follow Us</h4>
          <a href='http://instagram.com/SouravKumarBhunia'>Instagram</a>
          <a href='http://Youtube.com/SouravKumarBhunia'>YouTube</a>
          <a href='http://facebook.com/SouravKumarBhunia'>Facebook</a>
        </div>
    </footer>
  )
}

export default Footer;