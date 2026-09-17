import Image from "next/image";
import Link from "next/link";
import { outdoorFeature } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function OutdoorFeature() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-charcoal">
      <Image
        src={outdoorFeature.image}
        alt="Fog moving through a pine forest"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/45" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-[1400px] items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-lg text-ivory">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ivory/70">{outdoorFeature.eyebrow}</p>
          <h2 className="mt-4 font-serif text-5xl leading-tight tracking-tight md:text-6xl">
            {outdoorFeature.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/80">{outdoorFeature.description}</p>
          <Button asChild size="lg" className="mt-8 rounded-none bg-ivory text-charcoal hover:bg-ivory/90">
            <Link href={outdoorFeature.ctaLink}>{outdoorFeature.ctaText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
