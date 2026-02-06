import { motion } from "framer-motion";
import { Sparkles, Calendar, User, Mail, Phone, MessageSquare, Heart, Music, CreditCard, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

export function BookingDetails() {
    const navigate = useNavigate();
    const { bookingData, updateContactDetails, updateBooking, getTotalPrice } = useBooking();
    const [errors, setErrors] = useState({});
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    if (!bookingData.selectedService || !bookingData.selectedTherapist || !bookingData.selectedDate || !bookingData.selectedTime) {
        navigate("/booking/service");
        return null;
    }

    const validateForm = () => {
        const newErrors = {};

        if (!bookingData.contactDetails.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!bookingData.contactDetails.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(bookingData.contactDetails.email)) {
            newErrors.email = "Email is invalid";
        }

        if (!bookingData.contactDetails.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!agreedToTerms) {
            newErrors.terms = "You must agree to the terms and conditions";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // In a real app, this would submit to backend
            alert("Booking confirmed! You will receive a confirmation email shortly.");
            navigate("/");
        }
    };

    const handleBack = () => {
        navigate("/booking/datetime");
    };

    return (
        <div className="w-full flex flex-col items-center min-h-screen bg-background-light dark:bg-background-dark">
            {/* Breadcrumb */}
            <div className="w-full max-w-[1200px] px-4 md:px-10 lg:px-20 xl:px-40 py-6">
                <div className="flex flex-wrap gap-2 items-center">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/booking/service");
                        }}
                        className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm md:text-base font-medium flex items-center gap-1"
                    >
                        <span className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                            <span className="text-primary text-xs">✓</span>
                        </span>
                        Service
                    </a>
                    <span className="text-gray-500 dark:text-gray-400">/</span>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/booking/therapist");
                        }}
                        className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm md:text-base font-medium flex items-center gap-1"
                    >
                        <span className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                            <span className="text-primary text-xs">✓</span>
                        </span>
                        Therapist
                    </a>
                    <span className="text-gray-500 dark:text-gray-400">/</span>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/booking/datetime");
                        }}
                        className="text-gray-500 dark:text-gray-400 hover:text-primary text-sm md:text-base font-medium flex items-center gap-1"
                    >
                        <span className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
                            <span className="text-primary text-xs">✓</span>
                        </span>
                        Date & Time
                    </a>
                    <span className="text-gray-500 dark:text-gray-400">/</span>
                    <span className="text-[#181611] dark:text-white text-sm md:text-base font-bold border-b-2 border-primary pb-0.5">
                        Details
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1200px] px-4 md:px-10 lg:px-20 xl:px-40 pb-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Form */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#181611] dark:text-white font-display">
                                Complete Your Booking
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                                Just a few more details and you're all set!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            {/* Contact Information */}
                            <div className="bg-white dark:bg-[#1a160d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                                <h2 className="text-xl font-bold text-[#181611] dark:text-white mb-6 flex items-center gap-2">
                                    <User className="w-5 h-5 text-primary" />
                                    Contact Information
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={bookingData.contactDetails.fullName}
                                            onChange={(e) => updateContactDetails("fullName", e.target.value)}
                                            className={`w-full h-12 px-4 rounded-lg border ${errors.fullName ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                                                } bg-white dark:bg-gray-800 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={bookingData.contactDetails.email}
                                            onChange={(e) => updateContactDetails("email", e.target.value)}
                                            className={`w-full h-12 px-4 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                                                } bg-white dark:bg-gray-800 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent`}
                                            placeholder="your.email@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            value={bookingData.contactDetails.phone}
                                            onChange={(e) => updateContactDetails("phone", e.target.value)}
                                            className={`w-full h-12 px-4 rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-200 dark:border-gray-700"
                                                } bg-white dark:bg-gray-800 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent`}
                                            placeholder="+234 XXX XXX XXXX"
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Preferred Contact Method
                                        </label>
                                        <div className="flex gap-3">
                                            {["email", "phone", "whatsapp"].map((method) => (
                                                <button
                                                    key={method}
                                                    type="button"
                                                    onClick={() => updateContactDetails("preferredContact", method)}
                                                    className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${bookingData.contactDetails.preferredContact === method
                                                            ? "bg-primary text-white"
                                                            : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary"
                                                        }`}
                                                >
                                                    {method.charAt(0).toUpperCase() + method.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Details */}
                            <div className="bg-white dark:bg-[#1a160d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                                <h2 className="text-xl font-bold text-[#181611] dark:text-white mb-6 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                    Additional Information
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Special Requests or Notes
                                        </label>
                                        <textarea
                                            value={bookingData.specialRequests}
                                            onChange={(e) => updateBooking("specialRequests", e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                            placeholder="Any special requests or preferences..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Health Conditions or Allergies
                                        </label>
                                        <textarea
                                            value={bookingData.healthNotes}
                                            onChange={(e) => updateBooking("healthNotes", e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                            placeholder="Please let us know of any health conditions or allergies..."
                                        />
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <input
                                            type="checkbox"
                                            id="firstTime"
                                            checked={bookingData.isFirstTime}
                                            onChange={(e) => updateBooking("isFirstTime", e.target.checked)}
                                            className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                                        />
                                        <label htmlFor="firstTime" className="text-sm text-gray-700 dark:text-gray-300">
                                            This is my first time visiting SpaIsland
                                        </label>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Preferred Ambiance
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                { value: "relaxing", label: "Relaxing", icon: Music },
                                                { value: "energizing", label: "Energizing", icon: Sparkles },
                                                { value: "silent", label: "Silent", icon: Heart },
                                                { value: "custom", label: "Custom", icon: Music },
                                            ].map((option) => (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => updateBooking("preferredAmbiance", option.value)}
                                                    className={`flex items-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${bookingData.preferredAmbiance === option.value
                                                            ? "bg-primary text-white"
                                                            : "border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary"
                                                        }`}
                                                >
                                                    <option.icon className="w-4 h-4" />
                                                    {option.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="bg-white dark:bg-[#1a160d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8">
                                <h2 className="text-xl font-bold text-[#181611] dark:text-white mb-6 flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-primary" />
                                    Payment Method
                                </h2>

                                <div className="space-y-3">
                                    {[
                                        { value: "pay-at-spa", label: "Pay at Spa", desc: "Pay when you arrive" },
                                        { value: "card", label: "Credit/Debit Card", desc: "Secure online payment" },
                                        { value: "transfer", label: "Bank Transfer", desc: "Direct bank transfer" },
                                    ].map((method) => (
                                        <button
                                            key={method.value}
                                            type="button"
                                            onClick={() => updateBooking("paymentMethod", method.value)}
                                            className={`w-full flex items-center justify-between p-4 rounded-lg border transition-all ${bookingData.paymentMethod === method.value
                                                    ? "border-primary bg-primary/5"
                                                    : "border-gray-200 dark:border-gray-700 hover:border-primary"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${bookingData.paymentMethod === method.value
                                                            ? "border-primary"
                                                            : "border-gray-300 dark:border-gray-600"
                                                        }`}
                                                >
                                                    {bookingData.paymentMethod === method.value && (
                                                        <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                                                    )}
                                                </div>
                                                <div className="text-left">
                                                    <p className="font-medium text-[#181611] dark:text-white">{method.label}</p>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{method.desc}</p>
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="bg-white dark:bg-[#1a160d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                        className={`w-5 h-5 mt-0.5 text-primary border-gray-300 rounded focus:ring-primary ${errors.terms ? "border-red-500" : ""
                                            }`}
                                    />
                                    <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                                        I agree to the{" "}
                                        <a href="/privacy" className="text-primary hover:underline">
                                            Terms & Conditions
                                        </a>{" "}
                                        and{" "}
                                        <a href="/privacy" className="text-primary hover:underline">
                                            Privacy Policy
                                        </a>
                                        . I understand the cancellation policy and agree to the booking terms.
                                    </label>
                                </div>
                                {errors.terms && <p className="text-red-500 text-sm mt-2 ml-8">{errors.terms}</p>}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    type="button"
                                    onClick={handleBack}
                                    className="flex-1 h-12 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium rounded-xl hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    Go Back
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 h-12 bg-primary hover:brightness-105 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                                >
                                    <Check className="w-5 h-5" />
                                    Confirm Booking
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column - Summary */}
                    <div className="w-full lg:w-[380px] flex-shrink-0">
                        <div className="sticky top-24 bg-white dark:bg-[#1a160d] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
                            {/* Header */}
                            <div className="h-32 w-full relative bg-gray-200">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between items-end text-white">
                                    <h3 className="font-bold text-lg">Booking Summary</h3>
                                    <span className="bg-gold text-white text-xs font-bold px-2 py-0.5 rounded">Step 4/4</span>
                                </div>
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop')",
                                    }}
                                ></div>
                            </div>

                            {/* Summary Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex gap-3 items-start pb-4 border-b border-gray-100 dark:border-gray-800">
                                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Service</p>
                                        <p className="font-bold text-[#181611] dark:text-white">{bookingData.selectedService.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{bookingData.selectedService.duration} min</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start pb-4 border-b border-gray-100 dark:border-gray-800">
                                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                                        <img
                                            src={bookingData.selectedTherapist.image}
                                            alt={bookingData.selectedTherapist.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Therapist</p>
                                        <p className="font-bold text-[#181611] dark:text-white">{bookingData.selectedTherapist.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{bookingData.selectedTherapist.title}</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start pb-4 border-b border-gray-100 dark:border-gray-800">
                                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Date & Time</p>
                                        <p className="font-bold text-[#181611] dark:text-white">
                                            {bookingData.selectedDate.toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                        <p className="text-sm text-gold font-bold">{bookingData.selectedTime}</p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl flex justify-between items-center">
                                    <span className="font-medium text-gray-500 dark:text-gray-400">Total Price</span>
                                    <span className="font-black text-2xl text-[#181611] dark:text-white">
                                        ₦{getTotalPrice().toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
