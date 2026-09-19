"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Apa itu jasa import?",
    answer:
      "Jasa import adalah layanan yang membantu proses pemasukan barang dari luar negeri ke Indonesia, mulai dari pengurusan dokumen, freight, customs clearance, hingga pengiriman barang ke alamat tujuan.",
  },
  {
    question: "Negara mana saja yang bisa dilayani?",
    answer:
      "Kami melayani pengiriman dan import dari berbagai negara, termasuk China, Jepang, Korea, USA, Eropa, dan negara lainnya, baik melalui jalur laut maupun udara.",
  },
  {
    question: "Apa saja jenis layanan import yang tersedia?",
    answer: [
      "Import Door to Door",
      "Import Borongan",
      "Undername Import",
      "Customs Clearance",
      "Ocean Freight",
      "Air Freight",
      "Pengurusan perizinan import tertentu",
      "Trucking dan delivery ke alamat tujuan",
    ],
  },
  {
    question: "Apakah bisa import tanpa memiliki perusahaan importir sendiri?",
    answer:
      "Bisa. Untuk kebutuhan tertentu, kami dapat membantu melalui layanan Undername Import, sehingga proses import dapat dilakukan menggunakan legalitas perusahaan yang sesuai dengan ketentuan yang berlaku.",
  },
  {
    question: "Apa itu import borongan?",
    answer:
      "Import borongan merupakan layanan import dengan biaya yang dapat dihitung secara all-in sesuai dengan detail barang, rute, dan ketentuan shipment. Layanan ini cocok bagi customer yang ingin proses import lebih praktis tanpa harus mengurus setiap komponen biaya secara terpisah.",
  },
  {
    question: "Apakah tersedia layanan Door to Door?",
    answer:
      "Ya. Kami menyediakan layanan Import Door to Door, yaitu pengiriman dari lokasi supplier di negara asal hingga barang diterima di alamat tujuan di Indonesia.",
  },
  {
    question: "Dokumen apa saja yang diperlukan untuk proses import?",
    answer: [
      "Commercial Invoice",
      "Packing List",
      "Bill of Lading / Air Waybill",
      "Data importir",
      "Dokumen pendukung lainnya sesuai jenis dan karakteristik barang",
      "Untuk barang tertentu, dapat diperlukan izin atau dokumen tambahan sesuai regulasi yang berlaku.",
    ],
  },
  {
    question: "Apakah semua jenis barang bisa diimport?",
    answer:
      "Tidak semua barang dapat diimport secara bebas. Beberapa komoditas termasuk barang LARTAS (Larangan dan/atau Pembatasan) sehingga membutuhkan izin, rekomendasi, atau persyaratan tertentu.",
    extra:
      "Sebelum shipment dilakukan, kami menyarankan pengecekan HS Code dan regulasi barang terlebih dahulu untuk meminimalkan risiko kendala saat customs clearance.",
  },
  {
    question: "Bagaimana cara mengetahui biaya import?",
    answer: [
      "Jenis dan nilai barang",
      "HS Code",
      "Negara asal",
      "Berat dan volume",
      "Mode pengiriman (laut/udara)",
      "Incoterm",
      "Pelabuhan/bandara tujuan",
      "Kebutuhan customs clearance",
      "Pajak dan bea masuk",
      "Alamat pengiriman akhir",
    ],
    extra:
      "Customer cukup mengirimkan detail shipment kepada kami untuk mendapatkan estimasi atau quotation.",
  },
  {
    question: "Apakah bisa membantu pengecekan HS Code?",
    answer:
      "Bisa. Kami dapat membantu melakukan review awal klasifikasi HS Code berdasarkan informasi produk yang diberikan. Namun, penetapan HS Code final tetap harus mengacu pada ketentuan kepabeanan dan dokumen teknis barang yang berlaku.",
  },
  {
    question: "Apakah pajak dan bea masuk sudah termasuk dalam biaya import?",
    answer:
      "Tergantung jenis layanan dan quotation yang diberikan. Untuk layanan tertentu, biaya dapat dibuat dalam bentuk all-in, sedangkan layanan lainnya dapat dihitung secara terpisah seperti freight, customs clearance, duty, tax, trucking, dan handling.",
  },
  {
    question: "Berapa lama proses import sampai barang tiba di Indonesia?",
    answer:
      "Durasi tergantung negara asal, moda transportasi, jadwal kapal/pesawat, proses customs clearance, serta karakteristik barang. Pengiriman udara umumnya lebih cepat dibandingkan pengiriman laut.",
    extra:
      "Estimasi waktu akan kami informasikan berdasarkan detail shipment dan rute yang dipilih.",
  },
  {
    question:
      "Apakah bisa melakukan import dari supplier yang belum pernah bekerja sama dengan kami?",
    answer:
      "Bisa. Kami dapat membantu proses pengiriman dari supplier yang Anda gunakan, termasuk koordinasi pickup dan pengaturan pengiriman sesuai kebutuhan.",
  },
  {
    question: "Bagaimana jika supplier saya berada di China/USA/Jepang?",
    answer:
      "Tidak masalah. Kami dapat membantu pengaturan shipment dari lokasi supplier di negara asal hingga barang dikirim ke Indonesia, sesuai layanan dan rute yang tersedia.",
  },
  {
    question: "Apakah barang bisa dijemput dari gudang supplier?",
    answer:
      "Bisa. Untuk layanan tertentu, kami dapat membantu pengaturan pickup dari lokasi supplier hingga proses pengiriman internasional.",
  },
  {
    question: "Apakah barang dapat dikirim sampai ke gudang atau alamat saya?",
    answer:
      "Bisa. Kami menyediakan layanan pengiriman hingga alamat tujuan, tergantung cakupan layanan yang dipilih dan lokasi delivery.",
  },
  {
    question: "Bagaimana jika barang saya terkena LARTAS?",
    answer:
      "Jika barang termasuk LARTAS, diperlukan pengecekan persyaratan dan izin yang berlaku sebelum shipment dilakukan. Kami akan membantu memberikan informasi mengenai dokumen atau perizinan yang perlu dipersiapkan.",
    extra:
      "Jika persyaratan wajib tidak terpenuhi, proses customs clearance tidak dapat dijamin dan dapat menimbulkan biaya maupun risiko tambahan.",
  },
  {
    question: "Apakah bisa membantu customs clearance saja?",
    answer:
      "Bisa. Jika barang Anda sudah tiba di Indonesia dan membutuhkan bantuan proses kepabeanan, kami dapat memberikan layanan Customs Clearance sesuai detail shipment.",
  },
  {
    question: "Apakah bisa mendapatkan quotation terlebih dahulu?",
    answer: [
      "Nama/deskripsi barang",
      "Jumlah",
      "Berat",
      "Dimensi/volume",
      "Nilai barang",
      "Negara dan kota asal",
      "Alamat tujuan",
      "HS Code jika sudah tersedia",
      "Foto barang jika diperlukan",
    ],
    extra:
      "Tim kami akan melakukan pengecekan dan memberikan quotation sesuai kebutuhan shipment.",
  },
  {
    question: "Bagaimana cara mulai menggunakan jasa import?",
    answer:
      "Sangat mudah. Anda cukup mengirimkan detail barang dan kebutuhan import kepada kami. Tim kami akan membantu melakukan pengecekan shipment, memberikan opsi layanan dan quotation, kemudian proses dapat dilanjutkan setelah customer menyetujui penawaran.",
  },
];

