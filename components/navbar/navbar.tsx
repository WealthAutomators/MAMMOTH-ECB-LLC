"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/navbar/search-bar";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, isHydrated: cartReady } = useCart();
  const { wishlist, isHydrated: wishlistReady } = useWishlist();

  return (
    <header className="border-b border-border bg-ivory">
      <Container>
        <div className="flex h-16 items-center gap-4 lg:h-[4.5rem]">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link href="/" className="flex shrink-0 items-center">
            <span className="font-serif text-lg font-semibold tracking-[0.22em] text-foreground sm:text-xl">
              {company.displayName}
            </span>
          </Link>

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-0.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-0.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setSearchOpen((open) => !open)}
              aria-label="Search"
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>

            <Button variant="ghost" size="icon" asChild className="hidden h-10 w-10 sm:inline-flex">
              <Link href="/profile" aria-label="Account">
                <User className="h-[18px] w-[18px]" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative hidden h-10 w-10 sm:inline-flex">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-[18px] w-[18px]" />
                {wishlistReady && wishlist.length > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
              <Link href="/cart" aria-label="Cart">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {cartReady && itemCount > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold text-white">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </Container>

      {searchOpen && (
        <div className="border-t border-border bg-ivory">
          <SearchBar onSubmitted={() => setSearchOpen(false)} />
        </div>
      )}

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            className="absolute inset-0 bg-charcoal/40"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative flex h-full w-[min(100%,20rem)] flex-col bg-ivory shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <span className="font-serif text-base tracking-[0.18em]">{company.displayName}</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-3 py-3 text-sm font-medium uppercase tracking-[0.14em]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href="/profile"
                  className="block px-3 py-2.5 text-sm text-muted-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Account
                </Link>
                <Link
                  href="/wishlist"
                  className="block px-3 py-2.5 text-sm text-muted-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Wishlist
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2.5 text-sm text-muted-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
