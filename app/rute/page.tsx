import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rute Pengiriman - Andara Cargo",
  description:
    "Rute import export yang tersedia di Andara Cargo dari berbagai negara.",
};

/* =========================================================
   COUNTRY ROUTES
========================================================= */

const routes = [
  {
    country: "China",
    imageSrc: "/images/routes/china.png",
    flag: "🇨🇳",

    cities: ["Shanghai", "Guangzhou", "Shenzhen", "Beijing", "Yiwu", "Ningbo"],

    transit: "7-14 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: true,
  },

  {
    country: "Jepang",
    imageSrc: "/images/routes/jepang.png",
    flag: "🇯🇵",

    cities: ["Tokyo", "Osaka", "Nagoya", "Yokohama"],

    transit: "5-10 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Korea Selatan",
    imageSrc: "/images/routes/korea.png",
    flag: "🇰🇷",

    cities: ["Seoul", "Busan", "Incheon"],

    transit: "5-10 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Amerika Serikat",
    imageSrc: "/images/routes/amerika.png",
    flag: "🇺🇸",

    cities: ["Los Angeles", "New York", "Miami", "Chicago"],

    transit: "15-25 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Eropa",
    imageSrc: "/images/routes/unieropa.jpg",
    flag: "🇪🇺",

    cities: ["Jerman", "Belanda", "Italia", "Prancis", "UK", "Polandia"],

    transit: "20-30 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Malaysia",
    imageSrc: "/images/routes/malaysia.png",
    flag: "🇲🇾",

    cities: ["Kuala Lumpur", "Penang", "Johor Bahru"],

    transit: "3-7 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Singapura",
    imageSrc: "/images/routes/singapura.png",
    flag: "🇸🇬",

    cities: ["Singapore"],

    transit: "3-5 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Thailand",
    imageSrc: "/images/routes/thailand.png",
    flag: "🇹🇭",

    cities: ["Bangkok", "Chiang Mai", "Phuket"],

    transit: "5-10 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "India",
    imageSrc: "/images/routes/india.png",
    flag: "🇮🇳",

    cities: ["Mumbai", "Delhi", "Chennai"],

    transit: "10-20 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Australia",
    imageSrc: "/images/routes/australia.png",
    flag: "🇦🇺",

    cities: ["Sydney", "Melbourne", "Brisbane"],

    transit: "10-18 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Taiwan",
    imageSrc: "/images/routes/taiwan.png",
    flag: "🇹🇼",

    cities: ["Taipei", "Kaohsiung", "Taichung"],

    transit: "5-10 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },

  {
    country: "Hong Kong",
    imageSrc: "/images/routes/hongkong.png",
    flag: "🇭🇰",

    cities: ["Hong Kong"],

    transit: "5-8 hari",
    type: "Sea & Air",

    transitIcon: "/images/routes/icons/calendar.png",
    typeIcon: "/images/routes/icons/transportation.png",

    transitIconSize: 24,
    typeIconSize: 24,

    popular: false,
  },
];

/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    imageSrc: "/icons/countries.png",
    value: "50+",
    label: "Negara Tujuan",
  },
  {
    imageSrc: "/icons/harbor.png",
    value: "100+",
    label: "Pelabuhan",
  },
  {
    imageSrc: "/icons/airport.png",
    value: "30+",
    label: "Bandara",
  },
  {
    imageSrc: "/icons/support.png",
    value: "24/7",
    label: "Support",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function RutePage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="pt-32 pb-20"
        style={{
          background: "var(--primary-dark)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="text-sm font-bold tracking-widest uppercase"
            style={{
              color: "var(--accent)",
            }}
          >
            Jangkauan Global
          </span>

          <h1 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Rute Pengiriman
          </h1>

          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Kami melayani pengiriman ke berbagai negara di seluruh dunia dengan
            waktu transit yang kompetitif
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* =================================================
              STATS
          ================================================= */}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl"
                style={{
                  background: "var(--bg-light)",
                }}
              >
                {/* ICON */}

                <div className="flex justify-center mb-3">
                  <Image
                    src={stat.imageSrc}
                    alt={stat.label}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* VALUE */}

                <p
                  className="text-3xl font-black"
                  style={{
                    color: "var(--primary)",
                  }}
                >
                  {stat.value}
                </p>

                {/* LABEL */}

                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* =================================================
              COUNTRY ROUTES TITLE
          ================================================= */}

          <h2
            className="text-2xl font-black mb-8"
            style={{
              color: "var(--primary)",
            }}
          >
            Negara yang Kami Layani
          </h2>

          {/* =================================================
              ROUTE CARDS
          ================================================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {routes.map((route) => (
              <div
                key={route.country}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  border-2
                  border-gray-100
                  hover:border-blue-200
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                {/* =================================================
                    IMAGE
                ================================================= */}

                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={route.imageSrc}
                    alt={route.country}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      25vw
                    "
                    className="
                      object-cover
                      brightness-[0.70]
                      group-hover:brightness-90
                      group-hover:scale-105
                      transition-all
                      duration-500
                    "
                  />

                  {/* DARK OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-black/75
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* =================================================
                      POPULAR BADGE
                  ================================================= */}

                  {route.popular && (
                    <span
                      className="
                        absolute
                        top-3
                        right-3
                        text-xs
                        font-bold
                        px-3
                        py-1
                        rounded-full
                        text-white
                        shadow-md
                        animate-pulse
                      "
                      style={{
                        background: "var(--accent)",
                      }}
                    >
                      Popular
                    </span>
                  )}

                  {/* =================================================
                      COUNTRY NAME
                  ================================================= */}

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xl drop-shadow-md"
                        style={{ color: "#ff6700" }}
                      >
                        {route.flag}
                      </span>

                      <h3 className="text-white font-black text-lg drop-shadow-md">
                        {route.country}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    CARD CONTENT
                ================================================= */}

                <div className="p-5">
                  {/* =================================================
                      TRANSIT & TYPE
                  ================================================= */}

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* =================================================
                        TRANSIT
                    ================================================= */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        p-3
                      "
                      style={{
                        background: "rgba(26,60,110,0.05)",
                      }}
                    >
                      {/* CUSTOM TRANSIT ICON */}

                      <div className="shrink-0 flex items-center justify-center">
                        <Image
                          src={route.transitIcon}
                          alt="Transit"
                          width={route.transitIconSize}
                          height={route.transitIconSize}
                          className="object-contain"
                        />
                      </div>

                      {/* TRANSIT TEXT */}

                      <div className="min-w-0">
                        <p className="text-[10px] text-gray-400 uppercase font-semibold">
                          Transit
                        </p>

                        <p
                          className="text-xs font-bold"
                          style={{
                            color: "var(--primary)",
                          }}
                        >
                          {route.transit}
                        </p>
                      </div>
                    </div>

                    {/* =================================================
                        TYPE
                    ================================================= */}

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        p-3
                      "
                      style={{
                        background: "rgba(26,60,110,0.05)",
                      }}
                    >
                      {/* CUSTOM TYPE ICON */}

                      <div className="shrink-0 flex items-center justify-center">
                        <Image
                          src={route.typeIcon}
                          alt="Shipping type"
                          width={route.typeIconSize}
                          height={route.typeIconSize}
                          className="object-contain"
                        />
                      </div>

                      {/* TYPE TEXT */}

                      <div className="min-w-0">
                        <p className="text-[10px] text-gray-400 uppercase font-semibold">
                          Type
                        </p>

                        <p
                          className="text-xs font-bold"
                          style={{
                            color: "var(--primary)",
                          }}
                        >
                          {route.type}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      CITIES
                  ================================================= */}

                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                    Kota Tujuan
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {route.cities.map((city) => (
                      <span
                        key={city}
                        className="
                          text-xs
                          px-2.5
                          py-1
                          rounded-lg
                          font-medium
                        "
                        style={{
                          background: "rgba(26,60,110,0.06)",
                          color: "var(--primary)",
                        }}
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            className="
              mt-14
              rounded-3xl
              p-10
              text-center
              text-white
            "
            style={{
              background: "var(--primary)",
            }}
          >
            <h3 className="text-2xl font-black mb-3">Tujuan Lain?</h3>

            <p className="text-blue-200 mb-6">
              Tidak menemukan negara tujuan Anda? Hubungi kami untuk informasi
              rute selengkapnya.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=6281356563676"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-8
                py-3
                rounded-xl
                font-bold
                text-sm
                transition-all
                hover:opacity-90
                hover:scale-105
              "
              style={{
                background: "var(--accent)",
              }}
            >
              Tanya Rute Lainnya
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
