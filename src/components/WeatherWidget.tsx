import { useQuery } from "@tanstack/react-query";
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning, Thermometer, ExternalLink } from "lucide-react";

interface DayWeather {
  date: string;
  tempMax: number;
  tempMin: number;
  code: number;
  description: string;
  icon: string;
}

interface WeatherData {
  forecast: DayWeather[];
  city: string;
}

const fetchWeather = async (city: string): Promise<WeatherData> => {
  const coords = CITY_COORDS[city] || { lat: 37.98, lng: 23.73 };
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`
  );
  const data = await res.json();
  const forecast = data.daily?.time?.map((date: string, index: number) => ({
    date,
    tempMax: Math.round(data.daily.temperature_2m_max[index] ?? 0),
    tempMin: Math.round(data.daily.temperature_2m_min[index] ?? 0),
    code: data.daily.weather_code[index] ?? 0,
    description: weatherCodeToText(data.daily.weather_code[index] ?? 0),
    icon: weatherCodeToIcon(data.daily.weather_code[index] ?? 0),
  })) ?? [];
  return { forecast, city };
};

const CITY_COORDS: Record<string, { lat: number; lng: number }> = {
  Athens: { lat: 37.9755, lng: 23.7348 },
  Lebanon: { lat: 33.8547, lng: 35.8623 },
  Mallorca: { lat: 39.6953, lng: 3.0176 },
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
        <span className="font-body text-sm text-muted-foreground">Loading weather…</span>
      </div>
    );
  }

  const weatherLink = `https://open-meteo.com/en/forecast/${CITY_COORDS[city]?.lat},${CITY_COORDS[city]?.lng}`;

  return (
    <div className="rounded-lg bg-accent p-3 md:p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display text-base md:text-lg font-semibold text-foreground">7-Day Forecast</h3>
        <a
          href={weatherLink}
          target="_blank"
          rel="noopener noreferrer"
          title={`View detailed weather for ${city}`}
          className="group rounded-lg bg-primary/10 p-1 md:p-1.5 text-primary transition-colors hover:bg-primary/20"
        >
          <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
        </a>
      </div>
      
      <a
        href={weatherLink}
        target="_blank"
        rel="noopener noreferrer"
        className="grid grid-cols-4 md:grid-cols-7 gap-1.5 md:gap-2 transition-opacity hover:opacity-80"
      >
        {data.forecast.map((day) => {
          const WeatherIcon = IconMap[day.icon] ?? Cloud;
          const dayName = new Date(day.date).toLocaleDateString("en-US", { weekday: "short" });
          
          return (
            <div
              key={day.date}
              className="rounded-lg border border-border bg-background p-1.5 md:p-2 text-center transition-colors hover:bg-primary/5"
            >
              <p className="font-body text-xs md:text-sm font-semibold text-foreground truncate">{dayName}</p>
              <WeatherIcon className="mx-auto my-1 h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <div className="space-y-0.5">
                <p className="font-display text-xs md:text-sm font-bold text-foreground">{day.tempMax}°</p>
                <p className="font-body text-xs md:text-xs text-muted-foreground">{day.tempMin}°</p>
              </div>
            </div>
          );
        })}
      </a>
    </div>
  );
};

export default WeatherWidget;
