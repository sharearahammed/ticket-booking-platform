import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 5;

const generateTickets = (page, category) => {
  const categories = {
    movies: [
      {
        id: `m${page}-1`,
        title: "Dune: Part Three",
        image: "🎬",
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
        image: "👑",
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
        image: "💕",
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
        image: "🌑",
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
        image: "😂",
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
        image: "🚀",
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
        image: "🎸",
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
        image: "🎭",
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
        image: "💻",
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
        image: "🏃",
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
        image: "🎨",
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
        image: "🎺",
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
        image: "🚌",
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
        image: "✈️",
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
        image: "🚂",
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
        image: "🚢",
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
        image: "🚍",
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
        image: "🚗",
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
        if (priceFilter === "mid") return ticket.price >= 50 && ticket.price < 150;
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
