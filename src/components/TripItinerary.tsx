import { motion } from "framer-motion";
import type { Trip } from "@/data/trips";

interface TripItineraryProps {
  trip: Trip;
}

const TripItinerary = ({ trip }: TripItineraryProps) => {
  return (
    <div>
      <h2 className="font-display text-xl font-bold text-foreground mb-1">
        Your Itinerary
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-6">
        {trip.description}
      </p>

      <div className="space-y-6">
        {trip.itinerary.map((day, i) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border-l-2 border-primary/40 pl-5"
          >
            <div className="mb-2">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-0.5 font-body text-xs font-semibold text-primary">
                Day {day.day}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {day.title}
            </h3>
            <ul className="mt-2 space-y-2">
              {day.activities.map((activity, j) => (
                <li
                  key={j}
                  className="font-body text-sm leading-relaxed text-muted-foreground"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TripItinerary;
