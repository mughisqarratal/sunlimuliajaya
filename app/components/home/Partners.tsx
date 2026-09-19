"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Image from "next/image";

/* =========================================================
   PARTNERS
========================================================= */

const partners = [
  {
    name: "IATA",
    imageSrc: "/images/partners/iata.png",
  },
  {
    name: "KMTC",
    imageSrc: "/images/partners/kmtc.png",
  },
  {
    name: "Maersk",
    imageSrc: "/images/partners/maersk.png",
  },
  {
    name: "OOCL",
    imageSrc: "/images/partners/oocl.png",
  },
  {
    name: "Meratus",
    imageSrc: "/images/partners/meratus.png",
  },
  {
    name: "Hapag-Lloyd",
    imageSrc: "/images/partners/hapag.png",
  },
  {
    name: "Samudera Indonesia",
    imageSrc: "/images/partners/samudera.png",
  },
  {
    name: "CMA CGM",
    imageSrc: "/images/partners/cmacgm.png",
  },
  {
    name: "Ocean Network Express",
    imageSrc: "/images/partners/one.png",
  },
  {
    name: "Cosco Shipping",
    imageSrc: "/images/partners/cosco.png",
  },
];

/* =========================================================
   LOGO SIZE
   Ubah angka ini untuk mengatur ukuran SEMUA logo
========================================================= */

const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 100;

/* =========================================================
   CAROUSEL
========================================================= */

// Clone for seamless infinite scroll
const cloned = [
  ...partners,
  ...partners,
  ...partners,
];

const SHOW = 4;

/* =========================================================
   COMPONENT
========================================================= */

export default function Partners() {
  const offset = partners.length;

  const [index, setIndex] = useState(offset);
  const [animated, setAnimated] = useState(true);

  const timerRef =
    useRef<ReturnType<typeof setInterval> | null>(null);

  const isPaused = useRef(false);

  /* =======================================================
     TOUCH
  ======================================================= */

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  /* =======================================================
     SLIDE
  ======================================================= */

  const slideTo = useCallback((i: number) => {
    setAnimated(true);
    setIndex(i);
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
    // Jika sudah melewati clone terakhir
    if (index >= offset + partners.length) {
      setAnimated(false);
      setIndex(offset);
    }

    // Jika bergerak ke arah kiri melewati clone pertama
    if (index < offset) {
      setAnimated(false);
      setIndex(
        offset + partners.length - 1
      );
    }
  }, [index, offset]);

  /* =======================================================
     RE-ENABLE ANIMATION
  ======================================================= */

  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => {
        setAnimated(true);
      }, 50);

      return () => clearTimeout(t);
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
    }, 2500);
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
     TOUCH HANDLERS
  ======================================================= */

  const onTouchStart = (
    e: React.TouchEvent
  ) => {
    touchStartX.current =
      e.touches[0].clientX;

    isPaused.current = true;
  };

  const onTouchMove = (
    e: React.TouchEvent
  ) => {
    touchEndX.current =
      e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null
    ) {
      const diff =
        touchStartX.current -
        touchEndX.current;

      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }

        startTimer();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;

    isPaused.current = false;
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      className="py-15"
      style={{
        background: "var(--bg-light)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="text-center mb-10">

          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{
              color: "var(--accent)",
            }}
          >
            Mitra Kami
          </span>

          <h2
            className="text-3xl font-black mt-2"
            style={{
              color: "var(--primary)",
            }}
          >
            Didukung Partner Terpercaya
          </h2>

        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

          <div
            className="flex items-center"
            style={{
              transform: `translateX(calc(-${index} * (100% / ${SHOW})))`,

              transition: animated
                ? "transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94)"
                : "none",
            }}

            onTransitionEnd={
              handleTransitionEnd
            }
          >

            {cloned.map(
              (partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="
                    shrink-0
                    flex
                    justify-center
                    items-center
                    px-2
                  "
                  style={{
                    width: `${100 / SHOW}%`,
                    height: "80px",
                  }}
                >

                  {/* =================================================
                      LOGO CONTAINER
                  ================================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      width: `${LOGO_WIDTH}px`,
                      height: `${LOGO_HEIGHT}px`,
                    }}
                  >

                    <Image
                      src={partner.imageSrc}
                      alt={partner.name}
                      width={LOGO_WIDTH}
                      height={LOGO_HEIGHT}
                      className="
                        object-contain
                        w-full
                        h-full
                        transition-transform
                        duration-300
                        hover:scale-105
                      "
                    />

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </div>
    </section>
  );
}