import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import GithubLogo from "../assets/Github.svg";
import PDFLogo from "../assets/PDF.svg";
import WebsiteLogo from "../assets/globe.svg";
import Hasil from "../assets/hasil.png";

const Result = () => {
  const redirectToGithub = () => {
    window.open("https://github.com/baguzbw/IcareliProject", "_blank");
  };

  const redirectToWebsite = () => {
    window.open("https://icareli.id/", "_blank");
  };

  const redirectToDocument = () => {
    window.open("https://drive.google.com/file/d/1xdqCG-l8HH4FsJKgDrpWXzgI_YIObRaE/view?usp=sharing", "_blank");
  };
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ backgroundColor: "#F6F6F6", width: "100vw", maxWidth: "100%", marginTop: "30px" }}>
      <div className="w-full md:w-1/2 mx-auto mt-10 px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Result</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify ">
          Setelah bekerja sama dengan tim dalam waktu yang singkat, hanya satu bulan, dan menyelesaikan revisi yang dilakukan oleh Fakultas Pertanian Universitas Sebelas Maret, proyek website ICARELI akhirnya selesai dengan cepat dan siap
          untuk dipakai pada konferensi kedua ICARELI.
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-between w-full mb-8 mt-2 font-plus-jakarta">
              <button
                onClick={redirectToGithub}
                className="bg-[#ECEFF1] hover:bg-[#FFFFFF] text-[#5E5E63] font-semibold text-xl py-3 px-6 rounded-xl w-full md:w-1/3 mx-2 my-2 md:my-0 flex items-center justify-center transition duration-500 ease-in-out"
              >
                <img src={GithubLogo} loading="eager" alt="Github Logo" className="mr-2" /> Github
              </button>
              <button
                onClick={redirectToWebsite}
                className="bg-[#ECEFF1] hover:bg-[#FFFFFF] text-[#5E5E63] font-semibold text-xl py-3 px-6 rounded-xl w-full md:w-1/3 mx-2 my-2 md:my-0 flex items-center justify-center transition duration-500 ease-in-out"
              >
                <img src={WebsiteLogo} loading="eager" alt="Website Logo" className="mr-2" /> Website
              </button>
              <button
                onClick={redirectToDocument}
                className="bg-[#ECEFF1] hover:bg-[#FFFFFF] text-[#5E5E63] font-semibold text-xl py-3 px-6 rounded-xl w-full md:w-1/3 mx-2 my-2 md:my-0 flex items-center justify-center transition duration-500 ease-in-out"
              >
                <img src={PDFLogo} loading="eager" alt="PDF Logo" className="mr-2" /> Document
              </button>
            </div>
            <LazyLoadImage effect="blur" src={Hasil} loading="lazy" alt="Project Snapshot" className="about-cloud-image waterfall w-full h-full rounded-xl" />
            <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">The 2nd ICARELI Conference.</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Lesson Learned</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify ">
          Setelah menyelesaikan project website ICARELI,kami mendapat berbagai macam pelajaran dan pengalaman berharga yang dapat diambil agar bisa mematangkan ilmu dan bisa diterapkan langsung untuk project berskala besar lainnya.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify ">
          <b>Penggunaan React Context.</b> Ini adalah project pertama saya yang menggunakan react context dan awalnya cukup rumit untuk memahami alur aplikasi.React Context lebih cocok digunakan pada web berskala besar untuk lebih mudah
          dipelihara.Pada project ini saya juga lebih tau mana project yang harus menggunakan React Context dan React Props.
        </p>
        <p className="mb-8 mt-3 font-plus-jakarta text-lg text-justify ">
          <b>Research sedikit lebih baik daripada tidak research sama sekali.</b> Dengan waktu deadline yang cukup singkat pada awalnya kita tidak melakukan research sama sekali dan langsung membuat rancangan dan setelah itu design namun
          hal itu tidak berjalan baik karena ditengah kita mengalami kebingungan.Tanpa menggunakan research mungkin saya masih menggunakan React Props dan masih kebingungan ditengah pengerjaannya.
        </p>
      </div>
    </div>
  );
};

export default Result;
