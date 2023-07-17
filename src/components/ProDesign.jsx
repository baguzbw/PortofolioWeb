import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo1 from "../assets/Runaway 1.png";
import illust1 from "../assets/buku.png";
import illust2 from "../assets/hrd.png";
import logo2 from "../assets/hrd.svg";

const ProjectCard = () => (
  <div className="flex flex-col justify-center items-center">
    {/* First Card */}
    <div className="grid grid-cols-2 bg-[#ECEFF1] shadow-md rounded-3xl w-[850px] h-[380px] mx-auto mt-10 overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="p-12 flex flex-col justify-center">
        <div className="flex flex-col items-start mb-4">
          <img src={logo1} alt="Logo" className="w-10 h-10" />
          <h2 className="mt-2 text-4xl font-bold font-plus-jakarta text-center">
            <span className="block w-full py-2 font-plus-jakarta text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63] lg:inline">E-Library</span>
          </h2>
          <p className="text-sm text-[#5E5E63] font-semibold font-plus-jakarta mt-2">UI/UX DESIGN &nbsp; • &nbsp;2022</p>
        </div>
        <p className="text-lg text-[#5E5E63] font-plus-jakarta mb-4">Mendesain sistem E-library peminjaman buku secara mandiri.</p>
        <button
          className="transition-colors duration-300 ease-in-out bg-white text-[#5E5E63] font-plus-jakarta rounded-md px-4 py-2 border-2 border-transparent hover:border-white hover:bg-[#ECEFF1] flex items-center justify-center"
          style={{ width: "260px", height: "56px", borderRadius: "12px" }}
        >
          Baca Studi Kasus
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="relative">
        <img src={illust1} alt="Illustration" className="absolute bottom-0 object-cover h-[340px] w-[450px]" />
      </div>
    </div>

    {/* Second Card */}
    <div className="grid grid-cols-2 bg-[#ECEFF1] shadow-md rounded-3xl w-[850px] h-[380px] mx-auto mt-10 overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="p-12 flex flex-col justify-center">
        <div className="flex flex-col items-start mb-4">
          <img src={logo2} alt="Logo" className="w-10 h-10" />
          <h2 className="mt-2 text-4xl font-bold font-plus-jakarta text-center">
            <span className="block w-full py-2 font-plus-jakarta text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63] lg:inline">HRD App</span>
          </h2>
          <p className="text-sm text-[#5E5E63] font-semibold font-plus-jakarta mt-2">UI/UX DESIGN &nbsp; • &nbsp;2022</p>
        </div>
        <p className="text-lg text-[#5E5E63] font-plus-jakarta mb-4">Mendesain aplikasi HRD mobile untuk pegawai.</p>
        <button
          className="transition-colors duration-300 ease-in-out bg-white text-[#5E5E63] font-plus-jakarta rounded-md px-4 py-2 border-2 border-transparent hover:border-white hover:bg-[#ECEFF1] flex items-center justify-center"
          style={{ width: "260px", height: "56px", borderRadius: "12px" }}
        >
          Baca Studi Kasus
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="relative">
        <img src={illust2} alt="Illustration" className="absolute bottom-0 object-cover h-[340px] w-[450px]" />
      </div>
    </div>
  </div>
);

export default ProjectCard;
