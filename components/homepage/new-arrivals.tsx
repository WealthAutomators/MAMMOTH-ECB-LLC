"use client";

import { homepageNewArrivalSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function NewArrivals() {
  const products = getProductsBySlugs(homepageNewArrivalSlugs);

  return (
    <section className="border-y border-border bg-background py-16 md:py-24">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Just in</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">New arrivals</h2>
          </div>
          <Link href="/new-arrivals" className="text-sm uppercase tracking-[0.14em] text-primary hover:underline">
            View all
          </Link>
        </div>
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
