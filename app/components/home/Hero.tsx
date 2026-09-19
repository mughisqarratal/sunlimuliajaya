"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/hero/pelabuhan1.jpg",
    alt: "International cargo shipping",
  },
  {
    src: "/images/hero/aircargo.jpg",
    alt: "Sea freight shipping",
  },
  {
    src: "/images/hero/pelabuhan2.jpg",
    alt: "Air freight shipping",
  },
  {
    src: "/images/hero/truck.jpg",
    alt: "Global logistics",
  },
  {
    src: "/images/hero/container.jpg",
    alt: "Global logistics",
  },
  {
    src: "/images/hero/kapal1.avif",
    alt: "Global logistics",
  },
];

const heroIcons = [
  {
    icon: "/icons/heroicons/experts.png",
    label: "Berpengalaman",
    desc: "Lebih dari beberapa tahun.",
  },
  {
    icon: "/icons/heroicons/countries.png",
    label: "Jaringan Luas",
    desc: "Melayani berbagai negara.",
  },
  {
    icon: "/icons/heroicons/relationship.png",
    label: "Terpercaya",
    desc: "Layanan jangka panjang.",
  },
  {
    icon: "/icons/heroicons/growth.png",
    label: "Harga Bersaing",
    desc: "Harga kompetitif di pasar.",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--primary-dark)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #e8a020 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1a6cde 0%, transparent 50%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(232,160,32,0.15)",
                color: "var(--accent)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--accent)" }}
              />
              PT. Andara Megah Logistik
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Smart Solution for{" "}
              <span style={{ color: "#FF6700" }}>International</span> Shipping
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
              Kami menyediakan layanan import-export yang cepat, aman, dan
              terpercaya untuk kebutuhan bisnis global Anda. Tim berpengalaman
              kami siap membantu dengan profesionalisme dan presisi.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/kontak"
                className="px-8 py-4 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 hover:scale-105 shadow-lg"
                style={{ background: "var(--accent)" }}
              >
                Konsultasi Gratis
              </Link>
            </div>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-3">
              {heroIcons.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {item.label}
                    </p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE CAROUSEL
          ========================== */}
          <div className="w-full">
            <div className="relative w-full max-w-xl mx-auto">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                {heroImages.map((image, index) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover transition-all duration-1000 ${
                      index === currentImage
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating label */}
                <div className="absolute left-5 bottom-5 right-5">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />

                    <span className="text-white text-xs font-semibold">
                      International Shipping
                    </span>
                  </div>
                </div>
              </div>

              {/* Carousel dots */}
              <div className="flex justify-center gap-2 mt-5">
                {heroImages.map((image, index) => (
                  <button
                    key={image.src}
                    onClick={() => setCurrentImage(index)}
                    aria-label={`Tampilkan gambar ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currentImage
                        ? "w-8"
                        : "w-2 bg-white/30 hover:bg-white/60"
                    }`}
                    style={
                      index === currentImage
                        ? { background: "var(--accent)" }
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L48 50C96 40 192 20 288 15C384 10 480 20 576 25C672 30 768 30 864 25C960 20 1056 10 1152 15C1248 20 1344 40 1392 50L1440 60V60H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
