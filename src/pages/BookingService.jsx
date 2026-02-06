import { motion } from "framer-motion";
import { Sparkles, Clock, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const services = [
    // Massages
    {
        id: "deep-tissue-60",
        name: "Deep Tissue Massage",
        category: "massage",
        duration: 60,
        price: 45000,
        description: "Intense pressure to relieve chronic muscle tension and pain",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop",
        popular: true,
    },
    {
        id: "deep-tissue-90",
        name: "Deep Tissue Massage",
        category: "massage",
        duration: 90,
        price: 65000,
        description: "Extended session for full body deep tissue work",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop",
    },
    {
        id: "swedish-60",
        name: "Swedish Massage",
        category: "massage",
        duration: 60,
        price: 40000,
        description: "Gentle, relaxing massage with long flowing strokes",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop",
    },
    {
        id: "swedish-90",
        name: "Swedish Massage",
        category: "massage",
        duration: 90,
        price: 58000,
        description: "Extended relaxation session for ultimate stress relief",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&auto=format&fit=crop",
    },
    {
        id: "hot-stone",
        name: "Hot Stone Massage",
        category: "massage",
        duration: 90,
        price: 70000,
        description: "Heated stones melt away tension and promote deep relaxation",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop",
        popular: true,
    },
    {
        id: "aromatherapy",
        name: "Aromatherapy Massage",
        category: "massage",
        duration: 60,
        price: 48000,
        description: "Essential oils combined with massage for holistic healing",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&auto=format&fit=crop",
    },
    {
        id: "couples-massage",
        name: "Couples Massage",
        category: "massage",
        duration: 90,
        price: 120000,
        description: "Side-by-side massage experience for two",
        image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop",
    },

    // Facials
    {
        id: "hydrating-facial",
        name: "Hydrating Facial",
        category: "facial",
        duration: 60,
        price: 35000,
        description: "Deep moisture infusion for dry, dehydrated skin",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop",
    },
    {
        id: "anti-aging-facial",
        name: "Anti-Aging Facial",
        category: "facial",
        duration: 75,
        price: 55000,
        description: "Advanced treatment to reduce fine lines and wrinkles",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&auto=format&fit=crop",
        popular: true,
    },
    {
        id: "deep-cleansing-facial",
        name: "Deep Cleansing Facial",
        category: "facial",
        duration: 60,
        price: 38000,
        description: "Purifying treatment for congested, acne-prone skin",
        image: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&auto=format&fit=crop",
    },
    {
        id: "gold-facial",
        name: "24K Gold Facial",
        category: "facial",
        duration: 90,
        price: 85000,
        description: "Luxurious gold-infused treatment for radiant, youthful skin",
        image: "https://images.unsplash.com/photo-1596178060810-4dd9a4bf4f86?w=800&auto=format&fit=crop",
    },

    // Body Treatments
    {
        id: "body-scrub-wrap",
        name: "Body Scrub & Wrap",
        category: "body",
        duration: 90,
        price: 60000,
        description: "Exfoliation followed by nourishing body wrap",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop",
    },
    {
        id: "detox-treatment",
        name: "Detox Body Treatment",
        category: "body",
        duration: 120,
        price: 75000,
        description: "Comprehensive detoxifying treatment to eliminate toxins",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&auto=format&fit=crop",
    },
    {
        id: "slimming-treatment",
        name: "Slimming Treatment",
        category: "body",
        duration: 90,
        price: 68000,
        description: "Targeted treatment to contour and tone problem areas",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop",
    },

    // Packages
    {
        id: "relaxation-package",
        name: "Relaxation Package",
        category: "package",
        duration: 180,
        price: 150000,
        description: "3-hour journey: Swedish massage, facial, and body scrub",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop",
        popular: true,
    },
    {
        id: "ultimate-spa-day",
        name: "Ultimate Spa Day",
        category: "package",
        duration: 300,
        price: 250000,
        description: "5-hour luxury experience with multiple treatments and lunch",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop",
    },
];

const categories = [
    { id: "all", name: "All Services", icon: Sparkles },
    { id: "massage", name: "Massages", icon: Sparkles },
    { id: "facial", name: "Facials", icon: Sparkles },
    { id: "body", name: "Body Treatments", icon: Sparkles },
    { id: "package", name: "Packages", icon: Sparkles },
];

export function BookingService() {
    const navigate = useNavigate();
    const { updateBooking } = useBooking();
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredServices = services.filter((service) => {
        const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
        const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleSelectService = (service) => {
        updateBooking("selectedService", service);
        navigate("/booking/therapist");
    };

    return (
        <div className="w-full flex flex-col items-center min-h-screen bg-background-light dark:bg-background-dark">
            {/* Breadcrumb */}
            <div className="w-full max-w-[1200px] px-4 md:px-10 lg:px-20 xl:px-40 py-6">
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[#181611] dark:text-white text-sm md:text-base font-bold border-b-2 border-primary pb-0.5">
                        Service
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">/</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-medium">Therapist</span>
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
                            Choose Your Service
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
                            Select from our curated collection of spa treatments and wellness experiences.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search services..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-[#181611] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${selectedCategory === category.id
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary"
                                }`}
                        >
                            <category.icon className="w-4 h-4" />
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative bg-white dark:bg-[#1a160d] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
                            onClick={() => handleSelectService(service)}
                        >
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute top-4 right-4 z-10 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                    POPULAR
                                </div>
                            )}

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                                    style={{ backgroundImage: `url('${service.image}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-3">
                                <div>
                                    <h3 className="text-xl font-bold text-[#181611] dark:text-white mb-1">
                                        {service.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-medium">{service.duration} min</span>
                                    </div>
                                    <span className="text-xl font-black text-[#181611] dark:text-white">
                                        ₦{service.price.toLocaleString()}
                                    </span>
                                </div>

                                <button className="w-full h-11 bg-primary hover:brightness-105 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                                    Select Service
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredServices.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No services found matching your search.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
