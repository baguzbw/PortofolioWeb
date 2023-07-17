import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import illust1 from "../assets/Illust1.png";
import logo1 from "../assets/Joglo.svg";
import logo2 from "../assets/among.svg";
import illust2 from "../assets/illust2.png";

const ProjectCard = () => (
  <div className="flex flex-col justify-center items-center">
    {/* First Card */}
    <div className="grid md:grid-cols-1 lg:grid-cols-2 bg-[#ECEFF1] shadow-md rounded-3xl w-full lg:w-[850px] h-auto lg:h-[380px] mx-auto mt-10 overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="p-4 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-col items-start mb-4">
          <img src={logo1} alt="Logo" className="w-10 h-10" />
          <h2 className="mt-2 text-4xl font-bold font-plus-jakarta text-center">
            <span className="block w-full py-2 font-plus-jakarta text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63] lg:inline">Kampung Batik</span>
          </h2>
          <p className="text-sm text-[#5E5E63] font-semibold font-plus-jakarta mt-2">FRONT END DEV&nbsp; • &nbsp;2023</p>
        </div>
        <p className="text-lg text-[#5E5E63] font-plus-jakarta mb-4">Membuat website untuk kampung batik agar lebih diketahui masyarakat.</p>
        <button
          className="bg-white text-[#5E5E63] font-plus-jakarta rounded-md px-4 py-2 border-2 border-transparent hover:border-white hover:bg-[#ECEFF1] hover:transition-colors duration-200 flex items-center justify-center hover: transition-transform"
          style={{ width: "260px", height: "56px", borderRadius: "12px" }}
        >
          Baca Studi Kasus
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="relative">
        <img src={illust1} alt="Illustration" className="absolute bottom-0 object-cover h-full lg:h-[340px] w-full lg:w-[450px]" />
      </div>
    </div>

    {/* Second Card */}
    <div className="grid md:grid-cols-1 lg:grid-cols-2 bg-[#ECEFF1] shadow-md rounded-3xl w-full lg:w-[850px] h-auto lg:h-[380px] mx-auto mt-10 overflow-hidden group transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="p-4 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-col items-start mb-4">
          <img src={logo2} alt="Logo" className="w-10 h-10" />
          <h2 className="mt-2 text-4xl font-bold font-plus-jakarta text-center">
            <span className="block w-full py-2 font-plus-jakarta text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63] lg:inline">Web Portofolio</span>
          </h2>
          <p className="text-sm text-[#5E5E63] font-semibold font-plus-jakarta mt-2">FRONT END DEV&nbsp; • &nbsp;2023</p>
        </div>
        <p className="text-lg text-[#5E5E63] font-plus-jakarta mb-4">Membuat website portofolio yang mencakup project dan pengalaman.</p>
        <button className="bg-[#c6c6c6]  font-plus-jakarta rounded-md px-4 py-2 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ width: "260px", height: "48px", borderRadius: "12px" }}>
          Studi kasus ini belum siap
        </button>
      </div>
      <div className="relative">
        <img src={illust2} alt="Illustration" className="absolute bottom-0 object-cover h-full lg:h-[340px] w-full lg:w-[450px]" />
      </div>
    </div>
  </div>
);

export default ProjectCard;
