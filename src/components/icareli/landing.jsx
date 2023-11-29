import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Landing from "../assets/Icareli1.png";
import Logo from "../assets/IcareliUNS.svg";
import LaravelLogo from "../assets/Laravel.svg";
import Mysql from "../assets/Mysql.svg";
import ReactLogo from "../assets/React.svg";

const Kampung = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <LazyLoadImage effect="blur" src={Landing} loading="lazy" className="w-full h-auto md:max-w-4xl" />
      </div>
      <div className="mt-[-110px] flex flex-col md:grid md:grid-cols-2 gap-8 max-w-3xl mx-auto relative">
        <img src={Logo} alt="Company Logo" className="w-18 h-8 mb-[-14px]" />
        <h1 className="font-bold text-4xl col-span-2 font-plus-jakarta ">International Conferences on Animal Research for Eco-Friendly Livestock Industry</h1>
        <h5 className="font-bold col-span-2 font-plus-jakarta mt-[-22px] text-[#5E5E63]">Universitas Sebelas Maret</h5>
        <div className="order-2 md:order-none col-span-1">
          <p className="font-bold mt-[-14px] font-plus-jakarta text-xl">Project Brief</p>
          <p className="font-plus-jakarta text-lg">
            ICARELI adalah konferensi yang diadakan di Fakultas Pertanian Universitas Sebelas Maret setiap dua tahun sekali dan mengundang pembicara dari berbagai negara.Seluruh informasi tentang acara yang dilakukan selama pertemuan dan
            setelah pertemuan akan ditampilkan di situs web ini.
          </p>
        </div>
        <div className="order-1 md:order-none col-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 font-plus-jakarta ms-8 me-4">
          <div>
            <p className="font-bold text-xl">Role</p>
            <p className="text-lg">Front End Dev</p>
            <p className="font-bold mt-3 text-xl">Timeline</p>
            <p className="text-lg">Q3 2023</p>
          </div>
          <div className="ms-14 md:ms-0 font-plus-jakarta">
            <p className="font-bold text-xl">Tools</p>
            <div className="flex space-x-2 mt-2">
              <img src={LaravelLogo} alt="Laravel Logo" className="w-7 h-7" />
              <img src={ReactLogo} alt="React Logo" className="w-7 h-7" />
              <img src={Mysql} alt="Mysql Logo" className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md p-6 mb-12 mt-8 rounded-lg max-w-xl w-full">
        <h2 className="font-bold text-xl font-plus-jakarta mb-4">Problem</h2>
        <p className="font-plus-jakarta text-lg">Sebelum ini, website ICARELI kurang efektif karena menggabungkan dua website dalam satu website, yang dapat menyebabkan penyimpanan data yang besar.</p>
      </div>
    </div>
  );
};

export default Kampung;
