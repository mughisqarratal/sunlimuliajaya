"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/* =========================================================
   WHY US CARDS
   Ganti imageSrc, title, dan description sesuai kebutuhan
========================================================= */

const benefits = [
  {
    imageSrc: "/images/whyus/free.jpg",
    title: "Konsultasi Gratis",
    description:
      "Dapatkan konsultasi gratis untuk membantu menemukan solusi import dan ekspor yang sesuai dengan kebutuhan Anda.",
  },
  {
    imageSrc: "/images/whyus/layananlengkap.jpg",
    title: "Layanan Lengkap",
    description:
      "Kami menyediakan berbagai layanan import dan ekspor untuk membantu kebutuhan bisnis Anda.",
  },
  {
    imageSrc: "/images/whyus/praktis.jpg",
    title: "Mudah dan Praktis",
    description:
      "Proses yang sederhana dan praktis sehingga Anda dapat menjalankan kebutuhan pengiriman dengan lebih nyaman.",
  },
  {
    imageSrc: "/images/whyus/transparan.jpg",
    title: "Transparan",
    description:
      "Informasi proses dan biaya disampaikan secara transparan sehingga Anda dapat mengetahui setiap tahapnya.",
  },
  {
    imageSrc: "/images/whyus/solusiizin.jpg",
    title: "Solusi Izin Import",
    description:
      "Membantu memberikan solusi terkait kebutuhan perizinan dalam proses import barang Anda.",
  },
  {
    imageSrc: "/images/whyus/izintambahan.jpg",
    title: "Izin Tambahan",
    description:
      "Membantu menangani kebutuhan izin tambahan yang diperlukan untuk mendukung proses import.",
  },
  {
    imageSrc: "/images/whyus/moubermaterai.jpg",
    title: "MOU Resmi",
    description:
      "Kerja sama yang lebih jelas dan terpercaya dengan dukungan dokumen serta proses yang resmi.",
  },
  {
    imageSrc: "/images/whyus/jaringanluas.jpg",
    title: "Jaringan Luas",
    description:
      "Didukung jaringan dan koneksi yang luas untuk membantu kebutuhan pengiriman dan logistik Anda.",
  },
];

/* =========================================================
   CAROUSEL SETTINGS
========================================================= */

// Lebar kartu utama
const CARD_WIDTH = 270;

// Tinggi kartu
const IMAGE_HEIGHT = 320;

// Jarak antar kartu
const GAP = 10;

// Kecepatan auto slide
const AUTO_PLAY = 3000;

// Jarak swipe minimum
const SWIPE_THRESHOLD = 40;

