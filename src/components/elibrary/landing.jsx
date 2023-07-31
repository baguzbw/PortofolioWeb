import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../assets/Runaway 1.png";
import FigmaLogo from "../assets/figma.svg";
import Landing from "../assets/library.png";

const Kampung = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <LazyLoadImage effect="blur" src={Landing} loading="lazy" className="w-full h-auto md:max-w-4xl" />
      </div>
      <div className="mt-[-110px] flex flex-col md:grid md:grid-cols-2 gap-8 max-w-3xl mx-auto relative">
        <img src={Logo} alt="Company Logo" className="w-12 h-12 mb-[-14px]" />
        <h1 className="font-bold text-4xl col-span-2 font-plus-jakarta ">E-Library</h1>
        <h5 className="font-bold col-span-2 font-plus-jakarta mt-[-22px] text-[#5E5E63]">Project Dummy</h5>
        <div className="order-2 md:order-none col-span-1">
          <p className="font-bold mt-[-14px] font-plus-jakarta text-xl">Project Brief</p>
          <p className="font-plus-jakarta text-lg">
            Web e-library dirancang untuk meningkatkan efisiensi dan aksesibilitas perpustakaan sekolah dengan menyediakan sistem peminjaman mandiri dan fitur scan peminjaman. Web ini bertujuan membuat proses peminjaman lebih ramah pengguna
            dan lancar bagi siswa,dan staff dengan harapan meningkatkan efisiensi ke pengguna.
          </p>
        </div>
        <div className="order-1 md:order-none col-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 font-plus-jakarta ms-8 me-4">
          <div>
            <p className="font-bold text-xl">Role</p>
            <p className="text-lg">UI/UX Design</p>
            <p className="font-bold mt-3 text-xl">Timeline</p>
            <p className="text-lg">Q4 2022</p>
          </div>
          <div className="ms-14 md:ms-0 font-plus-jakarta">
            <p className="font-bold text-xl">Tools</p>
            <div className="flex space-x-2 mt-2">
              <img src={FigmaLogo} alt="Figma Logo" className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md p-6 mb-12 mt-8 rounded-lg max-w-xl w-full">
        <h2 className="font-bold text-xl font-plus-jakarta mb-4">Problem</h2>
        <p className="font-plus-jakarta text-lg">
          Tantangan utama adalah bagaimana membuat aplikasi mudah diakses bagi siswa dan staf perpustakaan saat mereka pertama kali menggunakannya, tanpa menyebabkan kebingungan atau hambatan dalam navigasi dan penggunaan.
        </p>
      </div>
    </div>
  );
};

export default Kampung;