export default function FAQ() {
  // HP: tampilkan 10 FAQ terlebih dahulu
  // Desktop: langsung tampilkan semua 20 FAQ
  const [showAll, setShowAll] = useState(false);

  // FAQ yang sedang terbuka
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =========================
            HEADER
        ========================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            FAQ
          </span>

          <h2 className="text-4xl font-black mt-2 mb-3" style={{ color: "var(--primary)" }}>
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            Temukan jawaban atas pertanyaan umum mengenai jasa import,
            pengiriman internasional, customs clearance, dan layanan logistik
            PT. Andara Megah Logistik.
          </p>
        </div>

        {/* =========================
            FAQ DESKTOP
            2 KOLOM
        ========================== */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-5">
          {/* Kolom kiri: FAQ 1-10 */}
          <div className="space-y-4">
            {faqData.slice(0, 10).map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                toggleFAQ={toggleFAQ}
              />
            ))}
          </div>

          {/* Kolom kanan: FAQ 11-20 */}
          <div className="space-y-4">
            {faqData.slice(10, 20).map((faq, index) => {
              const actualIndex = index + 10;

              return (
                <FAQItem
                  key={actualIndex}
                  faq={faq}
                  index={actualIndex}
                  openIndex={openIndex}
                  toggleFAQ={toggleFAQ}
                />
              );
            })}
          </div>
        </div>

        {/* =========================
            FAQ MOBILE
            AWALNYA HANYA 10
        ========================== */}
        <div className="lg:hidden space-y-4">
          {faqData.slice(0, showAll ? faqData.length : 10).map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              toggleFAQ={toggleFAQ}
            />
          ))}
        </div>

        {/* =========================
            GRADASI + BUTTON
            HANYA MOBILE
        ========================== */}
        {!showAll && (
          <div className="lg:hidden relative mt-0">
            {/* Gradasi di bagian bawah FAQ */}
            <div className="absolute left-0 right-0 bottom-14 h-24 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none" />

            <div className="relative pt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "var(--primary)",
                }}
              >
                Lihat Selengkapnya
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* =========================
            CTA BAWAH
        ========================== */}
        <div className="mt-14 md:mt-16 text-center">
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Masih memiliki pertanyaan mengenai kebutuhan import Anda?
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=6281356563676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: "var(--accent)",
            }}
          >
            Konsultasi Sekarang
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   COMPONENT FAQ ITEM
===================================================== */

