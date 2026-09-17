import Image from "next/image";
import Link from "next/link";
import { editorialStory } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function EditorialStory() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-stretch gap-4 lg:grid-cols-12 lg:gap-6">
          <div className="relative min-h-[420px] lg:col-span-7 lg:min-h-[560px]">
            <Image
              src={editorialStory.image}
              alt="Lakeside picnic with basket, wine, and checkered cloth"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
          <div className="flex flex-col justify-between gap-6 bg-primary px-8 py-10 text-ivory lg:col-span-5 lg:px-10 lg:py-14">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-ivory/70">{editorialStory.eyebrow}</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                {editorialStory.title}
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ivory/80">
                {editorialStory.description}
              </p>
              <Button asChild size="lg" className="mt-8 rounded-none bg-ivory text-primary hover:bg-ivory/90">
                <Link href={editorialStory.ctaLink}>{editorialStory.ctaText}</Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={editorialStory.secondaryImage}
                alt="Waxed canvas pack, flask, and lantern packed for a weekend"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
