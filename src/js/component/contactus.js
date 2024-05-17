// ContactUsContainer.js

import React from "react";
import "../../styles/contactus.css";

const ContactUsContainer = () => {
  return (
    <div className="contact-container">
      <div className="box2">
        <div className="get-in-touch">
          <div className="frame">
            <input
              type="email"
              className="input-field"
              placeholder="Your Email"
            />
          </div>
          <div className="div-wrapper">
            <input
              type="text"
              className="input-field"
              placeholder="Name"
            />
          </div>
          <div className="div">
            <input
              type="text"
              className="input-field"
              placeholder="Name"
            />
          </div>
          <div className="text-wrapper-2">Get In Touch</div>
          <p className="p">
            MAFL would love to hear your opinion<br /> and know how we can improve
            our services.
          </p>
  <button type="submit" className="submit-btn">Get in Touch</button>
</div>
          </div>
        </div>
  );
};

export default ContactUsContainer;
