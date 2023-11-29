import React from "react";
import Artikel from "../assets/Artikel.svg";
import Gallery from "../assets/Gallery.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Features = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ backgroundColor: "#F6F6F6", width: "100vw", maxWidth: "100%" }}>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <div className="flex flex-col items-center">
          <LazyLoadImage effect="blur"  src={Artikel} loading="lazy" alt="Gambaran dari Detail Artikel" className="about-cloud-image waterfall w-full h-full" />
          <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Gambaran dari Detail Artikel.</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Features</h1>
        <h1 className="mt-3 text-2xl text-primary font-bold font-plus-jakarta ">Artikel</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Dalam pembuatan fitur artikel, kualitas konten yang disajikan menjadi topik utama dari fitur ini. Untuk mengoptimalkan pengalaman pengunjung, tampilan visual yang menarik dan responsif sangat diperhatikan. Desain interface yang
          intuitif dapat mempermudah pengunjung menavigasi situs, membaca artikel dengan nyaman, dan menemukan informasi yang mereka cari yang berkaitan dengan budaya di Joglo Bale Agung Cendana.
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <div className="flex flex-col items-center">
          <LazyLoadImage effect="blur"  src={Gallery} loading="lazy" alt="Produk & Motif Core Kampung Batik." className="about-cloud-image waterfall w-full h-full" />
          <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Produk & Motif Core Kampung Batik.</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl text-primary font-bold font-plus-jakarta ">Produk & Motif</h1>
        <p className="mb-10 mt-3 font-plus-jakarta text-lg text-justify">
          Fitur ini dirancang untuk memberikan pengalaman yang lengkap dan informatif kepada pengunjung terkait produk-produk dan motif khas dari Joglo Bale Agung Cendana. Tampilan menggunakan grouping produk & motif yang jika diclick akan
          memberikan informasi lebih lanjut tentang produk atau motif yang diclick. Melalui fitur ini pengunjung diberikan kesempatan untuk mengeksplorasi dan mengenal lebih dalam tentang produk & motif batik yang ditawarkan di Joglo Bale
          Agung Cendana.
        </p>
      </div>
    </div>
  );
};

export default Features;
