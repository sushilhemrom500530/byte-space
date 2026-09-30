import DiscoverSection from "@/components/home/discover";
import ExploreSection from "@/components/home/explore";
import ShareHolderSection from "@/components/home/share-holder";
import TestimonialsSection from "@/components/home/testimonials";

export default function Home() {
  return (
    <main className="mt-40">
      <ShareHolderSection />
      <DiscoverSection />
      <ExploreSection />
      <TestimonialsSection />
    </main>
  );
}
