import React, { useState } from 'react';
import { ActiveTab, BookingDetails, Vehicle } from './types';
import { INITIAL_BOOKINGS } from './data/mockData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedStats } from './components/TrustedStats';
import { BrowseServices } from './components/BrowseServices';
import { PopularFleet } from './components/PopularFleet';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowBookingWorks } from './components/HowBookingWorks';
import { FeaturedDestinations } from './components/FeaturedDestinations';
import { CustomerReviews } from './components/CustomerReviews';
import { TravelBlogs } from './components/TravelBlogs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<Partial<BookingDetails>>({});
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [bookingsList, setBookingsList] = useState<BookingDetails[]>(INITIAL_BOOKINGS);

  const handleOpenBooking = (details?: Partial<BookingDetails>, vehicle?: Vehicle | null) => {
    if (details) setBookingDetails(details);
    else setBookingDetails({});
    setSelectedVehicle(vehicle || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleBookingConfirmed = (newBooking: BookingDetails) => {
    setBookingsList(prev => [newBooking, ...prev]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-500 selection:text-white flex flex-col justify-between">
      
      {/* Sticky Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Render */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <Hero
              onSearch={(data) => handleOpenBooking(data)}
              onOpenBookingWithDetails={(details) => handleOpenBooking(details)}
            />
            <TrustedStats />
            <BrowseServices
              onSelectService={() => handleOpenBooking()}
              onOpenBookingWithDetails={(details) => handleOpenBooking(details)}
            />
            <PopularFleet
              onSelectVehicleForBooking={(v) => handleOpenBooking({}, v)}
            />
            <WhyChooseUs />
            <HowBookingWorks
              onOpenBooking={() => handleOpenBooking()}
            />
            <FeaturedDestinations
              onOpenBookingWithDetails={(details) => handleOpenBooking(details)}
            />
            <CustomerReviews />
            <TravelBlogs />
            <FAQSection />
            <ContactSection
              onOpenBooking={() => handleOpenBooking()}
            />
          </>
        )}

        {activeTab === 'services' && (
          <BrowseServices
            onSelectService={() => handleOpenBooking()}
            onOpenBookingWithDetails={(details) => handleOpenBooking(details)}
          />
        )}

        {activeTab === 'fleet' && (
          <PopularFleet
            onSelectVehicleForBooking={(v) => handleOpenBooking({}, v)}
          />
        )}

        {activeTab === 'destinations' && (
          <FeaturedDestinations
            onOpenBookingWithDetails={(details) => handleOpenBooking(details)}
          />
        )}

        {activeTab === 'why-us' && (
          <WhyChooseUs />
        )}

        {activeTab === 'testimonials' && (
          <CustomerReviews />
        )}

        {activeTab === 'faq' && (
          <FAQSection />
        )}

        {activeTab === 'blog' && (
          <TravelBlogs />
        )}

        {activeTab === 'contact' && (
          <ContactSection
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialDetails={bookingDetails}
        initialVehicle={selectedVehicle}
        onBookingConfirmed={handleBookingConfirmed}
      />

    </div>
  );
}
