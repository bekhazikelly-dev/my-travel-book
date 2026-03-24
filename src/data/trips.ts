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
  url?: string;
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
  homeBase?: {
    label: string;
    url: string;
  };
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
    homeBase: {
      label: "House",
      url: "https://www.google.com/maps/place/Iofontos+2,+Athina+116+34,+Greece/@37.9734859,23.7400737,15z",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Rooftop Magic 🌆",
        activities: [
          "3:30 PM — Late lunch at Mavro Provato (modern Greek meze)",
          "5:00 PM — Golden hour stroll through National Garden",
          "6:00 PM — Coffee at Numismatic Café (hidden courtyard oasis)",
          "8:30 PM — Dinner at Hill Athens Rooftop Restaurant (reservation for 2)",
          "11:00 PM — Drinks at Secta Bar Athens",
        ],
      },
      {
        day: 2,
        title: "Culture, Kebabs & Cocktails 🏛️",
        activities: [
          "9:30 AM — Breakfast at KUDU Coffee Shop",
          "11:00 AM — Explore the Acropolis Museum",
          "1:00 PM — Legendary kebab lunch at O Thanasis",
          "3:00 PM — Café break at Melina Mercouri Café",
          "9:00 PM — Dinner at Oroscopo Restaurant",
          "11:00 PM — Bar crawl: Hitchcocktales → Hippy3 → Secta Bar",
        ],
      },
      {
        day: 3,
        title: "Art, Food & Spa Day 🕯️",
        activities: [
          "10:30 AM — Brunch at Ohh Boy (banoffee pie!)",
          "1:00 PM — National Museum of Contemporary Art",
          "3:00 PM — Seaside vibes at FRED",
          "4:30 PM — Cocktails at Peggy Sue",
          "5:30 PM — Massage retreat",
          "8:00 PM — Fancy dinner at THE BOTANY (reservation, views of Temple of Zeus)",
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
      { name: "Mavro Provato", lat: 37.9685, lng: 23.7490, emoji: "🍽️", day: 1, url: "https://www.google.com/maps?daddr=Arrianou+33,+Athina+116+35,+Greece" },
      { name: "National Garden", lat: 37.9725878, lng: 23.737433, emoji: "🌳", day: 1, url: "https://www.google.com/maps/place/Athens+National+Garden/@37.9725878,23.737433" },
      { name: "Numismatic Café", lat: 37.9780601, lng: 23.7355938, emoji: "☕", day: 1, url: "https://www.google.com/maps/place/Caf%C3%A9+%CF%83%CF%84%CE%BF%CE%BD+%CE%BA%CE%AE%CF%80%CE%BF+%CF%84%CE%BF%CF%85+%CE%9D%CE%BF%CE%BC%CE%B9%CF%83%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CE%BF%CF%8D+%CE%9C%CE%BF%CF%85%CF%83%CE%B5%CE%AF%CE%BF%CF%85/@37.9780601,23.7355938" },
      { name: "Hill Athens Rooftop", lat: 37.9741935, lng: 23.7199049, emoji: "🌆", day: 1, url: "https://www.google.com/maps/place/Hill+Athens+Rooftop+Restaurant/@37.9741935,23.7199049" },
      { name: "Secta Bar", lat: 37.9734694, lng: 23.750352, emoji: "🍸", day: 1, url: "https://www.google.com/maps/place/Secta+Bar+Athens/@37.9734694,23.750352" },
      { name: "KUDU Coffee", lat: 37.9674743, lng: 23.7471422, emoji: "☕", day: 2, url: "https://www.google.com/maps/place/KUDU+Coffee+Shop+Pagrati/@37.9674743,23.7471422" },
      { name: "Acropolis Museum", lat: 37.9684499, lng: 23.7285227, emoji: "🏺", day: 2, url: "https://www.google.com/maps/place/Acropolis+Museum/@37.9684499,23.7285227" },
      { name: "O Thanasis", lat: 37.9762894, lng: 23.7264863, emoji: "🥙", day: 2, url: "https://www.google.com/maps/place/Thanasis/@37.9762894,23.7264863" },
      { name: "Melina Mercouri", lat: 37.9733376, lng: 23.7285992, emoji: "☕", day: 2, url: "https://www.google.com/maps/place/Melina+Mercouri+Caf%C3%A9/@37.9733376,23.7285992" },
      { name: "Oroscopo", lat: 37.9734552, lng: 23.7505042, emoji: "🍽️", day: 2, url: "https://www.google.com/maps/place/Oroscopo+restaurant/@37.9734552,23.7505042" },
      { name: "Hitchcocktales", lat: 37.9682552, lng: 23.7298978, emoji: "🍸", day: 2, url: "https://www.google.com/maps/place/Hitchcocktales+Athens+Bar+Restaurant/@37.9682552,23.7298978" },
      { name: "Hippy3", lat: 37.9699505, lng: 23.747711, emoji: "🍸", day: 2, url: "https://www.google.com/maps/place/Hippy3/@37.9699505,23.747711" },
      { name: "Ohh Boy", lat: 37.9724154, lng: 23.7455671, emoji: "🥑", day: 3, url: "https://www.google.com/maps/place/Ohh+Boy/@37.9724154,23.7455671" },
      { name: "National Museum of Contemporary Art", lat: 37.9630008, lng: 23.7253443, emoji: "🎨", day: 3, url: "https://www.google.com/maps/place/National+Museum+of+Contemporary+Art/@37.9630008,23.7253443" },
      { name: "FRED", lat: 37.9456174, lng: 23.7106656, emoji: "🍹", day: 3, url: "https://www.google.com/maps/place/Fred/@37.9456174,23.7106656" },
      { name: "Peggy Sue", lat: 37.9539409, lng: 23.7151041, emoji: "🍸", day: 3, url: "https://www.google.com/maps/place/Peggy+Sue/@37.9539409,23.7151041" },
      { name: "THE BOTANY", lat: 37.9693908, lng: 23.7313817, emoji: "🍷", day: 3, url: "https://www.google.com/maps/place/The+Botany+Roof+Garden+at+Acropolis/@37.9693908,23.7313817" },
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
