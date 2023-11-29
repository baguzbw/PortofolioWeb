import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Icareli2 from "../assets/icareli2.svg";
import Icareli3 from "../assets/icareli3.svg";

const Features = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ backgroundColor: "#F6F6F6", width: "100vw", maxWidth: "100%" }}>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <div className="flex flex-col items-center">
          <LazyLoadImage effect="blur" src={Icareli2} loading="lazy" alt="Gambaran dari Detail Artikel" className="about-cloud-image waterfall w-full h-full mt-8" />
          <h1 className="font-plus-jakarta text-sm text-[#707072]">Landing Page ICARELI.</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Features</h1>
        <h1 className="mt-3 text-2xl text-primary font-bold font-plus-jakarta ">Multiple Data</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Dengan fitur Multiple Data, kita dapat mengubah, menambah, atau menghapus data di seluruh website.Dalam contoh multiple data, jika Anda ingin mengubah contoh ke konferensi tahun 2021, maka semua data yang berkaitan dengan
          konferensi tersebut akan ditampilkan. Sebaliknya, jika Anda memilih konferensi tahun 2023, hal yang sama akan terjadi.
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <div className="flex flex-col items-center">
          <LazyLoadImage effect="blur" src={Icareli3} loading="lazy" alt="Produk & Motif Core Kampung Batik." className="about-cloud-image waterfall w-full h-full mt-8" />
          <h1 className="font-plus-jakarta text-sm text-[#707072]">Informasi Guide Program.</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl text-primary font-bold font-plus-jakarta ">Informasi ICARELI</h1>
        <p className="mb-10 mt-3 font-plus-jakarta text-lg text-justify">
          Fitur Informasi mencakup banyak hal, seperti informasi tentang pembicara, artikel tentang konferensi yang terjadi, jadwal konferensi, komite yang berpartisipasi, pedoman program, dan informasi tentang registrasi submission.
        </p>
      </div>
    </div>
  );
};

export default Features;