export default function WhyUs() {
  /* =======================================================
     STATE
  ======================================================= */

  const [index, setIndex] = useState(benefits.length);
  const [animated, setAnimated] = useState(true);

  /* =======================================================
     REFS
  ======================================================= */

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const isPaused = useRef(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  /* =======================================================
     CLONED DATA
  ======================================================= */

  const cloned = [...benefits, ...benefits, ...benefits];

  const offset = benefits.length;

  /* =======================================================
     SLIDE
  ======================================================= */

  const slideTo = useCallback((newIndex: number) => {
    setAnimated(true);
    setIndex(newIndex);
  }, []);

  const next = useCallback(() => {
    slideTo(index + 1);
  }, [index, slideTo]);

  const prev = useCallback(() => {
    slideTo(index - 1);
  }, [index, slideTo]);

  /* =======================================================
     INFINITE LOOP
  ======================================================= */

  const handleTransitionEnd = useCallback(() => {
    /*
      Kalau sudah masuk clone bagian akhir,
      lompat diam-diam kembali ke data asli.
    */

    if (index >= offset + benefits.length) {
      setAnimated(false);
      setIndex(offset);
      return;
    }

    /*
      Kalau bergerak ke clone bagian awal,
      lompat diam-diam ke data asli bagian akhir.
    */

    if (index < offset) {
      setAnimated(false);
      setIndex(offset + benefits.length - 1);
    }
  }, [index, offset]);

  /* =======================================================
     RE-ENABLE ANIMATION
  ======================================================= */

  useEffect(() => {
    if (!animated) {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, 30);

      return () => clearTimeout(timer);
    }
  }, [animated]);

  /* =======================================================
     AUTO PLAY
  ======================================================= */

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      if (!isPaused.current) {
        next();
      }
    }, AUTO_PLAY);
  }, [next]);

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  /* =======================================================
     TOUCH START
  ======================================================= */

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;

    isPaused.current = true;
  };

  /* =======================================================
     TOUCH MOVE
  ======================================================= */

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  /* =======================================================
     TOUCH END
  ======================================================= */

  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > SWIPE_THRESHOLD) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;

    isPaused.current = false;

    startTimer();
  };

  /* =======================================================
     CALCULATE POSITION
  ======================================================= */

  const translateX = `calc(
    50% - ${CARD_WIDTH / 2}px -
    ${index} * ${CARD_WIDTH + GAP}px
  )`;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-3xl mx-auto text-center mb-14 px-4 sm:px-6 lg:px-8">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{
              color: "var(--accent)",
            }}
          >
            Mengapa Kami
          </span>

          <h2
            className="text-4xl font-black mt-2 mb-4"
            style={{
              color: "var(--primary)",
            }}
          >
            Rasakan Keuntungan dari
            <br />
            Proses Pengiriman Lancar
          </h2>

          <div className="section-divider mx-auto mb-6" />

          <p className="text-gray-600 leading-relaxed">
            Stop berganti jasa Import & Ekspor. Kami hadir memberikan Solusi
            untuk Anda yang sudah bosan dikecewakan.
            <strong
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}
              PT. Sunli Mulia Jaya
            </strong>{" "}
            memberikan Service terbaik untuk meningkatkan keuntungan Anda.
          </p>
        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          className="
            relative
            w-full
            overflow-hidden
            touch-pan-y
            select-none
          "
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* =================================================
              LEFT GRADIENT
          ================================================= */}

          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-16
              sm:w-24
              lg:w-40
              z-20
              pointer-events-none
            "
            style={{
              background:
                "linear-gradient(to right, white 0%, rgba(255,255,255,0.75) 35%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* =================================================
              RIGHT GRADIENT
          ================================================= */}

          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-16
              sm:w-24
              lg:w-40
              z-20
              pointer-events-none
            "
            style={{
              background:
                "linear-gradient(to left, white 0%, rgba(255,255,255,0.75) 35%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* =================================================
              TRACK
          ================================================= */}

          <div
            className="flex items-center"
            style={{
              gap: `${GAP}px`,

              transform: `translateX(${translateX})`,

              /*
                Animasi hanya untuk perpindahan track.
              */

              transition: animated
                ? "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {cloned.map((item, i) => {
              /*
                Menentukan apakah card ini
                merupakan card yang sedang aktif.
              */

              const isActive = i === index;

              return (
                <div
                  key={`${item.title}-${i}`}
                  className="
                    shrink-0
                    relative
                  "
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${IMAGE_HEIGHT}px`,

                    /*
                      Card aktif dibuat lebih besar.
                    */

                    transform: isActive ? "scale(1)" : "scale(0.85)",

                    opacity: isActive ? 1 : 0.55,

                    zIndex: isActive ? 10 : 1,

                    /*
                      Animasi scale dan opacity.
                      Ketika animated=false saat reset infinite loop,
                      animasi card dimatikan sehingga tidak terjadi
                      efek zoom out -> zoom in.
                    */

                    transition: animated
                      ? "transform 0.5s ease, opacity 0.5s ease"
                      : "none",
                  }}
                >
                  {/* =================================================
                      CARD
                  ================================================= */}

                  <div
                    className="
                      relative
                      w-full
                      h-full
                      overflow-hidden
                      rounded
                      shadow
                      bg-cover
                      bg-center
                    "
                    style={{
                      backgroundImage: `url("${item.imageSrc}")`,
                    }}
                  >
                    {/* =================================================
                        DARK OVERLAY
                    ================================================= */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/45
                      "
                    />

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div
                      className="
                        relative
                        z-10
                        h-full
                        flex
                        flex-col
                        justify-end
                        p-6
                        text-white
                      "
                    >
                      <h3
                        className="
                          text-2xl
                          font-black
                          leading-tight
                          mb-3
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          text-sm
                          leading-relaxed
                          text-white/90
                        "
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* =================================================
                        PREVIEW OVERLAY
                    ================================================= */}

                    {!isActive && (
                      <div
                        className="
                          absolute
                          inset-0
                          bg-black/20
                          pointer-events-none
                        "
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
