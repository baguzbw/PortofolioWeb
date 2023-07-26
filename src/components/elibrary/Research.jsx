import React from "react";
import Hasil from "../assets/login.gif";
import MasterBuku from "../assets/masterbuku.png";

const Research = () => {
  return (
    <div className="flex flex-col items-center about-cloud-container" style={{ width: "100vw", maxWidth: "100%", marginTop: "28px" }}>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-lg text-primary font-bold font-plus-jakarta text-[#5E5E63] ">Research</h1>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">
          Observasi saya dalam project ini menunjukkan bahwa banyak siswa yang harus menunggu cukup lama untuk mendapatkan giliran ke staf perpustakaan karena semua layanan berjalan pada satu baris antrian tunggal.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">
          Antrian ini mencakup berbagai jenis layanan, seperti peminjaman buku, pengembalian buku, pembuatan kartu bebas perpus, dan kartu e-library. Masalah utamanya adalah bahwa staf perpustakaan harus menangani banyak masalah yang
          berbeda dalam satu baris antrian, mengakibatkan waktu tunggu yang lama bagi pengguna.
        </p>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
          <div className="flex flex-col items-center">
            <img src={MasterBuku} loading="eager" alt="Gambaran dari Detail Artikel" className="about-cloud-image waterfall w-full h-full" />
            <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Master untuk menambah & edit Buku.</h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto px-4 md:px-8 lg:px-16">
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">
          Aplikasi e-library dapat mengatasi masalah antrian ini dengan memberikan layanan mandiri bagi pengguna dalam hal peminjaman, pengembalian buku, pembuatan kartu bebas perpus, dan kartu e-library.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">
          Melalui aplikasi ini, pengguna dapat melakukan peminjaman dan pengembalian buku secara mandiri tanpa harus mengantri. Mereka juga dapat membuat kartu bebas perpus dan kartu e-library secara online melalui aplikasi.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">
          Dengan layanan mandiri ini, hanya pengguna yang membutuhkan bantuan staf atau ada masalah tertentu dalam peminjaman yang perlu mengantri, sehingga mengurangi panjang antrian dan waktu tunggu bagi pengguna lain.
        </p>
        <p className="mb-4 mt-3 font-plus-jakarta text-lg">
          Fitur mandiri ini juga akan memungkinkan staf perpustakaan untuk fokus pada penanganan masalah khusus dan memberikan panduan kepada pengguna yang membutuhkan bantuan, meningkatkan efisiensi dan pengalaman pengguna secara
          keseluruhan.
        </p>
        <div className="bg-white shadow-md p-6 rounded-lg max-w-xl w-full">
          <h2 className="font-bold text-xl font-plus-jakarta mb-4">Research</h2>
          <p className="font-plus-jakarta text-lg">
            Melalui analisis masalah ini, sebagai seorang UI/UX designer, Anda dapat merancang antarmuka aplikasi e-library dengan tampilan yang jelas dan panduan yang intuitif, sehingga pengguna dapat dengan mudah mengakses fitur-fitur
            mandiri tersebut dan mengurangi antrian serta waktu tunggu di perpustakaan. Dengan demikian, aplikasi e-library akan membantu meningkatkan efisiensi pelayanan dan memberikan pengalaman yang lebih baik bagi pengguna perpustakaan.
          </p>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center mb-14">
          <div className="flex flex-col items-center">
            <img src={Hasil} loading="eager" alt="Gambaran dari Detail Artikel" className="about-cloud-image mt-10 rounded-xl waterfall w-full h-full" />
            <h1 className="mt-2 font-plus-jakarta text-sm text-[#707072]">Tampilan Design Login E-Library.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
