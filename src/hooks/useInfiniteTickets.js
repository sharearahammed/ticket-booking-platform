import { useInfiniteQuery } from "@tanstack/react-query";
// Movies
import DunePartThree from "../assets/file/Movies/Dune three.jpg";
import TheLostKingdom from "../assets/file/Movies/The Lost Kingdom.jpg";
import LoveinParis from "../assets/file/Movies/Love in Paris.jpg";
import DarkVoid from "../assets/file/Movies/Dark Void.jpg";
import TheLastLaugh from "../assets/file/Movies/The Last Laugh.jpeg";
import SpaceExplorer from "../assets/file/Movies/Space Explorer.jpg";
// Events
import RockFestival from "../assets/file/Events/Rock Festival 2025.jpg";
import ComedyNightLive from "../assets/file/Events/Comedy Night Live.jpeg";
import TechConference from "../assets/file/Events/Tech Conference 2025.jpg";
import MarathonChallenge from "../assets/file/Events/Marathon Challenge.jpg";
import ArtExhibition from "../assets/file/Events/Modern Museum.jpg";
import JazzConcert from "../assets/file/Events/Jazz Hall.jpg";
// Transportation
import ExpressBus from "../assets/file/Transportation/Express Bus.jpg";
import Flight from "../assets/file/Transportation/Flight.jpg";
import TrainPremium from "../assets/file/Transportation/Train Premium.jpg";
import FerryService from "../assets/file/Transportation/Ferry Service.avif";
import CoachPlus from "../assets/file/Transportation/Coach Plus.jpg";
import PrivateCar from "../assets/file/Transportation/Private Car.webp";

const generateTickets = (page, category) => {
  const categories = {
    movies: [
      {
        id: `m${page}-1`,
        title: "Dune: Part Three",
        image: DunePartThree,
        rating: 8.5,
        price: 12.99,
        category: "movies",
        releaseDate: "Dec 20",
        duration: "166 min",
        genre: "Sci-Fi",
      },
      {
        id: `m${page}-2`,
        title: "The Lost Kingdom",
        image: TheLostKingdom,
        rating: 8.2,
        price: 11.99,
        category: "movies",
        releaseDate: "Dec 22",
        duration: "145 min",
        genre: "Adventure",
      },
      {
        id: `m${page}-3`,
        title: "Love in Paris",
        image: LoveinParis,
        rating: 7.8,
        price: 10.99,
        category: "movies",
        releaseDate: "Dec 18",
        duration: "125 min",
        genre: "Romance",
      },
      {
        id: `m${page}-4`,
        title: "Dark Void",
        image: DarkVoid,
        rating: 8.7,
        price: 13.99,
        category: "movies",
        releaseDate: "Dec 25",
        duration: "155 min",
        genre: "Thriller",
      },
      {
        id: `m${page}-5`,
        title: "The Last Laugh",
        image: TheLastLaugh,
        rating: 7.5,
        price: 9.99,
        category: "movies",
        releaseDate: "Dec 19",
        duration: "135 min",
        genre: "Comedy",
      },
      {
        id: `m${page}-6`,
        title: "Space Explorer",
        image: SpaceExplorer,
        rating: 8.9,
        price: 14.99,
        category: "movies",
        releaseDate: "Dec 23",
        duration: "170 min",
        genre: "Sci-Fi",
      },
    ],
    events: [
      {
        id: `e${page}-1`,
        title: "Rock Festival 2025",
        image: RockFestival,
        rating: 9.0,
        price: 79.99,
        category: "events",
        date: "Jan 15",
        location: "Central Park",
        type: "Music",
      },
      {
        id: `e${page}-2`,
        title: "Comedy Night Live",
        image: ComedyNightLive,
        rating: 8.5,
        price: 45.99,
        category: "events",
        date: "Jan 10",
        location: "Comedy Club",
        type: "Comedy",
      },
      {
        id: `e${page}-3`,
        title: "Tech Conference 2025",
        image: TechConference,
        rating: 8.8,
        price: 199.99,
        category: "events",
        date: "Jan 20",
        location: "Convention Center",
        type: "Tech",
      },
      {
        id: `e${page}-4`,
        title: "Marathon Challenge",
        image: MarathonChallenge,
        rating: 8.2,
        price: 35.99,
        category: "events",
        date: "Jan 12",
        location: "City Route",
        type: "Sports",
      },
      {
        id: `e${page}-5`,
        title: "Art Exhibition",
        image: ArtExhibition,
        rating: 8.9,
        price: 25.99,
        category: "events",
        date: "Jan 18",
        location: "Modern Museum",
        type: "Art",
      },
      {
        id: `e${page}-6`,
        title: "Jazz Concert",
        image: JazzConcert,
        rating: 9.2,
        price: 89.99,
        category: "events",
        date: "Jan 25",
        location: "Jazz Hall",
        type: "Music",
      },
    ],
    transportation: [
      {
        id: `t${page}-1`,
        title: "Express Bus - NYC",
        image: ExpressBus,
        rating: 8.6,
        price: 45.99,
        category: "transportation",
        departure: "08:00 AM",
        duration: "2h 30m",
        seats: "Available",
      },
      {
        id: `t${page}-2`,
        title: "Flight - LA Bound",
        image: Flight,
        rating: 9.1,
        price: 289.99,
        category: "transportation",
        departure: "10:30 AM",
        duration: "5h",
        seats: "Limited",
      },
      {
        id: `t${page}-3`,
        title: "Train Premium",
        image: TrainPremium,
        rating: 8.9,
        price: 89.99,
        category: "transportation",
        departure: "02:00 PM",
        duration: "4h 15m",
        seats: "Available",
      },
      {
        id: `t${page}-4`,
        title: "Ferry Service",
        image: FerryService,
        rating: 8.3,
        price: 35.99,
        category: "transportation",
        departure: "09:00 AM",
        duration: "1h 45m",
        seats: "Available",
      },
      {
        id: `t${page}-5`,
        title: "Coach Plus",
        image: CoachPlus,
        rating: 8.4,
        price: 52.99,
        category: "transportation",
        departure: "11:00 AM",
        duration: "3h",
        seats: "Available",
      },
      {
        id: `t${page}-6`,
        title: "Private Car",
        image: PrivateCar,
        rating: 9.3,
        price: 120.99,
        category: "transportation",
        departure: "24/7",
        duration: "Flexible",
        seats: "Luxury",
      },
    ],
  };

  return categories[category] || [];
};


const PAGE_SIZE = 5;

export const useInfiniteTickets = (category, priceFilter = "all") => {
  return useInfiniteQuery({
    queryKey: ["tickets", category, priceFilter],
    queryFn: ({ pageParam = 0 }) => {
      // Generate all tickets for the category across multiple pages
      const totalPages = 10; // Example: total pages
      let allTickets = [];
      for (let i = 0; i < totalPages; i++) {
        allTickets.push(...generateTickets(i, category));
      }

      // Apply price filter
      allTickets = allTickets.filter((ticket) => {
        if (priceFilter === "budget") return ticket.price < 50;
        if (priceFilter === "mid")
          return ticket.price >= 50 && ticket.price < 150;
        if (priceFilter === "premium") return ticket.price >= 150;
        return true;
      });

      // Paginate
      const start = pageParam * PAGE_SIZE;
      const end = start + PAGE_SIZE;
      const pageTickets = allTickets.slice(start, end);

      return {
        tickets: pageTickets,
        nextPage: end < allTickets.length ? pageParam + 1 : undefined,
      };
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    keepPreviousData: true,
  });
};
