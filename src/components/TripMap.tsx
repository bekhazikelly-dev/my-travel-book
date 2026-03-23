import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LocationPin } from "@/data/trips";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface TripMapProps {
  locations: LocationPin[];
  destination: string;
}

const TripMap = ({ locations, destination }: TripMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const center: [number, number] = locations.length > 0
      ? [locations[0].lat, locations[0].lng]
      : [37.9755, 23.7348];

    const map = L.map(containerRef.current).setView(center, 13);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]));

      locations.forEach((loc) => {
        const icon = L.divIcon({
          html: `<div style="font-size:24px;text-align:center;line-height:1">${loc.emoji}</div>`,
          className: "bg-transparent border-none",
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        L.marker([loc.lat, loc.lng], { icon })
          .addTo(map)
          .bindPopup(`<strong>Day ${loc.day}</strong><br/>${loc.name}`);
      });

      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
    }

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [locations, destination]);

  return <div ref={containerRef} className="h-full w-full" />;
};

export default TripMap;
