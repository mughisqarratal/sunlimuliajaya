import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontak - PT. Sunli Mulia Jaya",
  description:
    "Hubungi PT. Sunli Mulia Jaya untuk konsultasi layanan import export.",
};

/* =========================================================
   CONTACT INFORMATION
   Ganti imageSrc sesuai nama file icon kamu
========================================================= */

const contactInfo = [
  {
    imageSrc: "/icons/contact/map.png",
    title: "Alamat Kantor",
    content:
      "Komplek Redtop, Jl. Pecenongan Raya No.72 Level 1 Unit D7, RT.2/RW.4, Kb. Klp., Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10120",
    href: "https://maps.app.goo.gl/f88eqayVSU9xqNKd8",
  },
  {
    imageSrc: "/icons/contact/telepon.png",
    title: "WhatsApp",
    content: "+62 822 4004 1229",
    href: "https://api.whatsapp.com/send?phone=6282240041229",
  },
  {
    imageSrc: "/icons/contact/email.png",
    title: "Email",
    content: "zainal.ptkbt@gmail.com",
    href: "mailto:zainal.ptkbt@gmail.com",
  },
  {
    imageSrc: "/icons/contact/jam.png",
    title: "Jam Operasional",
    content:
      "Senin - Sabtu: 08:00 - 17:00 WIB\nMinggu & Hari Libur: Available via WhatsApp",
  },
];

/* =========================================================
   SOCIAL MEDIA
========================================================= */

const socialMedia = [
  {
    imageSrc: "/icons/contact/linkedin.png",
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zainal-arifin-34ba20276?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    // background: "linear-gradient(135deg, #0077B5, #005983)",
  },
  {
    imageSrc: "/icons/contact/instagram.png",
    name: "Instagram",
    href: "https://www.instagram.com/pt_kharisma029?stkn=MXJldmw3eWZ6MW0zMw%3D%3D&utm_source=qr",
    // background:
    //   "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  {
    imageSrc: "/icons/contact/facebook.png",
    name: "Facebook",
    href: "https://www.facebook.com/share/14qE8TTQ3Xn/?mibextid=wwXIfr",
    // background: "linear-gradient(135deg, #1877F2, #1877F2)",
  },
];

export default function KontakPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="pt-32 pb-20"
        style={{
          background: "var(--primary-dark)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{
              color: "var(--accent)",
            }}
          >
            Hubungi Kami
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Kontak
          </h1>

          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Siap membantu Anda 24/7. Konsultasi gratis tanpa biaya!
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <div>
              <h2
                className="text-2xl font-black mb-8"
                style={{
                  color: "var(--primary)",
                }}
              >
                Informasi Kontak
              </h2>

              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const cardContent = (
                    <>
                      {/* ICON CUSTOM */}

                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                        style={{
                          background: "rgba(26,60,110,0.08)",
                        }}
                      >
                        <Image
                          src={info.imageSrc}
                          unoptimized
                          alt={info.title}
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain"
                        />
                      </div>

                      {/* TEXT */}

                      <div>
                        <p
                          className="font-bold text-sm mb-1"
                          style={{
                            color: "var(--primary)",
                          }}
                        >
                          {info.title}
                        </p>

                        <p className="text-gray-600 text-sm whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </>
                  );

                  /* =================================================
                     JIKA ADA HREF
                     Card menjadi clickable
                  ================================================= */

                  if (info.href) {
                    return (
                      <a
                        key={info.title}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          gap-4
                          p-5
                          rounded-2xl
                          border
                          border-gray-100
                          hover:shadow-md
                          hover:border-gray-200
                          cursor-pointer
                          transition-all
                        "
                      >
                        {cardContent}
                      </a>
                    );
                  }

                  /* =================================================
                     CARD BIASA
                  ================================================= */

                  return (
                    <div
                      key={info.title}
                      className="
                        flex
                        gap-4
                        p-5
                        rounded-2xl
                        border
                        border-gray-100
                        hover:shadow-md
                        transition-all
                      "
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>

              {/* =================================================
                  SOCIAL MEDIA
              ================================================= */}

              <div className="mt-8">
                <h3
                  className="font-bold text-sm mb-4"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  Ikuti Kami
                </h3>

                <div className="flex gap-3">
                  {socialMedia.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-3
                        py-2.5
                        border
                        rounded-xl
                        border-gray-200
                        hover:shadow-lg
                        text-sm
                        font-semibold
                        text-[#0a66c2]
                        transition-all
                        hover:opacity-100
                        hover:scale-100
                        cursor-pointer
                      "
                      // style={{
                      //   background: social.background,
                      // }}
                    >
                      <Image
                        src={social.imageSrc}
                        unoptimized
                        alt={social.name}
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />

                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <div>
              <h2
                className="text-2xl font-black mb-8"
                style={{
                  color: "var(--primary)",
                }}
              >
                Kirim Pesan
              </h2>

              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <div className="space-y-5">
                  {/* NAMA + WHATSAPP */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{
                          color: "var(--primary)",
                        }}
                      >
                        Nama Lengkap
                      </label>

                      <input
                        type="text"
                        placeholder="John Doe"
                        className="
                          w-full
                          px-4
                          py-3
                          rounded-xl
                          border-2
                          border-gray-200
                          focus:border-blue-400
                          outline-none
                          text-sm
                          transition-colors
                        "
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{
                          color: "var(--primary)",
                        }}
                      >
                        Nomor WhatsApp
                      </label>

                      <input
                        type="tel"
                        placeholder="+62 812 xxxx xxxx"
                        className="
                          w-full
                          px-4
                          py-3
                          rounded-xl
                          border-2
                          border-gray-200
                          focus:border-blue-400
                          outline-none
                          text-sm
                          transition-colors
                        "
                      />
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{
                        color: "var(--primary)",
                      }}
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="email@contoh.com"
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border-2
                        border-gray-200
                        focus:border-blue-400
                        outline-none
                        text-sm
                        transition-colors
                      "
                    />
                  </div>

                  {/* LAYANAN */}

                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{
                        color: "var(--primary)",
                      }}
                    >
                      Layanan yang Dibutuhkan
                    </label>

                    <select
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border-2
                        border-gray-200
                        focus:border-blue-400
                        outline-none
                        text-sm
                        transition-colors
                        text-gray-700
                      "
                    >
                      <option value="">-- Pilih Layanan --</option>
                      <option>Door to Door Import</option>
                      <option>Custom Clearance</option>
                      <option>Air Freight Service</option>
                      <option>Sea Freight</option>
                      <option>Import Borongan</option>
                      <option>Lainnya</option>
                    </select>
                  </div>

                  {/* PESAN */}

                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{
                        color: "var(--primary)",
                      }}
                    >
                      Pesan
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Ceritakan kebutuhan import/export Anda..."
                      className="
                        w-full
                        px-4
                        py-3
                        rounded-xl
                        border-2
                        border-gray-200
                        focus:border-blue-400
                        outline-none
                        text-sm
                        transition-colors
                        resize-none
                      "
                    />
                  </div>

                  {/* WHATSAPP BUTTON */}

                  <a
                    href="https://api.whatsapp.com/send?phone=6282240041229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-full
                      block
                      text-center
                      py-4
                      rounded-xl
                      font-bold
                      text-white
                      text-sm
                      transition-all
                      hover:opacity-90
                      hover:scale-[1.01]
                      cursor-pointer
                    "
                    style={{
                      background: "var(--primary)",
                    }}
                  >
                    Kirim via WhatsApp
                  </a>

                  <p className="text-center text-gray-400 text-xs">
                    Pesan akan diarahkan ke WhatsApp kami
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
