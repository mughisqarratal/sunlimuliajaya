"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const layananMenu = [
  {
    label: "Door to Door Import",
    href: "/layanan/door-to-door",
  },
  {
    label: "Custom Clearance",
    href: "/layanan/custom-clearance",
  },
  {
    label: "Air Freight Service",
    href: "/layanan/air-freight",
  },
  {
    label: "Sea Freight Service",
    href: "/layanan/sea-freight",
  },
  {
    label: "Import Borongan",
    href: "/layanan/import-borongan",
  },
];

/* =========================================================
   MOBILE ICON
   Ganti path sesuai icon milik kamu
========================================================= */

const MOBILE_MENU_ICON = "/icons/navbar/open-menu.png";
const MOBILE_CLOSE_ICON = "/icons/navbar/cross-button.png";

/* Ukuran icon mobile - silakan ubah */
const MOBILE_ICON_SIZE = 28;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);

  const pathname = usePathname();

  /* =========================================================
     SCROLL
  ========================================================= */

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* =========================================================
     ACTIVE MENU
  ========================================================= */

  const isActive = (href: string) => pathname === href;

  const isLayananActive = pathname.startsWith("/layanan");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white navbar-scrolled" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="flex items-center justify-between h-20">
          {/* =================================================
              LOGO
          ================================================= */}

          <Link href="/" className="flex items-center">
            <Image
              src="/images/sunlimullogo2.png"
              alt="Logo"
              width={90}
              height={90}
              className="object-contain transition-transform duration-300 scale-100 hover:scale-105"
              priority
            />
          </Link>

          {/* =================================================
              DESKTOP MENU
          ================================================= */}

          <div className="hidden lg:flex items-center gap-1">
            {/* HOME + PROFIL */}

            {[
              { label: "Home", href: "/" },
              { label: "Profil", href: "/profil" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-700 hover:text-white hover:bg-blue-800"
                }`}
                style={
                  isActive(item.href) ? { background: "var(--primary)" } : {}
                }
              >
                {item.label}
              </Link>
            ))}

            {/* =================================================
                LAYANAN DROPDOWN
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setLayananOpen(true)}
              onMouseLeave={() => setLayananOpen(false)}
            >
              {/* LAYANAN BUTTON */}

              <button
                type="button"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1 ${
                  layananOpen || isLayananActive
                    ? "text-white"
                    : "text-gray-700 hover:text-white hover:bg-blue-800"
                }`}
                style={
                  layananOpen || isLayananActive
                    ? { background: "var(--primary)" }
                    : {}
                }
              >
                Layanan
                {/* ARROW */}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    layananOpen ? "rotate-180" : ""
                  }`}
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

              {/* =================================================
                  DROPDOWN
                  Smooth animation
              ================================================= */}

              <div
                className={`absolute top-full left-0 mt-1 w-56 z-50 transition-all duration-300 ease-out ${
                  layananOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 overflow-hidden">
                  {layananMenu.map((item) => {
                    const active = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                          active
                            ? "text-white"
                            : "text-gray-700 hover:text-white hover:bg-blue-800"
                        }`}
                        style={
                          active
                            ? {
                                background: "var(--primary)",
                              }
                            : {}
                        }
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =================================================
                RUTE + GALERI + KONTAK
            ================================================= */}

            {[
              { label: "Rute", href: "/rute" },
              { label: "Galeri", href: "/galeri" },
              { label: "Kontak", href: "/kontak" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-700 hover:text-white hover:bg-blue-800"
                }`}
                style={
                  isActive(item.href) ? { background: "var(--primary)" } : {}
                }
              >
                {item.label}
              </Link>
            ))}

            {/* =================================================
                HUBUNGI KAMI
            ================================================= */}

            <a
              href="https://api.whatsapp.com/send?phone=6281356563676"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105 shadow-lg bg-linear-to-r from-[#ECA316] to-[#FF6700]"
            >
              Hubungi Kami
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
              Icon bisa kamu ganti sendiri
          ================================================= */}

          <button
            type="button"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            className="lg:hidden p-2 rounded-lg cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Image
              src={mobileOpen ? MOBILE_CLOSE_ICON : MOBILE_MENU_ICON}
              alt={mobileOpen ? "Close Menu" : "Menu"}
              width={MOBILE_ICON_SIZE}
              height={MOBILE_ICON_SIZE}
              className="object-contain"
            />
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`lg:hidden overflow-hidden transition-all duration-700 ease-in-out ${
            mobileOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 py-4 space-y-1">
            {/* HOME */}

            {[
              { label: "Home", href: "/" },
              { label: "Profil", href: "/profil" },
              { label: "Rute", href: "/rute" },
              { label: "Galeri", href: "/galeri" },
              { label: "Kontak", href: "/kontak" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                style={
                  isActive(item.href)
                    ? {
                        background: "var(--primary)",
                      }
                    : {}
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* =================================================
                LAYANAN MOBILE
            ================================================= */}

            <div className="px-4 pt-3 pb-2 font-semibold text-sm text-gray-500">
              Layanan
            </div>

            {layananMenu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-8 py-2 text-sm transition-all ${
                  pathname === item.href
                    ? "text-white rounded-lg"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                style={
                  pathname === item.href
                    ? {
                        background: "var(--primary)",
                      }
                    : {}
                }
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
