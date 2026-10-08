"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({
  children,
}: PageTransitionProps) {
  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector("main");

    if (!main) return;

    main.classList.remove("page-loaded");

    const frame = requestAnimationFrame(() => {
      main.classList.add("page-loaded");
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return <>{children}</>;
}