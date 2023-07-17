import { faGithub, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="flex justify-center">
        <a href="https://www.linkedin.com/in/bagus-wicaksono-aa417021b/" target="_blank" rel="noopener noreferrer" className="mx-4 flex justify-center items-center w-10 h-10">
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "32px", color: "gray" }} />
        </a>
        <a href="https://youtube.com/@bagusb.wicaksono3381" target="_blank" rel="noopener noreferrer" className="mx-4 flex justify-center items-center w-10 h-10">
          <FontAwesomeIcon icon={faYoutube} style={{ fontSize: "32px", color: "gray" }} />
        </a>
        <a href="mailto:bagusbwicaksono5@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-4 flex justify-center items-center w-10 h-10">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "32px", color: "gray" }} />
        </a>
        <a href="https://github.com/baguzbw" target="_blank" rel="noopener noreferrer" className="mx-4 flex justify-center items-center w-10 h-10">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "32px", color: "gray" }} />
        </a>
        <a href="https://www.instagram.com/baguzbw" target="_blank" rel="noopener noreferrer" className="mx-4 flex justify-center items-center w-10 h-10">
          <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "32px", color: "gray" }} />
        </a>
      </div>
      <p className="text-center mt-6 text-[#707072] text-md font-plus-jakarta">&copy; 2023 Bagus Brang Wicaksono, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
