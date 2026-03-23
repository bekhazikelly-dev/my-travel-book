import { motion } from "framer-motion";
import heroImg from "@/assets/hero-travel.jpg";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mediterranean coastal town at sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-center gap-2 text-primary-foreground/80">
            <MapPin className="h-4 w-4" />
            <span className="font-body text-sm uppercase tracking-[0.25em]">
              Travel Journal
            </span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl">
            Wanderlust
          </h1>
          <p className="mt-4 max-w-md font-body text-lg font-light text-primary-foreground/80 md:text-xl">
            Every journey tells a story. Here are mine.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
