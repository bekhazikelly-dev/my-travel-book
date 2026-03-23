import tokyoImg from "@/assets/tokyo.jpg";
import santoriniImg from "@/assets/santorini.jpg";
import peruImg from "@/assets/peru.jpg";
import baliImg from "@/assets/bali.jpg";

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface Trip {
  id: string;
  destination: string;
  country: string;
  dates: string;
  status: "upcoming" | "past";
  image: string;
  description: string;
  itinerary: ItineraryDay[];
}

export const trips: Trip[] = [
  {
    id: "tokyo-2026",
    destination: "Tokyo",
    country: "Japan",
    dates: "Apr 15 – Apr 28, 2026",
    status: "upcoming",
    image: tokyoImg,
    description: "Cherry blossom season exploration through temples, street food, and neon-lit nights.",
    itinerary: [
      { day: 1, title: "Arrival & Shibuya", activities: ["Land at Narita Airport", "Check into hotel in Shinjuku", "Evening walk through Shibuya Crossing"] },
      { day: 2, title: "Temples & Gardens", activities: ["Meiji Shrine morning visit", "Harajuku street exploration", "Yoyogi Park picnic under cherry blossoms"] },
      { day: 3, title: "Tsukiji & Ginza", activities: ["Tsukiji Outer Market breakfast", "TeamLab Borderless", "Ginza shopping district"] },
      { day: 4, title: "Day Trip to Kamakura", activities: ["Great Buddha of Kamakura", "Hase-dera Temple", "Beach walk at Yuigahama"] },
    ],
  },
  {
    id: "bali-2026",
    destination: "Bali",
    country: "Indonesia",
    dates: "Jul 1 – Jul 14, 2026",
    status: "upcoming",
    image: baliImg,
    description: "Two weeks of rice terraces, temple ceremonies, and surf sessions in paradise.",
    itinerary: [
      { day: 1, title: "Arrival in Ubud", activities: ["Arrive at Ngurah Rai Airport", "Transfer to Ubud villa", "Sunset at Tegallalang Rice Terrace"] },
      { day: 2, title: "Ubud Culture", activities: ["Morning yoga session", "Monkey Forest sanctuary", "Traditional Balinese cooking class"] },
      { day: 3, title: "Waterfall Day", activities: ["Tegenungan Waterfall", "Tibumana Waterfall", "Kanto Lampo Waterfall"] },
    ],
  },
  {
    id: "santorini-2025",
    destination: "Santorini",
    country: "Greece",
    dates: "Sep 10 – Sep 20, 2025",
    status: "past",
    image: santoriniImg,
    description: "Island-hopping through whitewashed villages with stunning caldera sunsets.",
    itinerary: [
      { day: 1, title: "Oia Arrival", activities: ["Ferry from Athens", "Settle into cave hotel", "Famous Oia sunset"] },
      { day: 2, title: "Fira & Wine", activities: ["Walk from Fira to Oia", "Wine tasting at Santo Wines", "Dinner at Ammoudi Bay"] },
    ],
  },
  {
    id: "peru-2025",
    destination: "Cusco & Machu Picchu",
    country: "Peru",
    dates: "May 2 – May 15, 2025",
    status: "past",
    image: peruImg,
    description: "Ancient Incan trails leading to one of the world's most breathtaking wonders.",
    itinerary: [
      { day: 1, title: "Cusco Acclimatization", activities: ["Arrive in Cusco", "Plaza de Armas walking tour", "Coca tea and rest"] },
      { day: 2, title: "Sacred Valley", activities: ["Pisac ruins and market", "Ollantaytambo fortress", "Traditional lunch in Urubamba"] },
      { day: 3, title: "Inca Trail Day 1", activities: ["Start at km 82", "Hike to Wayllabamba", "Camp at 3,000m altitude"] },
    ],
  },
];
