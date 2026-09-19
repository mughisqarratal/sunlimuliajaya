"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = end / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  {
    label: "Import",
    imageSrc: "/icons/import.png",
    value: 10000,
    suffix: "+",
    desc: "Shipment berhasil",
  },
  {
    label: "Export",
    imageSrc: "/icons/exportation.png",
    value: 840,
    suffix: "+",
    desc: "Shipment berhasil",
    
  },
  {
    label: "Door to Door",
    imageSrc: "/icons/doortodoor.png",
    value: 6200,
    suffix: "+",
    desc: "Pengiriman selesai",
  },
  {
    label: "Klien Puas",
    imageSrc: "/icons/satisfaction.png",
    value: 500,
    suffix: "+",
    desc: "Di seluruh Indonesia",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-bold tracking-widest uppercase" style={{color: "var(--accent)"}}>Project Success</span>
          <h2 className="text-3xl font-black mt-2" style={{color: "var(--primary)"}}>Pencapaian Kami</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border-2 hover:border-blue-200 transition-all hover:shadow-lg group"
              style={{borderColor: "#e5e7eb"}}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                <Image src={stat.imageSrc} alt={stat.label} width={60} height={60} className="mx-auto" />
              </div>
              <div className="text-3xl font-black mb-1" style={{color: "var(--primary)"}}>
                <CountUp end={stat.value} />
                <span style={{color: "var(--accent)"}}>{stat.suffix}</span>
              </div>
              <p className="font-bold text-gray-800 text-sm">{stat.label}</p>
              <p className="text-gray-500 text-xs mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
