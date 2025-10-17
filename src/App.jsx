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
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SupportPage from "./pages/SupportPage";
import BlogPage from "./pages/Blogpage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import ScrollToTop from "./hooks/ScrollToTop";
import WishlistPage from "./pages/WishlistPage";
import useWindowSize from "./hooks/useWindowSize";
import MobileBottomNav from "./pages/MobileBottomNav";
import ProfileSection from "./pages/ProfileSection";
import LoginPage from "./pages/LoginPage";
// import "./index.css"
// ============= MOCK DATA GENERATOR =============

// ============= CUSTOM HOOKS =============

// ============= COMPONENTS =============

// ============= MAIN APP COMPONENT =============
const App = () => {
  const { isMobile } = useWindowSize();
  return (
    <div className=" bg-gray-50">
      {isMobile ? <MobileBottomNav /> : <Navigation />}
      <ScrollToTop />
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
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-Service" element={<TermsOfServicePage />} />
          <Route path="/refund-policy-service" element={<RefundPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/404" element={<NotFoundPage />} /> */}
          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
        </Routes>
      </main>

      {!isMobile && <Footer />}
    </div>
  );
};

export default App;
