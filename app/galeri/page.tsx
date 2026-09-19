"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

/*
  =========================================================
  DATA GALERI
  =========================================================

  Cukup tambahkan gambar baru di sini.

  Contoh:
  {
    id: 7,
    imageSrc: "/images/galeri/foto7.jpg",
    alt: "Dokumentasi Andara Cargo",
  },
*/

const gallery = [
  {
    id: 1,
    imageSrc: "/images/galery/1.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 2,
    imageSrc: "/images/galery/2.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 3,
    imageSrc: "/images/galery/3.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 4,
    imageSrc: "/images/galery/4.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 5,
    imageSrc: "/images/galery/5.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 6,
    imageSrc: "/images/galery/6.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 7,
    imageSrc: "/images/galery/7.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 8,
    imageSrc: "/images/galery/8.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 9,
    imageSrc: "/images/galery/9.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 10,
    imageSrc: "/images/galery/10.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 11,
    imageSrc: "/images/galery/11.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 12,
    imageSrc: "/images/galery/12.png",
    alt: "Dokumentasi Andara Cargo",
  },
   {
    id: 13,
    imageSrc: "/images/galery/13.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 14,
    imageSrc: "/images/galery/14.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 15,
    imageSrc: "/images/galery/15.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 16,
    imageSrc: "/images/galery/16.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 17,
    imageSrc: "/images/galery/17.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 18,
    imageSrc: "/images/galery/18.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 19,
    imageSrc: "/images/galery/19.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 20,
    imageSrc: "/images/galery/20.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 21,
    imageSrc: "/images/galery/21.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 22,
    imageSrc: "/images/galery/22.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 23,
    imageSrc: "/images/galery/23.png",
    alt: "Dokumentasi Andara Cargo",
  },
  {
    id: 24,
    imageSrc: "/images/galery/24.png",
    alt: "Dokumentasi Andara Cargo",
  },
];

/*
  Jumlah gambar yang ditampilkan pertama kali.
*/
const INITIAL_VISIBLE = 6;

