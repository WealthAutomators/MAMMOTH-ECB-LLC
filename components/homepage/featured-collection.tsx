"use client";

import { featuredCollection, homepageFeaturedSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import Link from "next/link";

export function FeaturedCollection() {
  const products = getProductsBySlugs(homepageFeaturedSlugs);

  return (
    <section className="bg-ivory py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">The Edit</p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">{featuredCollection.title}</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{featuredCollection.description}</p>
          </div>
          <Link href="/shop" className="text-sm uppercase tracking-[0.14em] text-primary hover:underline">
            Shop all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
