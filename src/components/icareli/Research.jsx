import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Context from "../assets/Context.png";
import Hasil from "../assets/icareli5.png";

const Research = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ width: "100vw", maxWidth: "100%", marginTop: "28px" }}>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Research</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Dalam Project yang memiliki waktu pengerjaan selama 1 bulan ini saya sebagai Front End Developer pada awalnya saya hanya memiliki masalah untuk menyelesaikan project ini sesuai waktu yang diberikan namun setelah berdiskusi dengan
          team fakultas pertanian saya memiliki tambahan masalah yaitu mengatasi multiple data dalam satu website.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Pada awal project website didesign untuk hanya memiliki satu data yaitu seluruh data yang berkaitan conference 2023.Setelah pengerjaan selesai,team dari fakultas pertanian Universitas Sebelas Maret menambahkan jika conference
          sebelumnya yaitu 2021 ingin juga ditambahkan ke dalam website tanpa merubah design hanya merubah data yang harus ditampilkan.
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
          <div className="flex flex-col items-center">
            <LazyLoadImage effect="blur" src={Context} loading="lazy" alt="Gambaran dari Detail Artikel" className="mt-4 about-cloud-image waterfall w-full h-full" />
            <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">React Props & React Context</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <p className="mb-4 font-plus-jakarta text-lg text-justify">
          Setelah saya melakukan research,saya akhirnya menggunakan React Context untuk pertama kalinya.React Context memiliki kelebihan untuk mengakses data yang sama tanpa perantara serta memberikan kemudahan untuk mengelola state secara
          lebih efisien.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Sebelumnya saya memakai React Props karena saya hanya memiliki ilmu tentang React Props serta cara penggunaannya yang layaknya hierarkis.Hierarkis yang saya maksud adalah seperti estafet dari satu komponen ke komponen lainnya.
        </p>
        <div className="bg-white shadow-md ms-6 mt-2 p-6 rounded-lg max-w-xl w-full">
          <h2 className="font-bold text-xl font-plus-jakarta mb-4">Research</h2>
          <p className="font-plus-jakarta text-lg text-justify ">
            Kesimpulan dari Research ini yaitu React Context sangat berguna jika project yang dibuat adalah project berskala besar namun jika project hanya berskala kecil penggunaannya lumayan ribet.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
          <div className="flex flex-col items-center mt-4">
            <LazyLoadImage effect="blur" src={Hasil} loading="lazy" alt="Gambaran dari Detail Artikel" className="about-cloud-image waterfall w-full h-full" />
            <h1 className="font-plus-jakarta text-sm text-[#707072]">Tampilan Speaker Page.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
