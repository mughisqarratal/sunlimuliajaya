"use client";

import { useState } from "react";

const steps = [
  {
    number: 1,
    title: "Konsultasi & Booking",
    description:
      "Customer memberikan informasi mengenai jenis barang, berat, dimensi, negara asal, dan tujuan pengiriman. Tim kami kemudian membantu menentukan solusi pengiriman udara yang sesuai serta proses booking.",
  },
  {
    number: 2,
    title: "Pickup Barang",
    description:
      "Barang diambil dari supplier atau lokasi yang telah ditentukan di negara asal untuk kemudian diproses dan dipersiapkan menuju tahap pengiriman udara.",
  },
  {
    number: 3,
    title: "Dokumentasi & Persiapan Pengiriman",
    description:
      "Tim memastikan informasi dan dokumen yang diperlukan untuk pengiriman telah dipersiapkan dengan baik sebelum barang diproses untuk keberangkatan.",
  },
  {
    number: 4,
    title: "Cargo Handling",
    description:
      "Barang diproses melalui tahapan cargo handling dan dipersiapkan sesuai prosedur pengiriman udara sebelum diserahkan kepada pihak maskapai atau cargo carrier.",
  },
  {
    number: 5,
    title: "Air Freight",
    description:
      "Barang dikirim melalui jalur udara menuju bandara tujuan. Moda ini dipilih untuk kebutuhan pengiriman yang memerlukan waktu lebih cepat dan ketepatan jadwal.",
  },
  {
    number: 6,
    title: "Customs Clearance",
    description:
      "Setelah barang tiba di Indonesia, kami membantu proses customs clearance dan pengurusan dokumen kepabeanan yang diperlukan agar barang dapat diproses sesuai ketentuan yang berlaku.",
  },
  {
    number: 7,
    title: "Delivery ke Customer",
    description:
      "Setelah proses kepabeanan selesai, barang dikirim dari bandara menuju alamat tujuan dan diserahkan kepada customer.",
  },
];

export default function AirFreightFlow() {
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
                    ? "max-h-125 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-3"
                }
              `}
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    absolute
                    left-6
                    top-14
                    w-0.75
                    transition-all
                    duration-500
                    ease-in-out
                    ${
                      isCompleted
                        ? "bg-(--accent)"
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
          Proses pengiriman selesai dan barang siap diterima oleh
          customer.
        </p>
      </div>
    </div>
  );
}