"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-charcoal">
      <Image
        src={slide.image}
        alt="Cabin at dusk above a forested ridgeline"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/20" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-[1400px] items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <motion.div
          className="max-w-2xl text-ivory"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-ivory/75">
            MAMMOTH ECB
          </p>
          <h1 className="mt-4 font-serif text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/80 sm:text-lg">
            {slide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-none bg-ivory text-charcoal hover:bg-ivory/90">
              <Link href={slide.ctaLink}>{slide.ctaText}</Link>
            </Button>
            {slide.secondaryCtaText && slide.secondaryCtaLink && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-ivory/50 bg-transparent text-ivory hover:bg-ivory/10 hover:text-ivory"
              >
                <Link href={slide.secondaryCtaLink}>{slide.secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
