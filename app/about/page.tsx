import { company } from "@/data/company";
import { testimonials } from "@/data/testimonials";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.displayName}`}
        description={company.description}
        breadcrumbs={[{ label: "About" }]}
      />

      <Container className="pb-16">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden border border-border">
            <Image
              src="/banners/about.jpg"
              alt="Lakeside boathouse among forested mountains"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <PageSection title="A retailer of useful things">
            <p>
              MAMMOTH ECB is a curated shop for products that earn their keep. We look for
              durable materials, considered design, and pieces that move easily between home,
              travel, and time outdoors.
            </p>
            <p className="mt-4">
              The assortment covers kitchen and table, weekend bags, outdoor living, apparel,
              and everyday carry — not a department store, and not a specialty camp shop. Just
              goods chosen for how they work and how long they last.
            </p>
            <p className="mt-4">
              {company.name} ships from the United States. Questions about an order can be sent
              to {company.email}.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Utility first", desc: "If it does not have a job, it does not make the catalog." },
            { title: "Quiet quality", desc: "Materials and construction you can feel — without the costume of luxury." },
            { title: "Versatile living", desc: "Home, travel, and outdoor pieces meant to be used in more than one setting." },
            { title: "Straightforward service", desc: "Free shipping over $75, 30-day returns, and direct email support." },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border bg-ivory p-6">
              <h3 className="font-serif text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <PageSection title="What customers say" className="mt-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <div key={t.id} className="border border-border bg-ivory p-6">
                <StarRating rating={t.rating} showCount={false} size="md" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-none">
            <Link href="/shop">Shop the Collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
