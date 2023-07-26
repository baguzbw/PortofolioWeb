import { motion } from "framer-motion";
import React from "react";
import backgroundImage from "./assets/designer.svg";
import Indo from "./assets/id.svg";
import ProDesign from "./ProDesign";

const Designer = () => {
  return (
    <>
      <motion.section
        className="pt-10 sm:pt-20 md:pt-30 lg:pt-40 bg-white text-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-4 sm:px-6 lg:px-12 mb-6 mx-auto max-w-7xl">
          <div className="w-full mx-auto">
            <h1 className="mb-5 sm:mb-8 md:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-none tracking-normal text-gray-900 md:tracking-tight">
              <span className="block w-full py-1 sm:py-2 font-plus-jakarta text-transparent bg-clip-text leading-6 sm:leading-8 md:leading-12 bg-gradient-to-r from-[#8075FF] to-[#FF7171] lg:inline">Hi, Saya Bagus.</span>
            </h1>
            <h2 className="mb-3 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg font-medium font-plus-jakarta text-[#5E5E63] flex justify-center items-center">
              Tinggal di Solo
              <img src={Indo} alt="Indonesia Flag" width="20" className="ml-2" />
            </h2>
            <h2 className="text-sm sm:text-base md:text-lg font-medium font-plus-jakarta text-[#5E5E63] ">Saat ini saya sedang berkuliah, dimana saya fokus belajar pada</h2>
            <h2 className="text-sm sm:text-base md:text-lg font-medium font-plus-jakarta text-[#5E5E63] ">desain UI/UX dan Front-End Developer 👾</h2>
          </div>
        </div>
      </motion.section>
      <div className="p-4 sm:p-6 lg:p-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <ProDesign />
        </motion.div>
      </div>
    </>
  );
};

export default Designer;