export default function GaleriPage() {
  /*
    =======================================================
    STATE
    =======================================================
  */

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_VISIBLE);

  /*
    index gambar yang sedang dibuka di modal.
    null = modal tidak dibuka.
  */
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  /*
    Touch/swipe
  */
  const [touchStartX, setTouchStartX] =
    useState<number | null>(null);

  /*
    =======================================================
    DATA YANG DITAMPILKAN
    =======================================================
  */

  const visibleGallery = gallery.slice(
    0,
    visibleCount
  );

  /*
    =======================================================
    OPEN IMAGE
    =======================================================
  */

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  /*
    =======================================================
    CLOSE MODAL
    =======================================================
  */

  const closeModal = () => {
    setSelectedIndex(null);
  };

  /*
    =======================================================
    NEXT IMAGE
    =======================================================
  */

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % gallery.length
    );
  };

  /*
    =======================================================
    PREVIOUS IMAGE
    =======================================================
  */

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + gallery.length) %
        gallery.length
    );
  };

  /*
    =======================================================
    KEYBOARD
    =======================================================
  */

  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        closeModal();
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedIndex]);

  /*
    =======================================================
    TOUCH START
    =======================================================
  */

  const handleTouchStart = (
    e: React.TouchEvent
  ) => {
    setTouchStartX(
      e.touches[0].clientX
    );
  };

  /*
    =======================================================
    TOUCH END
    =======================================================
  */

  const handleTouchEnd = (
    e: React.TouchEvent
  ) => {
    if (touchStartX === null) return;

    const touchEndX =
      e.changedTouches[0].clientX;

    const diff =
      touchStartX - touchEndX;

    /*
      Swipe minimal 50px
    */
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage();
      } else {
        previousImage();
      }
    }

    setTouchStartX(null);
  };

  /*
    =======================================================
    RENDER
    =======================================================
  */

  return (
    <>
      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="pt-32 pb-20"
        style={{
          background:
            "var(--primary-dark)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{
              color: "var(--accent)",
            }}
          >
            Dokumentasi
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Galeri
          </h1>

          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Dokumentasi kegiatan dan layanan
            PT. Andara Megah Logistik
          </p>

        </div>
      </section>

      {/* =================================================
          GALLERY CONTENT
      ================================================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* =================================================
              GALLERY GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-4
              sm:gap-5
            "
          >

            {visibleGallery.map(
              (item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    openImage(index)
                  }
                  className="
                    group
                    relative
                    aspect-square
                    overflow-hidden
                    rounded-2xl
                    bg-gray-100
                    cursor-pointer
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                  "
                  style={{
                    // Menggunakan warna accent
                    // sebagai focus ring
                    // tanpa mengubah tampilan normal
                  }}
                  aria-label={`Lihat ${item.alt}`}
                >

                  <Image
                    src={item.imageSrc}
                    alt={item.alt}
                    fill
                    sizes="
                      (max-width: 640px) 50vw,
                      (max-width: 1024px) 33vw,
                      33vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/0
                      group-hover:bg-black/25
                      transition-all
                      duration-300
                    "
                  />

                  {/* Icon Zoom */}

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                    "
                  >
                    <div
                      className="
                        w-12
                        h-12
                        rounded-full
                        bg-white/90
                        flex
                        items-center
                        justify-center
                        shadow-lg
                      "
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                        />
                      </svg>
                    </div>
                  </div>

                </button>
              )
            )}

          </div>

          {/* =================================================
              LIHAT GAMBAR LAINNYA
          ================================================= */}

          {visibleCount < gallery.length && (
            <div className="flex justify-center mt-10">

              <button
                type="button"
                onClick={() =>
                  setVisibleCount(
                    gallery.length
                  )
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  font-bold
                  text-sm
                  transition-all
                  hover:gap-3
                "
                style={{
                  color: "var(--primary)",
                }}
              >
                Lihat Gambar Lainnya

                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

            </div>
          )}

          {/* =================================================
              CTA
          ================================================= */}

          <div className="mt-14 text-center">

            <p className="text-gray-600 mb-4">
              Ingin tahu lebih banyak tentang
              layanan kami?
            </p>

            <a
              href="/kontak"
              className="
                inline-block
                px-8
                py-3
                rounded-xl
                font-bold
                text-sm
                text-white
                transition-all
                hover:opacity-90
              "
              style={{
                background:
                  "var(--primary)",
              }}
            >
              Hubungi Kami
            </a>

          </div>

        </div>
      </section>

      {/* ===================================================
          LIGHTBOX / MODAL
      =================================================== */}

      {selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-999
            bg-black/85
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
          onClick={closeModal}
        >

          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={closeModal}
            className="
              absolute
              top-4
              right-4
              sm:top-6
              sm:right-6
              z-50
              w-10
              h-10
              rounded-full
              bg-white/15
              hover:bg-white/25
              text-white
              flex
              items-center
              justify-center
              transition-all
            "
            aria-label="Tutup gambar"
          >

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6l12 12M18 6 6 18"
              />
            </svg>

          </button>

          {/* =================================================
              PREVIOUS
          ================================================= */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="
              absolute
              left-2
              sm:left-5
              lg:left-8
              z-50
              w-11
              h-11
              sm:w-12
              sm:h-12
              rounded-full
              bg-white/15
              hover:bg-white/25
              text-white
              flex
              items-center
              justify-center
              transition-all
            "
            aria-label="Gambar sebelumnya"
          >

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 18-6-6 6-6"
              />
            </svg>

          </button>

          {/* =================================================
              NEXT
          ================================================= */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="
              absolute
              right-2
              sm:right-5
              lg:right-8
              z-50
              w-11
              h-11
              sm:w-12
              sm:h-12
              rounded-full
              bg-white/15
              hover:bg-white/25
              text-white
              flex
              items-center
              justify-center
              transition-all
            "
            aria-label="Gambar berikutnya"
          >

            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9 18 6-6-6-6"
              />
            </svg>

          </button>

          {/* =================================================
              IMAGE
          ================================================= */}

          <div
            className="
              relative
              w-full
              max-w-5xl
              h-[70vh]
              sm:h-[80vh]
            "
            onClick={(e) =>
              e.stopPropagation()
            }
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            <Image
              src={
                gallery[selectedIndex]
                  .imageSrc
              }
              alt={
                gallery[selectedIndex]
                  .alt
              }
              fill
              sizes="100vw"
              className="
                object-contain
              "
              priority
            />

          </div>

          {/* =================================================
              COUNTER
          ================================================= */}

          <div
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              text-white
              text-sm
              bg-black/40
              px-4
              py-2
              rounded-full
            "
          >
            {selectedIndex + 1} /{" "}
            {gallery.length}
          </div>

        </div>
      )}
    </>
  );
}