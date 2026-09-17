import { HeroBanner } from "@/components/homepage/hero-banner";
import { CategoryCarousel } from "@/components/homepage/category-carousel";
import { FeaturedCollection } from "@/components/homepage/featured-collection";
import { EditorialStory } from "@/components/homepage/editorial-story";
import { NewArrivals } from "@/components/homepage/new-arrivals";
import { OutdoorFeature } from "@/components/homepage/outdoor-feature";
import { BestSellers } from "@/components/homepage/best-sellers";
import { PromotionalBanner } from "@/components/homepage/promotional-banner";
import { AboutSection } from "@/components/homepage/about-section";
import { Newsletter } from "@/components/homepage/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryCarousel />
      <FeaturedCollection />
      <EditorialStory />
      <NewArrivals />
      <OutdoorFeature />
      <BestSellers />
      <PromotionalBanner />
      <AboutSection />
      <Newsletter />
    </>
  );
}
