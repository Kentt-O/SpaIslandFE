import { motion } from "framer-motion";
import { Star, Award, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const therapists = [
    {
        id: "sarah-jenkins",
        name: "Sarah Jenkins",
        title: "Senior Massage Therapist",
        experience: 8,
        specialties: ["Deep Tissue", "Hot Stone", "Sports Massage"],
        rating: 4.9,
        reviews: 127,
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=80",
        available: true,
        bio: "Specializing in therapeutic deep tissue work with 8 years of experience helping clients achieve pain relief and relaxation.",
        topRated: true,
    },
    {
        id: "michael-chen",
        name: "Jasmine Williams",
        title: "Aromatherapy Specialist",
        experience: 6,
        specialties: ["Aromatherapy", "Swedish", "Relaxation"],
        rating: 4.8,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&auto=format&fit=crop&q=80",
        available: true,
        bio: "Expert in aromatherapy and holistic healing, creating personalized essential oil blends for each client.",
    },
    {
        id: "amara-okafor",
        name: "Amara Okafor",
        title: "Facial & Skincare Expert",
        experience: 10,
        specialties: ["Anti-Aging", "Hydrating Facials", "Gold Treatments"],
        rating: 5.0,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
        available: true,
        bio: "Master esthetician with a decade of experience in advanced facial treatments and skincare solutions.",
        topRated: true,
    },
    {
        id: "david-martinez",
        name: "Nia Thompson",
        title: "Body Treatment Specialist",
        experience: 7,
        specialties: ["Body Wraps", "Scrubs", "Detox Treatments"],
        rating: 4.7,
        reviews: 82,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
        available: false,
        bio: "Certified in advanced body treatments, focusing on detoxification and skin rejuvenation.",
    },
    {
        id: "chioma-adeyemi",
        name: "Chioma Adeyemi",
        title: "Wellness Therapist",
        experience: 5,
        specialties: ["Couples Massage", "Packages", "Holistic Treatments"],
        rating: 4.9,
        reviews: 103,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&auto=format&fit=crop&q=80",
        available: true,
        bio: "Passionate about holistic wellness, specializing in couples treatments and comprehensive spa packages.",
    },
];

export function BookingTherapist() {
    const navigate = useNavigate();
    const { bookingData, updateBooking } = useBooking();
    const [selectedFilter, setSelectedFilter] = useState("all");

    const filteredTherapists = therapists.filter((therapist) => {
        if (selectedFilter === "all") return true;
        if (selectedFilter === "available") return therapist.available;
        if (selectedFilter === "top-rated") return therapist.topRated;
        return true;
    });

    const handleSelectTherapist = (therapist) => {
        updateBooking("selectedTherapist", therapist);
        navigate("/booking/datetime");
    };

    const handleBack = () => {
        navigate("/booking/service");
    };

    if (!bookingData.selectedService) {
        navigate("/booking/service");
        return null;
    }

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
                    <span className="text-[#181611] dark:text-white text-sm md:text-base font-bold border-b-2 border-primary pb-0.5">
                        Therapist
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">/</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">Date & Time</span>
                    <span className="text-gray-500 dark:text-gray-400">/</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">Details</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="w-full max-w-[1200px] px-4 md:px-10 lg:px-20 xl:px-40 pb-12">
                {/* Header */}
                <div className="flex flex-col gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#181611] dark:text-white font-display">
                            Choose Your Therapist
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                            Select from our team of expert therapists for your {bookingData.selectedService.name}.
                        </p>
                    </div>

                    {/* Selected Service Display */}
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                                Selected Service
                            </p>
                            <p className="text-lg font-bold text-[#181611] dark:text-white">
                                {bookingData.selectedService.name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {bookingData.selectedService.duration} min • ₦{bookingData.selectedService.price.toLocaleString()}
                            </p>
                        </div>
                        <button
                            onClick={handleBack}
                            className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-1"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Change
                        </button>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                    <button
                        onClick={() => setSelectedFilter("all")}
                        className={`px-6 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${selectedFilter === "all"
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary"
                            }`}
                    >
                        All Therapists
                    </button>
                    <button
                        onClick={() => setSelectedFilter("available")}
                        className={`px-6 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${selectedFilter === "available"
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary"
                            }`}
                    >
                        Available Now
                    </button>
                    <button
                        onClick={() => setSelectedFilter("top-rated")}
                        className={`px-6 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${selectedFilter === "top-rated"
                            ? "bg-primary text-white shadow-md shadow-primary/20"
                            : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary"
                            }`}
                    >
                        Top Rated
                    </button>
                </div>

                {/* Therapists Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTherapists.map((therapist, index) => (
                        <motion.div
                            key={therapist.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative bg-white dark:bg-[#1a160d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all ${therapist.available ? "cursor-pointer" : "opacity-60"
                                }`}
                            onClick={() => therapist.available && handleSelectTherapist(therapist)}
                        >
                            {/* Top Rated Badge */}
                            {therapist.topRated && (
                                <div className="absolute top-4 right-4 z-10 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                    <Award className="w-3 h-3" />
                                    TOP RATED
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-6 p-6">
                                {/* Profile Image */}
                                <div className="flex-shrink-0">
                                    <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-200">
                                        <img
                                            src={therapist.image}
                                            alt={therapist.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col gap-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#181611] dark:text-white mb-1">
                                            {therapist.name}
                                        </h3>
                                        <p className="text-sm text-primary font-medium mb-2">{therapist.title}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                            {therapist.bio}
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-4 text-sm">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-gold text-gold" />
                                            <span className="font-bold text-[#181611] dark:text-white">
                                                {therapist.rating}
                                            </span>
                                            <span className="text-gray-500 dark:text-gray-400">
                                                ({therapist.reviews} reviews)
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                            <Calendar className="w-4 h-4" />
                                            <span>{therapist.experience} years exp.</span>
                                        </div>
                                    </div>

                                    {/* Specialties */}
                                    <div className="flex flex-wrap gap-2">
                                        {therapist.specialties.map((specialty) => (
                                            <span
                                                key={specialty}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                                            >
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Availability & Button */}
                                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`w-2 h-2 rounded-full ${therapist.available ? "bg-green-500" : "bg-gray-400"
                                                    }`}
                                            ></div>
                                            <span
                                                className={`text-sm font-medium ${therapist.available
                                                    ? "text-green-600 dark:text-green-400"
                                                    : "text-gray-500 dark:text-gray-400"
                                                    }`}
                                            >
                                                {therapist.available ? "Available" : "Fully Booked"}
                                            </span>
                                        </div>
                                        {therapist.available && (
                                            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:brightness-105 text-white font-bold rounded-lg transition-all group/btn">
                                                Select
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Back Button */}
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-300 font-medium hover:text-[#181611] dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Services
                    </button>
                </div>
            </div>
        </div>
    );
}
