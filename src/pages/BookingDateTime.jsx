import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Calendar, Sun, Sunset, Moon as MoonIcon, ArrowRight, ArrowLeft, Edit } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const timeSlots = {
    morning: [
        { time: "09:00", available: true },
        { time: "09:30", available: true },
        { time: "10:00", available: true },
        { time: "11:15", available: true },
    ],
    afternoon: [
        { time: "13:30", available: true },
        { time: "14:45", available: true },
        { time: "15:00", available: true },
        { time: "16:30", available: true },
    ],
    evening: [
        { time: "18:00", available: true },
        { time: "19:30", available: true },
    ],
};

export function BookingDateTime() {
    const navigate = useNavigate();
    const { bookingData, updateBooking, getTotalPrice } = useBooking();
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState(bookingData.selectedDate || new Date());
    const [selectedTime, setSelectedTime] = useState(bookingData.selectedTime || "13:30");

    if (!bookingData.selectedService || !bookingData.selectedTherapist) {
        navigate("/booking/service");
        return null;
    }

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const generateCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const isDateSelected = (day) => {
        if (!day) return false;
        return (
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear
        );
    };

    const isDatePast = (day) => {
        if (!day) return false;
        const date = new Date(currentYear, currentMonth, day);
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        return date < todayStart;
    };

    const handleDateClick = (day) => {
        if (!day || isDatePast(day)) return;
        const newDate = new Date(currentYear, currentMonth, day);
        setSelectedDate(newDate);
        updateBooking("selectedDate", newDate);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        updateBooking("selectedTime", time);
    };

    const handleContinue = () => {
        updateBooking("selectedDate", selectedDate);
        updateBooking("selectedTime", selectedTime);
        navigate("/booking/details");
    };

    const handleBack = () => {
        navigate("/booking/therapist");
    };

    const calendarDays = generateCalendarDays();

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
                    <span className="text-[#181611] dark:text-white text-sm md:text-base font-bold border-b-2 border-primary pb-0.5">
                        Date & Time
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">/</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">Details</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1200px] px-4 md:px-10 lg:px-20 xl:px-40 pb-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#181611] dark:text-white font-display">
                                When would you like to visit us?
                            </h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                                Choose a date and time for your appointment with {bookingData.selectedTherapist.name}.
                            </p>
                        </div>

                        {/* Calendar & Time Slots Card */}
                        <div className="bg-white dark:bg-[#1a160d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-8 flex flex-col md:flex-row gap-10">
                            {/* Calendar */}
                            <div className="flex-1 min-w-[300px]">
                                {/* Month Navigation */}
                                <div className="flex items-center justify-between mb-6">
                                    <button
                                        onClick={handlePrevMonth}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                    >
                                        <ChevronLeft className="w-5 h-5 text-[#181611] dark:text-white" />
                                    </button>
                                    <p className="text-lg font-bold text-[#181611] dark:text-white">
                                        {MONTHS[currentMonth]} {currentYear}
                                    </p>
                                    <button
                                        onClick={handleNextMonth}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                    >
                                        <ChevronRight className="w-5 h-5 text-[#181611] dark:text-white" />
                                    </button>
                                </div>

                                {/* Calendar Grid */}
                                <div className="grid grid-cols-7 gap-y-2">
                                    {DAYS.map((day) => (
                                        <div key={day} className="text-center text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider py-2">
                                            {day}
                                        </div>
                                    ))}
                                    {calendarDays.map((day, index) => (
                                        <div key={index}>
                                            {day ? (
                                                <button
                                                    onClick={() => handleDateClick(day)}
                                                    disabled={isDatePast(day)}
                                                    className={`h-10 w-full flex items-center justify-center text-sm font-medium rounded-full transition-all ${isDateSelected(day)
                                                            ? "bg-gold text-white shadow-md shadow-gold/30 font-bold"
                                                            : isDatePast(day)
                                                                ? "text-gray-300 dark:text-gray-600 cursor-not-allowed"
                                                                : "hover:bg-primary/10 hover:text-primary text-[#181611] dark:text-white"
                                                        }`}
                                                >
                                                    {day}
                                                </button>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Legend */}
                                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div> Selected
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-primary"></div> Available
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="hidden md:block w-px bg-gray-100 dark:bg-gray-800"></div>

                            {/* Time Slots */}
                            <div className="flex-1 min-w-[280px]">
                                <h3 className="text-xl font-bold mb-4 flex items-center justify-between text-[#181611] dark:text-white">
                                    <span>Available Times</span>
                                    <span className="text-xs font-normal text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 px-2 py-1 rounded">
                                        WAT (GMT+1)
                                    </span>
                                </h3>
                                <div className="space-y-6 max-h-[420px] overflow-y-auto pr-2">
                                    {/* Morning */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <Sun className="w-4 h-4" /> Morning
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {timeSlots.morning.map((slot) => (
                                                <button
                                                    key={slot.time}
                                                    onClick={() => slot.available && handleTimeSelect(slot.time)}
                                                    disabled={!slot.available}
                                                    className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${!slot.available
                                                            ? "border border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600"
                                                            : selectedTime === slot.time
                                                                ? "border border-gold bg-gold text-white font-bold shadow-md shadow-gold/20 flex justify-between items-center"
                                                                : "border border-primary/30 text-primary hover:bg-primary/10"
                                                        }`}
                                                >
                                                    {slot.time}
                                                    {selectedTime === slot.time && <span className="text-sm">✓</span>}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Afternoon */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <Sunset className="w-4 h-4" /> Afternoon
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {timeSlots.afternoon.map((slot) => (
                                                <button
                                                    key={slot.time}
                                                    onClick={() => slot.available && handleTimeSelect(slot.time)}
                                                    disabled={!slot.available}
                                                    className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${!slot.available
                                                            ? "border border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600"
                                                            : selectedTime === slot.time
                                                                ? "border border-gold bg-gold text-white font-bold shadow-md shadow-gold/20 flex justify-between items-center"
                                                                : "border border-primary/30 text-primary hover:bg-primary/10"
                                                        }`}
                                                >
                                                    {slot.time}
                                                    {selectedTime === slot.time && <span className="text-sm">✓</span>}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Evening */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                                            <MoonIcon className="w-4 h-4" /> Evening
                                        </h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {timeSlots.evening.map((slot) => (
                                                <button
                                                    key={slot.time}
                                                    onClick={() => slot.available && handleTimeSelect(slot.time)}
                                                    disabled={!slot.available}
                                                    className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${!slot.available
                                                            ? "border border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700 dark:text-gray-600"
                                                            : selectedTime === slot.time
                                                                ? "border border-gold bg-gold text-white font-bold shadow-md shadow-gold/20 flex justify-between items-center"
                                                                : "border border-primary/30 text-primary hover:bg-primary/10"
                                                        }`}
                                                >
                                                    {slot.time}
                                                    {selectedTime === slot.time && <span className="text-sm">✓</span>}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Booking Summary Sidebar */}
                    <div className="w-full lg:w-[380px] flex-shrink-0">
                        <div className="sticky top-24 bg-white dark:bg-[#1a160d] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col">
                            {/* Header Image */}
                            <div className="h-32 w-full relative bg-gray-200">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between items-end text-white">
                                    <h3 className="font-bold text-lg">Booking Summary</h3>
                                    <span className="bg-gold text-white text-xs font-bold px-2 py-0.5 rounded">Step 3/4</span>
                                </div>
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop')",
                                    }}
                                ></div>
                            </div>

                            {/* Summary Details */}
                            <div className="p-6 flex flex-col gap-6">
                                {/* Service */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary flex-shrink-0">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Service</p>
                                        <p className="font-bold text-[#181611] dark:text-white">{bookingData.selectedService.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{bookingData.selectedService.duration} min</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>

                                {/* Therapist */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                                        <img
                                            src={bookingData.selectedTherapist.image}
                                            alt={bookingData.selectedTherapist.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Therapist</p>
                                        <p className="font-bold text-[#181611] dark:text-white">{bookingData.selectedTherapist.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{bookingData.selectedTherapist.title}</p>
                                    </div>
                                </div>

                                <div className="w-full h-px bg-gray-100 dark:bg-gray-800"></div>

                                {/* Date & Time */}
                                <div className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-primary flex-shrink-0">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">Date & Time</p>
                                        <p className="font-bold text-[#181611] dark:text-white">
                                            {selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                        </p>
                                        <p className="text-sm text-gold font-bold">{selectedTime}</p>
                                    </div>
                                    <button className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                                        <Edit className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Price */}
                                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl flex justify-between items-center border border-gray-100 dark:border-gray-700">
                                    <span className="font-medium text-gray-500 dark:text-gray-400">Total Price</span>
                                    <span className="font-black text-xl text-[#181611] dark:text-white">₦{getTotalPrice().toLocaleString()}</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-3 pt-2">
                                    <button
                                        onClick={handleContinue}
                                        className="w-full h-12 bg-primary hover:brightness-105 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 group"
                                    >
                                        Continue to Details
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={handleBack}
                                        className="w-full h-10 text-gray-500 dark:text-gray-400 font-medium hover:text-[#181611] dark:hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Go Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
