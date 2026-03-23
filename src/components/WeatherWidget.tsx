import { useQuery } from "@tanstack/react-query";
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Thermometer } from "lucide-react";

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${CITY_COORDS[city]?.lat ?? 37.98}&longitude=${CITY_COORDS[city]?.lng ?? 23.73}&current=temperature_2m,weather_code&timezone=auto`
  );
  const data = await res.json();
  const code = data.current?.weather_code ?? 0;
  return {
    temp: Math.round(data.current?.temperature_2m ?? 0),
    description: weatherCodeToText(code),
    icon: weatherCodeToIcon(code),
  };
};

const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  Athens: { lat: 37.9755, lng: 23.7348 },
  Bali: { lat: -8.4095, lng: 115.1889 },
  Santorini: { lat: 36.3932, lng: 25.4615 },
  "Cusco & Machu Picchu": { lat: -13.5319, lng: -71.9675 },
};

const weatherCodeToText = (code: number): string => {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Partly cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 67) return "Rainy";
  if (code <= 77) return "Snowy";
  if (code <= 99) return "Stormy";
  return "Unknown";
};

const weatherCodeToIcon = (code: number): string => {
  if (code === 0) return "sun";
  if (code <= 3) return "cloud";
  if (code <= 67) return "rain";
  if (code <= 77) return "snow";
  return "storm";
};

const IconMap: Record<string, React.ElementType> = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
  snow: CloudSnow,
  storm: CloudLightning,
};

interface WeatherWidgetProps {
  city: string;
}

const WeatherWidget = ({ city }: WeatherWidgetProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeather(city),
    staleTime: 1000 * 60 * 30,
  });

  if (isLoading || !data) {
    return (
      <div className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2">
        <Thermometer className="h-4 w-4 animate-pulse text-muted-foreground" />
        <span className="font-body text-sm text-muted-foreground">Loading…</span>
      </div>
    );
  }

  const WeatherIcon = IconMap[data.icon] ?? Cloud;

  return (
    <div className="flex items-center gap-2.5 rounded-lg bg-accent px-4 py-2">
      <WeatherIcon className="h-5 w-5 text-primary" />
      <div className="text-right">
        <p className="font-display text-lg font-semibold leading-none text-foreground">
          {data.temp}°C
        </p>
        <p className="font-body text-xs text-muted-foreground">{data.description}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
