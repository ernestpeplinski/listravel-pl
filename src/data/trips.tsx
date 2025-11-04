import borneSulinowoImg from "../assets/trips/26.10.2025 Borne Sulinowo.jpg";
import cieszynImg from "../assets/trips/8.11.2025 Cieszyn.jpg";
import lichenImg from "../assets/trips/15.11.2025 Lichen.jpg";
import pragaImg from "../assets/trips/13.12.2025 Praga.jpg";
import pruszczImg from "../assets/trips/22.11.2025 Pruszcz Gdanski.jpg";
import jarmarkTorunBgdImg from "../assets/trips/6.12.2025 Bydgoszcz Torun Jarmark.jpg";
import borneSulinowoThumb from "../assets/trips/thumbnails/borneSulinowo.jpg";
import cieszynThumb from "../assets/trips/thumbnails/cieszyn.jpg";
import lichenThumb from "../assets/trips/thumbnails/lichen.jpg";
import pragaThumb from "../assets/trips/thumbnails/praga.jpg";
import pruszczLuminaThumb from "../assets/trips/thumbnails/pruszczLuminaPark.jpg";
import jarmarkTorunBgdThumb from "../assets/trips/thumbnails/jarmarkTorun.jpg";

export interface Trip {
  startDate: Date;
  endDate: Date;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  thumbnailUrl?: string;
}

export const trips: Trip[] = [
  {
    startDate: new Date("2025-10-26"),
    endDate: new Date("2025-10-26"),
    title: "Borne Sulinowo",
    description: "Z przewodnikiem Panem Wiesławem",
    price: 200,
    imageUrl: borneSulinowoImg,
    thumbnailUrl: borneSulinowoThumb,
  },
  {
    startDate: new Date("2025-11-08"),
    endDate: new Date("2025-11-11"),
    title: "Wisła, Cieszyn i okolice",
    description: "",
    price: 1700,
    imageUrl: cieszynImg,
    thumbnailUrl: cieszynThumb,
  },
  {
    startDate: new Date("2025-11-15"),
    endDate: new Date("2025-11-16"),
    title: "Strzelino - Licheń",
    description: "",
    price: 440,
    imageUrl: lichenImg,
    thumbnailUrl: lichenThumb,
  },
  {
    startDate: new Date("2025-12-13"),
    endDate: new Date("2025-12-14"),
    title: "Jarmark Bożonarodzeniowy w Pradze",
    description: "",
    price: 650,
    imageUrl: pragaImg,
    thumbnailUrl: pragaThumb,
  },
  {
    startDate: new Date("2025-11-22"),
    endDate: new Date("2025-11-22"),
    title: "LUMINA PARK Pruszcz Gdański",
    description: "",
    price: 155,
    imageUrl: pruszczImg,
    thumbnailUrl: pruszczLuminaThumb,
  },
  {
    startDate: new Date("2025-12-06"),
    endDate: new Date("2025-12-06"),
    title: "Mikołajkowy Jarmark w Bydgoszczy i w Toruniu",
    description: "",
    price: 175,
    imageUrl: jarmarkTorunBgdImg,
    thumbnailUrl: jarmarkTorunBgdThumb,
  },
];
