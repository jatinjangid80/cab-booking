import React, { useState, useEffect } from 'react';
import { VEHICLES } from '../data/mockData';
import { Vehicle, BookingDetails, TripType } from '../types';
import { X, CheckCircle2, Car, Calendar, Clock, MapPin, User, Phone, Mail, ArrowRight, ShieldCheck, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: Partial<BookingDetails>;
  initialVehicle?: Vehicle | null;
  onBookingConfirmed: (newBooking: BookingDetails) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialDetails,
  initialVehicle,
  onBookingConfirmed
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [pickupLocation, setPickupLocation] = useState(initialDetails?.pickupLocation || 'Delhi IGI Airport');
  const [dropLocation, setDropLocation] = useState(initialDetails?.dropLocation || 'Jaipur Pink City');
  const [pickupDate, setPickupDate] = useState(() => {
    if (initialDetails?.pickupDate) return initialDetails.pickupDate;
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState(initialDetails?.pickupTime || '09:00');
  const [tripType, setTripType] = useState<TripType>(initialDetails?.tripType || 'one-way');
  const [passengers, setPassengers] = useState(initialDetails?.passengers || 4);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(initialVehicle || VEHICLES[2]); // Default Innova Crysta
  
  // Passenger Form
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState(initialDetails?.specialInstructions || '');
  
  // Confirmed details
  const [confirmedBooking, setConfirmedBooking] = useState<BookingDetails | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync initial parameters when opened
  useEffect(() => {
    if (initialDetails?.pickupLocation) setPickupLocation(initialDetails.pickupLocation);
    if (initialDetails?.dropLocation) setDropLocation(initialDetails.dropLocation);
    if (initialDetails?.pickupDate) setPickupDate(initialDetails.pickupDate);
    if (initialDetails?.pickupTime) setPickupTime(initialDetails.pickupTime);
    if (initialDetails?.tripType) setTripType(initialDetails.tripType);
    if (initialVehicle) setSelectedVehicle(initialVehicle);
  }, [initialDetails, initialVehicle, isOpen]);

  if (!isOpen) return null;

  // Calculate estimated distance and fare
  const estimatedKm = tripType === 'local' ? 80 : 280; // realistic mock estimate
  const totalFare = selectedVehicle.baseFare + Math.round(selectedVehicle.pricePerKm * estimatedKm * (tripType === 'round-trip' ? 1.8 : 1));

  const handleProceedToStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingId = `YATRA-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking: BookingDetails = {
      id: newBookingId,
      pickupLocation,
      dropLocation: tripType === 'local' ? 'Local Rental (8 Hrs / 80 Km)' : dropLocation,
      pickupDate,
      pickupTime,
      tripType,
      passengers,
      vehicleId: selectedVehicle.id,
      vehicleName: selectedVehicle.name,
      customerName,
      customerPhone,
      customerEmail,
      specialInstructions,
      status: 'Confirmed',
      totalFare,
      estimatedKm,
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    setConfirmedBooking(newBooking);
    onBookingConfirmed(newBooking);
    setStep(3);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // fallback safe
    }
  };

  const handleCopyBookingId = () => {
    if (confirmedBooking?.id) {
      navigator.clipboard.writeText(confirmedBooking.id);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 relative shadow-2xl border border-gray-100 my-auto">
        
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors z-20 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Stepper Header Bar */}
        <div className="mb-6 pb-4 border-b border-gray-100 pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 text-[11px] font-black uppercase">
              Step {step} of 3
            </span>
            <span className="text-xs font-bold text-gray-500">
              {step === 1 && 'Trip Route & Vehicle Selection'}
              {step === 2 && 'Passenger Details'}
              {step === 3 && 'Booking Confirmed!'}
            </span>
          </div>

          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-red-600 h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: ROUTE & VEHICLE SELECT */}
        {step === 1 && (
          <form onSubmit={handleProceedToStep2} className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-gray-900">Select Your Taxi & Trip Route</h2>
              <p className="text-xs text-gray-500">Choose vehicle class, trip type, and travel schedule.</p>
            </div>

            {/* Trip Type Tabs */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-xl max-w-sm">
              {(['one-way', 'round-trip', 'local'] as TripType[]).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTripType(t)}
                  className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold capitalize transition-all ${
                    tripType === t ? 'bg-red-600 text-white shadow-xs' : 'text-gray-700'
                  }`}
                >
                  {t.replace('-', ' ')}
                </button>
              ))}
            </div>

            {/* Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-600" /> Pickup Location
                </label>
                <input
                  type="text"
                  required
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold focus:border-red-500 outline-hidden bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-700" /> {tripType === 'local' ? 'Package' : 'Drop Location'}
                </label>
                {tripType === 'local' ? (
                  <select
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold bg-gray-50/50"
                  >
                    <option value="4 Hours / 40 Km Package">4 Hours / 40 Km Package</option>
                    <option value="8 Hours / 80 Km Package">8 Hours / 80 Km Package</option>
                    <option value="12 Hours / 120 Km Package">12 Hours / 120 Km Package</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    required
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold focus:border-red-500 outline-hidden bg-gray-50/50"
                  />
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-red-600" /> Pickup Date
                </label>
                <input
                  type="date"
                  required
                  value={pickupDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold bg-gray-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-red-600" /> Pickup Time
                </label>
                <input
                  type="time"
                  required
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold bg-gray-50/50"
                />
              </div>
            </div>

            {/* Vehicle Selector Grid */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Select Fleet Vehicle
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-1">
                {VEHICLES.map((v) => {
                  const isSelected = selectedVehicle.id === v.id;
                  return (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVehicle(v)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-red-600 bg-red-50/60 shadow-md ring-2 ring-red-200'
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                      }`}
                    >
                      <img src={v.image} alt={v.name} className="w-16 h-12 object-cover rounded-xl" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-black text-gray-900 truncate">{v.name}</div>
                        <div className="text-[10px] text-gray-500">{v.seats} Seats • AC • {v.fuelType}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-black text-red-600">₹{v.pricePerKm}/km</div>
                        <div className="text-[10px] text-gray-400">Base ₹{v.baseFare}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Calculated Fare Summary Box */}
            <div className="p-4 rounded-2xl bg-gray-900 text-white flex items-center justify-between">
              <div>
                <div className="text-[10px] text-gray-400 uppercase font-bold">Estimated Total All-Inclusive Fare</div>
                <div className="text-2xl font-black text-red-400">₹{totalFare.toLocaleString()}</div>
                <div className="text-[10px] text-gray-300">Includes Toll Tax, State Permit & Driver Allowance (~{estimatedKm} km)</div>
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-lg flex items-center gap-1.5 cursor-pointer"
              >
                <span>Proceed to Passenger Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: PASSENGER DETAILS */}
        {step === 2 && (
          <form onSubmit={handleFinalConfirm} className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-gray-900">Passenger & Contact Info</h2>
              <p className="text-xs text-gray-500">Driver assignment and live tracking slip will be sent to this phone number.</p>
            </div>

            {/* Booking Summary Pill */}
            <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200 flex flex-wrap items-center justify-between text-xs font-semibold text-gray-800 gap-2">
              <div>
                <span className="text-gray-400 font-normal">Route: </span>
                <span className="font-bold">{pickupLocation} → {dropLocation}</span>
              </div>
              <div>
                <span className="text-gray-400 font-normal">Vehicle: </span>
                <span className="font-bold text-red-600">{selectedVehicle.name}</span>
              </div>
              <div>
                <span className="text-gray-400 font-normal">Total: </span>
                <span className="font-black text-gray-900">₹{totalFare.toLocaleString()}</span>
              </div>
            </div>

            {/* Contact Form Grid */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-red-600" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Singh"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold focus:border-red-500 outline-hidden bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-red-600" /> WhatsApp Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 95291 55562"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold focus:border-red-500 outline-hidden bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-red-600" /> Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@example.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold focus:border-red-500 outline-hidden bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Special Instructions / Flight Number / Hotel Address
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Flight arrives IGI T3 at 8:30 AM, need child booster seat..."
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs font-semibold focus:border-red-500 outline-hidden bg-white"
                />
              </div>
            </div>

            {/* Payment Guarantee & Actions */}
            <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl font-bold border border-emerald-100">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Advance Payment • Pay Driver Upon Arrival</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-bold text-xs hover:bg-gray-50 cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none py-3 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-lg shadow-red-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Cab Booking</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* STEP 3: CONFIRMATION SLIP */}
        {step === 3 && confirmedBooking && (
          <div className="space-y-6 animate-in zoom-in-95 duration-200">
            
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-gray-900">Cab Booking Confirmed!</h2>
              <p className="text-xs text-gray-500">Your trip is scheduled. Driver and vehicle details sent to SMS & WhatsApp.</p>
            </div>

            {/* Ticket Slip Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-950 text-white rounded-3xl p-6 space-y-4 border border-gray-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Booking Reference</div>
                  <div className="text-xl font-black text-red-400 tracking-wider flex items-center gap-2">
                    {confirmedBooking.id}
                    <button
                      onClick={handleCopyBookingId}
                      className="p-1 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors"
                      title="Copy Reference"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase border border-emerald-500/30">
                    Confirmed
                  </span>
                </div>
              </div>

              {/* Trip Details Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 font-normal">Passenger:</span>
                  <div className="font-bold text-white">{confirmedBooking.customerName}</div>
                  <div className="text-gray-400">{confirmedBooking.customerPhone}</div>
                </div>

                <div>
                  <span className="text-gray-400 font-normal">Schedule:</span>
                  <div className="font-bold text-white">{confirmedBooking.pickupDate}</div>
                  <div className="text-gray-400">{confirmedBooking.pickupTime}</div>
                </div>

                <div>
                  <span className="text-gray-400 font-normal">Pickup Location:</span>
                  <div className="font-bold text-white line-clamp-1">{confirmedBooking.pickupLocation}</div>
                </div>

                <div>
                  <span className="text-gray-400 font-normal">Drop Destination:</span>
                  <div className="font-bold text-white line-clamp-1">{confirmedBooking.dropLocation}</div>
                </div>

                <div>
                  <span className="text-gray-400 font-normal">Assigned Vehicle:</span>
                  <div className="font-bold text-red-400">{confirmedBooking.vehicleName}</div>
                </div>

                <div>
                  <span className="text-gray-400 font-normal">Total Fare (All-Inc):</span>
                  <div className="text-lg font-black text-emerald-400">₹{confirmedBooking.totalFare.toLocaleString()}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <Car className="w-3.5 h-3.5 text-red-500" /> Free cancellation up to 6 hours before pickup
                </span>
                <span>Yatra Cabs Verified</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-800 font-bold text-xs hover:bg-gray-50"
              >
                Print Confirmation Slip
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-md shadow-red-200"
              >
                Done & Return Home
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
