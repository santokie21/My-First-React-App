import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon className="icon" icon={faSquareXTwitter} />
      <FontAwesomeIcon className="icon" icon={faSquareFacebook} />
      <FontAwesomeIcon className="icon" icon={faSquareInstagram} />
      <FontAwesomeIcon className="icon" icon={faSquareGithub} />
    </div>
  );
}
