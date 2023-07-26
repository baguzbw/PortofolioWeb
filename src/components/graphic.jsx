import React from "react";
import Ascension from "./assets/Ascension.svg";
import Friday from "./assets/Good Friday.svg";
import Natal from "./assets/Natal.svg";
import Manut from "./assets/manut.svg";

const Graphic = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container">
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className=" mb-5 mt-8 text-5xl text-primary font-bold font-plus-jakarta text-transparent bg-clip-text bg-gradient-to-r from-[#8075FF] to-[#FF7171] lg:inline">Logo and Illustration</h1>
        <h1 className=" mt-4 text-xl text-primary font-plus-jakarta">Beberapa hasil Logo & Illustrasi koleksi saya</h1>
      </div>
      <div className="flex flex-col items-center mt-14">
        <img src={Natal} loading="eager" alt="Hosana Youth Christmas Celebration 2022." className="mb-2  about-cloud-image waterfall w-full h-full rounded-3xl" />
        <h1 className="font-plus-jakarta text-sm text-[#707072]">Hosana Youth Christmas Celebration 2022.</h1>
      </div>
      <div className="flex flex-col items-center mt-14">
        <img src={Manut} loading="eager" alt="Hosana Youth Christmas Celebration 2021." className="mb-2 about-cloud-image waterfall w-full h-full rounded-3xl" />
        <h1 className="font-plus-jakarta text-sm text-[#707072]">Hosana Youth Christmas Celebration 2021.</h1>
      </div>
      <div className="flex flex-col items-center mt-14">
        <img src={Friday} loading="eager" alt="Good Friday 2022." className=" mb-2 about-cloud-image waterfall w-full h-full rounded-3xl" />
        <h1 className="font-plus-jakarta text-sm text-[#707072]">Good Friday 2022.</h1>
      </div>
      <div className="flex flex-col items-center mt-14 mb-14">
        <img src={Ascension} loading="eager" alt="Ascension Day 2022." className=" mb-2 about-cloud-image waterfall w-full h-full rounded-3xl" />
        <h1 className="font-plus-jakarta text-sm text-[#707072]">Ascension Day 2022.</h1>
      </div>
    </div>
  );
};

export default Graphic;
