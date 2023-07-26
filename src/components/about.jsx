import React from "react";
import Fotoku from "./assets/fotoku.jpg";
import UNS from "./assets/uns.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container">
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <img src="https://i.pinimg.com/564x/49/d1/da/49d1da79c7abed86c32830d93af0576d.jpg" loading="eager" alt="" className="about-cloud-image olive" style={{ width: "279px", height: "402px", borderRadius: "20px" }} />
        <img src={Fotoku} loading="eager" alt="A photo of me" className="about-cloud-image waterfall" style={{ width: "379px", height: "538px", borderRadius: "20px", marginLeft: "5px", marginRight: "5px" }} />
        <img src={UNS} loading="eager" alt="" className="about-cloud-image bridge" style={{ width: "279px", height: "402px", borderRadius: "20px" }} />
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className=" mb-5 mt-8 text-4xl text-primary font-bold font-plus-jakarta text-transparent bg-clip-text bg-gradient-to-r from-[#8075FF] to-[#FF7171] lg:inline">Hi lagi,Saya Bagus.</h1>
        <p className="mb-4 mt-8 font-plus-jakarta text-lg">
          Saya sebagai web developer di Solo,saya berpengalaman dalam menyelesaikan proyek-proyek menggunakan kerangka kerja React JS dan Laravel. Selain itu, saya juga memiliki hobi sebagai seorang perancang UI/UX dan Graphic Designer.
        </p>
        <p className="mb-4 font-plus-jakarta text-lg">
          Sebelumnya, saya telah mengerjakan berbagai proyek menggunakan framework React JS dan Laravel, di mana saya berhasil menciptakan aplikasi yang efisien dan responsif. Saya memulai perjalanan saya sebagai web developer, kemudian
          memperluas keahlian saya ke dalam desain dengan mempelajari UI/UX Designer dan memperdalam Graphic Designer.
        </p>
        <p className="mb-8 font-plus-jakarta text-lg">Sebagai seorang yang memiliki hobi dalam desain, saya menikmati proses kreatif dan seringkali menjadikannya sebagai pelepas penat saat menghadapi stuck dalam web developer.</p>
      </div>
    </div>
  );
};

export default About;
