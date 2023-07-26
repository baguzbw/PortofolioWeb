import React from "react";
import Admin from "../assets/admin.png";
import Artikel from "../assets/peminjaman.gif";

const Features = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ backgroundColor: "#F6F6F6", width: "100vw", maxWidth: "100%" }}>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <div className="flex flex-col items-center">
          <img src={Artikel} loading="eager" alt="Gambaran dari Detail Artikel" className="about-cloud-image mt-10 rounded-xl waterfall w-full h-full" />
          <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Alur Peminjaman Buku.</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Features</h1>
        <h1 className="mt-3 text-2xl text-primary font-bold font-plus-jakarta ">Peminjaman & Pengembalian Mandiri</h1>
        <p className="mt-3 font-plus-jakarta text-lg">
          Peminjaman dan Pengembalian Buku secara mandiri dengan scanning adalah fitur dalam aplikasi e-library yang memungkinkan siswa dan guru di perpustakaan untuk melakukan proses peminjaman dan pengembalian buku secara mandiri tanpa
          bantuan dari staf perpustakaan. Fitur ini bertujuan untuk meningkatkan efisiensi, aksesibilitas, dan kenyamanan dalam pengelolaan peminjaman buku.
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
        <div className="flex flex-col items-center">
          <img src={Admin} loading="eager" alt="Produk & Motif Core Kampung Batik." className="about-cloud-image waterfall w-full h-full" />
          <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Stastik di E-Library.</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl text-primary font-bold font-plus-jakarta ">Panel Admin</h1>
        <p className="mb-10 mt-3 font-plus-jakarta text-lg">
          Fitur Panel Admin dalam aplikasi e-library memungkinkan staf perpustakaan untuk mengelola katalog buku, memperbarui informasi buku, serta mengelola akun pengguna,membuat kartu. Selain itu, staf dapat melacak statistik peminjaman
          buku, memantau aktivitas pengunjung, dan menghasilkan laporan untuk manajemen perpustakaan. Panel admin memberikan akses khusus yang efisien dan efektif bagi staf perpustakaan untuk mengoptimalkan layanan perpustakaan dan
          meningkatkan pengalaman pengguna.
        </p>
      </div>
    </div>
  );
};

export default Features;
