# 🎟️ Ticket Booking Platform

[🌐 Live Demo](ticket-booking-platform.netlify.app)

A **modern, responsive, single-page Ticket Booking platform** built with **React.js, Tailwind CSS, Redux Toolkit, and TanStack Query**. This platform allows users to browse and book tickets for **Movies, Events, and Transportation** with an **app-like mobile experience**.

---

## 🎨 Design & UI

- **Primary Color:** `#2563EB` (Royal Blue) – used for navigation, links, and accents.  
- **Secondary Color:** `#FACC15` (Amber) – used for "Book Now" and call-to-action buttons.  
- **Accent Color:** `#10B981` (Emerald) – used for success states and highlights.  
- **Background:** `#F9FAFB` (Off-white)  
- **Text:** `#111827` (Dark Gray)

**UI Highlights:**

- Mobile-first, responsive design resembling a modern mobile app.
- Smooth **infinite scroll** for ticket lists using **TanStack Query**.
- Category-based filtering and sorting for tickets.
- Modern **gradient headings** and clean card layouts.
- Interactive seat selection and booking flow.
- Persistent cart using **Redux Toolkit**.

---

## 📱 Features

### Home Page
- Category cards for **Movies, Events, Transportation**
- Quick navigation to ticket listings
- App-like layout on mobile

### Ticket List / Booking Page
- Infinite scrolling ticket list powered by **TanStack Infinite Query**
- Filters: Price Range, Rating, Featured
- Sort by: Price Low → High, Price High → Low, Rating
- Smooth animations and hover effects
- Responsive grid layout for cards

### Ticket Details Page
- Detailed ticket information (title, rating, price, duration, genre, etc.)
- Seat selection UI
- Quantity selection
- "Book Now" button with amber CTA
- Mobile-friendly card layout

### Cart / Checkout Page
- Shows selected tickets with seat numbers
- Dynamic price calculation (subtotal, taxes, total)
- Remove tickets from cart
- Proceed to payment button
- Sticky summary sidebar on desktop

### State Management
- **Redux Toolkit** for cart state
- **React Query** for infinite ticket fetching
- Data caching & automatic updates

### Routing
- **React Router DOM v6**
- Single-page navigation between **Home → Ticket List → Details → Cart**

---

## ⚡ Technologies

- **React.js** – Frontend library for building interactive UIs
- **Tailwind CSS** – Utility-first styling
- **Redux Toolkit** – State management
- **TanStack React Query & Infinite Query** – Server-state management & infinite scroll
- **React Router DOM** – Client-side routing
- **Lucide Icons** – Modern SVG icons

---

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/ticket-booking-platform.git
cd ticket-booking-platform


2. Install dependencies:
npm install

3. Run the development server:
npm start

src/
├─ components/
│  ├─ Navigation.jsx
│  ├─ Footer.jsx
│  ├─ TicketCard.jsx
├─ pages/
│  ├─ HomePage.jsx
│  ├─ TicketListPage.jsx
│  ├─ DetailsPage.jsx
│  ├─ CartPage.jsx
├─ hooks/
│  ├─ useInfiniteTickets.js
│  ├─ useCartStore.js
├─ redux/
│  ├─ store.js
│  ├─ cartSlice.js
├─ App.jsx
├─ index.jsx
