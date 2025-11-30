import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


// ========================= DATA DESTINASI ========================= //
const destinasi = {
  Sumatera: [
    {
      id: 1,
      asal: "Jakarta",
      tujuan: "Medan",
      maskapai: "Lion Air",
      kelas: "Ekonomi",
      tanggal: "27 Nov 25",
      hargaAsli: 1365900,
      hargaPromo: 1360900,
      refund: true,
      reschedule: true,
    },
    {
      id: 2,
      asal: "Jakarta",
      tujuan: "Padang",
      maskapai: "Pelita Air",
      kelas: "Ekonomi",
      tanggal: "28 Nov 25",
      hargaAsli: 1325000,
      hargaPromo: 1320000,
      refund: true,
      reschedule: true,
    },
    {
      id: 3,
      asal: "Jakarta",
      tujuan: "Pekanbaru",
      maskapai: "Batik Air",
      kelas: "Ekonomi",
      tanggal: "29 Nov 25",
      hargaAsli: 1450000,
      hargaPromo: 1399000,
      refund: true,
      reschedule: true,
    },
  ],

  Jawa: [
    {
      id: 11,
      asal: "Jakarta",
      tujuan: "Surabaya",
      maskapai: "Garuda Indonesia",
      kelas: "Ekonomi",
      tanggal: "28 Nov 25",
      hargaAsli: 1680000,
      hargaPromo: 1599000,
      refund: true,
      reschedule: true,
    },
    {
      id: 12,
      asal: "Jakarta",
      tujuan: "Yogyakarta",
      maskapai: "Citilink",
      kelas: "Ekonomi",
      tanggal: "30 Nov 25",
      hargaAsli: 1130000,
      hargaPromo: 1099000,
      refund: true,
      reschedule: true,
    },
    {
      id: 13,
      asal: "Jakarta",
      tujuan: "Semarang",
      maskapai: "Lion Air",
      kelas: "Ekonomi",
      tanggal: "01 Des 25",
      hargaAsli: 980000,
      hargaPromo: 935000,
      refund: true,
      reschedule: true,
    },
  ],

  Bali: [
    {
      id: 21,
      asal: "Jakarta",
      tujuan: "Denpasar",
      maskapai: "Batik Air",
      kelas: "Ekonomi",
      tanggal: "29 Nov 25",
      hargaAsli: 1520000,
      hargaPromo: 1465000,
      refund: true,
      reschedule: true,
    },
    {
      id: 22,
      asal: "Jakarta",
      tujuan: "Lombok",
      maskapai: "Citilink",
      kelas: "Ekonomi",
      tanggal: "02 Des 25",
      hargaAsli: 1600000,
      hargaPromo: 1545000,
      refund: true,
      reschedule: true,
    },
    {
      id: 23,
      asal: "Jakarta",
      tujuan: "Labuan Bajo",
      maskapai: "Super Air Jet",
      kelas: "Ekonomi",
      tanggal: "04 Des 25",
      hargaAsli: 2100000,
      hargaPromo: 2049000,
      refund: true,
      reschedule: true,
    },
  ],

  Kalimantan: [
    {
      id: 31,
      asal: "Jakarta",
      tujuan: "Balikpapan",
      maskapai: "Lion Air",
      kelas: "Ekonomi",
      tanggal: "01 Des 25",
      hargaAsli: 1550000,
      hargaPromo: 1499000,
      refund: true,
      reschedule: true,
    },
    {
      id: 32,
      asal: "Jakarta",
      tujuan: "Pontianak",
      maskapai: "Super Air Jet",
      kelas: "Ekonomi",
      tanggal: "03 Des 25",
      hargaAsli: 1490000,
      hargaPromo: 1425000,
      refund: true,
      reschedule: true,
    },
    {
      id: 33,
      asal: "Jakarta",
      tujuan: "Samarinda",
      maskapai: "Batik Air",
      kelas: "Ekonomi",
      tanggal: "05 Des 25",
      hargaAsli: 1710000,
      hargaPromo: 1649000,
      refund: true,
      reschedule: true,
    },
  ],

  "Sulawesi & Indonesia Timur": [
    {
      id: 41,
      asal: "Jakarta",
      tujuan: "Makassar",
      maskapai: "Garuda Indonesia",
      kelas: "Ekonomi",
      tanggal: "05 Des 25",
      hargaAsli: 2100000,
      hargaPromo: 1999000,
      refund: true,
      reschedule: true,
    },
    {
      id: 42,
      asal: "Jakarta",
      tujuan: "Manado",
      maskapai: "Lion Air",
      kelas: "Ekonomi",
      tanggal: "08 Des 25",
      hargaAsli: 2400000,
      hargaPromo: 2325000,
      refund: true,
      reschedule: true,
    },
    {
      id: 43,
      asal: "Jakarta",
      tujuan: "Ternate",
      maskapai: "Citilink",
      kelas: "Ekonomi",
      tanggal: "10 Des 25",
      hargaAsli: 2550000,
      hargaPromo: 2475000,
      refund: true,
      reschedule: true,
    },
  ],

  Bisnis: [
    {
      id: 51,
      asal: "Jakarta",
      tujuan: "Medan",
      maskapai: "Garuda Indonesia",
      kelas: "Bisnis",
      tanggal: "27 Nov 25",
      hargaAsli: 4980000,
      hargaPromo: 4699000,
      refund: true,
      reschedule: true,
    },
    {
      id: 52,
      asal: "Jakarta",
      tujuan: "Surabaya",
      maskapai: "Batik Air",
      kelas: "Bisnis",
      tanggal: "01 Des 25",
      hargaAsli: 5250000,
      hargaPromo: 4999000,
      refund: true,
      reschedule: true,
    },
    {
      id: 53,
      asal: "Jakarta",
      tujuan: "Denpasar",
      maskapai: "Garuda Indonesia",
      kelas: "Bisnis",
      tanggal: "03 Des 25",
      hargaAsli: 5500000,
      hargaPromo: 5255000,
      refund: true,
      reschedule: true,
    },
  ],
};

