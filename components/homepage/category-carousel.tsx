"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";

const homepageCategorySlugs = ["outdoor", "home", "travel", "apparel", "accessories", "kitchen-dining"];

export function CategoryCarousel() {
  const homepageCategories = categories.filter((c) => homepageCategorySlugs.includes(c.slug));

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Destinations</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">Shop by category</h2>
          </div>
          <Link href="/categories" className="hidden text-sm uppercase tracking-[0.14em] text-primary hover:underline sm:block">
            All categories
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {homepageCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group relative min-h-[220px] overflow-hidden md:min-h-[280px]"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-2xl text-ivory">{category.name}</h3>
                <p className="mt-1 max-w-xs text-sm text-ivory/75">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
