"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const MotionImage = motion(Image);

type Props = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  strength?: number;
};

export default function ParallaxImage({
  src,
  alt,
  sizes,
  priority,
  className,
  strength = 24,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-strength, strength]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <MotionImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ y, scale: 1.15 }}
        className={className}
      />
    </div>
  );
}
