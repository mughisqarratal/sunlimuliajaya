"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Image from "next/image";

/* =========================================================
   WHY US IMAGES
   Ganti imageSrc sesuai gambar yang kamu upload
========================================================= */

const benefits = [
  {
    imageSrc: "/images/whyus/konsul.png",
    alt: "Konsultasi Gratis",
  },
  {
    imageSrc: "/images/whyus/layanan.png",
    alt: "Layanan Lengkap",
  },
  {
    imageSrc: "/images/whyus/mudah.png",
    alt: "Mudah dan Praktis",
  },
  {
    imageSrc: "/images/whyus/transparan.png",
    alt: "Transparan",
  },
  {
    imageSrc: "/images/whyus/solusi.png",
    alt: "Solusi Izin Import",
  },
  {
    imageSrc: "/images/whyus/izin.png",
    alt: "Izin Tambahan",
  },
  {
    imageSrc: "/images/whyus/mou.png",
    alt: "MOU Resmi",
  },
  {
    imageSrc: "/images/whyus/jaringan.png",
    alt: "Jaringan Luas",
  },
];

/* =========================================================
   CAROUSEL SETTINGS
========================================================= */

// Lebar kartu utama
// Bisa Anda ubah sesuai kebutuhan
const CARD_WIDTH = 270;

// Tinggi gambar
const IMAGE_HEIGHT = 320;

// Jarak antar gambar
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

  const timerRef =
    useRef<ReturnType<typeof setInterval> | null>(null);

  const isPaused = useRef(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  /* =======================================================
     CLONED DATA
  ======================================================= */

  const cloned = [
    ...benefits,
    ...benefits,
    ...benefits,
  ];

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
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const diff =
        touchStartX.current - touchEndX.current;

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

  /*
    Setiap slide mempunyai:

    CARD_WIDTH + GAP

    Kemudian track digeser berdasarkan index.

    Karena container dibuat center,
    gambar aktif akan berada di tengah.
  */

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
            Stop berganti jasa Import & Ekspor.
            Kami hadir memberikan Solusi untuk Anda
            yang sudah bosan dikecewakan.

            <strong
              style={{
                color: "var(--primary)",
              }}
            >
              {" "}
              PT. Andara Megah Logistik
            </strong>{" "}
            memberikan Service terbaik untuk
            meningkatkan keuntungan Anda.
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

          {/* LEFT GRADIENT */}

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

          {/* RIGHT GRADIENT */}

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

          {/* TRACK */}

          <div
            className="flex items-center"
            style={{
              gap: `${GAP}px`,

              transform: `translateX(${translateX})`,

              transition: animated
                ? "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >

            {cloned.map((item, i) => {

              /*
                Menentukan apakah gambar ini
                merupakan gambar yang sedang aktif.
              */

              const isActive = i === index;

              return (
                <div
                  key={`${item.alt}-${i}`}
                  className="
                    shrink-0
                    relative
                    transition-all
                    duration-500
                  "
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${IMAGE_HEIGHT}px`,

                    /*
                      Gambar aktif dibuat lebih besar.
                    */

                    transform: isActive
                      ? "scale(1)"
                      : "scale(0.85)",

                    opacity: isActive
                      ? 1
                      : 0.55,

                    zIndex: isActive ? 10 : 1,
                  }}
                >

                  {/* IMAGE */}

                  <div
                    className="
                      relative
                      w-full
                      h-full
                      overflow-hidden
                      rounded
                      shadow
                    "
                  >

                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      fill
                      sizes="
                        (max-width: 640px) 82vw,
                        (max-width: 1024px) 60vw,
                        420px
                      "
                      className={`
                        object-contain
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "brightness-100"
                            : "brightness-[0.65]"
                        }
                      `}
                    />

                    {/* OVERLAY UNTUK PREVIEW */}

                    {!isActive && (
                      <div
                        className="
                          absolute
                          inset-0
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