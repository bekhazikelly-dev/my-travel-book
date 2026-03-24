import athensImg from "@/assets/athens.jpg";
import mallorcaImg from "@/assets/mallorca.jpg";
import lebanonImg from "@/assets/lebanon.jpg";

export interface LocationPin {
  name: string;
  emoji: string;
  day: number;
  url?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface PackingItem {
  id: string;
  name: string;
  category: string;
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
  packingList?: PackingItem[];
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
        title: "Sisters day 🌞",
        activities: [
          "3:30 PM — Late lunch at Mavro Provato",
          "4:00 PM — Ariston Bakery",
          "4:00 PM — ROM COM Athens - Photobooth",
          "4:30 PM — 72H Artisanal Bakery & Eatery Athens",
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
          "11:00 AM — Hippy3 Breakfast",
          "12:00 PM — Go to the Port of Piraeus",
          "1:00 PM — Lunch at Pezoulas",
          "3:00 PM — Dessert Traditional Bakery",
          "4:00 PM — Coffee at Peggy Sue",
          "9:00 PM — Dinner at Oroscopo Restaurant",
          "11:00 PM — Bar crawl: Hitchcocktales → Hippy3 → Secta Bar → FRED",
        ],
      },
      {
        day: 3,
        title: "Art, Food & Spa Day 🎨",
        activities: [
          "10:00 AM — Brunch at Ohh Boy (banoffee pie!)",
          "12:00 PM — Lunch at Manári Taverna",
          "2:00 PM — ROM COM Athens - Photobooth",
          "2:30 PM — Coffee at Melina Mercouri Café ",
          "3:30 PM — Massage retreat - Devine Spa",
          "8:00 PM — Dinner at THE BOTANY",
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
      { name: "Mavro Provato", emoji: "🍽️", day: 1, url: "https://www.google.com/maps?rlz=1C5CHFA_enFR1137FR1137&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQABgNGIAEMgkIAhAAGA0YgAQyCQgDEAAYDRiABDIJCAQQABgNGIAEMgkIBRAAGA0YgAQyBggGEEUYPDIGCAcQRRg80gEIMzI5OGowajSoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=fr&sa=X&geocode=KcFme4xBvaEUMbqkUf69t8TA&daddr=Arrianou+33,+Athina+116+35,+Greece" },
      { name: "ROM COM Athens - Photobooth", emoji: "📸", day: 1, url: "https://www.google.com/maps/place/ROM+COM+Athens+-+Photobooth/@37.9788239,23.7262912,16.03z/data=!4m14!1m7!3m6!1s0x14a1bd17e3d7762b:0x14836a7f84584371!2sMelina+Mercouri+Caf%C3%A9!8m2!3d37.9733376!4d23.7285992!16s%2Fg%2F113f_fvdf!3m5!1s0x14a1bd0004943a47:0xf41f45de61958380!8m2!3d37.9776683!4d23.7303653!16s%2Fg%2F11n3_31xvr?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D" },
      { name: "National Garden", emoji: "🌳", day: 1, url: "https://www.google.com/maps/place/Athens+National+Garden/@37.9688518,23.7283255,15z/data=!4m6!3m5!1s0x14a1bd3fbd35240d:0x8c3c56b60e730b9c!8m2!3d37.9725878!4d23.737433!16zL20vMGZkNTA0?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Numismatic Café", emoji: "☕", day: 1, url: "https://www.google.com/maps/place/Caf%C3%A9+%CF%83%CF%84%CE%BF%CE%BD+%CE%BA%CE%AE%CF%80%CE%BF+%CF%84%CE%BF%CF%85+%CE%9D%CE%BF%CE%BC%CE%B9%CF%83%CE%BC%CE%B1%CF%84%CE%B9%CE%BA%CE%BF%CF%8D+%CE%9C%CE%BF%CF%85%CF%83%CE%B5%CE%AF%CE%BF%CF%85/@37.9778109,23.7351073,15z/data=!4m6!3m5!1s0x14a1bd393c7ad4fb:0x7e82492be88fa664!8m2!3d37.9780601!4d23.7355938!16s%2Fg%2F11bx55pvdm?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Hill Athens Rooftop", emoji: "🌆", day: 1, url: "https://www.google.com/maps/place/Hill+Athens+Rooftop+Restaurant/@37.97421,23.7096266,15z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd16bbfe1801:0xf76d88dde4f413cd!8m2!3d37.9741935!4d23.7199049!16s%2Fg%2F11j3wxd2l4?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Secta Bar", emoji: "🍸", day: 1, url: "https://www.google.com/maps/place/Secta+Bar+Athens/@37.9735361,23.7503618,17z/data=!4m6!3m5!1s0x14a1bd0001275363:0x43330a8ff1d0613c!8m2!3d37.9734694!4d23.750352!16s%2Fg%2F11wjn_v0ts?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "KUDU Coffee", emoji: "☕", day: 2, url: "https://www.google.com/maps/place/KUDU+Coffee+Shop+Pagrati/@37.9695806,23.7419388,15z/data=!4m6!3m5!1s0x14a1bd01d843693b:0x4f0f0e5eec654c2a!8m2!3d37.9674743!4d23.7471422!16s%2Fg%2F11vz7bjzw3?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Acropolis Museum", emoji: "🏺", day: 2, url: "https://www.google.com/maps/place/Acropolis+Museum/@37.9693259,23.7154411,14.98z/data=!3m1!5s0x14a1bd47f4fac275:0xa471efb4d45ac27c!4m14!1m7!3m6!1s0x14a1bda0327d5bd1:0x49470109e86c69fb!2sKORA+Kolonaki!8m2!3d37.9801078!4d23.7397032!16s%2Fg%2F11m1cc3sfd!3m5!1s0x14a1bd173f46e4e1:0xb00fb46a2c010a3c!8m2!3d37.9684499!4d23.7285227!16s%2Fm%2F02qvq_j?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "O Thanasis", emoji: "🥙", day: 2, url: "https://www.google.com/maps/place/Thanasis/@37.9762894,23.7264863,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd22de5e4785:0xed206abed9960390!8m2!3d37.9762894!4d23.7264863!16s%2Fg%2F1td2qwz9?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Melina Mercouri", emoji: "☕", day: 3, url: "https://www.google.com/maps/place/Melina+Mercouri+Caf%C3%A9/@37.9777706,23.7235029,15.59z/data=!4m14!1m7!3m6!1s0x14a1bd22de5e4785:0xed206abed9960390!2sThanasis!8m2!3d37.9762894!4d23.7264863!16s%2Fg%2F1td2qwz9!3m5!1s0x14a1bd17e3d7762b:0x14836a7f84584371!8m2!3d37.9733376!4d23.7285992!16s%2Fg%2F113f_fvdf?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Oroscopo", emoji: "🍽️", day: 2, url: "https://www.google.com/maps/place/Oroscopo+restaurant/@37.9798166,23.7426965,15z/data=!3m1!5s0x14a1bd47f4fac275:0xa471efb4d45ac27c!4m14!1m7!3m6!1s0x14a1bda0327d5bd1:0x49470109e86c69fb!2sKORA+Kolonaki!8m2!3d37.9801078!4d23.7397032!16s%2Fg%2F11m1cc3sfd!3m5!1s0x14a1bd435a3a3833:0x68dbe9ba33174a8a!8m2!3d37.9734552!4d23.7505042!16s%2Fg%2F1tjyqxwb?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Hitchcocktales", emoji: "🍸", day: 2, url: "https://www.google.com/maps/place/Hitchcocktales+Athens+Bar+Restaurant/@37.9649072,23.7413905,15.31z/data=!3m1!5s0x14a1bd10d2a57cb7:0x3c03b4b3d7f2d2fc!4m6!3m5!1s0x14a1bd10d2c98f9f:0x9f97ba12a81f98a3!8m2!3d37.9682552!4d23.7298978!16s%2Fg%2F11bbrj6cq9?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Hippy3", emoji: "🍸", day: 2, url: "https://www.google.com/maps/place/Hippy3/@37.9687064,23.7459088,15.83z/data=!3m1!5s0x14a1bd42654aa0bd:0xee223631fca471eb!4m7!3m6!1s0x14a1bd80bdbc8b65:0x924df2c0028f0722!8m2!3d37.9699505!4d23.747711!10e9!16s%2Fg%2F11gwmgmmhp?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "ROM COM Athens - Photobooth", emoji: "📸", day: 3, url: "https://www.google.com/maps/place/ROM+COM+Athens+-+Photobooth/@37.9788239,23.7262912,16.03z/data=!4m14!1m7!3m6!1s0x14a1bd17e3d7762b:0x14836a7f84584371!2sMelina+Mercouri+Caf%C3%A9!8m2!3d37.9733376!4d23.7285992!16s%2Fg%2F113f_fvdf!3m5!1s0x14a1bd0004943a47:0xf41f45de61958380!8m2!3d37.9776683!4d23.7303653!16s%2Fg%2F11n3_31xvr?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D" },
      { name: "Ohh Boy", emoji: "🥑", day: 3, url: "https://www.google.com/maps/place/Ohh+Boy/@37.9724319,23.7352888,15z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd422ace3905:0x2e45af25e470a10e!8m2!3d37.9724154!4d23.7455671!16s%2Fg%2F11c6t0pj3h?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "National Museum of Contemporary Art", emoji: "🎨", day: 3, url: "https://www.google.com/maps/place/National+Museum+of+Contemporary+Art+%CE%91thens+(%CE%95%CE%9C%CE%A3%CE%A4)/@37.9641164,23.7222359,16.07z/data=!3m1!5s0x14a1bd0522a0ad01:0xe87dc5c30566de29!4m6!3m5!1s0x14a1bd41acd62d5d:0xe5a1814335639378!8m2!3d37.9630008!4d23.7253443!16s%2Fm%2F065y70b?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "FRED", emoji: "🍹", day: 3, url: "https://www.google.com/maps/place/Fred/@37.9455678,23.7109142,15z/data=!3m1!5s0x14a1bd47f4fac275:0xa471efb4d45ac27c!4m14!1m7!3m6!1s0x14a1bda0327d5bd1:0x49470109e86c69fb!2sKORA+Kolonaki!8m2!3d37.9801078!4d23.7397032!16s%2Fg%2F11m1cc3sfd!3m5!1s0x14a1bd89bde28ad3:0x5bc33233e9c3d3ec!8m2!3d37.9456174!4d23.7106656!16s%2Fg%2F11tmzj4z0w?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Peggy Sue", emoji: "🍸", day: 2, url: "https://www.google.com/maps/place/Peggy+Sue/@37.9463347,23.7008301,15.1z/data=!3m1!5s0x14a1bc5529d38447:0x401b834949bcdfc4!4m14!1m7!3m6!1s0x14a1bda0327d5bd1:0x49470109e86c69fb!2sKORA+Kolonaki!8m2!3d37.9801078!4d23.7397032!16s%2Fg%2F11m1cc3sfd!3m5!1s0x14a1bdfccee39607:0x209f2ca40c3b347d!8m2!3d37.9539409!4d23.7151041!16s%2Fg%2F11tp3v06kq?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Devine Spa", emoji: "💆", day: 3, url: "https://www.google.com/maps?cid=6338285055770001958&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" },
      { name: "THE BOTANY", emoji: "🍷", day: 3, url: "https://www.google.com/maps/place/The+Botany+Roof+Garden+at+Acropolis/@37.9693908,23.7313817,16z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd2a7cc5e78d:0xde900b307f25bb5d!8m2!3d37.9693908!4d23.7313817!16s%2Fg%2F11wr2p0rh1?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "KROSS Coffee Roasters", emoji: "☕", day: 4 },
      { name: "Ariston Bakery", emoji: "☕", day: 1, url: "https://www.google.com/maps/place/Ariston/@37.9767034,23.7223651,15z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd3c177d79a1:0xbff5d74f61cbaaa1!8m2!3d37.9766869!4d23.7326434!16s%2Fg%2F11b6sqpzrs?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "72H Artisanal Bakery & Eatery Athens", emoji: "☕", day: 1, url: "https://www.google.com/maps/place/72H+Artisanal+Bakery+%26+Eatery+Athens/@37.973259,23.7383688,14.71z/data=!4m6!3m5!1s0x14a1bdb03e4053ad:0x40e2cb27f470e9ae!8m2!3d37.9753015!4d23.7312744!16s%2Fg%2F11vyhzz7vd?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D" },
      { name: "Pezoulas", emoji: "☕", day: 2, url: "https://www.google.com/maps/place/Pezoulas/@37.9424404,23.6789063,16z/data=!3m1!5s0x14a1bc153aa12ca3:0x402c6b610cccbfd3!4m24!1m16!4m15!1m6!1m2!1s0x14a1bd42def7dacf:0x781b0be1af04602a!2sIofontos+2,+Athina+116+34,+Greece!2m2!1d23.7500953!2d37.9712555!1m6!1m2!1s0x14a1ebc9e7f3e9a7:0x1441791d1a927d8!2sTaverna+37,+Apollonos+40,+Vouliagmeni+166+71,+Greece!2m2!1d23.770777!2d37.8051711!3e0!3m6!1s0x14a1bc153058dd0d:0x4b26165f8f51bbd2!8m2!3d37.9411944!4d23.6897109!10e9!16s%2Fg%2F1td8v5y5?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Manári Taverna", emoji: "☕", day: 3, url: "https://www.google.com/maps/place/Man%C3%A1ri+Taverna/@37.9792492,23.7270585,16z/data=!3m1!4b1!4m6!3m5!1s0x14a1bdef592a4a55:0x12f7f4ba104bc230!8m2!3d37.9792492!4d23.7296388!16s%2Fg%2F11wbp15m2d?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D" },
],
    packingList: [
      // Chaussures
      { id: "1", name: "Basket", category: "Chaussures" },
      { id: "3", name: "Ballerine", category: "Chaussures" },
      { id: "4", name: "Talons (ouvert/fermé)", category: "Chaussures" },
      { id: "5", name: "Sandales", category: "Chaussures" },
      { id: "6", name: "Flip flop", category: "Chaussures" },
      { id: "7", name: "Boots", category: "Chaussures" },

      // Haut
      { id: "9", name: "T-shirt", category: "Haut" },
      { id: "10", name: "Bretelles", category: "Haut" },
      { id: "11", name: "Crops", category: "Haut" },
      { id: "13", name: "Chemise", category: "Haut" },
      { id: "15", name: "Hoodies", category: "Haut" },
      { id: "16", name: "Pull", category: "Haut" },

      // Robes
      { id: "20", name: "Robe de soirée", category: "Robes" },
      { id: "21", name: "Robe courte d'été", category: "Robes" },
      { id: "22", name: "Robe courte d'hiver", category: "Robes" },
      { id: "23", name: "Robe longue d'été", category: "Robes" },
      { id: "24", name: "Robe longue d'hiver", category: "Robes" },

      // Bas
      { id: "25", name: "Jeans", category: "Bas" },
      { id: "27", name: "Pantalon", category: "Bas" },
      { id: "29", name: "Short", category: "Bas" },
      { id: "32", name: "Jupe", category: "Bas" },
      { id: "33", name: "Legging", category: "Bas" },

      // Sac
      { id: "35", name: "Pochette", category: "Sac" },
      { id: "36", name: "Porte-monnaie (grand/petit)", category: "Sac" },
      { id: "37", name: "Sac croisé", category: "Sac" },
      { id: "38", name: "Sac sur épaule", category: "Sac" },

      // Bijoux
      { id: "39", name: "Boucle d'oreille (longue/petite)", category: "Bijoux" },
      { id: "40", name: "Bracelet", category: "Bijoux" },
      { id: "41", name: "Montre", category: "Bijoux" },
      { id: "42", name: "Bague", category: "Bijoux" },

      // Sous-vêtements
      { id: "43", name: "Culotte", category: "Sous-vêtements" },
      { id: "44", name: "Soutien", category: "Sous-vêtements" },
      { id: "48", name: "Body", category: "Sous-vêtements" },
      { id: "50", name: "Pyjama (hiver et été)", category: "Sous-vêtements" },

      // Trousse de toilette
      { id: "51", name: "Crème", category: "Trousse de toilette" },
      { id: "52", name: "SPF 50", category: "Trousse de toilette" },
      { id: "54", name: "Savon de visage", category: "Trousse de toilette" },
      { id: "56", name: "Brosse à cheveux", category: "Trousse de toilette" },
      { id: "57", name: "Brosse à dents", category: "Trousse de toilette" },
      { id: "58", name: "Dentifrice", category: "Trousse de toilette" },
      { id: "59", name: "Rasoir", category: "Trousse de toilette" },
      { id: "60", name: "Pince à épiler", category: "Trousse de toilette" },
      { id: "61", name: "Maquillage", category: "Trousse de toilette" },

      // Accessoires
      { id: "62", name: "Lunette de soleil", category: "Accessoires" },
      { id: "63", name: "Chapeau", category: "Accessoires" },
      { id: "64", name: "Écharpe", category: "Accessoires" },
      { id: "65", name: "Bonnet", category: "Accessoires" },
      { id: "66", name: "Collant", category: "Accessoires" },
      { id: "67", name: "Gant", category: "Accessoires" },

      // Extra
      { id: "68", name: "Chargeur ordinateur", category: "Extra" },
      { id: "69", name: "Chargeur téléphone", category: "Extra" },
      { id: "70", name: "Écouteur", category: "Extra" },
      { id: "74", name: "Passport", category: "Extra" },
      { id: "75", name: "Livre", category: "Extra" },
      { id: "76", name: "Power bank", category: "Extra" },
      { id: "77", name: "Notebook", category: "Extra" },
      { id: "78", name: "Planner", category: "Extra" },
      { id: "79", name: "Masque", category: "Extra" },
      { id: "80", name: "Hand gel", category: "Extra" },
      { id: "81", name: "Chewing gum", category: "Extra" },
    ],
  },
  {
    id: "mallorca-2025",
    destination: "Mallorca",
    country: "Spain",
    dates: "May 1 – May 10, 2025",
    status: "past",
    image: mallorcaImg,
    description: "Palma & Alcúdia — 10 days of sun, steak & sea.",
    homeBase: {
      label: "Hotel Palma",
      url: "https://www.google.com/maps/place/Palma,+Balearic+Islands,+Spain",
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival & Harbor Views 🌆",
        activities: [
          "2:00 PM — Check into hotel in Palma Old Town",
          "4:30 PM — Walk through the historic La Lonja district",
          "8:30 PM — Sunset seafood dinner at Ca n'Eduardo",
        ],
      },
      {
        day: 2,
        title: "Coastal Biking & Old World Cocktails 🚴",
        activities: [
          "10:00 AM — Rent bikes for the coastal trail from Palma to Portitxol",
          "1:00 PM — Lunch at a chiringuito along the bike path",
          "9:00 PM — Theatrical cocktails at Bar Abaco",
        ],
      },
      {
        day: 3,
        title: "The Meat Lover's Special 🥩",
        activities: [
          "11:00 AM — Explore the local markets of Santa Catalina",
          "3:00 PM — Relaxation at a local city beach",
          "8:30 PM — Premium steak dinner at Brasa Madre Restaurante",
        ],
      },
      {
        day: 4,
        title: "History & High Views 🏰",
        activities: [
          "10:30 AM — Visit the Palma Cathedral (La Seu)",
          "1:00 PM — Tapas crawl through the narrow alleys",
          "5:00 PM — Hike or bike up to Bellver Castle for panoramic views",
        ],
      },
      {
        day: 5,
        title: "Transit to the North 🚗",
        activities: [
          "10:00 AM — Final breakfast in Palma",
          "12:00 PM — Drive or transfer toward the Alcúdia region",
        ],
      },
      {
        day: 6,
        title: "Check-in & Garden Vibes 🌴",
        activities: [
          "2:00 PM — Check into Prinsotel Mal Pas",
          "5:00 PM — Relax by the pool or at Sant Pere beach",
          "8:30 PM — Dinner in the hotel's garden setting",
        ],
      },
      {
        day: 7,
        title: "Signature Dining & Coves 🏖️",
        activities: [
          "11:00 AM — Swimming at the rocky coves of Mal Pas/Bonaire",
          "1:30 PM — Casual lunch at the Bonaire Marina",
          "8:30 PM — Fusion dinner and drinks at 5 Oceanos",
        ],
      },
      {
        day: 8,
        title: "Beach Day & Iconic Paella 🏝️",
        activities: [
          "10:00 AM — Drive to the turquoise waters of Playa de Muro",
          "2:00 PM — Lunch with your feet in the sand at Ponderosa Beach",
        ],
      },
      {
        day: 9,
        title: "Wood-Fired Grills & Port Walks 🔥",
        activities: [
          "11:00 AM — Explore the medieval walls of Alcúdia Old Town",
          "4:00 PM — Bike ride along the Port d'Alcúdia promenade",
          "8:30 PM — Dinner at Muddy's Wood Fired Grill",
        ],
      },
      {
        day: 10,
        title: "Final Feast ✈️",
        activities: [
          "10:00 AM — Last swim at the Mal Pas beaches",
          "1:00 PM — Farewell lunch at Steak House Carabela",
          "6:00 PM — Depart for Palma airport",
        ],
      },
    ],
    locations: [
      // Day 1
      { name: "La Lonja district", emoji: "🏛️", day: 1, url: "https://www.google.com/maps/place/La+Lonja,+Palma,+Mallorca" },
      { name: "Ca n'Eduardo", emoji: "🦞", day: 1, url: "https://www.google.com/maps/place/Ca+n'Eduardo,+Palma,+Mallorca" },
      // Day 2
      { name: "Portitxol", emoji: "🚴", day: 2, url: "https://www.google.com/maps/place/Portitxol,+Palma,+Mallorca" },
      { name: "Bar Abaco", emoji: "🍸", day: 2, url: "https://www.google.com/maps/place/Bar+Abaco,+Palma,+Mallorca" },
      // Day 3
      { name: "Santa Catalina Market", emoji: "🛒", day: 3, url: "https://www.google.com/maps/place/Mercat+de+Santa+Catalina,+Palma" },
      { name: "Brasa Madre", emoji: "🥩", day: 3, url: "https://www.google.com/maps/place/Brasa+Madre+Restaurante,+Palma" },
      // Day 4
      { name: "Palma Cathedral (La Seu)", emoji: "⛪", day: 4, url: "https://www.google.com/maps/place/Cathedral+of+Santa+Maria+of+Palma" },
      { name: "Bellver Castle", emoji: "🏰", day: 4, url: "https://www.google.com/maps/place/Bellver+Castle,+Palma" },
      // Day 6
      { name: "Prinsotel Mal Pas", emoji: "🏨", day: 6, url: "https://www.google.com/maps/place/Prinsotel+Mal+Pas" },
      // Day 7
      { name: "Mal Pas Coves", emoji: "🏖️", day: 7, url: "https://www.google.com/maps/place/Mal+Pas,+Alcudia,+Mallorca" },
      { name: "5 Oceanos", emoji: "🍽️", day: 7, url: "https://www.google.com/maps/place/5+Oceanos,+Alcudia" },
      // Day 8
      { name: "Playa de Muro", emoji: "🏝️", day: 8, url: "https://www.google.com/maps/place/Playa+de+Muro,+Mallorca" },
      { name: "Ponderosa Beach", emoji: "🍹", day: 8, url: "https://www.google.com/maps/place/Ponderosa+Beach,+Mallorca" },
      // Day 9
      { name: "Alcúdia Old Town", emoji: "🏛️", day: 9, url: "https://www.google.com/maps/place/Alcudia+Old+Town" },
      { name: "Muddy's Wood Fired Grill", emoji: "🔥", day: 9, url: "https://www.google.com/maps/place/Muddy's+Wood+Fired+Grill,+Alcudia" },
      // Day 10
      { name: "Steak House Carabela", emoji: "🥩", day: 10, url: "https://www.google.com/maps/place/Steak+House+Carabela,+Alcudia" },
    ],
    packingList: [
      // Chaussures
      { id: "1", name: "Basket (Adidas)", category: "Chaussures" },
      { id: "2", name: "Chaussure de sport", category: "Chaussures" },
      { id: "3", name: "Ballerine", category: "Chaussures" },
      { id: "4", name: "Talons (ouvert/fermé)", category: "Chaussures" },
      { id: "5", name: "Sandales", category: "Chaussures" },
      { id: "6", name: "Flip flop", category: "Chaussures" },
      { id: "7", name: "Boots", category: "Chaussures" },
      { id: "8", name: "Santiague", category: "Chaussures" },

      // Haut
      { id: "9", name: "T-shirt", category: "Haut" },
      { id: "10", name: "Bretelles", category: "Haut" },
      { id: "11", name: "Crops", category: "Haut" },
      { id: "12", name: "Manche longue", category: "Haut" },
      { id: "13", name: "Chemise", category: "Haut" },
      { id: "14", name: "Blouses", category: "Haut" },
      { id: "15", name: "Hoodies", category: "Haut" },
      { id: "16", name: "Pull", category: "Haut" },
      { id: "17", name: "Pull col roulé", category: "Haut" },
      { id: "18", name: "Veste ouverte / à bouton", category: "Haut" },
      { id: "19", name: "T-shirt de sport", category: "Haut" },

      // Robes
      { id: "20", name: "Robe de soirée", category: "Robes" },
      { id: "21", name: "Robe courte d'été", category: "Robes" },
      { id: "22", name: "Robe courte d'hiver", category: "Robes" },
      { id: "23", name: "Robe longue d'été", category: "Robes" },
      { id: "24", name: "Robe longue d'hiver", category: "Robes" },

      // Bas
      { id: "25", name: "Jeans", category: "Bas" },
      { id: "26", name: "Pantalon de travail", category: "Bas" },
      { id: "27", name: "Pantalon large", category: "Bas" },
      { id: "28", name: "Jeans noir", category: "Bas" },
      { id: "29", name: "Short", category: "Bas" },
      { id: "30", name: "Jupe en cuir", category: "Bas" },
      { id: "31", name: "Jupe short noir en daim", category: "Bas" },
      { id: "32", name: "Jupe longue", category: "Bas" },
      { id: "33", name: "Legging", category: "Bas" },

      // Sac
      { id: "34", name: "Cartable", category: "Sac" },
      { id: "35", name: "Pochette", category: "Sac" },
      { id: "36", name: "Porte-monnaie (grand/petit)", category: "Sac" },
      { id: "37", name: "Sac croisé", category: "Sac" },
      { id: "38", name: "Sac sur épaule", category: "Sac" },

      // Bijoux
      { id: "39", name: "Boucle d'oreille (longue/petite)", category: "Bijoux" },
      { id: "40", name: "Bracelet", category: "Bijoux" },
      { id: "41", name: "Montre", category: "Bijoux" },
      { id: "42", name: "Bague", category: "Bijoux" },

      // Sous-vêtements
      { id: "43", name: "Culotte de règle", category: "Sous-vêtements" },
      { id: "44", name: "Soutien", category: "Sous-vêtements" },
      { id: "45", name: "Brassière", category: "Sous-vêtements" },
      { id: "46", name: "Soutien de sport", category: "Sous-vêtements" },
      { id: "47", name: "Short de dessous de robe", category: "Sous-vêtements" },
      { id: "48", name: "Body", category: "Sous-vêtements" },
      { id: "49", name: "String", category: "Sous-vêtements" },
      { id: "50", name: "Pyjama (hiver et été)", category: "Sous-vêtements" },

      // Trousse de toilette
      { id: "51", name: "Crème de jour", category: "Trousse de toilette" },
      { id: "52", name: "SPF 50", category: "Trousse de toilette" },
      { id: "53", name: "Crème pour les mains", category: "Trousse de toilette" },
      { id: "54", name: "Savon de visage", category: "Trousse de toilette" },
      { id: "55", name: "Produit intime", category: "Trousse de toilette" },
      { id: "56", name: "Brosse à cheveux", category: "Trousse de toilette" },
      { id: "57", name: "Brosse à dents", category: "Trousse de toilette" },
      { id: "58", name: "Dentifrice", category: "Trousse de toilette" },
      { id: "59", name: "Rasoir", category: "Trousse de toilette" },
      { id: "60", name: "Pince à épiler", category: "Trousse de toilette" },
      { id: "61", name: "Maquillage (mascara, rouge à lèvres, fard à paupière...)", category: "Trousse de toilette" },

      // Accessoires
      { id: "62", name: "Lunette de soleil", category: "Accessoires" },
      { id: "63", name: "Chapeau", category: "Accessoires" },
      { id: "64", name: "Écharpe", category: "Accessoires" },
      { id: "65", name: "Bonnet", category: "Accessoires" },
      { id: "66", name: "Collant", category: "Accessoires" },
      { id: "67", name: "Gant", category: "Accessoires" },

      // Extra
      { id: "68", name: "Chargeur ordinateur", category: "Extra" },
      { id: "69", name: "Chargeur téléphone", category: "Extra" },
      { id: "70", name: "Écouteur", category: "Extra" },
      { id: "71", name: "Séchoir", category: "Extra" },
      { id: "72", name: "Fer à lisser", category: "Extra" },
      { id: "73", name: "Fer à boucler", category: "Extra" },
      { id: "74", name: "Passport", category: "Extra" },
      { id: "75", name: "Livre", category: "Extra" },
      { id: "76", name: "Power bank", category: "Extra" },
      { id: "77", name: "Notebook", category: "Extra" },
      { id: "78", name: "Planner", category: "Extra" },
      { id: "79", name: "Masque", category: "Extra" },
      { id: "80", name: "Hand gel", category: "Extra" },
      { id: "81", name: "Chewing gum", category: "Extra" },
      { id: "82", name: "Matériel de peinture", category: "Extra" },
    ],
  },
  {
    id: "lebanon-2025",
    destination: "Beirut & Coastal Lebanon",
    country: "Lebanon",
    dates: "Jul 1 – Jul 15, 2025",
    status: "past",
    image: lebanonImg,
    description: "15 days of Beirut nightlife, coastal charm, and Mediterranean cuisine.",
    homeBase: {
      label: "Downtown Beirut Hotel",
      url: "https://www.google.com/maps/place/Downtown+Beirut,+Lebanon",
    },
    itinerary: [
      {
        day: 1,
        title: "Downtown & Grandeur 🌆",
        activities: [
          "9:00 AM — Breakfast at Café Younes",
          "11:00 AM — Visit Mohammad Al Amin Mosque and Martyrs' Square",
          "1:00 PM — Lunch at SALATA",
          "8:30 PM — Dinner at Em Sherif",
        ],
      },
      {
        day: 2,
        title: "Coastal Sunsets & Rooftop Vibes 🌅",
        activities: [
          "9:00 AM — Breakfast at Bay Rock Cafe",
          "11:00 AM — Walk the Beirut Corniche to Rawsha",
          "1:00 PM — Lunch at Urbanista",
          "8:30 PM — Dinner at Le Relais de l'Entrecôte",
          "11:00 PM — Late night cocktails at Iris",
        ],
      },
      {
        day: 3,
        title: "History & Underground Beats 🎵",
        activities: [
          "9:00 AM — Breakfast at Bartartine",
          "11:00 AM — Tour the National Museum of Beirut",
          "1:00 PM — Lunch at Mamma In Cucina",
          "8:30 PM — Dinner at Swiss Butter",
          "11:00 PM — Late night at B 018 underground club",
        ],
      },
      {
        day: 4,
        title: "Marina Luxury & Posh Pubs 🛥️",
        activities: [
          "9:00 AM — Breakfast at Café Hamra",
          "12:00 PM — Shopping at Beirut Souks and Zaitunay Bay marina",
          "1:30 PM — Lunch at Em Sherif SEA Cafe",
          "8:30 PM — Dinner at Ferdinand",
          "11:00 PM — Nightcap at Albergo (reservation needed)",
        ],
      },
      {
        day: 5,
        title: "Modern Vibes & Waterfront Techno 🎨",
        activities: [
          "9:00 AM — Breakfast and specialty coffee at SIP",
          "12:00 PM — Explore Ottoman architecture and art galleries of Gemmayzeh",
          "1:30 PM — Lunch at Glow",
          "8:30 PM — Dinner at The Terrible Prince",
          "11:00 PM — Late night at AHM waterfront techno club",
        ],
      },
      {
        day: 6,
        title: "Byblos Ancient Soul 🏛️",
        activities: [
          "8:00 AM — Breakfast and road food at Em Sherif Deli",
          "10:00 AM — Drive to Byblos",
          "12:00 PM — Tour Byblos Citadel and ancient Phoenician port",
          "2:00 PM — Lunch at a mezze restaurant by the sea",
          "8:00 PM — Fresh seafood dinner in Old Souks of Jbeil",
        ],
      },
      {
        day: 7,
        title: "Batroun Sea & Lemonade 🍋",
        activities: [
          "10:00 AM — Explore Phoenician Wall and coastal alleys",
          "1:00 PM — Local Batroun snacks and famous lemonade",
          "6:00 PM — Sunset drinks and tapas at a Batroun beach bar",
        ],
      },
      {
        day: 8,
        title: "Tripoli Northern Heritage 🕌",
        activities: [
          "9:00 AM — Visit Citadel of Raymond de Saint-Gilles",
          "11:00 AM — Explore historic Mamluk souks",
          "2:00 PM — Lunch with Tripoli's famous Moghrabieh and traditional sweets",
          "6:00 PM — Return to Beirut",
        ],
      },
      {
        day: 9,
        title: "Baalbeck City of the Sun ☀️",
        activities: [
          "8:00 AM — Full-day trip to Bekaa Valley",
          "11:00 AM — Explore Temples of Baalbeck",
          "1:00 PM — Lunch in Baalbeck",
          "5:00 PM — Return to Beirut",
          "10:30 PM — Dancing at The Grand Factory rooftop",
        ],
      },
      {
        day: 10,
        title: "Damour Beach Club Recovery 🏖️",
        activities: [
          "10:00 AM — Full day at The Palms Ladies Resort",
          "All day — Pool and beach vibes",
          "8:00 PM — Return to Beirut",
        ],
      },
      {
        day: 11,
        title: "Badaro Pub Life 🍺",
        activities: [
          "10:00 AM — Visit Horsh Beirut park",
          "1:00 PM — Lunch at Urbanista",
          "7:00 PM — Pub crawl in Badaro starting at Kissproof",
        ],
      },
      {
        day: 12,
        title: "Mar Mikhael Energy 🎨",
        activities: [
          "9:00 AM — Breakfast at Bartartine",
          "11:00 AM — Photography walk through Armenia Street's street art",
          "8:00 PM — Dinner at Swiss Butter",
        ],
      },
      {
        day: 13,
        title: "Rooftop Sunsets 🌅",
        activities: [
          "1:00 PM — Lunch at Mamma In Cucina",
          "5:00 PM — Sunset at Le Gray Beirut rooftop for city views",
          "8:30 PM — Dinner in the area",
        ],
      },
      {
        day: 14,
        title: "Final Night Smash 🎉",
        activities: [
          "1:00 PM — Light lunch at SALATA",
          "8:30 PM — One last burger at The Terrible Prince",
          "11:00 PM — Final night out",
        ],
      },
      {
        day: 15,
        title: "Farewell Beirut ✈️",
        activities: [
          "9:00 AM — Farewell breakfast at Café Younes",
          "12:00 PM — Departure to airport",
        ],
      },
    ],
    locations: [
      { name: "Café Younes", emoji: "☕", day: 1, url: "https://www.google.com/maps/place/Cafe+Younes/@33.8948601,35.4690441,15z/data=!3m1!4b1!4m6!3m5!1s0x151f172b1a81a8f3:0xf3dfe2b66fb2bacc!8m2!3d33.8948427!4d35.4793224!16s%2Fg%2F11c40nfb2z?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Mohammad Al Amin Mosque", emoji: "🕌", day: 1, url: "https://www.google.com/maps/place/Mohammad+Al+Amin+Mosque/@33.8952024,35.495989,15z/data=!3m1!4b1!4m6!3m5!1s0x151f16e408ee8643:0xb789bd61b173f6e1!8m2!3d33.895185!4d35.5062673!16s%2Fm%2F02qcrvl?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Martyrs' Square", emoji: "📍", day: 1, url: "https://www.google.com/maps/place/Mohammad+Al+Amin+Mosque/@33.8952024,35.495989,15z/data=!3m1!4b1!4m6!3m5!1s0x151f16e408ee8643:0xb789bd61b173f6e1!8m2!3d33.895185!4d35.5062673!16s%2Fm%2F02qcrvl?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "SALATA", emoji: "🥗", day: 1, url: "https://www.google.com/maps/place/SALATA/@33.8950527,35.5033016,15z/data=!3m1!4b1!4m6!3m5!1s0x151f170f4ecd0c87:0xf5c53b5df131b1a7!8m2!3d33.8950353!4d35.5135799!16s%2Fg%2F11t7sz5_n0?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Em Sherif", emoji: "🍽️", day: 1, url: "https://www.google.com/maps/place/Em+Sherif+Cafe/@48.8754186,2.3038555,15z/data=!3m1!4b1!4m6!3m5!1s0x47e66f004ee32b35:0xb124e16dc825fb04!8m2!3d48.8754049!4d2.3141338!16s%2Fg%2F11w53l0_2q?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Bay Rock Cafe", emoji: "☕", day: 2, url: "https://www.google.com/maps/place/Bay+Rock+Cafe/@33.8905917,35.4612691,15z/data=!3m1!4b1!4m6!3m5!1s0x151f10ce198c1753:0x67e9dff8cdd08762!8m2!3d33.8905743!4d35.4715474!16s%2Fg%2F1tdrbf99?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Rawsha", emoji: "🏖️", day: 2, url: "https://www.google.com/maps/place/Bay+Rock+Cafe/@33.8905917,35.4612691,15z/data=!3m1!4b1!4m6!3m5!1s0x151f10ce198c1753:0x67e9dff8cdd08762!8m2!3d33.8905743!4d35.4715474!16s%2Fg%2F1tdrbf99?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Urbanista", emoji: "🍴", day: 2, url: "https://www.google.com/maps/search/UrbanistaUrbanista/@33.8918518,35.5063606,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Le Relais de l'Entrecôte", emoji: "🥩", day: 2, url: "https://www.google.com/maps/place/Le+Relais+de+l'Entrecôte/@33.8950605,35.502397,15z/data=!4m6!3m5!1s0x151f171d74fdf03f:0x1db9835ebf77281!8m2!3d33.8881056!4d35.5084871!16s%2Fg%2F1tk4hm_z?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Iris", emoji: "🍸", day: 2, url: "https://www.google.com/maps/place/Iris/@33.906598,35.5002359,15z/data=!3m1!4b1!4m6!3m5!1s0x151f1732950b2097:0x99571e4d0c40967d!8m2!3d33.9065806!4d35.5105142!16s%2Fg%2F11bzrgqct_?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Bartartine", emoji: "🥐", day: 3, url: "https://www.google.com/maps/place/Bartartine+-+St.+Nicolas/@33.8919286,35.47947,13z/data=!4m10!1m2!2m1!1sBartartine+(Gemmayzeh)+!3m6!1s0x151f16fc7829f5a1:0xa7e99c7adf21f527!8m2!3d33.8919286!4d35.5144889!15sChZCYXJ0YXJ0aW5lIChHZW1tYXl6ZWgpIgOIAQFaFiIUYmFydGFydGluZSBnZW1tYXl6ZWiSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11gcx_vl0_?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "National Museum of Beirut", emoji: "🏛️", day: 3, url: "https://www.google.com/maps/place/Mohammad+Al+Amin+Mosque/@33.8952024,35.495989,15z/data=!3m1!4b1!4m6!3m5!1s0x151f16e408ee8643:0xb789bd61b173f6e1!8m2!3d33.895185!4d35.5062673!16s%2Fm%2F02qcrvl?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Mamma In Cucina", emoji: "🇮🇹", day: 3, url: "https://www.google.com/maps/place/Mamma+In+Cucina/@33.8949464,35.5090951,15z/data=!3m1!4b1!4m6!3m5!1s0x151f1740d67ae447:0xa5442ff05bb717f9!8m2!3d33.894929!4d35.5193734!16s%2Fg%2F11sckh4hw2?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Swiss Butter", emoji: "🥩", day: 3, url: "https://www.google.com/maps/place/Swiss+Butter/@33.8892999,35.4980099,15z/data=!4m6!3m5!1s0x151f16fb1e402223:0xc6e1c903c2a6bf6a!8m2!3d33.8950431!4d35.5126753!16s%2Fg%2F11fx7w969t?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "B 018", emoji: "🎵", day: 3, url: "https://www.google.com/maps/place/B+018/@33.8985047,35.5316285,17z/data=!4m6!3m5!1s0x151f1642c26c0789:0x8987b86876bec8ae!8m2!3d33.8985047!4d35.5342088!16s%2Fm%2F0hgn60t?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Café Hamra", emoji: "☕", day: 4, url: "https://www.google.com/maps/place/Caf%C3%A9+Hamra/@33.8961931,35.4691267,15z/data=!3m1!4b1!4m6!3m5!1s0x151f172b219de009:0x63d30261f26741c5!8m2!3d33.8961757!4d35.479405!16s%2Fg%2F11cntr934p?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Beirut Souks", emoji: "🏬", day: 4, url: "https://www.google.com/maps/place/Martyrs+Square+Beirut/@33.8952024,35.495989,15z/data=!3m1!4b1!4m6!3m5!1s0x151f16e408ee8643:0xb789bd61b173f6e1!8m2!3d33.895185!4d35.5062673!16s%2Fm%2F02qcrvl?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Zaitunay Bay", emoji: "⛵", day: 4, url: "https://www.google.com/maps/place/Iris/@33.906598,35.5002359,15z/data=!3m1!4b1!4m6!3m5!1s0x151f1732950b2097:0x99571e4d0c40967d!8m2!3d33.9065806!4d35.5105142!16s%2Fg%2F11bzrgqct_?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Em Sherif SEA Cafe", emoji: "🦞", day: 4, url: "https://www.google.com/maps/place/Em+Sherif+Cafe/@48.8754186,2.3038555,15z/data=!3m1!4b1!4m6!3m5!1s0x47e66f004ee32b35:0xb124e16dc825fb04!8m2!3d48.8754049!4d2.3141338!16s%2Fg%2F11w53l0_2q?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Ferdinand", emoji: "🍺", day: 4, url: "https://www.google.com/maps/place/Albergo/@33.906598,35.5002359,15z/data=!4m9!3m8!1s0x151f1702a3537ef7:0xe72972f5a3768611!5m2!4m1!1i2!8m2!3d33.8880005!4d35.510205!16s%2Fg%2F1vxv3g5b?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Albergo", emoji: "🥂", day: 4, url: "https://www.google.com/maps/place/Albergo/@33.906598,35.5002359,15z/data=!4m9!3m8!1s0x151f1702a3537ef7:0xe72972f5a3768611!5m2!4m1!1i2!8m2!3d33.8880005!4d35.510205!16s%2Fg%2F1vxv3g5b?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "SIP", emoji: "☕", day: 5, url: "https://www.google.com/maps/place/SIP/@33.8920574,35.4794699,13z/data=!4m10!1m2!2m1!1sSIP!3m6!1s0x151f16fb2848aed3:0x189ddde6f327ced4!8m2!3d33.8951613!4d35.5152216!15sCgNTSVBaBSIDc2lwkgEEY2FmZeABAA!16s%2Fg%2F11f_fw79lx?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Gemmayzeh", emoji: "🎨", day: 5, url: "https://www.google.com/maps/place/Bartartine+-+St.+Nicolas/@33.8919286,35.47947,13z/data=!4m10!1m2!2m1!1sBartartine+(Gemmayzeh)+!3m6!1s0x151f16fc7829f5a1:0xa7e99c7adf21f527!8m2!3d33.8919286!4d35.5144889!15sChZCYXJ0YXJ0aW5lIChHZW1tYXl6ZWgpIgOIAQFaFiIUYmFydGFydGluZSBnZW1tYXl6ZWiSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11gcx_vl0_?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Glow", emoji: "✨", day: 5, url: "https://www.google.com/maps/place/The+Glow+Paradise+-+Delivery+Kitchen/@33.8939857,35.5107719,16.69z/data=!4m10!1m2!2m1!1sGlow!3m6!1s0x151f17b894897665:0xc89612547c61aea1!8m2!3d33.8902341!4d35.5077494!15sCgRHbG93WgYiBGdsb3eSAQ1tZWFsX3Rha2Vhd2F5mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5LTVhaWVVMjVW5RUXgAQD6AQQIABAl!16s%2Fg%2F11ptvvvsh9?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "The Terrible Prince", emoji: "🍔", day: 5, url: "https://www.google.com/maps/place/The+Terrible+Prince/@33.8892999,35.4980099,15z/data=!3m1!4b1!4m6!3m5!1s0x151f170067d5d925:0xb1122029b6f9fcea!8m2!3d33.8892825!4d35.5082882!16s%2Fg%2F11vk5bhxwp?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "AHM", emoji: "🎶", day: 5, url: "https://www.google.com/maps/place/AHM/@33.905348,35.496979,15z/data=!3m1!4b1!4m6!3m5!1s0x151f16ec6c30c98d:0x1d977dd39911eae2!8m2!3d33.9053306!4d35.5072573!16s%2Fg%2F11fxx3tyxb?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Em Sherif Deli", emoji: "🥪", day: 6, url: "https://www.google.com/maps/place/Em+Sherif+Cafe/@48.8754186,2.3038555,15z/data=!3m1!4b1!4m6!3m5!1s0x47e66f004ee32b35:0xb124e16dc825fb04!8m2!3d48.8754049!4d2.3141338!16s%2Fg%2F11w53l0_2q?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Byblos Citadel", emoji: "🏰", day: 6, url: "https://www.google.com/maps/place/Byblos+Dock+And+Fishing+Port/@34.1207839,35.6401638,16z/data=!4m10!1m2!2m1!1sByblos+%2F+Jbeil+(Vieux+Port)!3m6!1s0x151f5cade6c8836d:0x9d5dcc038e1345d7!8m2!3d34.1217088!4d35.6435485!15sChtCeWJsb3MgLyBKYmVpbCAoVmlldXggUG9ydClaGSIXYnlibG9zIGpiZWlsIHZpZXV4IHBvcnSSAQlib2F0X3JhbXCaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTldiRnB5WHkxQlJSQULgAQD6AQQIABAb!16s%2Fm%2F02rmg57?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Byblos Old Souks", emoji: "🏪", day: 6, url: "https://www.google.com/maps/place/Byblos+Dock+And+Fishing+Port/@34.1207839,35.6401638,16z/data=!4m10!1m2!2m1!1sByblos+%2F+Jbeil+(Vieux+Port)!3m6!1s0x151f5cade6c8836d:0x9d5dcc038e1345d7!8m2!3d34.1217088!4d35.6435485!15sChtCeWJsb3MgLyBKYmVpbCAoVmlldXggUG9ydClaGSIXYnlibG9zIGpiZWlsIHZpZXV4IHBvcnSSAQlib2F0X3JhbXCaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTldiRnB5WHkxQlJSQULgAQD6AQQIABAb!16s%2Fm%2F02rmg57?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Batroun", emoji: "🌊", day: 7, url: "https://www.google.com/maps/place/Batroun,+Lebanon/@34.2500943,35.6216859,13z/data=!3m1!4b1!4m6!3m5!1s0x151f58b24cc6e709:0xfd68c47a5405dcad!8m2!3d34.2500307!4d35.6627997!16s%2Fg%2F122jqlp9?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Tripoli Citadel", emoji: "🏛️", day: 8, url: "https://www.google.com/maps/place/Tripoli+Citadel" },
      { name: "Tripoli Souks", emoji: "🏬", day: 8, url: "https://www.google.com/maps/place/Tripoli+Souks" },
      { name: "Baalbeck Temples", emoji: "⛩️", day: 9, url: "https://www.google.com/maps/place/Temple+of+Bacchus/@34.0048028,36.1704999,13z/data=!4m15!1m8!3m7!1s0x1518a17d7177e915:0xc0d03df81962b370!2sBaalbek,+Lebanon!3b1!8m2!3d34.004739!4d36.2116137!16zL20vMGZ5bGM!3m5!1s0x1518a3d8a9180813:0x8fcdd59950533d0e!8m2!3d34.0064861!4d36.2039882!16s%2Fm%2F026ksbh?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Bekaa Valley", emoji: "🏞️", day: 9, url: "https://www.google.com/maps/place/Bekaa+Valley" },
      { name: "The Grand Factory", emoji: "🏭", day: 9, url: "https://www.google.com/maps/place/The+Grand+Factory/@33.8996217,35.5316849,15z/data=!3m1!4b1!4m6!3m5!1s0x151f166a9b97865b:0x4211af1eb11d25ca!8m2!3d33.8996043!4d35.5419632!16s%2Fg%2F1hm6h6v6g?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "The Palms Ladies Resort", emoji: "🏖️", day: 10, url: "https://www.google.com/maps/place/Palms+Beach+House/@33.9833357,35.6190323,15z/data=!3m1!4b1!4m6!3m5!1s0x151f417df679104d:0xaafa991235c672b4!8m2!3d33.9833183!4d35.6293106!16s%2Fg%2F11fwsy3_87?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Horsh Beirut", emoji: "🌳", day: 11, url: "https://www.google.com/maps/place/Mohammad+Al+Amin+Mosque/@33.8952024,35.495989,15z/data=!3m1!4b1!4m6!3m5!1s0x151f16e408ee8643:0xb789bd61b173f6e1!8m2!3d33.895185!4d35.5062673!16s%2Fm%2F02qcrvl?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Kissproof", emoji: "🍺", day: 11, url: "https://www.google.com/maps/contrib/108059572816570960694/reviews?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Armenia Street", emoji: "🎨", day: 12, url: "https://www.google.com/maps/place/Bartartine+-+St.+Nicolas/@33.8919286,35.47947,13z/data=!4m10!1m2!2m1!1sBartartine+(Gemmayzeh)+!3m6!1s0x151f16fc7829f5a1:0xa7e99c7adf21f527!8m2!3d33.8919286!4d35.5144889!15sChZCYXJ0YXJ0aW5lIChHZW1tYXl6ZWgpIgOIAQFaFiIUYmFydGFydGluZSBnZW1tYXl6ZWiSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11gcx_vl0_?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Armenia Street", emoji: "🎨", day: 12, url: "https://www.google.com/maps/place/Bartartine+-+St.+Nicolas/@33.8919286,35.47947,13z/data=!4m10!1m2!2m1!1sBartartine+(Gemmayzeh)+!3m6!1s0x151f16fc7829f5a1:0xa7e99c7adf21f527!8m2!3d33.8919286!4d35.5144889!15sChZCYXJ0YXJ0aW5lIChHZW1tYXl6ZWgpIgOIAQFaFiIUYmFydGFydGluZSBnZW1tYXl6ZWiSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11gcx_vl0_?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
      { name: "Le Gray Beirut", emoji: "🏨", day: 13, url: "https://www.google.com/maps/place/Le+Gray,+Beirut/@33.8880527,35.4999267,15.21z/data=!4m14!1m2!2m1!1sLe+Gray+(Cherry+on+the+Rooftop)!3m10!1s0x151f1797923c6ebb:0xbf387dfe537c461!5m3!1s2026-04-24!4m1!1i2!8m2!3d33.8972396!4d35.5067343!15sCh9MZSBHcmF5IChDaGVycnkgb24gdGhlIFJvb2Z0b3ApWh8iHWxlIGdyYXkgY2hlcnJ5IG9uIHRoZSByb29mdG9wkgEFaG90ZWyaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVhTmxWV09YaGhTRlV3VTBZNU5tTXdSbXhWTVdoRFRtNVNabEZWUlJBQuABAPoBBQjLARAn!16s%2Fg%2F1tglcs7s?entry=ttu&g_ep=EgoyMDI2MDMzOC4xIKXMDSoASAFQAw%3D%3D" },
    ],
    packingList: [
      // Chaussures
      { id: "1", name: "Basket (Adidas)", category: "Chaussures" },
      { id: "2", name: "Chaussure de sport", category: "Chaussures" },
      { id: "3", name: "Ballerine", category: "Chaussures" },
      { id: "4", name: "Talons (ouvert/fermé)", category: "Chaussures" },
      { id: "5", name: "Sandales", category: "Chaussures" },
      { id: "6", name: "Flip flop", category: "Chaussures" },
      { id: "7", name: "Boots", category: "Chaussures" },
      { id: "8", name: "Santiague", category: "Chaussures" },

      // Haut
      { id: "9", name: "T-shirt", category: "Haut" },
      { id: "10", name: "Bretelles", category: "Haut" },
      { id: "11", name: "Crops", category: "Haut" },
      { id: "12", name: "Manche longue", category: "Haut" },
      { id: "13", name: "Chemise", category: "Haut" },
      { id: "14", name: "Blouses", category: "Haut" },
      { id: "15", name: "Hoodies", category: "Haut" },
      { id: "16", name: "Pull", category: "Haut" },
      { id: "17", name: "Pull col roulé", category: "Haut" },
      { id: "18", name: "Veste ouverte / à bouton", category: "Haut" },
      { id: "19", name: "T-shirt de sport", category: "Haut" },

      // Robes
      { id: "20", name: "Robe de soirée", category: "Robes" },
      { id: "21", name: "Robe courte d'été", category: "Robes" },
      { id: "22", name: "Robe courte d'hiver", category: "Robes" },
      { id: "23", name: "Robe longue d'été", category: "Robes" },
      { id: "24", name: "Robe longue d'hiver", category: "Robes" },

      // Bas
      { id: "25", name: "Jeans", category: "Bas" },
      { id: "26", name: "Pantalon de travail", category: "Bas" },
      { id: "27", name: "Pantalon large", category: "Bas" },
      { id: "28", name: "Jeans noir", category: "Bas" },
      { id: "29", name: "Short", category: "Bas" },
      { id: "30", name: "Jupe en cuir", category: "Bas" },
      { id: "31", name: "Jupe short noir en daim", category: "Bas" },
      { id: "32", name: "Jupe longue", category: "Bas" },
      { id: "33", name: "Legging", category: "Bas" },

      // Sac
      { id: "34", name: "Cartable", category: "Sac" },
      { id: "35", name: "Pochette", category: "Sac" },
      { id: "36", name: "Porte-monnaie (grand/petit)", category: "Sac" },
      { id: "37", name: "Sac croisé", category: "Sac" },
      { id: "38", name: "Sac sur épaule", category: "Sac" },

      // Bijoux
      { id: "39", name: "Boucle d'oreille (longue/petite)", category: "Bijoux" },
      { id: "40", name: "Bracelet", category: "Bijoux" },
      { id: "41", name: "Montre", category: "Bijoux" },
      { id: "42", name: "Bague", category: "Bijoux" },

      // Sous-vêtements
      { id: "43", name: "Culotte de règle", category: "Sous-vêtements" },
      { id: "44", name: "Soutien", category: "Sous-vêtements" },
      { id: "45", name: "Brassière", category: "Sous-vêtements" },
      { id: "46", name: "Soutien de sport", category: "Sous-vêtements" },
      { id: "47", name: "Short de dessous de robe", category: "Sous-vêtements" },
      { id: "48", name: "Body", category: "Sous-vêtements" },
      { id: "49", name: "String", category: "Sous-vêtements" },
      { id: "50", name: "Pyjama (hiver et été)", category: "Sous-vêtements" },

      // Trousse de toilette
      { id: "51", name: "Crème de jour", category: "Trousse de toilette" },
      { id: "52", name: "SPF 50", category: "Trousse de toilette" },
      { id: "53", name: "Crème pour les mains", category: "Trousse de toilette" },
      { id: "54", name: "Savon de visage", category: "Trousse de toilette" },
      { id: "55", name: "Produit intime", category: "Trousse de toilette" },
      { id: "56", name: "Brosse à cheveux", category: "Trousse de toilette" },
      { id: "57", name: "Brosse à dents", category: "Trousse de toilette" },
      { id: "58", name: "Dentifrice", category: "Trousse de toilette" },
      { id: "59", name: "Rasoir", category: "Trousse de toilette" },
      { id: "60", name: "Pince à épiler", category: "Trousse de toilette" },
      { id: "61", name: "Maquillage (mascara, rouge à lèvres, fard à paupière...)", category: "Trousse de toilette" },

      // Accessoires
      { id: "62", name: "Lunette de soleil", category: "Accessoires" },
      { id: "63", name: "Chapeau", category: "Accessoires" },
      { id: "64", name: "Écharpe", category: "Accessoires" },
      { id: "65", name: "Bonnet", category: "Accessoires" },
      { id: "66", name: "Collant", category: "Accessoires" },
      { id: "67", name: "Gant", category: "Accessoires" },

      // Extra
      { id: "68", name: "Chargeur ordinateur", category: "Extra" },
      { id: "69", name: "Chargeur téléphone", category: "Extra" },
      { id: "70", name: "Écouteur", category: "Extra" },
      { id: "71", name: "Séchoir", category: "Extra" },
      { id: "72", name: "Fer à lisser", category: "Extra" },
      { id: "73", name: "Fer à boucler", category: "Extra" },
      { id: "74", name: "Passport", category: "Extra" },
      { id: "75", name: "Livre", category: "Extra" },
      { id: "76", name: "Power bank", category: "Extra" },
      { id: "77", name: "Notebook", category: "Extra" },
      { id: "78", name: "Planner", category: "Extra" },
      { id: "79", name: "Masque", category: "Extra" },
      { id: "80", name: "Hand gel", category: "Extra" },
      { id: "81", name: "Chewing gum", category: "Extra" },
      { id: "82", name: "Matériel de peinture", category: "Extra" },
    ],
  },
];
