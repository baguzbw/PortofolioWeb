import React from "react";
import Github from "../assets/GithubStar.svg";
import Hasil from "../assets/hasil.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Research = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ width: "100vw", maxWidth: "100%", marginTop: "28px" }}>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Research</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Dalam Project ini saya sebagai Front End Developer dihadapkan dengan framework React js yang baru saya pelajari belakangan ini karena sebelumnya saya lebih familiar menggunakan laravel yang mostly php. Pada Project ini saya
          melakukan research terlebih dahulu tentang React js.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Research yang saya dapat adalah react js merupakan framework dari Javascript yang dikembangkan oleh Facebook dan dipakai juga dalam aplikasinya. Perbedaan yang saya alami dari laravel adalah struktur aplikasi didalamnya. Dalam
          Laravel struktur aplikasinya sangat terstuktur namun dalam react js saya harus menata sendiri
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
          <div className="flex flex-col items-center">
            <LazyLoadImage effect="blur"  src={Github} loading="lazy" alt="Gambaran dari Detail Artikel" className="about-cloud-image waterfall w-full h-full" />
            <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Github Star pengguna React.</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Di Project ini saya juga bersama dengan UI/UX Design melakukan research untuk design pada kampung batik Joglo Bale Agung Cendana ini. Research tertuju pada 2 website yaitu kampoengbatiklaweyan.org dan batikgiriloyo.co.id.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Pada website kampoengbatiklaweyan.org terdapat banyak sekali menu pada navbar yang membuat saya pengunjung kurang nyaman dan bingungtentang informasi yang disampaikan pada website kampoengbatiklaweyan.org
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg text-justify">
          Selanjutnya pada website batikgiriloyo.co.id,design tampilan antarmuka yang dibuat menurut saya belum eye catching.Dengan pemilihan warna yang terkesan tidak modern.Terdapat ilustrasi yang sama disetiap fitur membuat kesan
          repetitif dan kurang menarik.
        </p>
        <div className="bg-white shadow-md ms-6 mt-2 p-6 rounded-lg max-w-xl w-full">
          <h2 className="font-bold text-xl font-plus-jakarta mb-4">Research</h2>
          <p className="font-plus-jakarta text-lg text-justify ">
            Setelah melakukan Research pada dua situs web sebelumnya, kami menyimpulkan untuk menciptakan desain yang modern, penting untuk memperhatikan pemilihan font dan warna yang mudah dibaca. Selain itu, pengelompokan menu pada Navbar
            juga sangat penting.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
          <div className="flex flex-col items-center">
            <LazyLoadImage effect="blur"  src={Hasil} loading="lazy" alt="Gambaran dari Detail Artikel" className="about-cloud-image waterfall w-full h-full" />
            <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Hasil Akhir Tampilan Design.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
