"use client";

import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Pemeriksaan Dokumen",
    description:
      "Tim kami melakukan pemeriksaan terhadap dokumen dan informasi yang diperlukan untuk proses customs clearance. Pemeriksaan dilakukan untuk memastikan data pengiriman telah dipersiapkan dengan baik sebelum proses kepabeanan dimulai.",
  },
  {
    number: 2,
    title: "Verifikasi Data Barang",
    description:
      "Informasi mengenai jenis barang, jumlah, nilai barang, negara asal, serta data pengiriman diperiksa dan disesuaikan dengan dokumen yang tersedia untuk memastikan data barang sesuai.",
  },
  {
    number: 3,
    title: "Pengajuan Dokumen Kepabeanan",
    description:
      "Dokumen dan informasi yang diperlukan kemudian diproses untuk pengajuan kepabeanan sesuai dengan ketentuan dan prosedur yang berlaku.",
  },
  {
    number: 4,
    title: "Perhitungan Bea & Pajak",
    description:
      "Bea masuk, pajak, dan biaya kepabeanan lainnya dihitung berdasarkan klasifikasi serta nilai barang dan ketentuan yang berlaku.",
  },
  {
    number: 5,
    title: "Pemeriksaan Bea Cukai",
    description:
      "Apabila diperlukan, barang dapat melalui proses pemeriksaan oleh pihak Bea dan Cukai. Tim kami membantu koordinasi selama proses pemeriksaan berlangsung.",
  },
  {
    number: 6,
    title: "Customs Clearance",
    description:
      "Setelah seluruh persyaratan dan proses kepabeanan terpenuhi, proses customs clearance diselesaikan sehingga barang dapat memperoleh persetujuan untuk melanjutkan ke tahap berikutnya.",
  },
  {
    number: 7,
    title: "Barang Siap Dikirim",
    description:
      "Setelah proses kepabeanan selesai, barang siap diproses untuk pengiriman dari pelabuhan atau bandara menuju lokasi tujuan customer.",
  },
];

export default function CustomClearanceFlow() {
  const [visibleSteps, setVisibleSteps] = useState(1);

  const showNextStep = (stepNumber: number) => {
    if (stepNumber === visibleSteps && visibleSteps < steps.length) {
      setVisibleSteps((prev) => prev + 1);
    }
  };

  return (
    <div className="mt-10">
      <div className="relative">
        {steps.map((step, index) => {
          const isVisible = index < visibleSteps;
          const isActive = step.number === visibleSteps;
          const isCompleted = step.number < visibleSteps;
          const canClick = isActive && visibleSteps < steps.length;

          return (
            <div
              key={step.number}
              className={`
                relative overflow-hidden
                transition-all duration-500 ease-in-out
                ${
                  isVisible
                    ? "max-h-[500px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-3"
                }
              `}
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    absolute
                    left-[24px]
                    top-[56px]
                    w-[3px]
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      isCompleted
                        ? "bg-[var(--accent)]"
                        : "bg-gray-200"
                    }
                  `}
                  style={{
                    height: isVisible
                      ? "calc(100% - 8px)"
                      : "0",
                  }}
                />
              )}

              <div className="relative flex gap-5">
                {/* Number */}
                <button
                  type="button"
                  onClick={() => showNextStep(step.number)}
                  disabled={!canClick}
                  aria-label={
                    canClick
                      ? `Lihat tahap ${step.number + 1}`
                      : `Tahap ${step.number}`
                  }
                  className={`
                    relative
                    z-10
                    shrink-0
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-black
                    text-lg
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      canClick
                        ? "cursor-pointer hover:scale-110 hover:shadow-lg"
                        : "cursor-default"
                    }
                  `}
                  style={{
                    background:
                      isCompleted || step.number === steps.length
                        ? "var(--accent)"
                        : "var(--primary)",
                    color: "white",
                  }}
                >
                  {step.number}
                </button>

                {/* Content */}
                <div className="pb-10 flex-1">
                  {/* Judul selalu biru */}
                  <h3
                    className="text-xl md:text-2xl font-black mb-2"
                    style={{
                      color: "var(--primary)",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Deskripsi */}
                  <p className="text-gray-600 leading-relaxed max-w-3xl">
                    {step.description}
                  </p>

                  {/* Click indicator */}
                  {canClick && (
                    <button
                      type="button"
                      onClick={() => showNextStep(step.number)}
                      className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:gap-3
                      "
                      style={{
                        color: "var(--accent)",
                      }}
                    >
                      <span>
                        Klik untuk melihat tahap berikutnya
                      </span>

                      <span className="text-lg animate-bounce">
                        ↓
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Completion */}
      <div
        className={`
          mt-2
          p-5
          rounded-2xl
          text-center
          transition-all
          duration-500
          ease-in-out
          ${
            visibleSteps === steps.length
              ? "opacity-100 translate-y-0 max-h-32"
              : "opacity-0 translate-y-3 max-h-0 overflow-hidden p-0 mt-0"
          }
        `}
        style={{
          background: "rgba(232,160,32,0.08)",
        }}
      >
        <p
          className="font-bold"
          style={{
            color: "var(--primary)",
          }}
        >
          <span style={{ color: "var(--accent)" }}>✓</span>{" "}
          Proses customs clearance selesai dan barang siap diproses
          untuk pengiriman ke lokasi tujuan.
        </p>
      </div>
    </div>
  );
}