import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import AirFreightFlow from "../../components/services/AirFreightFlow";

export const metadata: Metadata = {
  title: "Air Freight Service - Andara Cargo",
  description:
    "Layanan pengiriman barang melalui jalur udara untuk kebutuhan yang memerlukan kecepatan dan ketepatan waktu.",
};

const benefits = [
  {
    title: "Pengiriman Lebih Cepat",
    description:
      "Jalur udara menjadi pilihan tepat untuk pengiriman yang membutuhkan waktu lebih singkat dibandingkan pengiriman melalui laut.",
  },
  {
    title: "Tepat Waktu",
    description:
      "Cocok untuk kebutuhan pengiriman dengan deadline tertentu, barang urgent, maupun kebutuhan bisnis yang membutuhkan lead time lebih pendek.",
  },
  {
    title: "Penanganan Profesional",
    description:
      "Setiap proses pengiriman dikoordinasikan oleh tim berpengalaman mulai dari pickup hingga barang tiba di tujuan.",
  },
];

const HERO_DESKTOP_IMAGE = "/images/services/air.png";
const HERO_MOBILE_IMAGE = "/images/services/air.png";

const suitableFor = [
  "Barang urgent",
  "Barang dengan deadline tertentu",
  "Sampel produk",
  "Spare part",
  "Barang bernilai tinggi",
  "Pengiriman volume relatif kecil",
  "Kebutuhan bisnis dengan lead time pendek",
  "Pengiriman internasional yang membutuhkan kecepatan",
];

export default function Page() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section
        className="
                relative
                h-95
                sm:h-105
                md:h-130
                flex
                items-center
                justify-center
                overflow-hidden
              "
      >
        {/* ========================= BACKGROUND DESKTOP ========================== */}
        <Image
          src={HERO_DESKTOP_IMAGE}
          alt="Door to Door Import"
          fill
          priority
          sizes="100vw"
          className="
                  hidden
                  md:block
                  object-cover
                  object-top-left
                "
        />

        {/* ========================= BACKGROUND MOBILE ========================== */}
        <Image
          src={HERO_MOBILE_IMAGE}
          alt="Door to Door Import"
          fill
          priority
          sizes="100vw"
          className="
                  block
                  md:hidden
                  object-cover
                  object-center
                "
        />

        {/* ========================= DARK OVERLAY ========================== */}
        <div className="absolute inset-0 bg-black/45" />

        {/* ========================= GRADIENT OVERLAY ========================== */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        {/* ========================= HERO CONTENT ========================== */}
        <div className="relative z-10 w-full">
          <div
            className="
                    max-w-4xl
                    mx-auto
                    px-5
                    sm:px-8
                    lg:px-12
                    text-center
                  "
          >
            <h1
              className="
                      text-3xl
                      sm:text-4xl
                      md:text-5xl
                      lg:text-6xl
                      font-black
                      text-white
                      mb-4
                      drop-shadow-lg
                      pt-22
                    "
            >
              Air Freight Service
            </h1>

            <p
              className="
                      text-white/90
                      text-sm
                      sm:text-base
                      md:text-lg
                      max-w-2xl
                      mx-auto
                      leading-relaxed
                      drop-shadow-md
                    "
            >
              Solusi pengiriman barang melalui jalur udara untuk kebutuhan yang
              memerlukan kecepatan, ketepatan waktu, dan penanganan pengiriman
              yang terkoordinasi.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div
            className="p-7 md:p-10 rounded-3xl"
            style={{ background: "var(--bg-light)" }}
          >
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Tentang Layanan
            </span>

            <h2
              className="text-2xl md:text-3xl font-black mt-2 mb-5"
              style={{ color: "var(--primary)" }}
            >
              Pengiriman Cepat melalui Jalur Udara
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong>Air Freight Service</strong> merupakan solusi pengiriman
                barang melalui jalur udara untuk kebutuhan yang memerlukan waktu
                pengiriman lebih cepat dibandingkan pengiriman melalui jalur
                laut.
              </p>

              <p>
                PT. Andara Megah Logistik membantu mengelola proses pengiriman
                mulai dari{" "}
                <strong>
                  pickup barang di negara asal, pengurusan dokumen, cargo
                  handling, pengiriman melalui udara, customs clearance, hingga
                  pengantaran ke alamat tujuan
                </strong>
                .
              </p>

              <p>
                Layanan ini cocok untuk barang yang membutuhkan waktu pengiriman
                lebih singkat, pengiriman urgent, maupun barang dengan nilai
                tinggi dan kebutuhan lead time yang lebih pendek.
              </p>

              <p>
                Kami menyesuaikan solusi pengiriman berdasarkan jenis barang,
                berat, dimensi, negara asal, tujuan, serta kebutuhan waktu
                pengiriman Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FLOW
      ========================== */}
      <section className="py-20" style={{ background: "var(--bg-light)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Proses Pengiriman
            </span>

            <h2
              className="text-3xl md:text-4xl font-black mt-2"
              style={{ color: "var(--primary)" }}
            >
              Alur Air Freight Service
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
              Kami membantu mengelola setiap tahapan pengiriman udara mulai dari
              konsultasi hingga barang diterima di alamat tujuan.
            </p>
          </div>

          <AirFreightFlow />
        </div>
      </section>

      {/* =========================
          SUITABLE FOR
      ========================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Cocok Untuk
            </span>

            <h2
              className="text-3xl md:text-4xl font-black mt-2"
              style={{ color: "var(--primary)" }}
            >
              Kapan Menggunakan Air Freight?
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
              Pengiriman melalui udara menjadi pilihan yang tepat ketika
              kecepatan dan waktu menjadi faktor penting dalam proses logistik.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {suitableFor.map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl border-2 border-gray-100 hover:shadow-lg transition-all"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold"
                  style={{
                    background: "rgba(232,160,32,0.12)",
                    color: "var(--accent)",
                  }}
                >
                  ✓
                </div>

                <p className="font-bold" style={{ color: "var(--primary)" }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          BENEFITS
      ========================== */}
      <section className="py-20" style={{ background: "var(--bg-light)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Keunggulan
            </span>

            <h2
              className="text-3xl md:text-4xl font-black mt-2"
              style={{ color: "var(--primary)" }}
            >
              Mengapa Memilih Air Freight Kami?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
              >
                <div
                  className="text-3xl mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  ★
                </div>

                <h3
                  className="font-black text-xl mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  {benefit.title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div
            className="rounded-3xl p-8 md:p-12 text-center text-white"
            style={{ background: "var(--primary)" }}
          >
            <h3 className="text-2xl md:text-3xl font-black mb-3">
              Butuh Pengiriman Air Freight?
            </h3>

            <p className="text-blue-200 mb-7 max-w-xl mx-auto">
              Konsultasikan kebutuhan pengiriman Anda dengan tim PT. Andara
              Megah Logistik dan dapatkan solusi pengiriman udara yang sesuai.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=6281356563676"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90"
                style={{ background: "var(--accent)" }}
              >
                WhatsApp Sekarang
              </a>

              <Link
                href="/kontak"
                className="px-6 py-3 rounded-xl font-bold text-sm border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                Kontak Lainnya
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
