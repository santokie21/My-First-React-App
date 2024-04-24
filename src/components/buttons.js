import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/buttons.css";

export default function Buttons() {
  return (
    <div className="buttons">
      <button className="email">
        <FontAwesomeIcon className="email-icon" icon={faEnvelope} />{" "}
        <span>Email</span>
      </button>
      <button className="linkedin">
        <FontAwesomeIcon className="linkedin-icon" icon={faLinkedin} />{" "}
        <span>LinkedIn</span>
      </button>
    </div>
  );
}
