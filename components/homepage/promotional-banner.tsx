import Link from "next/link";
import { promotionalBanner } from "@/data/homepage";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export function PromotionalBanner() {
  return (
    <section className="bg-navy text-ivory">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <div>
          <p className="font-serif text-2xl tracking-tight md:text-3xl">{promotionalBanner.title}</p>
          <p className="mt-1 text-sm text-ivory/70">{promotionalBanner.description}</p>
        </div>
        <Link
          href={promotionalBanner.buttonLink}
          className="border border-ivory/40 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] transition-colors hover:bg-ivory hover:text-navy"
        >
          {promotionalBanner.buttonText}
        </Link>
        <span className="sr-only">Threshold ${FREE_SHIPPING_THRESHOLD}</span>
      </div>
    </section>
  );
}
