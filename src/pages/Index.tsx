import HeroSection from "@/components/HeroSection";
import TripSection from "@/components/TripSection";
import { trips } from "@/data/trips";

const Index = () => {
  const upcoming = trips.filter((t) => t.status === "upcoming");
  const past = trips.filter((t) => t.status === "past");

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TripSection
        title="Upcoming Adventures"
        subtitle="What's Next"
        trips={upcoming}
      />
      <footer className="border-t border-border py-10 text-center">
        <p className="font-body text-sm text-muted-foreground">
          © 2026 Wanderlust — A Personal Travel Journal
        </p>
      </footer>
    </div>
  );
};

export default Index;
