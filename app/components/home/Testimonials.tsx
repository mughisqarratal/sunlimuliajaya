"use client";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner - PT Maju Bersama",
    rating: 5,
    text: "Andara Cargo sangat membantu bisnis import saya. Prosesnya cepat, transparan, dan tim mereka sangat responsif. Highly recommended!",
    avatar: "BS",
    color: "#1a3c6e",
  },
  {
    name: "Siti Rahma",
    role: "Procurement Manager",
    rating: 5,
    text: "Sudah 2 tahun menggunakan jasa Andara Cargo. Tidak pernah ada masalah, selalu on time dan harganya kompetitif. Tim custom clearance-nya profesional.",
    avatar: "SR",
    color: "#e8a020",
  },
  {
    name: "David Gunawan",
    role: "Importir Elektronik",
    rating: 5,
    text: "Proses impor elektronik yang biasanya rumit jadi sangat mudah dengan Andara. Pengurusan BPOM dan izin lainnya beres semua tanpa perlu repot.",
    avatar: "DG",
    color: "#0ea5e9",
  },
  {
    name: "Rina Wijaya",
    role: "Owner - Fashion Brand",
    rating: 5,
    text: "Impor pakaian dan tekstil jadi lebih mudah. Tim Andara Cargo sangat memahami regulasi dan selalu memberikan solusi terbaik.",
    avatar: "RW",
    color: "#7c3aed",
  },
  {
    name: "Ahmad Fauzi",
    role: "Direktur - CV Konstruksi",
    rating: 5,
    text: "Layanan impor besi baja dari Andara Cargo sangat memuaskan. Dokumen lengkap, harga bersaing, dan pengiriman tepat waktu.",
    avatar: "AF",
    color: "#059669",
  },
  {
    name: "Linda Halim",
    role: "Manager Operasional",
    rating: 5,
    text: "Pertama kali import langsung dipandu dari awal. Tim Andara sangat sabar menjelaskan proses dan biaya. Sekarang sudah rutin pakai jasa mereka.",
    avatar: "LH",
    color: "#dc2626",
  },
];

// Clone first & last items for seamless infinite loop
// Layout: [clone of last N] [...originals] [clone of first N]
const DESKTOP_SHOW = 3;
const MOBILE_SHOW = 1;

function buildClonedList(visibleCount: number) {
  const cloneHead = testimonials.slice(-visibleCount); // clones at start
  const cloneTail = testimonials.slice(0, visibleCount);  // clones at end
  return [...cloneHead, ...testimonials, ...cloneTail];
}

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(DESKTOP_SHOW);
  const total = testimonials.length;
  const cloned = buildClonedList(visibleCount);

  // Real index starts after the cloned head
  const offset = visibleCount;
  const [index, setIndex] = useState(offset); // start at first real slide
  const [animated, setAnimated] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  // Responsive
  useEffect(() => {
    const update = () => {
      const count = window.innerWidth < 768 ? MOBILE_SHOW : DESKTOP_SHOW;
      setVisibleCount(count);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // When visibleCount changes, rebuild and reset to first real slide
  useEffect(() => {
    setAnimated(false);
    setIndex(visibleCount);
  }, [visibleCount]);

  // Jump without animation when hitting clone boundaries
  const handleTransitionEnd = useCallback(() => {
    const lastReal = offset + total - 1;
    // Jumped past the end clone → jump back to first real
    if (index >= offset + total) {
      setAnimated(false);
      setIndex(offset);
    }
    // Jumped before the start clone → jump back to last real
    if (index < offset) {
      setAnimated(false);
      setIndex(offset + total - 1);
    }
  }, [index, offset, total]);

  // Re-enable animation after silent jump
  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 50);
      return () => clearTimeout(t);
    }
  }, [animated]);

  const slideTo = useCallback((i: number) => {
    setAnimated(true);
    setIndex(i);
  }, []);

  const next = useCallback(() => slideTo(index + 1), [index, slideTo]);
  const prev = useCallback(() => slideTo(index - 1), [index, slideTo]);

  // Auto-play
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused.current) next();
    }, 3500);
  }, [next]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  // Dot index (which real slide is active)
  const realIndex = ((index - offset) % total + total) % total;

  const translateX = `translateX(calc(-${index} * (100% / ${visibleCount})))`;

  return (
    <section
      className="py-12 bg-white overflow-hidden"
      onMouseEnter={() => { isPaused.current = false; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Testimoni
          </span>
          <h2 className="text-4xl font-black mt-2 mb-3" style={{ color: "var(--primary)" }}>
            Apa Kata Klien Kami
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Track */}
          <div className="overflow-hidden mx-6">
            <div
              ref={trackRef}
              className="flex"
              style={{
                transform: translateX,
                transition: animated
                  ? "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {cloned.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="shrink-0 px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <span key={si} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 italic flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                        style={{ background: t.color }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-sm" style={{ color: "var(--primary)" }}>
                          {t.name}
                        </p>
                        <p className="text-gray-400 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={() => { prev(); startTimer(); }}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center shadow-lg border border-gray-100 transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{ background: "var(--primary)" }}
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={() => { next(); startTimer(); }}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center shadow-lg border border-gray-100 transition-all duration-200 hover:scale-110 cursor-pointer"
            style={{ background: "var(--primary)" }}
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { slideTo(offset + i); startTimer(); }}
              aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: realIndex === i ? "28px" : "8px",
                height: "8px",
                background: realIndex === i ? "var(--primary)" : "#d1d5db",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}