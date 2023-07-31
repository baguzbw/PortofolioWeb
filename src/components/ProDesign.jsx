import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import illust3 from "./assets/IlluistGraph.svg";
import logo1 from "./assets/Runaway 1.png";
import logo3 from "./assets/bagus.png";
import illust1 from "./assets/elibrary.png";
import illust2 from "./assets/hrd.png";
import logo2 from "./assets/hrd.svg";

const ProjectCard = () => (
  <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0">
    {/* First Card */}
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#ECEFF1] shadow-md rounded-3xl w-full lg:w-[850px] h-auto lg:h-[380px] mx-auto mt-10 overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="p-4 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-col items-start mb-4">
          <img src={logo1} alt="Logo" className="w-10 h-10" loading="lazy" />
          <h2 className="mt-2 text-4xl font-bold font-plus-jakarta text-center">
            <span className="block w-full py-2 font-plus-jakarta text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63] lg:inline">E-Library</span>
          </h2>
          <p className="text-sm text-[#5E5E63] font-semibold font-plus-jakarta mt-2">UI/UX DESIGN &nbsp; • &nbsp;2022</p>
        </div>
        <p className="text-lg text-[#5E5E63] font-plus-jakarta mb-4">Mendesain sistem E-library peminjaman buku secara mandiri.</p>
        <button
          className="bg-white text-[#5E5E63] font-plus-jakarta rounded-md px-4 py-2 border-2 border-transparent hover:border-white hover:bg-[#ECEFF1] hover:transition-colors duration-200 flex items-center justify-center hover: transition-transform"
          style={{ width: "260px", height: "56px", borderRadius: "12px" }}
          onClick={() => {
            window.location.href = "/elibrary";
          }}
        >
          Baca Studi Kasus
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="relative flex justify-center items-center">
        <img src={illust1} alt="Illustration" className="object-cover lg:w-full lg:h-full" loading="lazy" />
      </div>
    </div>

    {/* Second Card */}
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#ECEFF1] shadow-md rounded-3xl w-full lg:w-[850px] h-auto lg:h-[380px] mx-auto mt-10 overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="p-4 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-col items-start mb-4">
          <img src={logo3} alt="Logo" className="w-10 h-10 rounded-md" loading="lazy" />
          <h2 className="mt-2 text-4xl font-bold font-plus-jakarta text-center">
            <span className="block w-full py-2 font-plus-jakarta text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63] lg:inline">Logo & Illustration</span>
          </h2>
          <p className="text-sm text-[#5E5E63] font-semibold font-plus-jakarta mt-2">GRAPHIC DESIGNER &nbsp; • &nbsp;2020</p>
        </div>
        <p className="text-lg text-[#5E5E63] font-plus-jakarta mb-4">Beberapa hasil Logo & Illustrasi koleksi saya</p>
        <button
          className="bg-white text-[#5E5E63] font-plus-jakarta rounded-md px-4 py-2 border-2 border-transparent hover:border-white hover:bg-[#ECEFF1] hover:transition-colors duration-200 flex items-center justify-center hover: transition-transform"
          style={{ width: "260px", height: "56px", borderRadius: "12px" }}
          onClick={() => {
            window.location.href = "/graphic";
          }}
        >
          Lihat Beberapa Hasil
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="relative flex justify-center items-center">
        <img src={illust3} alt="Illustration" className="object-cover lg:w-full lg:h-full" loading="lazy" />
      </div>
    </div>

    {/* Third Card */}
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#ECEFF1] shadow-md rounded-3xl w-full lg:w-[850px] h-auto lg:h-[380px] mx-auto mt-10 group overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className=" p-4 lg:p-12 flex flex-col justify-center">
        <div className="flex flex-col items-start mb-4">
          <img src={logo2} alt="Logo" className="w-10 h-10" loading="lazy" />
          <h2 className="mt-2 text-4xl font-bold font-plus-jakarta text-center">
            <span className="block w-full py-2 font-plus-jakarta text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63] lg:inline">HRD App</span>
          </h2>
          <p className="text-sm text-[#5E5E63] font-semibold font-plus-jakarta mt-2">UI/UX DESIGN &nbsp; • &nbsp;2022</p>
        </div>
        <p className="text-lg text-[#5E5E63] font-plus-jakarta mb-4">Mendesain aplikasi HRD mobile untuk pegawai.</p>
        <button className="bg-[#c6c6c6]  font-plus-jakarta rounded-md px-4 py-2 border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ width: "260px", height: "48px", borderRadius: "12px" }}>
          Studi kasus ini belum siap
        </button>
      </div>
      <div className="relative flex justify-center items-center">
        <img src={illust2} alt="Illustration" className="object-cover lg:w-full lg:h-full" loading="lazy" />
      </div>
    </div>
  </div>
);

export default ProjectCard;
