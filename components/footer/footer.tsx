import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-ivory">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <p className="font-serif text-lg tracking-[0.2em]">{company.displayName}</p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70">{company.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/80">Shop</h3>
            <ul className="space-y-2.5">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/65 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/80">Explore</h3>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/65 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/80">Help</h3>
            <ul className="space-y-2.5">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/65 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/80">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-ivory/65 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/80">Contact</h3>
            <ul className="space-y-2.5 text-sm text-ivory/65">
              <li className="font-medium text-ivory/80">{company.name}</li>
              <li>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-ivory">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <Separator className="bg-white/10" />

      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-sm text-ivory/55">{company.copyright}</p>
        <div className="flex items-center gap-2">
          {paymentMethods.map((method) => (
            <Image key={method.name} src={method.icon} alt={method.name} width={40} height={28} className="opacity-80" />
          ))}
        </div>
      </Container>
    </footer>
  );
}
