import DiscoverSection from "@/components/home/discover";
import ExploreSection from "@/components/home/explore";
import GrowthSection from "@/components/home/growth";
import JoinUsSection from "@/components/home/join-us";
import ShareHolderSection from "@/components/home/share-holder";
import TestimonialsSection from "@/components/home/testimonials";

export default function Home() {
  return (
    <main className="mt-40">
      <ShareHolderSection />
      <DiscoverSection />
      <ExploreSection />
      <GrowthSection />
      <JoinUsSection />
      <TestimonialsSection />
    </main>
  );
}
