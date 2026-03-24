import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { trips } from "@/data/trips";
import TripMap from "@/components/TripMap";
import TripItinerary from "@/components/TripItinerary";
import WeatherWidget from "@/components/WeatherWidget";

const TripDetail = () => {
  const { id } = useParams<{ id: string }>();
  const trip = trips.find((t) => t.id === id);

  if (!trip) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Trip not found</h1>
          <Link to="/" className="mt-4 inline-block font-body text-sm text-primary underline">
            ← Back to all trips
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="flex items-center gap-1.5 rounded-lg bg-accent px-3 py-2 font-body text-sm text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Link>
              {trip.homeBase && (
                <a
                  href={trip.homeBase.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 font-body text-sm text-primary-foreground transition-colors hover:bg-primary/80"
                >
                  <Home className="h-4 w-4" />
                  {trip.homeBase.label}
                </a>
              )}
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {trip.destination}
              </h1>
              <p className="font-body text-sm text-muted-foreground">
                {trip.country} · {trip.dates}
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <WeatherWidget city={trip.destination} />
          </div>
        </div>
      </header>

      {/* Main: Map + Itinerary */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-[calc(100vh-160px)] overflow-y-auto rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="sm:hidden mb-6">
              <WeatherWidget city={trip.destination} />
            </div>
            <TripItinerary trip={trip} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
