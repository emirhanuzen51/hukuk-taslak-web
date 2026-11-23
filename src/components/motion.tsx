"use client";

import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return null;
}

export const easeCustom = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: easeCustom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: easeCustom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: easeCustom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Mouse Takip Eden Spotlight Kart ---------------- */
export function SpotlightCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setCoords(null);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-2xl border border-card-border bg-card transition-all duration-300 ${className}`}
    >
      {coords && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, var(--accent-subtle), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function SectionBadge({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-md shadow-xs">
      {number && <span className="font-mono text-[10px] text-fg-muted">0{number}</span>}
      <span>{children}</span>
    </div>
  );
}

export function PageHero({
  badge,
  title,
  highlight,
  description,
  image,
}: {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-card-border bg-gradient-to-b from-bg-alt/70 via-bg to-bg pt-32 pb-20 sm:pt-40 sm:pb-28">
      {image && (
        <div className="absolute inset-0 -z-10 opacity-[0.09] dark:opacity-[0.16] pointer-events-none">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
        </div>
      )}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <SectionBadge>{badge}</SectionBadge>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeCustom }}
            className="mt-6 font-serif text-4xl font-normal tracking-tight sm:text-5xl lg:text-6xl text-fg"
          >
            {title} {highlight && <span className="italic font-medium text-accent">{highlight}</span>}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeCustom }}
            className="mt-6 text-lg leading-relaxed text-fg-muted sm:text-xl"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
