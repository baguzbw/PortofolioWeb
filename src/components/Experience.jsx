import React from "react";

function ExperienceCard() {
  return (
    <div className="flex flex-col items-center justify-center p-12 w-full">
      <div className="w-11/12 sm:w-7/12 text-left">
        <h2 className="font-extrabold font-plus-jakarta text-3xl block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63]">Pengalaman</h2>
        <p className="font-plus-jakarta text-xl block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63]">
          Sekarang saya masih berkuliah, jadi pengalaman saya sebagian besar dari <i className="font-medium">project based learning dan internship</i>. Ini adalah beberapa dimana saya telah berkontribusi.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-6 gap-4 sm:gap-38 w-11/12 sm:w-7/12">
        <div className="font-plus-jakarta text-xl font-bold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#80a4ff] to-[#2562ff]">Jan 23 - July 23</div>
        <div className="font-plus-jakarta text-xl block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63]">Front End Dev</div>
        <div className="font-plus-jakarta text-xl font-bold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#323235] to-[#5E5E63]">LifeMedia, Yogyakarta</div>
      </div>
    </div>
  );
}

export default ExperienceCard;
