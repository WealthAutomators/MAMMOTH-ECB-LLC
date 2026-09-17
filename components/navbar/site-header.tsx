"use client";

import { Navbar } from "@/components/navbar/navbar";
import { utilityBarItems } from "@/data/homepage";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-charcoal text-ivory">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] sm:px-6 lg:px-8">
          <p className="hidden sm:block">
            Free shipping on orders ${FREE_SHIPPING_THRESHOLD}+
          </p>
          <p className="mx-auto sm:mx-0">{utilityBarItems[1]}</p>
          <p className="hidden md:block">{utilityBarItems[2]}</p>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
