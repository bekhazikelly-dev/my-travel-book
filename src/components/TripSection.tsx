import { motion } from "framer-motion";
import TripCard from "./TripCard";
import type { Trip } from "@/data/trips";

interface TripSectionProps {
  title: string;
  subtitle: string;
  trips: Trip[];
}

const TripSection = ({ title, subtitle, trips }: TripSectionProps) => {
  if (trips.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <span className="font-body text-xs uppercase tracking-[0.3em] text-primary">
          {subtitle}
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h2>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2">
        {trips.map((trip, i) => (
          <TripCard key={trip.id} trip={trip} index={i} />
        ))}
      </div>
    </section>
  );
};

export default TripSection;
