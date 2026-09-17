import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/collections";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Collections",
  description: "Curated edits from MAMMOTH ECB — weekend living, house and table, field and road, and everyday carry.",
};

export default function CollectionsPage() {
  return (
    <Container className="py-8 md:py-12">
      <h1 className="font-serif text-3xl tracking-tight md:text-4xl">Collections</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Four edits from the catalog. Same products, arranged for how you actually live.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {collections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/collections/${collection.slug}`}
            className="group overflow-hidden border border-border bg-ivory"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-muted">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                <h2 className="font-serif text-2xl">{collection.name}</h2>
                <p className="mt-1 text-sm text-ivory/80">{collection.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
