import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BehanceLogo from "../assets/behance.svg";
import DribbbleLogo from "../assets/dribbble.svg";
import FigmaLogo from "../assets/figmagrey.svg";
import Presentasi from "../assets/pencarian.gif";

const Result = () => {
  const redirectToBehance = () => {
    window.open("#", "_blank");
  };

  const redirectToFigma = () => {
    window.open("https://www.figma.com/file/p9MmDHrmjOcfdDMwdDpNeQ/Sistem-Perpus?type=design&node-id=0%3A1&mode=design&t=25OfohS4DcyhSs8g-1", "_blank");
  };

  const redirectToDribbble = () => {
    window.open("#", "_blank");
  };
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ backgroundColor: "#F6F6F6", width: "100vw", maxWidth: "100%", marginTop: "30px" }}>
      <div className="w-full md:w-1/2 mx-auto mt-10 px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Result</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">
          Ini adalah project learning dari mata kuliah Interaksi Manusia & Komputer yang diselesaikan dengan waktu 1 minggu.Dengan Project brief dan semua fitur yang diberikan oleh pengampu.Ini merupakan hasilnya.
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-between w-full mb-8 mt-2 font-plus-jakarta">
              <button
                onClick={redirectToBehance}
                className="bg-[#ECEFF1] hover:bg-[#FFFFFF] text-[#5E5E63] font-semibold text-xl py-3 px-6 rounded-xl w-full md:w-1/3 mx-2 my-2 md:my-0 flex items-center justify-center transition duration-500 ease-in-out"
              >
                <img src={BehanceLogo} loading="eager" alt="Github Logo" className="mr-2" /> Behance
              </button>
              <button
                onClick={redirectToFigma}
                className="bg-[#ECEFF1] hover:bg-[#FFFFFF] text-[#5E5E63] font-semibold text-xl py-3 px-6 rounded-xl w-full md:w-1/3 mx-2 my-2 md:my-0 flex items-center justify-center transition duration-500 ease-in-out"
              >
                <img src={FigmaLogo} loading="eager" alt="Website Logo" className="mr-2" /> Figma
              </button>
              <button
                onClick={redirectToDribbble}
                className="bg-[#ECEFF1] hover:bg-[#FFFFFF] text-[#5E5E63] font-semibold text-xl py-3 px-6 rounded-xl w-full md:w-1/3 mx-2 my-2 md:my-0 flex items-center justify-center transition duration-500 ease-in-out"
              >
                <img src={DribbbleLogo} loading="eager" alt="PDF Logo" className="mr-2" /> Dribbble
              </button>
            </div>
            <LazyLoadImage effect="blur" src={Presentasi} loading="lazy" alt="Project Snapshot" className="about-cloud-image waterfall w-full h-full rounded-xl" />
            <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Mencari Buku yang tersedia.</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Lesson Learned</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">Dengan mendengarkan feedback dari dosen pengampu mata kuliah, maka saya simpulkan pelajaran yang saya ambil dalam project based learning E-Library ini.</p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">
          <b>Figma is good for daily use.</b>Ini adalah project pertama saya menggunakan software figma yang saya bilang cukup bagus. Karena dibeberapa software seperti photoshop,ilustrator yang sebelumnya saya pakai,desain interface sangat
          bagus dan ringan berbeda dengan dua software sebelumnya.Meskipun Figma lebih terkenal digunakan design web saya rasa figma bisa menjadi daily use saya untuk design
        </p>
        <p className="mb-8 mt-3 font-plus-jakarta text-lg">
          <b>Pentingnya Project Brief yang Rinci.</b> Dari pengalaman mengerjakan proyek ini, saya menyadari pentingnya memiliki project brief yang rinci dan jelas sebelum memulai desain aplikasi. Project brief yang lengkap akan membantu
          memahami dengan tepat tujuan, ruang lingkup, dan persyaratan proyek.Pada project ini saya mengira ini adalah sistem peminjaman/pengembalian saja namun saat saya mempresentasikan dosen memberikan kritik karena tidak adanya sistem
          yang jelas mengenai presensi pada saat masuk perpustakan.Ini merupakan pelajaran berharga bagi saya untuk tanya terlebih dahulu hal-hal project brief secara rinci sebelum pengerjaan project.
        </p>
      </div>
    </div>
  );
};

export default Result;
