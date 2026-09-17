"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="border-t border-border py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">Notes</p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">{newsletter.title}</h2>
          <p className="mt-3 text-muted-foreground">{newsletter.description}</p>
          {submitted ? (
            <p className="mt-8 text-sm font-medium text-primary">You&apos;re on the list.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-none"
              />
              <Button type="submit" size="lg" className="shrink-0 rounded-none">
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
