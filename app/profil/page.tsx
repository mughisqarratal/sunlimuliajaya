import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profil Perusahaan - PT. Sunli Mulia Jaya",
  description:
    "PT. Sunli Mulia Jaya - Mitra terpercaya layanan import export internasional Anda.",
};

const companyStats = [
  {
    imageSrc: "/icons/profile/company.png", 
    label: "Kantor",
    value: "Jakarta Pusat",
  },
  {
    imageSrc: "/icons/profile/calendar2.png",
    label: "Tahun Pengalaman",
    value: "15+",
  },
  {
    imageSrc: "/icons/profile/global.png",
    label: "Jangkauan",
    value: "Worldwide",
  },
  {
    imageSrc: "/icons/profile/qualification.png",
    icon: null,
    label: "Tim",
    value: "Profesional",
  },
];

// Data Tim
const team = [
  {
    name: "Tim Import",
    role: "Dept Import",
    imageSrc: "/icons/profile/team1.png", 
    emoji: null,
    desc: "Berpengalaman di bidang logistik dan kepabeanan internasional.",
  },
  {
    name: "Tim Operasional",
    role: "Manager Operasional",
    imageSrc: "/icons/profile/team1.png",
    emoji: null,
    desc: "Mengelola dan memastikan kelancaran setiap proses pengiriman.",
  },
  {
    name: "Tim Custom",
    role: "Custom Clearance Specialist",
    imageSrc: "/icons/profile/team1.png",
    emoji: null,
    desc: "Ahli dalam pengurusan dokumen kepabeanan dan perizinan impor.",
  },
  {
    name: "Tim Customer Service",
    role: "CS & Relasi Klien",
    imageSrc: "/icons/profile/cs.png",
    emoji: null,
    desc: "Siap membantu klien 24 jam dalam bahasa Indonesia.",
  },
];


const values = [
  {
    imageSrc: "/icons/profile/qualification.png",
    title: "Profesionalisme",
    desc: "Kami menjalankan setiap layanan dengan standar profesional tertinggi.",
  },
  {
    imageSrc: "/icons/profile/transparency2.png",
    title: "Transparansi",
    desc: "Semua biaya dan proses disampaikan secara terbuka kepada klien.",
  },
  {
    imageSrc: "/icons/profile/trade.png",
    icon: null,
    title: "Kepercayaan",
    desc: "Membangun hubungan jangka panjang berbasis kepercayaan.",
  },
  {
    imageSrc: "/icons/profile/innovation2.png",
    title: "Inovasi",
    desc: "Terus berinovasi untuk memberikan solusi logistik terbaik.",
  },
];

const vision = [
  {
    imageSrc: "/icons/profile/vision2.png",
    icon: null,
    title: "Visi",
    desc: "Menjadi mitra logistik terdepan di Indonesia dengan memberikan layanan yang unggul dan inovatif.",
  },
  {
    imageSrc: "/icons/profile/mission2.png",
    icon: null,
    title: "Misi",
    desc: "Meningkatkan kualitas layanan logistik untuk mendukung pertumbuhan bisnis klien kami secara berkelanjutan.",
  },
];

