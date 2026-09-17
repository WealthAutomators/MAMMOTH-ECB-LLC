import { notFound } from "next/navigation";
import { getCollectionBySlug } from "@/data/collections";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { collections } = await import("@/data/collections");
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection Not Found" };
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = getProductsBySlugs(collection.productSlugs);

  return (
    <Container className="py-8 md:py-12">
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Collection</p>
      <h1 className="mt-2 font-serif text-3xl tracking-tight md:text-4xl">{collection.name}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">{collection.description}</p>
      <p className="mt-1 text-sm text-muted-foreground">{products.length} products</p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
