import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { LocationPin } from "@/data/trips";

// Fix default marker icon issue with bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const createEmojiIcon = (emoji: string) =>
  L.divIcon({
    html: `<div style="font-size:24px;text-align:center;line-height:1">${emoji}</div>`,
    className: "bg-transparent border-none",
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

interface FitBoundsProps {
  locations: LocationPin[];
}

const FitBounds = ({ locations }: FitBoundsProps) => {
  const map = useMap();
  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]));
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
    }
  }, [locations, map]);
  return null;
};

interface TripMapProps {
  locations: LocationPin[];
  destination: string;
}

const TripMap = ({ locations, destination }: TripMapProps) => {
  const center: [number, number] = locations.length > 0
    ? [locations[0].lat, locations[0].lng]
    : [37.9755, 23.7348]; // Athens default

  return (
    <MapContainer
      center={center}
      zoom={13}
      className="h-full w-full"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds locations={locations} />
      {locations.map((loc, i) => (
        <Marker key={i} position={[loc.lat, loc.lng]} icon={createEmojiIcon(loc.emoji)}>
          <Popup>
            <div className="font-body text-sm">
              <strong>Day {loc.day}</strong>
              <br />
              {loc.name}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TripMap;
