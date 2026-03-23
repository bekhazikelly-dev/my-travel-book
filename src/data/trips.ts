import athensImg from "@/assets/athens.jpg";
import santoriniImg from "@/assets/santorini.jpg";
import peruImg from "@/assets/peru.jpg";
import baliImg from "@/assets/bali.jpg";

export interface LocationPin {
  name: string;
  lat: number;
  lng: number;
  emoji: string;
  day: number;
}

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
  locations?: LocationPin[];
}

export const trips: Trip[] = [
  {
    id: "athens-2026",
    destination: "Athens",
    country: "Greece",
    dates: "Mar 26 – Mar 29, 2026",
    status: "upcoming",
    image: athensImg,
    description: "A girls' weekend of rooftop dining, Acropolis exploring, beach vibes, and spa retreats in the heart of Athens.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Rooftop Magic 🌆",
        activities: [
          "3:00 PM — Late lunch at Mavro Provato (modern Greek meze)",
          "5:00 PM — Golden hour stroll through National Garden & Syntagma Square",
          "6:30 PM — Coffee at the Numismatic Museum Café (hidden courtyard oasis)",
          "8:30 PM — Dinner at Hill Athens Rooftop Restaurant (Acropolis views)",
        ],
      },
      {
        day: 2,
        title: "Culture, Breads & Beach 🏖️",
        activities: [
          "9:30 AM — Artisanal pastries at KORA Kolonaki (sea salt croissants!)",
          "11:00 AM — Explore the Acropolis & Parthenon",
          "1:00 PM — Legendary kebab lunch at O Thanasis",
          "2:30 PM — Taxi to Vouliagmeni Coast (sunbeds & crystal clear water)",
          "9:00 PM — Pangrati bar crawl: Chelsea Hotel → ZIGGY Cocktail Bar",
        ],
      },
      {
        day: 3,
        title: "Rainy Day Glow-Up 🕯️",
        activities: [
          "10:30 AM — Aesthetic brunch at Ohh Boy (banoffee pie!)",
          "1:00 PM — Spa retreat at Athens Divine Spa & Massage",
          "3:30 PM — Acropolis Museum (glass floors over ancient ruins)",
          "8:00 PM — Fancy dinner at THE BOTANY (views of Temple of Zeus)",
        ],
      },
      {
        day: 4,
        title: "Final Sips & Departure ☕",
        activities: [
          "7:30 AM — Last coffee at KROSS Coffee Roasters, Pangrati",
          "9:00 AM — Departure",
        ],
      },
    ],
    locations: [
      { name: "Mavro Provato", lat: 37.9685, lng: 23.7490, emoji: "🍽️", day: 1 },
      { name: "Syntagma Square", lat: 37.9755, lng: 23.7348, emoji: "🌳", day: 1 },
      { name: "Numismatic Museum Café", lat: 37.9783, lng: 23.7327, emoji: "☕", day: 1 },
      { name: "Hill Athens Rooftop", lat: 37.9747, lng: 23.7352, emoji: "🌆", day: 1 },
      { name: "KORA Kolonaki", lat: 37.9793, lng: 23.7420, emoji: "🍞", day: 2 },
      { name: "Acropolis", lat: 37.9715, lng: 23.7257, emoji: "🏛️", day: 2 },
      { name: "O Thanasis", lat: 37.9770, lng: 23.7265, emoji: "🥙", day: 2 },
      { name: "Vouliagmeni Coast", lat: 37.8100, lng: 23.7830, emoji: "🏖️", day: 2 },
      { name: "ZIGGY Cocktail Bar", lat: 37.9680, lng: 23.7510, emoji: "🍸", day: 2 },
      { name: "Ohh Boy", lat: 37.9760, lng: 23.7400, emoji: "🥑", day: 3 },
      { name: "Athens Divine Spa", lat: 37.9780, lng: 23.7380, emoji: "🕯️", day: 3 },
      { name: "Acropolis Museum", lat: 37.9686, lng: 23.7288, emoji: "🏺", day: 3 },
      { name: "THE BOTANY", lat: 37.9695, lng: 23.7310, emoji: "🍷", day: 3 },
      { name: "KROSS Coffee Roasters", lat: 37.9670, lng: 23.7500, emoji: "☕", day: 4 },
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