export default function ProfilPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{ background: "var(--primary-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Tentang Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Profil Perusahaan
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            PT. Sunli Mulia Jaya — Mitra terpercaya Anda dalam layanan
            import export internasional
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                Siapa Kami
              </span>
              <h2
                className="text-3xl font-black mt-2 mb-6"
                style={{ color: "var(--primary)" }}
              >
                PT. Sunli Mulia Jaya
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  PT. Sunli Mulia Jaya adalah perusahaan yang bergerak di
                  bidang jasa freight forwarding dan custom clearance dengan
                  fokus pada pelayanan impor dan ekspor barang internasional.
                </p>
                <p>
                  Kami berkomitmen memberikan solusi logistik yang cepat, aman,
                  dan transparan untuk mendukung pertumbuhan bisnis klien kami
                  di seluruh Indonesia.
                </p>
                <p>
                  Dengan tim yang berpengalaman dan jaringan mitra global yang
                  luas, kami mampu menangani berbagai jenis komoditas dari
                  berbagai negara dengan efisien dan profesional.
                </p>
                <p>
                  Kantor kami berlokasi di Jakarta Pusat, dan kami melayani
                  klien dari seluruh penjuru Indonesia dengan komitmen penuh
                  terhadap kepuasan pelanggan.
                </p>
              </div>
            </div>

            {/* Sub-grid Info Perusahaan */}
            <div className="grid grid-cols-2 gap-4">
              {companyStats.map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl text-center border-2 border-gray-100"
                >
                  <div className="mb-3 flex items-center justify-center min-h-12">
                    {item.imageSrc ? (
                      <Image
                        src={item.imageSrc}
                        unoptimized
                        alt={item.label}
                        width={48}
                        height={48}
                        className="mx-auto object-contain"
                      />
                    ) : (
                      <span className="text-4xl">{item.icon}</span>
                    )}
                  </div>
                  <p
                    className="font-black text-xl"
                    style={{ color: "var(--primary)" }}
                  >
                    {item.value}
                  </p>
                  <p className="text-gray-500 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-20" style={{ background: "var(--bg-light)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ background: "rgba(26,60,110,0.08)" }}
              >
                {vision[0].imageSrc ? (
                  <Image
                    src={vision[0].imageSrc}
                    unoptimized
                    alt={vision[0].title}
                    width={52}
                    height={52}
                    className="mx-auto object-contain"
                  />
                ) : (
                  <span className="text-4xl">{vision[0].icon}</span>
                )}
              </div>
              <h3
                className="text-2xl font-black mb-4"
                style={{ color: "var(--primary)" }}
              >
                Visi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi perusahaan logistik internasional terpercaya yang
                memberikan solusi pengiriman terbaik dengan standar pelayanan
                kelas dunia untuk mendukung pertumbuhan ekonomi Indonesia.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ background: "rgba(26,60,110,0.08)" }}
              >
                {vision[1].imageSrc ? (
                  <Image
                    src={vision[1].imageSrc}
                    unoptimized
                    alt={vision[1].title}
                    width={48}
                    height={48}
                    className="mx-auto object-contain"
                  />
                ) : (
                  <span className="text-4xl">{vision[1].icon}</span>
                )}
              </div>
              <h3
                className="text-2xl font-black mb-4"
                style={{ color: "var(--primary)" }}
              >
                Misi
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Memberikan layanan logistik yang cepat, aman, dan transparan",
                  "Membangun kepercayaan klien melalui konsistensi dan profesionalisme",
                  "Mengembangkan jaringan mitra global yang kuat dan terpercaya",
                  "Terus berinovasi dalam solusi logistik untuk klien kami",
                ].map((m) => (
                  <li key={m} className="flex gap-2">
                    <span style={{ color: "var(--accent)" }}>✓</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-black"
              style={{ color: "var(--primary)" }}
            >
              Nilai-Nilai Kami
            </h2>
            <div className="section-divider mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center p-6 rounded-2xl border-2 border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="mb-4 flex items-center justify-center min-h-12.5">
                  {v.imageSrc ? (
                    <Image
                      src={v.imageSrc}
                      unoptimized
                      alt={v.title}
                      width={50}
                      height={50}
                      className="mx-auto object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{v.icon}</span>
                  )}
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--primary)" }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20" style={{ background: "var(--bg-light)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-black"
              style={{ color: "var(--primary)" }}
            >
              Tim Kami
            </h2>
            <div className="section-divider mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden"
                  style={{ background: "rgba(26,60,110,0.08)" }}
                >
                  {t.imageSrc ? (
                    <Image
                      src={t.imageSrc}
                      unoptimized
                      alt={t.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-4xl">{t.emoji}</span>
                  )}
                </div>
                <h3 className="font-bold" style={{ color: "var(--primary)" }}>
                  {t.name}
                </h3>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: "var(--accent)" }}
                >
                  {t.role}
                </p>
                <p className="text-gray-500 text-xs">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
