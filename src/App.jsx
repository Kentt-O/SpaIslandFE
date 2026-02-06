import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Membership } from "./pages/Membership";
import { Privacy } from "./pages/Privacy";
import { GiftCard } from "./pages/GiftCard";
import { BookingService } from "./pages/BookingService";
import { BookingTherapist } from "./pages/BookingTherapist";
import { BookingDateTime } from "./pages/BookingDateTime";
import { BookingDetails } from "./pages/BookingDetails";
import { BookingProvider } from "./context/BookingContext";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <div className="bg-background-light dark:bg-background-dark text-[#181611] font-body overflow-x-hidden selection:bg-primary selection:text-white flex flex-col min-h-screen">
          <Header />
          <main className="w-full flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/gift-cards" element={<GiftCard />} />
              <Route path="/booking" element={<BookingService />} />
              <Route path="/booking/service" element={<BookingService />} />
              <Route path="/booking/therapist" element={<BookingTherapist />} />
              <Route path="/booking/datetime" element={<BookingDateTime />} />
              <Route path="/booking/details" element={<BookingDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
