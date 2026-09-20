import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "var(--primary-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 text-center">
            <div className="flex gap-2 mb-4 items-center justify-center">
              <Link href="/">
                <Image
                  src="/images/sun3.png"
                  alt="Logo"
                  width={90}
                  height={90}
                  className="object-contain rounded-lg"
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              "Smart Solution for International Shipping"
            </p>
            <div className="flex gap-3 items-center justify-center">
              <a
                href="https://www.facebook.com/share/15q3hGGKPv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/jasa_import.express"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">
              Menu
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Profil", href: "/profil" },
                { label: "Rute", href: "/rute" },
                { label: "Galeri", href: "/galeri" },
                { label: "Kontak", href: "/kontak" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">
              Layanan
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Door to Door Import", href: "/layanan/door-to-door" },
                {
                  label: "Custom Clearance",
                  href: "/layanan/custom-clearance",
                },
                { label: "Air Freight Service", href: "/layanan/air-freight" },
                { label: "Sea Freight", href: "/layanan/sea-freight" },
                { label: "Import Borongan", href: "/layanan/import-borongan" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm tracking-wider uppercase">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-gray-400">
                <svg
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "var(--accent)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <a
                  href="https://maps.app.goo.gl/FXcj4SUrpAWz4HG78?g_st=ic"
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GRAHA MAKO INNO, Jl. Raya Mabes Hankam No. 26, Bambu Apus,
                  Cipayung, Jakarta Timur 13890
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <svg
                  className="w-5 h-5 shrink-0"
                  style={{ color: "var(--accent)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:zainal.ptkbt@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  zainal.ptkbt@gmail.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <svg
                  className="w-5 h-5 shrink-0"
                  style={{ color: "var(--accent)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info.@sunlimuliajaya.com"
                  className="hover:text-white transition-colors"
                >
                  info.@sunlimuliajaya.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <svg
                  className="w-5 h-5 shrink-0"
                  style={{ color: "var(--accent)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <a
                    href="https://api.whatsapp.com/send?phone=6282240041229"
                    className="block hover:text-white transition-colors"
                  >
                    +62 822 4004 1229
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 text-sm">
            © 2026 - PT. Sunli Mulia Jaya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