const kategori = Object.keys(destinasi);



// ========================= HOMEPAGE ========================= //

export default function HomePage() {
  const [aktif, setAktif] = useState("Sumatera");

  return (
    <section className="min-h-screen flex flex-col items-center bg-gray-50">

      {/* ===================== PROMO SECTION ===================== */}
<section className="px-6 py-16 bg-gradient-to-b from-white to-sky-50">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-sky-700 text-center tracking-wide">
      Promo Spesial Untuk Kamu ✨
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

      {/* CARD 1 */}
      <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-sky-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl">
            ✈️
          </div>
          <h3 className="text-lg font-semibold text-sky-700">Diskon 20% Semua Rute</h3>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Berlaku sampai <b>30 November 2025</b>. Nikmati perjalanan hemat ke seluruh Indonesia!
        </p>
      </div>

      {/* CARD 2 */}
      <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-purple-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-xl flex items-center justify-center text-white text-2xl">
            💸
          </div>
          <h3 className="text-lg font-semibold text-purple-700">Cashback Rp 50.000</h3>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Cashback langsung untuk semua pembayaran menggunakan <b>QRIS</b>.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-emerald-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white text-2xl">
            🌟
          </div>
          <h3 className="text-lg font-semibold text-emerald-700">Upgrade Kursi Gratis</h3>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Gratis upgrade kursi premium khusus penerbangan domestik pilihan.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* ===================== HERO ===================== */}
      <section className="relative h-[450px] md:h-[500px] flex items-center text-white w-full">

  <img
    src="/aboutt.jpg"
    alt="SkyFly"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40"></div>
  
  <div className="relative z-10 w-full">

    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

      <div>
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Terbang Nyaman, <span className="text-yellow-400">Tanpa Ribet</span>
        </h1>

        <p className="text-lg text-gray-200 mb-6">
          Akses dunia dalam genggaman. Temukan pengalaman terbang terbaik dengan SkyFly Pro.
        </p>

        <a href="/pesan" className="btn-primary-lg inline-block">
          Pesan Sekarang
        </a>
      </div>

    </div>
  </div>
</section>




      {/* ===================== KATEGORI DESTINASI ===================== */}
      <div className="max-w-7xl mx-auto px-4 w-full py-10">
        <h2 className="text-3xl font-extrabold mb-3 text-blue-800 text-center">
          Jelajahi Nusantara bersama SkyFly Pro
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {kategori.map((k) => (
            <button
              key={k}
              onClick={() => setAktif(k)}
              className={`px-4 py-2 rounded-full border font-semibold transition-all ${
                aktif === k
                  ? "bg-blue-600 text-white border-blue-700 shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {k}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinasi[aktif].map((d) => (
            <div
              key={d.id}
              className="border rounded-xl bg-white shadow-md hover:shadow-xl transition-all p-5 space-y-3"
            >
              <div className="text-gray-700 font-semibold text-lg">
                {d.asal} → <span className="text-blue-700 font-bold">{d.tujuan}</span>
              </div>

              <div className="text-sm text-gray-500">Sekali jalan • {d.tanggal}</div>

              <div>
                <span className="text-sm text-gray-400 line-through mr-2">
                  IDR {d.hargaAsli.toLocaleString("id-ID")}
                </span>
                <span className="text-xl font-bold text-red-600">
                  IDR {d.hargaPromo.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-600">
                ✈ {d.maskapai} • {d.kelas}
              </div>

              <div className="text-green-600 text-xs">
                {d.refund && "Bisa 100% refund"} {d.reschedule && "• Bisa reschedule"}
              </div>

              <a
                href="/pesan"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 font-semibold mt-3"
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>


      {/* ===================== REVIEW PENGGUNA ===================== */}
      <section className="px-6 py-16 bg-gray-50 w-full">
        <h2 className="text-2xl font-bold mb-6 text-sky-600">Apa Kata Pengguna ✨</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <ReviewCard
            img="https://media.istockphoto.com/id/888263352/id/vektor/ikon-lingkaran-pengguna-anonim.jpg?s=1024x1024&w=is&k=20&c=T-F3InSQkFdDmqd3Qmc2dTyGQ57T7oWl5tonnM_Cw6w="
            nama="Nadia Putri"
            job="Mahasiswi"
            text="Layanan SkyFly cepat dan sangat mudah dipakai. Tiket pesawat bisa didapat cuma beberapa menit!"
          />

          <ReviewCard
            img="https://media.istockphoto.com/id/888263352/id/vektor/ikon-lingkaran-pengguna-anonim.jpg?s=1024x1024&w=is&k=20&c=T-F3InSQkFdDmqd3Qmc2dTyGQ57T7oWl5tonnM_Cw6w="
            nama="Rizky Ananda"
            job="Karyawan Swasta"
            text="Harga kompetitif dan banyak promo menarik. Sangat recommended ❤️"
          />

          <ReviewCard
            img="https://media.istockphoto.com/id/888263352/id/vektor/ikon-lingkaran-pengguna-anonim.jpg?s=1024x1024&w=is&k=20&c=T-F3InSQkFdDmqd3Qmc2dTyGQ57T7oWl5tonnM_Cw6w="
            nama="Andi Pratama"
            job="Freelancer"
            text="Navigasi mudah, tampilan modern, dan pembayaran sangat cepat. Mantap!"
          />

        </div>
      </section>


      {/* ===================== KENAPA PILIH SKYFLY ===================== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-10">
            Kenapa Pilih <span className="text-yellow-500">SkyFly Pro?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Keunggulan icon="⚡" title="Proses Pemesanan Super Cepat"
              desc="Hanya butuh beberapa klik untuk menemukan dan memesan tiket favoritmu." />

            <Keunggulan icon="💳" title="Banyak Metode Pembayaran"
              desc="Dari virtual account, e-wallet, hingga QRIS — semua tersedia." />

            <Keunggulan icon="🛫" title="Pilihan Maskapai Terlengkap"
              desc="Temukan perjalanan terbaik dari berbagai maskapai terpercaya." />

          </div>
        </div>
      </section>


      {/* ===================== SLIDER DESTINASI ===================== */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center text-blue-800 mb-10">
            Destinasi Populer <span className="text-yellow-500">2025</span>
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.2 },
            }}
            className="pb-10"
          >
            {[
              { id: 1, nama: "Bali", img: "https://bankraya.co.id/uploads/insights/jO3TRUmMuBAuyilKHgu9Ovjfs3nFoubWiSSjB3Pn.jpg" },
              { id: 2, nama: "Yogyakarta", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQpDAPMr4elF7U6zRXZ8gGXH68N-iYrMrNSV_zip7JZTwp0tGtwipfSpx2QFEVatUP4YXSSlQG-G2biCLSo2RCK1I4&s=19" },
              { id: 3, nama: "Labuan Bajo", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRdqn7dS0nuLbXVoMPhZYW9OFM_rB-tCg7OP_4olMVNBw1PZ1NYIQjyXdmWSciqGbX6psNisReVh-jnCNi9AgtSKPo&s=19" },
              { id: 4, nama: "Medan", img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQRGSZsQLysC0DVY1gJr84MIzB_rsh1WM1TIWRN8XUK6hz0LGvdFy4f8Dkd0XwEv36urmhf1A-sWyvc1t1cxSGfeHM&s=19" },
              { id: 5, nama: "Lombok", img: "https://www.gardaoto.com/wp-content/uploads/2024/05/18291-1536x1025.jpg" },
              { id: 6, nama: "Jakarta", img: "https://www.indonesia.travel/contentassets/9c0061b3382c40599f198963c7d31c64/dki-jakarta2.jpg" },
              { id: 7, nama: "Bandung", img: "https://asset.kompas.com/crops/WVHss716SKgEpadx5EaHT6DlRGU=/0x0:720x480/1200x800/data/photo/2021/08/23/612338d56e686.jpg" },
              { id: 8, nama: "Semarang", img: "https://images.tokopedia.net/img/KRMmCm/2022/6/21/b1b0b3c0-3a13-44b5-a9d6-ecd523f5c2d9.jpg" },
              { id: 9, nama: "Aceh", img: "https://www.indonesia.travel/contentassets/c881faef49bf467486bf6ef105b7e7f8/the-baiturrahman-grand-mosque-a-symbol-of-faith-and-resilience-in-banda-aceh.jpg" },
              { id: 10, nama: "Papua", img: "https://www.indonesia.travel/contentassets/5e8d870a83fc48888a41318324a35aa1/7-destinasi-wisata-di-pulau-papua-yang-indahnya-tiada-dua.jpg" },
            ].map((d) => (
              <SwiperSlide key={d.id}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img src={d.img} className="w-full h-52 object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-blue-900">{d.nama}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Temukan penerbangan terbaik ke {d.nama}.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

    </section>
  );
}


// ========================= COMPONENT KECIL ========================= //

function ReviewCard({ img, nama, job, text }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
      <div className="flex items-center gap-4 mb-3">
        <img src={img} className="w-12 h-12 rounded-full border" alt={nama} />
        <div>
          <h4 className="font-semibold">{nama}</h4>
          <p className="text-sm text-gray-500">{job}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-3">“{text}”</p>
      <div className="text-yellow-400 text-lg">★★★★★</div>
    </div>
  );
}

function Keunggulan({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-blue-50 shadow-sm hover:shadow-md transition">
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-blue-900">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}