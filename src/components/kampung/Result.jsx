import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import GithubLogo from "../assets/Github.svg";
import PDFLogo from "../assets/PDF.svg";
import Presentasi from "../assets/Presentasi.jpeg";
import WebsiteLogo from "../assets/Website.svg";

const Result = () => {
  const redirectToGithub = () => {
    window.open("https://github.com/baguzbw/pblkampungbatik", "_blank");
  };

  const redirectToWebsite = () => {
    window.open("https://joglobaleagungcendana.id/", "_blank");
  };

  const redirectToDocument = () => {
    window.open("https://drive.google.com/file/d/199lR6tQdbHx_6GREiKOnoXW1VtIdV2vP/view?usp=sharing", "_blank");
  };
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ backgroundColor: "#F6F6F6", width: "100vw", maxWidth: "100%", marginTop: "30px" }}>
      <div className="w-full md:w-1/2 mx-auto mt-10 px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Result</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify ">
          Setelah bekerja sama dengan team, menyelesaikan semua fitur dan request fitur dari dosen pembimbing dan juga pihak Joglo Bale Agung Cendana akhirnya project ini dapat selesai secara tepat waktu dari yang ditentukan, project ini
          merupakan rangkaian semester 4 yaitu Project Based Learning yang kita dapat dari Life Media.
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
            <LazyLoadImage effect="blur" src={Presentasi} loading="lazy" alt="Project Snapshot" className="about-cloud-image waterfall w-full h-full rounded-xl" />
            <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Foto kunjungan setelah presentasi hasil akhir.</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Lesson Learned</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify ">
          Dengan mendengarkan pihak kampung batik dan dosen pembimbing. Kami mendapat berbagai macam pelajaran dan pengalaman berharga yang diambil agar dapat diterapkan kedalam project-project kedepan.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify ">
          <b>Pentingnya Perencanaan dan Manajemen Proyek.</b> Ini adalah project team dengan skala yang besar pertama saya dan pada ada awal memulai saya ingin langsung terjun tanpa merencanakan secara menyeluruh seperti pentingnya tujuan
          proyek dibuat, tenggat waktu, persyaratan, kebutuhan database, dan penyelesaian masalah dengan komunikasi. Jika langsung dikerjakan tanpa perencanaan tadi maka pekerjaan saya mungkin tidak selesai tepat waktu.
        </p>
        <p className="mb-8 mt-3 font-plus-jakarta text-lg text-justify ">
          <b>Mendengarkan Feedback itu penting tapi filtering juga perlu.</b> Dalam project ini kami setiap hari berdiskusi dengan dosen terkait progress website dan mendapat feedback dari dosen. Terkadang Feedback tidak harus semua kita
          jalankan jika tidak sejalan tujuan awal pembuatan website. Karena jika ada tambahan fitur maka perencanaan yang sudah kita buat harus ditambahkan dan merubah timeline jika ini terjadi terus menerus maka project menjadi selesai.
        </p>
      </div>
    </div>
  );
};

export default Result;