function FAQItem({
  faq,
  index,
  openIndex,
  toggleFAQ,
}: {
  faq: {
    question: string;
    answer: string | string[];
    extra?: string;
  };
  index: number;
  openIndex: number | null;
  toggleFAQ: (index: number) => void;
}) {
  const isOpen = openIndex === index;

  return (
    <div
      className={`group rounded-2xl border overflow-hidden transition-all duration-300 ${
        isOpen
          ? "shadow-lg border-gray-200"
          : "border-gray-100 hover:border-gray-200 hover:shadow-md"
      }`}
    >
      {/* =========================
          QUESTION
      ========================== */}
      <button
        type="button"
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 cursor-pointer bg-white"
      >
        <div className="flex items-start gap-3">
          {/* Nomor FAQ */}
          <span
            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              isOpen
                ? "text-white"
                : "text-gray-600 bg-gray-100 group-hover:text-white"
            }`}
            style={isOpen ? { background: "var(--primary)" } : undefined}
          >
            {index + 1}
          </span>

          <span
            className={`text-sm md:text-base font-bold leading-relaxed transition-colors duration-300 ${
              isOpen ? "" : "text-gray-800"
            }`}
            style={isOpen ? { color: "var(--primary)" } : undefined}
          >
            {faq.question}
          </span>
        </div>

        {/* Icon plus / minus */}
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "text-white rotate-0" : "bg-gray-100 text-gray-500"
          }`}
          style={isOpen ? { background: "var(--primary)" } : undefined}
        >
          {isOpen ? (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v14m-7-7h14"
              />
            </svg>
          )}
        </span>
      </button>

      {/* =========================
          ANSWER
      ========================== */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-0 ml-11 mr-2">
            <div className="h-px bg-gray-100 mb-4" />

            {/* Answer berupa paragraf */}
            {typeof faq.answer === "string" ? (
              <p className="text-sm text-gray-600 leading-7">{faq.answer}</p>
            ) : (
              /* Answer berupa list */
              <ul className="space-y-2">
                {faq.answer.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 text-sm text-gray-600 leading-6"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--primary)" }}
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Extra paragraph */}
            {faq.extra && (
              <p className="mt-4 text-sm text-gray-600 leading-7">
                {faq.extra}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
