import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Bagus from "./assets/fotoku.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container">
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16 text-left">
        <div className="flex flex-col items-center mb-8 mt-[-30px]">
          <h1 className="text-8xl text-primary font-bold font-plus-jakarta ">Bagus,</h1>
          <h1 className="text-8xl text-primary font-bold font-plus-jakarta ">Developer,</h1>
          <h1 className="text-8xl text-primary font-bold font-plus-jakarta">Designer.</h1>
        </div>
        <section className="mb-8 mt-20">
          <h2 className="text-4xl font-bold font-plus-jakarta mb-2">About Me</h2>
          <p className="font-plus-jakarta text-lg">
            Hi saya Bagus! Sekarang saya sedang berkuliah di Universitas Sebelas Maret jurusan Teknik Informatika.Saya memiliki ketertarikan dengan programming juga teknologi didalamnya,dan saya juga memiliki hobi mendesign sebagai melepas
            penat dari programming.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-4xl font-bold font-plus-jakarta mb-2">Education</h2>
          <p className="font-plus-jakarta text-lg mt-4">
            <span>2018 - 2021</span>
            <br />
            <span className="font-semibold">SMK NEGERI 2 SURAKARTA</span>
            <br />
            <span>Teknik Komputer Jaringan</span>
          </p>
          <p className="font-plus-jakarta text-lg mt-4">
            <span>2021 - Sekarang</span>
            <br />
            <span className="font-semibold">UNIVERSITAS SEBELAS MARET</span>
            <br />
            <span>Teknik Informatika</span>
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-4xl font-bold font-plus-jakarta mb-2">Experience</h2>
          <p className="font-plus-jakarta text-lg mt-4">
            <span>Januari 2023 - July 2023</span>
            <br />
            <span className="font-semibold">PROJECT BASED LEARNING INTERNSHIP</span>
            <br />
            <span>Front End Developer - PT SIMS Life Media</span>
          </p>
        </section>
        <section className="mb-8 font-plus-jakarta">
          <h2 className="text-4xl font-bold font-plus-jakarta mb-2">Expertise</h2>
          <div className="flex items-center justify-between mt-4 mb-4">
            <span className="mr-2 font-semibold">React JS</span>
            <div className="flex items-center ml-2">
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="#707072" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="mr-2 font-semibold">Laravel</span>
            <div className="flex items-center ml-2">
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="#707072" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="#707072" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="mr-2 font-semibold">Figma</span>
            <div className="flex items-center ml-2">
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="#707072" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="mr-2 font-semibold">MySQL</span>
            <div className="flex items-center ml-2">
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="black" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="#707072" />
              <FontAwesomeIcon icon={faStar} className="mr-1" color="#707072" />
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl font-bold font-plus-jakarta mb-2">Contact</h2>
          <div className="flex bg-white shadow-md rounded-lg p-6 mt-4">
            <div className="mr-4">
              <img src={Bagus} alt="Your Name" className="rounded-xl w-64 h-64" />
            </div>
            <div className="font-plus-jakarta text-lg">
              <p className="mt-12 font-bold">
                <span>Bagus Brang Wicaksono </span>
                <span style={{ color: "#707072" }}>| He/Him</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 mt-10" color="#707072" />
                <span>Solo, Indonesia</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faInstagram} className="mr-2" color="#707072" />
                <span>@baguzbw</span>
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" color="#707072" />
                <span>bagusbwicaksono5@gmail.com</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
