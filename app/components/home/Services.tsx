import Link from "next/link";
import Image from "next/image";

const services = [
  {
    iconSrc: "/icons/doortodoor.png",
    title: "Door to Door Import",
    desc: "Layanan pengiriman langsung dari gudang pengirim ke tangan penerima tanpa repot urus logistik.",
    href: "/layanan/door-to-door",
    color: "#1a3c6e",
    bgSrc: "/images/services/doortodoor.png",
  },
  {
    iconSrc: "/icons/customclearance.png",
    title: "Custom Clearance",
    desc: "Pengurusan bea cukai secara profesional dan cepat untuk kelancaran proses impor barang Anda.",
    href: "/layanan/custom-clearance",
    color: "#1a6cde",
    bgSrc: "/images/services/customs.png",
  },
  {
    iconSrc: "/icons/air.png",
    title: "Air Freight Service",
    desc: "Pengiriman via udara untuk kebutuhan yang memerlukan kecepatan dan ketepatan waktu.",
    href: "/layanan/air-freight",
    color: "#0ea5e9",
    bgSrc: "/images/services/air.png",
  },
  {
    iconSrc: "/icons/sea.png",
    title: "Sea Freight",
    desc: "Pengiriman via laut dengan kapasitas besar dan biaya yang lebih efisien untuk kebutuhan volume tinggi.",
    href: "/layanan/sea-freight",
    color: "#0369a1",
    bgSrc: "/images/services/sea.png",
  },
  {
    iconSrc: "/icons/box.png",
    title: "Import Borongan",
    desc: "Solusi impor dengan harga terjangkau untuk pengiriman dalam jumlah besar sekaligus.",
    href: "/layanan/import-borongan",
    color: "#075985",
    bgSrc: "/images/services/borongan.jpg",
  },
];

export default function Services() {
  return (
    <section
      className="py-12"
      style={{ background: "var(--bg-light)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center mb-14">

          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Layanan Kami
          </span>

          <h2
            className="text-4xl font-black mt-2 mb-4"
            style={{ color: "var(--primary)" }}
          >
            Pilih Jenis Layanan
            <br />
            Sesuai Kebutuhan Anda
          </h2>

          <div className="section-divider mx-auto" />

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service) => (

            <Link
              key={service.title}
              href={service.href}
              className="relative overflow-hidden rounded-2xl group h-80"
            >

              {/* Background */}

              {service.bgSrc ? (

                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${service.bgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

              ) : (

                <div
                  className="absolute inset-0"
                  style={{
                    background: service.color,
                  }}
                />

              )}

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/45 transition-colors duration-300" />

              {/* Content */}

              <div className="relative z-10 h-full flex flex-col justify-between p-7">

                <div>

                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">

                    <Image
                      src={service.iconSrc}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">

                    {service.title}

                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed">

                    {service.desc}

                  </p>

                </div>

                <div className="flex items-center gap-2 text-white font-semibold">

                  Selengkapnya

                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>

                </div>

              </div>

            </Link>

          ))}

          {/* CTA */}

          <div
            className="rounded-2xl p-7 flex flex-col justify-between text-white"
            style={{ background: "var(--primary)" }}
          >
            <div>

              <div className="text-4xl mb-4">💬</div>

              <h3 className="font-bold text-xl mb-3">

                Butuh Layanan Khusus?

              </h3>

              <p className="text-blue-200 text-sm leading-relaxed">

                Konsultasikan kebutuhan pengiriman Anda dengan tim ahli kami
                secara gratis.

              </p>

            </div>

            <a
              href="https://api.whatsapp.com/send?phone=6281356563676"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 rounded-xl font-bold text-sm text-center transition-all hover:opacity-90"
              style={{ background: "var(--accent)" }}
            >
              Chat Sekarang
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}