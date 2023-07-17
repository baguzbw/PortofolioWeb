import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container">
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <img
          src="https://i.pinimg.com/564x/9a/83/5a/9a835a036e056719048fdfaff3f9b575.jpg"
          loading="eager"
          alt="A pic of my dog, Olive."
          className="about-cloud-image olive"
          style={{ width: "379px", height: "502px", borderRadius: "20px" }}
        />
        <img
          src="https://i.pinimg.com/564x/3a/cf/8d/3acf8d1c40c0fbe1728a6db6c5f3136b.jpg"
          loading="eager"
          alt="A photo of me next to a small waterfall"
          className="about-cloud-image waterfall"
          style={{ width: "479px", height: "638px", borderRadius: "20px", marginLeft: "5px", marginRight: "5px" }}
        />
        <img
          src="https://i.pinimg.com/564x/8c/dc/0d/8cdc0d539240b13c5652412d3e3630f3.jpg"
          loading="eager"
          alt="A photo of The Williamsburg Bridge"
          className="about-cloud-image bridge"
          style={{ width: "379px", height: "502px", borderRadius: "20px" }}
        />
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <h1 className=" mb-5 mt-8 text-3xl text-primary font-bold font-plus-jakarta text-transparent bg-clip-text bg-gradient-to-r from-[#8075FF] to-[#FF7171] lg:inline">Hi again, Im Olivier.</h1>
        <p className="mb-4 font-plus-jakarta">
          Im a product designer living in Brooklyn, interested in how people and software can work together to make life better. Im currently at Snap, where I design experiences around finding and using AR Lenses on Snapchat.
        </p>
        <p className="mb-4 font-plus-jakarta">
          I previously worked at ZipRecruiter, where I designed experiences and interfaces to help millions of people get jobs. I started on the marketing design side, honing my visual design skills and learning the ins and outs of keyframe
          animation, then moved into the world of product.
        </p>
        <p className="mb-4 font-plus-jakarta">
          As a designer, I enjoy being a generalist with a focus on craft and prototyping. I value beautiful visuals backed by smart systems thinking. I love the concept that a digital product is a living thing that can adapt and evolve
          over time.
        </p>
        <p className="mb-4 font-plus-jakarta">
          Outside of design, I love food in all capacities. I spend my time exploring new restaurants, cooking new dishes, and talking about my next meal. I think a lot about the Arizona Cardinals, well-executed civil engineering, and my
          dog Olive (no, she wasnt named after me).
        </p>
        <p className="mb-14 font-plus-jakarta">
          If you want to chat, feel free to{" "}
          <a href="https://www.olivierifrah.com/contact" className="text-blue-500 underline">
            reach out.
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
