import React from "react";
import Logo from "../assets/Joglo.svg";
import LaravelLogo from "../assets/Laravel.svg";
import Mysql from "../assets/Mysql.svg";
import ReactLogo from "../assets/React.svg";
import Landing from "../assets/landing1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Kampung = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-12 xl:px-16">
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <LazyLoadImage effect="blur"  src={Landing} loading="lazy" className="w-full h-auto md:max-w-4xl" />
      </div>
      <div className="mt-[-110px] flex flex-col md:grid md:grid-cols-2 gap-8 max-w-3xl mx-auto relative">
        <img src={Logo} alt="Company Logo" className="w-12 h-12 mb-[-14px]" />
        <h1 className="font-bold text-4xl col-span-2 font-plus-jakarta ">Kampung Batik Joglo Bale Agung Cendana</h1>
        <h5 className="font-bold col-span-2 font-plus-jakarta mt-[-22px] text-[#5E5E63]">LIFE MEDIA</h5>
        <div className="order-2 md:order-none col-span-1">
          <p className="font-bold mt-[-14px] font-plus-jakarta text-xl">Project Brief</p>
          <p className="font-plus-jakarta text-lg">
            Proyek Kampung Batik adalah platform berbasis web yang dirancang untuk mempromosikan dan melestarikan warisan budaya dan keterampilan Batik dari Kampung Batik Joglo Bale Agung Cendana. Situs web ini tidak hanya akan menampilkan
            produk Batik yang indah, tetapi juga akan menyoroti motif khas dan sajian kuliner lokal daerah tersebut.
          </p>
        </div>
        <div className="order-1 md:order-none col-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 font-plus-jakarta ms-8 me-4">
          <div>
            <p className="font-bold text-xl">Role</p>
            <p className="text-lg">Front End Dev</p>
            <p className="font-bold mt-3 text-xl">Timeline</p>
            <p className="text-lg">Q1 2023</p>
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
        <p className="font-plus-jakarta text-lg">
          Kampung Batik Joglo Bale Agung Cendana masih kurang dikenal luas karena tidak memiliki situs web. Hal ini berdampak pada kredibilitas dan penyebaran informasi tentang nilai budaya serta produk batik unik yang dimilikinya.
        </p>
      </div>
    </div>
  );
};

export default Kampung;
