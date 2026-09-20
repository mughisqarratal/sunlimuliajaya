"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Pastikan halaman selalu kembali terlihat
    document.body.classList.remove("page-exit");

    // Jalankan animasi masuk setelah browser melakukan paint
    const frame = requestAnimationFrame(() => {
      document.body.classList.add("page-loaded");
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <>{children}</>;
}
