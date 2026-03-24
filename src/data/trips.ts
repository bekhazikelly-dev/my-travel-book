import athensImg from "@/assets/athens.jpg";
import santoriniImg from "@/assets/santorini.jpg";
import peruImg from "@/assets/peru.jpg";
import baliImg from "@/assets/bali.jpg";
import mallorcaImg from "@/assets/mallorca.jpg";

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
    description: "Lynn's Bachlorette.",
    homeBase: {
      label: "House",
      url: "https://www.google.com/maps/place/Iofontos+2,+Athina+116+34,+Greece/@37.9696446,23.7471297,17.1z/data=!4m6!3m5!1s0x14a1bd42def7dacf:0x781b0be1af04602a!8m2!3d37.9712555!4d23.7500953!16s%2Fg%2F11sxy6ph22?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
    },
    itinerary: [
      {
        day: 1,
        title: "Sister's day 🌞",
        activities: [
          "3:30 PM — Late lunch at Mavro Provato",
          "5:00 PM — Golden hour stroll through National Garden",
          "6:00 PM — Coffee at Numismatic Café ",
          "8:30 PM — Dinner at Hill Athens Rooftop Restaurant",
          "11:00 PM — Drinks at Secta Bar Athens",
        ],
      },
      {
        day: 2,
        title: "Culture, Food & Cocktails 🍸",
        activities: [
          "9:30 AM — Breakfast at KUDU Coffee Shop",
          "11:00 AM — Explore the Acropolis Museum",
          "1:00 PM — Lunch at O Thanasis",
          "3:00 PM — Café break at Melina Mercouri Café",
          "9:00 PM — Dinner at Oroscopo Restaurant",
          "11:00 PM — Bar crawl: Hitchcocktales → Hippy3 → Secta Bar → FRED",
        ],
      },
      {
        day: 3,
        title: "Art, Food & Spa Day 🎨",
        activities: [
          "10:00 AM — Brunch at Ohh Boy (banoffee pie!)",
          "12:00 PM — National Museum of Contemporary Art",
          "2:00 PM — Coffee at Peggy Sue",
          "3:30 PM — Massage retreat - Devine Spa",
          "8:00 PM — Dinner at THE BOTANY (reservation, views of Temple of Zeus)",
        ],
      },
      {
        day: 4,
        title: "See you later, Athens! ☕",
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
      { name: "Devine Spa", lat: 37.9788272, lng: 23.7294645, emoji: "💆", day: 3, url: "https://www.google.com/maps?cid=6338285055770001958&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" },
      { name: "THE BOTANY", lat: 37.9693908, lng: 23.7313817, emoji: "🍷", day: 3, url: "https://www.google.com/maps/place/The+Botany+Roof+Garden+at+Acropolis/@37.9693908,23.7313817" },
      { name: "KROSS Coffee Roasters", lat: 37.9670, lng: 23.7500, emoji: "☕", day: 4 },
    ],
  },
];
