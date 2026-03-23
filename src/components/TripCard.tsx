import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin, ExternalLink } from "lucide-react";
import type { Trip } from "@/data/trips";

interface TripCardProps {
  trip: Trip;
  index: number;
}

const TripCard = ({ trip, index }: TripCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative h-56 overflow-hidden sm:h-64">
        <img
          src={trip.image}
          alt={trip.destination}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-1.5 text-primary-foreground/80">
            <MapPin className="h-3.5 w-3.5" />
            <span className="font-body text-xs uppercase tracking-widest">
              {trip.country}
            </span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-primary-foreground md:text-3xl">
            {trip.destination}
          </h3>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span className="font-body text-sm">{trip.dates}</span>
        </div>
        <p className="font-body text-sm leading-relaxed text-muted-foreground">
          {trip.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex w-full items-center justify-between rounded-lg bg-accent px-4 py-2.5 font-body text-sm font-medium text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <span>View Itinerary ({trip.itinerary.length} days)</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-4">
                {trip.itinerary.map((day) => (
                  <div key={day.day} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-display text-sm font-semibold text-foreground">
                      Day {day.day}: {day.title}
                    </h4>
                    <ul className="mt-1.5 space-y-1">
                      {day.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="font-body text-xs text-muted-foreground"
                        >
                          • {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TripCard;
