"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "fade"
  | "scale";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  distance?: number;
  className?: string;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  once = true,
  distance = 40,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once]);

  const getTransform = () => {
    if (isVisible) {
      return "translate3d(0, 0, 0) scale(1)";
    }

    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(1)`;

      case "down":
        return `translate3d(0, -${distance}px, 0) scale(1)`;

      case "left":
        return `translate3d(${distance}px, 0, 0) scale(1)`;

      case "right":
        return `translate3d(-${distance}px, 0, 0) scale(1)`;

      case "scale":
        return "translate3d(0, 0, 0) scale(0.92)";

      case "fade":
      default:
        return "translate3d(0, 0, 0) scale(1)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}