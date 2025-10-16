// src/App.jsx
import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  X,
  Check,
  Filter,
  ChevronDown,
  ShoppingCart,
  Home as HomeIcon,
  Menu,
} from "lucide-react";
import TicketListPage from "./pages/TicketListPage";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./pages/Footer";
// import "./index.css"
// ============= MOCK DATA GENERATOR =============


// ============= CUSTOM HOOKS =============



// ============= COMPONENTS =============

// ============= MAIN APP COMPONENT =============
const App = () => {
  return (
    <div className=" bg-gray-50">
      <Navigation />

      <main className="container max-w-7xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/movies"
            element={<TicketListPage category="movies" />}
          />
          <Route
            path="/events"
            element={<TicketListPage category="events" />}
          />
          <Route
            path="/transportation"
            element={<TicketListPage category="transportation" />}
          />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* <Route path="/404" element={<NotFoundPage />} /> */}
          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
