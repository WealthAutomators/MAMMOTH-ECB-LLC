import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={aboutSection.image}
              alt="Lakeside boathouse among forested mountains"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">The brand</p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">{aboutSection.title}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{aboutSection.description}</p>
            <ul className="mt-6 space-y-3">
              {aboutSection.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 rounded-none">
              <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
