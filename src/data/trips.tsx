import borneSulinowoImg from "../assets/trips/26.10.2025 Borne Sulinowo.jpg";
import cieszynImg from "../assets/trips/8.11.2025 Cieszyn.jpg";
import lichenImg from "../assets/trips/15.11.2025 Lichen.jpg";
import pragaImg from "../assets/trips/13.12.2025 Praga.jpg";
import borneSulinowoThumb from "../assets/trips/thumbnails/borneSulinowo.jpg";
import cieszynThumb from "../assets/trips/thumbnails/cieszyn.jpg";
import lichenThumb from "../assets/trips/thumbnails/lichen.jpg";
import pragaThumb from "../assets/trips/thumbnails/praga.jpg";

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
];
