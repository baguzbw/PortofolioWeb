import { motion } from "framer-motion";
import React from "react";
import backgroundImage from "../assets/developer.svg";
import Indo from "../assets/id.svg";
import Experience from "./Experience";
import ProDev from "./ProDev";

const Developer = () => {
  return (
    <>
      <motion.section
        className="pt-40 bg-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "65%",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-12 mb-6 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-10 text-4xl font-bold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span className="block w-full py-2 font-plus-jakarta text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#969699] to-[#1E1E22] lg:inline">Hi, Saya Bagus.</span>
            </h1>
            <h2 className="mb-6 text-lg font-medium font-plus-jakarta text-[#5E5E63] md:text-lg flex justify-center items-center">
              Tinggal di Solo
              <img src={Indo} alt="Indonesia Flag" width="20" className="ml-2" />
            </h2>
            <h2 className="text-lg font-medium font-plus-jakarta text-[#5E5E63] md:text-lg">Saat ini saya sedang berkuliah, dimana saya fokus belajar pada</h2>
            <h2 className="text-lg font-medium font-plus-jakarta text-[#5E5E63] md:text-lg">desain UI/UX dan Front-End Developer 👾</h2>
          </div>
        </div>
      </motion.section>
      <div className="p-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <ProDev />
          <Experience />
        </motion.div>
      </div>
    </>
  );
};

export default Developer;
