import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ImportBoronganFlow from "../../components/services/ImportBoronganFlow";

export const metadata: Metadata = {
  title: "Import Borongan | PT. Andara Megah Logistik",
  description:
    "Layanan Import Borongan PT. Andara Megah Logistik untuk solusi impor praktis dari negara asal hingga alamat tujuan.",
};

const HERO_DESKTOP_IMAGE = "/images/services/borongan.jpg";
const HERO_MOBILE_IMAGE = "/images/services/borongan.jpg";

export default function ImportBoronganPage() {
  const services = [
    "Konsultasi & penawaran",
    "Pickup barang dari supplier",
    "Pengiriman internasional",
    "Dokumentasi impor",
    "Customs clearance",
    "Handling barang",
    "Transportasi domestik",
    "Pengantaran hingga alamat tujuan",
  ];

  const benefits = [
    {
      title: "Praktis",
      description:
        "Customer tidak perlu menangani seluruh proses impor secara mandiri karena proses dikoordinasikan dari awal hingga tujuan.",
    },
    {
      title: "Lebih Efisien",
      description:
        "Proses pengiriman dan logistik dikoordinasikan secara terintegrasi sehingga lebih mudah dan efisien.",
    },
    {
      title: "Terpercaya",
      description:
        "Tim membantu menangani berbagai tahapan impor secara terarah, mulai dari negara asal hingga barang tiba di tujuan.",
    },
  ];

  return (
    <>
      {/* HERO */}
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
                  object-bottom-center
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
              Import Borongan
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
              Solusi praktis untuk kebutuhan impor dari pengambilan barang di
              negara asal hingga pengantaran ke lokasi tujuan.
            </p>
          </div>
        </div>
      </section>

      {/* TENTANG LAYANAN */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Tentang Layanan
            </span>

            <h2
              className="text-3xl md:text-4xl font-black mt-3 mb-6"
              style={{ color: "var(--primary)" }}
            >
              Solusi Import Borongan dari Awal hingga Tujuan
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Import Borongan merupakan solusi praktis bagi customer yang ingin
              melakukan proses impor tanpa harus menangani seluruh proses
              logistik secara mandiri. PT. Andara Megah Logistik membantu
              menangani proses mulai dari pengambilan barang di negara asal,
              pengiriman internasional, proses kepabeanan, hingga pengantaran
              barang ke lokasi tujuan.
            </p>
          </div>
        </div>
      </section>

      {/* LAYANAN KAMI */}
      <section className="py-20 bg-(--bg-light)">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Layanan Kami
            </span>

            <h2
              className="text-3xl md:text-4xl font-black mt-3 mb-5"
              style={{ color: "var(--primary)" }}
            >
              Apa Saja yang Kami Tangani?
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Dari proses awal hingga barang diterima, kami membantu
              mengoordinasikan berbagai kebutuhan import borongan agar proses
              pengiriman menjadi lebih praktis dan terarah.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-5 flex items-start gap-3 shadow-sm"
              >
                <span
                  className="font-black text-lg shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  ✓
                </span>

                <span className="font-semibold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALUR PROSES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-10">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Alur Import
            </span>

            <h2
              className="text-3xl md:text-4xl font-black mt-3 mb-5"
              style={{ color: "var(--primary)" }}
            >
              Bagaimana Proses Import Borongan?
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Kami membantu mengoordinasikan proses impor secara bertahap, mulai
              dari pengambilan barang di negara asal hingga barang diterima di
              lokasi tujuan.
            </p>
          </div>

          <ImportBoronganFlow />
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="py-20 bg-(--bg-light)">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Keunggulan
            </span>

            <h2
              className="text-3xl md:text-4xl font-black mt-3"
              style={{ color: "var(--primary)" }}
            >
              Mengapa Memilih Import Borongan?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-7 shadow-sm"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 font-black text-xl"
                  style={{
                    background: "rgba(232,160,32,0.12)",
                    color: "var(--accent)",
                  }}
                >
                  ✓
                </div>

                <h3
                  className="text-xl font-black mb-3"
                  style={{ color: "var(--primary)" }}
                >
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--primary-dark)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
            Ingin Impor Lebih Praktis?
          </h2>

          <p className="text-blue-200 text-lg leading-relaxed mb-8">
            Konsultasikan kebutuhan Import Borongan Anda bersama PT. Andara
            Megah Logistik.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              className="px-6 py-3 rounded-xl font-bold text-sm text-white border border-white/30 transition-all hover:bg-white/10"
            >
              Kontak Lainnya
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
