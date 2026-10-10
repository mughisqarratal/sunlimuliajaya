"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const contacts = [
  {
    name: "Zainal",
    description: "+62 8224 0041 229",
    phone: "6282240041229",
  },
  // {
  //   name: "Marketing",
  //   description: "Andara Cargo",
  //   phone: "628xxxxxxxxxx",
  // },
];

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Tutup card ketika klik di luar card
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const openWhatsApp = (phone: string) => {
    const message = "Halo, saya ingin bertanya tentang layanan di PT. Sunli Mulia Jaya.";

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay/card kontak */}
      <div
        ref={cardRef}
        className={`
          fixed
          right-6
          bottom-24
          z-1000
          w-[320px]
          max-w-[calc(100vw-32px)]
          rounded-2xl
          bg-white
          shadow-2xl
          border
          border-gray-100
          overflow-hidden
          transition-all
          duration-300
          origin-bottom-right
          ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-4 scale-95 pointer-events-none"
          }
        `}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-[#25D366] text-white">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup"
            title="Tutup"
            className="absolute top-4 right-4 text-white hover:text-gray-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h3 className="font-semibold text-lg">Hubungi Kami</h3>

          <p className="text-sm text-white/90 mt-1">
            Silakan hubungi tim kami, dan kami akan segera merespons kebutuhan Anda!
          </p>
        </div>

        {/* Contact list */}
        <div className="p-3">
          {contacts.map((contact) => (
            <div
              key={contact.phone}
              className="
                flex
                items-center
                gap-3
                p-3
                rounded-xl
                hover:bg-gray-50
                transition-colors
              "
            >
              {/* Person icon */}
              <button
                type="button"
                onClick={() => openWhatsApp(contact.phone)}
                className="
                  w-12
                  h-12
                  shrink-0
                  rounded-full
                  overflow-hidden
                  bg-gray-100
                  hover:scale-105
                  transition-transform
                  cursor-pointer
                "
                title={`Chat dengan ${contact.name}`}
              >
                <Image
                  src="/icons/contact/user.png"
                  unoptimized
                  alt={contact.name}
                  width={50}
                  height={50}
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Contact information */}
              <button
                type="button"
                onClick={() => openWhatsApp(contact.phone)}
                className="flex-1 text-left cursor-pointer"
              >
                <p className="font-semibold text-gray-800">{contact.name}</p>

                <p className="text-sm text-gray-500">{contact.description}</p>

                <p className="text-xs text-[#25D366] mt-1">Klik untuk chat →</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Float */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={
          isOpen
            ? "Tutup pilihan kontak WhatsApp"
            : "Buka pilihan kontak WhatsApp"
        }
        title="Hubungi kami melalui WhatsApp"
        className="
          fixed
          right-6
          bottom-6
          z-1001
          w-14
          h-14
          rounded-full
          flex
          items-center
          justify-center
          text-white
          shadow-lg
          hover:scale-110
          hover:shadow-xl
          transition-all
          duration-200
        "
        style={{
          background: "#25D366",
        }}
      >
        <svg
          className={`
            w-7
            h-7
            transition-transform
            cursor-pointer
            duration-300
            ${isOpen ? "rotate-90" : "rotate-0"}
          `}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </button>
    </>
  );
}
