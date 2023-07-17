import { faArrowLeft, faBars, faFaceSmile, faHome, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Memoji2 from "../assets/memoji peace.svg";
import Memoji from "../assets/memoji turu.svg";

const Navbar = () => {
  const location = useLocation();
  const isDeveloper = location.pathname === "/developer";
  const isDesigner = location.pathname === "/designer";
  const isAbout = location.pathname === "/about";
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showMemoji, toggleShowMemoji] = useCycle(Memoji, Memoji2);
  const showBackButton = location.pathname !== "/developer" && location.pathname !== "/designer";

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        toggleShowMemoji();
        setShowNotification(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showNotification, toggleShowMemoji]);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleMemojiClick = () => {
    setShowNotification(true);
    toggleShowMemoji();
  };

  return (
    <motion.div className="p-6 flex justify-center items-center space-x-4" initial={{ y: -700, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
      <div className="flex justify-between items-center space-x-4 w-full max-w-screen-lg mx-auto">
        <div className="relative rounded-full h-12 w-12 flex items-center justify-center bg-[#F6F6F6] shadow-lg" onClick={showBackButton ? handleBackClick : handleMemojiClick}>
          {showBackButton ? (
            <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{ color: "#5E5E63" }} />
          ) : (
            <motion.img
              src={showMemoji}
              alt="howdy"
              className="h-full w-full object-cover rounded-full items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {showNotification && !showBackButton && (
            <motion.div initial={{ y: "-30px", opacity: 0 }} animate={{ y: "0px", opacity: 1 }} transition={{ duration: 0.3 }} style={{ position: "absolute", bottom: "-30px", width: "100%", textAlign: "center" }}>
              <span style={{ backgroundColor: "#323235", color: "#E8E8E8", padding: "3px 6px", borderRadius: "25px", fontSize: "14px" }}>Howdy</span>
            </motion.div>
          )}
        </div>
        {!showBackButton && (
          <div className="w-56 bg-[#F6F6F6] rounded-full p-1 flex items-center shadow-lg">
            <Link
              to="/developer"
              className={`px-3 py-2 w-1/2 text-center rounded-full transition-all duration-300 ease-in-out font-plus-jakarta ${isDeveloper ? "bg-white font-extrabold text-[#5E5E63]" : "bg-[#F6F6F6] font-normal text-[#5E5E63]"}`}
            >
              Developer
            </Link>
            <Link
              to="/designer"
              className={`px-3 py-2 w-1/2 text-center rounded-full transition-all duration-300 ease-in-out font-plus-jakarta ${isDeveloper ? "bg-[#F6F6F6] font-normal text-[#5E5E63]" : "bg-white font-extrabold text-[#8474F9]"}`}
            >
              Designer
            </Link>
          </div>
        )}
        <div className="relative">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#F6F6F6] shadow-lg cursor-pointer" onClick={handleDropdownClick}>
            {!showDropdown && (
              <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} exit={{ rotate: 0 }} transition={{ duration: 0.5 }}>
                <FontAwesomeIcon icon={faBars} size="lg" style={{ color: "#5E5E63" }} />
              </motion.div>
            )}
            {showDropdown && (
              <motion.div initial={{ rotate: 0 }} animate={{ rotate: 180 }} exit={{ rotate: 0 }} transition={{ duration: 0.5 }}>
                <FontAwesomeIcon icon={faTimes} size="lg" style={{ color: "#5E5E63" }} />
              </motion.div>
            )}
          </div>
          {showDropdown && (
            <div className="absolute right-0 w-40 mt-2 py-2 bg-white rounded-md shadow-xl font-plus-jakarta ">
              <Link to="/" className={`block px-4 py-2 rounded-md ${isDeveloper || isDesigner ? "font-extrabold text-[#5E5E63]" : "text-[#5E5E63] hover:bg-[#ECEFF1]"}`}>
                <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
              </Link>

              <Link to="/about" className={`block px-4 py-2 rounded-md ${isAbout ? "font-extrabold text-[#5E5E63]" : "text-[#5E5E63] hover:bg-[#ECEFF1]"}`}>
                <FontAwesomeIcon icon={faFaceSmile} className="mr-2" /> About
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
