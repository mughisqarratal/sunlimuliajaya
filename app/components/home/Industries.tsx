"use client";
import { useState } from "react";
import Image from "next/image";
import "../industries.css";

const industries = [
  {
    id: "besi",
    iconSrc: "/icons/industries/steel.png",
    iconEmoji: null,
    title: "Besi Baja",
    short: "Import untuk Industri & Konstruksi",
    desc: "PT Andara Megah Logistik dapat membantu dalam proses impor besi dan baja dengan mengurus PI Besi Baja dan menyelesaikan proses impor lainnya. Dengan demikian, kami dapat membantu pelanggan dalam mengimpor besi dan baja dengan lebih mudah dan efisien.",
    bgSrc: "/images/besibaja.jpg",
    backColor: "#FF6700",
  },
  {
    id: "elektronik",
    iconSrc: "/icons/industries/devices.png",
    iconEmoji: null,
    title: "Elektronik",
    short: "Smartphone, Laptop, TV & Peralatan Elektronik",
    desc: "PT. Andara Megah Logistik melayani impor produk elektronik seperti smartphone, laptop, tablet, televisi, serta perangkat elektronik lainnya untuk kebutuhan bisnis maupun distribusi.",
    bgSrc: "/images/elektronik.jpg",
    backColor: "#FF6700",
  },
  {
    id: "otomotif",
    iconSrc: "/icons/industries/brake.png",
    iconEmoji: null,
    title: "Otomotif",
    short: "Mobil, Motor & Suku Cadang",
    desc: "Kami melayani kebutuhan impor kendaraan bermotor seperti mobil, motor, serta suku cadang dari berbagai merek dan negara asal, termasuk pengurusan PPnBM dan sertifikasi kendaraan.",
    bgSrc: "/images/otomotif.jpg",
    backColor: "#FF6700",
  },
  {
    id: "pakaian",
    iconSrc: "/icons/industries/shirt.png",
    iconEmoji: null,
    title: "Pakaian & Tekstil",
    short: "Pakaian, Sepatu, Tas & Bahan Tekstil",
    desc: "PT. Andara Megah Logistik mendukung industri fashion dan manufaktur dengan layanan impor pakaian jadi, sepatu, tas, hingga bahan tekstil sesuai regulasi Indonesia.",
    bgSrc: "/images/pakaian.jpg",
    backColor: "#FF6700",
  },
  {
    id: "makanan",
    iconSrc: "/icons/industries/food.png",
    iconEmoji: null,
    title: "Makanan & Minuman",
    short: "Produk Pangan Import",
    desc: "Kami memiliki pengalaman menangani impor berbagai produk makanan dan minuman, mencakup pengurusan sertifikasi BPOM, SPPB, serta proses karantina dan izin lainnya.",
    bgSrc: "/images/makanan.jpg",
    backColor: "#FF6700",
  },
  {
    id: "mesin",
    iconSrc: "/icons/industries/lathe.png",
    iconEmoji: null,
    title: "Mesin & Peralatan",
    short: "Mesin Industri & Peralatan Konstruksi",
    desc: "Kami menyediakan solusi impor untuk mesin industri, peralatan produksi, alat berat, dan peralatan teknis lainnya, termasuk pengiriman langsung ke lokasi proyek.",
    bgSrc: "/images/mesin.jpg",
    backColor: "#FF6700",
  },
  {
    id: "furnitur",
    iconSrc: "/icons/industries/furniture.png",
    iconEmoji: null,
    title: "Furnitur & Dekorasi",
    short: "Furnitur, Dekorasi Rumah & Perlengkapan",
    desc: "Layanan ini meliputi impor furnitur rumah tangga, dekorasi interior, hingga perlengkapan hotel & kantor dari berbagai negara dengan penanganan ekstra hati-hati.",
    bgSrc: "/images/furniture.jpg",
    backColor: "#FF6700",
  },
  {
    id: "bahan-baku",
    iconSrc: "/icons/industries/raw-material.png",
    iconEmoji: null,
    title: "Bahan Baku",
    short: "Bahan Kimia, Logam & Plastik",
    desc: "PT. Andara Megah Logistik melayani impor berbagai bahan baku industri, seperti bahan kimia, logam, plastik, karet, dan tekstil industri dengan dokumentasi MSDS lengkap.",
    bgSrc: "/images/bahanbaku.jpg",
    backColor: "#FF6700",
  },
];

type Industry = (typeof industries)[number];

function FlipCard({ item }: { item: Industry }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card relative h-64 cursor-pointer select-none"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        {/* FRONT */}

        <div className="flip-face flip-front flex flex-col items-center justify-center p-5 text-center">
          {item.bgSrc ? (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${item.bgSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(35%)",
              }}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${item.backColor}bb 0%, ${item.backColor} 100%)`,
              }}
            />
          )}

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-sm shadow-inner">
              {item.iconSrc ? (
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={52}
                  height={52}
                />
              ) : (
                <span className="text-3xl">{item.iconEmoji}</span>
              )}
            </div>

            <h3 className="text-white font-black text-base">{item.title}</h3>

            <p className="text-white/75 text-xs leading-relaxed max-w-45">
              {item.short}
            </p>
          </div>

          <div className="absolute bottom-3 right-3 z-10 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        </div>

        {/* BACK */}

        <div
          className="flip-face flip-back flex flex-col justify-center items-center text-center p-6"
          style={{
            background: item.backColor,
          }}
        >
          <div
            className="absolute w-28 h-28 rounded-full bg-white/10"
            style={{
              top: 0,
              right: 0,
              transform: "translate(35%,-35%)",
            }}
          />

          <div
            className="absolute w-20 h-20 rounded-full bg-white/10"
            style={{
              bottom: 0,
              left: 0,
              transform: "translate(-35%,35%)",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-white font-black text-sm mb-3">{item.title}</h3>

            <p className="text-white/85 text-xs leading-relaxed">{item.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section className="py-12" style={{ background: "var(--bg-light)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Industri
          </span>
          <h2
            className="text-4xl font-black mt-2 mb-3"
            style={{ color: "var(--primary)" }}
          >
            Apapun Industri Anda
          </h2>
          <p className="text-gray-600">
            Kami adalah mitra pengiriman barang global Anda
          </p>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Flip-card grid: 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
