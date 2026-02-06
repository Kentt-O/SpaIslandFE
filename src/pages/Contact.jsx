import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Mail, Clock, Plus, Minus, CheckCircle, Car, Accessibility, Navigation } from "lucide-react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom spa marker icon
const spaIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#19e5e6" stroke="#ffffff" stroke-width="2">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5" fill="#ffffff"/>
        </svg>
    `),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

// User location marker icon
const userIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#edb91d" stroke="#ffffff" stroke-width="2">
            <circle cx="12" cy="12" r="8"/>
            <circle cx="12" cy="12" r="3" fill="#ffffff"/>
        </svg>
    `),
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
});

// Component to handle map centering
function MapController({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, zoom);
        }
    }, [center, zoom, map]);
    return null;
}

export function Contact() {
    const spaLocation = { lat: 6.4237080, lng: 3.4179260 };
    const [userLocation, setUserLocation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [mapCenter, setMapCenter] = useState([spaLocation.lat, spaLocation.lng]);
    const [mapZoom, setMapZoom] = useState(13);
    const [locationError, setLocationError] = useState(null);
    const [showPhoneModal, setShowPhoneModal] = useState(false);

    // Haversine formula to calculate distance between two points
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Earth's radius in kilometers
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    };

    // Get user's location on component mount
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    setUserLocation({ lat: userLat, lng: userLng });

                    // Calculate distance
                    const dist = calculateDistance(
                        userLat, userLng,
                        spaLocation.lat, spaLocation.lng
                    );
                    setDistance(dist);

                    // Center map to show both locations
                    const centerLat = (userLat + spaLocation.lat) / 2;
                    const centerLng = (userLng + spaLocation.lng) / 2;
                    setMapCenter([centerLat, centerLng]);
                    setMapZoom(12);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setLocationError("Unable to get your location. Please enable location services.");
                }
            );
        } else {
            setLocationError("Geolocation is not supported by your browser.");
        }
    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero / Intro Section */}
            <section className="relative px-6 py-12 lg:px-40 lg:py-20 w-full pt-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-8"
                        >
                            <div className="flex flex-col gap-4">
                                <span className="text-sm font-semibold uppercase tracking-wider text-primary">Location & Contact</span>
                                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#181611] md:text-5xl lg:text-6xl dark:text-white font-display">
                                    Find Your Oasis in the City
                                </h1>
                                <p className="text-lg font-light leading-relaxed text-[#897f61] dark:text-gray-400">
                                    Experience coastal sophistication conveniently located within the BWC Hotel, Lagos. We've designed every detail of your arrival to be as seamless as your treatment.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <motion.a
                                    href="https://wa.me/2347010627765"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -2 }}
                                    className="group flex min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-white shadow-sm transition-all hover:bg-[#20bd5a] hover:shadow-md"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span className="text-base font-bold">Chat with Concierge</span>
                                </motion.a>
                                <motion.button
                                    onClick={() => setShowPhoneModal(true)}
                                    whileHover={{ y: -2 }}
                                    className="flex min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3.5 text-[#181611] shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 dark:border-[#332d1b] dark:bg-[#1a160d] dark:text-white dark:hover:bg-[#221d10]"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="text-base font-medium">Call Us</span>
                                </motion.button>
                            </div>

                            {/* Quick Details Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mt-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-[#1a160d] dark:ring-[#332d1b]"
                            >
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-primary">
                                            <MapPin className="w-5 h-5" />
                                            <span className="text-xs font-bold uppercase tracking-wide text-[#897f61]">Address</span>
                                        </div>
                                        <p className="pl-7 text-sm font-medium text-[#181611] dark:text-gray-200">
                                            BWC Hotel, Ahmadu Bello Way,<br />Victoria Island, Lagos
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Mail className="w-5 h-5" />
                                            <span className="text-xs font-bold uppercase tracking-wide text-[#897f61]">Email</span>
                                        </div>
                                        <p className="pl-7 text-sm font-medium text-[#181611] dark:text-gray-200">
                                            concierge@spaisland.com
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Clock className="w-5 h-5" />
                                            <span className="text-xs font-bold uppercase tracking-wide text-[#897f61]">Hours</span>
                                        </div>
                                        <p className="pl-7 text-sm font-medium text-[#181611] dark:text-gray-200">
                                            Mon-Sun: 09:00 AM - 09:00 PM
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Phone className="w-5 h-5" />
                                            <span className="text-xs font-bold uppercase tracking-wide text-[#897f61]">Phone</span>
                                        </div>
                                        <p className="pl-7 text-sm font-medium text-[#181611] dark:text-gray-200">
                                            +234 7010 6277 65
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Interactive Map */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10"
                        >
                            <MapContainer
                                center={mapCenter}
                                zoom={mapZoom}
                                style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
                                zoomControl={false}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <MapController center={mapCenter} zoom={mapZoom} />

                                {/* Route Line between User and Spa */}
                                {userLocation && (
                                    <Polyline
                                        positions={[
                                            [userLocation.lat, userLocation.lng],
                                            [spaLocation.lat, spaLocation.lng]
                                        ]}
                                        pathOptions={{
                                            color: '#3b82f6',
                                            weight: 4,
                                            opacity: 0.7,
                                            dashArray: '10, 10',
                                            lineCap: 'round',
                                            lineJoin: 'round'
                                        }}
                                    />
                                )}

                                {/* Spa Location Marker */}
                                <Marker position={[spaLocation.lat, spaLocation.lng]} icon={spaIcon}>
                                    <Popup>
                                        <div className="text-center">
                                            <h3 className="font-bold text-brand-cyan mb-1">SpaIsland</h3>
                                            <p className="text-sm text-gray-600">BWC Hotel, Victoria Island</p>
                                            <a
                                                href={`https://www.google.com/maps/dir/?api=1&destination=${spaLocation.lat},${spaLocation.lng}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 inline-flex items-center gap-1 text-sm text-brand-cyan hover:underline"
                                            >
                                                <Navigation className="w-4 h-4" />
                                                Get Directions
                                            </a>
                                        </div>
                                    </Popup>
                                </Marker>

                                {/* User Location Marker */}
                                {userLocation && (
                                    <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
                                        <Popup>
                                            <div className="text-center">
                                                <h3 className="font-bold text-primary mb-1">Your Location</h3>
                                                {distance && (
                                                    <p className="text-sm text-gray-600">
                                                        {distance.toFixed(2)} km from SpaIsland
                                                    </p>
                                                )}
                                            </div>
                                        </Popup>
                                    </Marker>
                                )}
                            </MapContainer>

                            {/* Distance Card Overlay */}
                            {distance && (
                                <div className="absolute top-4 left-4 z-[1000] bg-white dark:bg-[#1a160d] rounded-xl shadow-lg p-4 border border-gray-100 dark:border-[#332d1b]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyan">
                                            <Navigation className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-500 dark:text-gray-400">Distance</p>
                                            <p className="text-lg font-bold text-[#181611] dark:text-white">
                                                {distance.toFixed(2)} km
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                ({(distance * 0.621371).toFixed(2)} mi)
                                            </p>
                                        </div>
                                    </div>
                                    <a
                                        href={`https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${spaLocation.lat},${spaLocation.lng}&travelmode=driving`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full bg-brand-cyan hover:bg-brand-cyan-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        <Navigation className="w-4 h-4" />
                                        Get Directions
                                    </a>
                                </div>
                            )}

                            {/* Location Error Message */}
                            {locationError && (
                                <div className="absolute top-4 left-4 z-[1000] bg-white dark:bg-[#1a160d] rounded-xl shadow-lg p-4 border border-gray-100 dark:border-[#332d1b] max-w-xs">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{locationError}</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Arrival Guide Section */}
            <section className="bg-white px-6 py-16 dark:bg-[#1a160d]/50 lg:px-40 w-full">
                <div className="mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-[#181611] dark:text-white sm:text-4xl font-display">Arrival Guide</h2>
                        <p className="mt-4 text-[#897f61] dark:text-gray-400">We aim to make your visit as seamless as possible.</p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {/* Card 1: Parking */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-background-light p-8 transition-all hover:shadow-lg dark:bg-[#1a160d] border border-transparent hover:border-primary/10"
                        >
                            <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Car className="w-6 h-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-[#181611] dark:text-white font-display">Valet Parking</h3>
                            <p className="text-sm leading-relaxed text-[#897f61] dark:text-gray-400">
                                Complimentary valet service is available at the main hotel entrance for all spa guests. Simply present your appointment confirmation.
                            </p>
                        </motion.div>

                        {/* Card 2: Check-in */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative overflow-hidden rounded-2xl bg-background-light p-8 transition-all hover:shadow-lg dark:bg-[#1a160d] border border-transparent hover:border-primary/10"
                        >
                            <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-[#181611] dark:text-white font-display">Check-In</h3>
                            <p className="text-sm leading-relaxed text-[#897f61] dark:text-gray-400">
                                Please arrive 15 minutes prior to your scheduled appointment time. This allows you time to change and relax in our lounge.
                            </p>
                        </motion.div>

                        {/* Card 3: Accessibility */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative overflow-hidden rounded-2xl bg-background-light p-8 transition-all hover:shadow-lg dark:bg-[#1a160d] border border-transparent hover:border-primary/10"
                        >
                            <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <Accessibility className="w-6 h-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-[#181611] dark:text-white font-display">Accessibility</h3>
                            <p className="text-sm leading-relaxed text-[#897f61] dark:text-gray-400">
                                Our spa is fully wheelchair accessible via the main hotel elevators. Please let us know if you require any specific assistance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Visual Break / Image Strip */}
            <section className="w-full">
                <div className="grid h-64 w-full grid-cols-2 md:grid-cols-4">
                    <motion.div whileHover={{ scale: 1.05 }} className="h-full w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyRAVwiIJhN76Ox8FDNAtQEMiwEREHowzXEqivPoqPlVI4Hs8QyO93ey36nXWKoLW8wrJGnY4t0QZPaqNKgqBfvDY9tWZbUfxL37Ub2xbDt7ycY4LBalEt8xB9lBlkDC4irj72YyV-NQjFKjSx25oqpcuOFF-ErDiUqXuvPGKMiMV5yg6_La2Q7_ivV3Y-wmldwZb3NatrofIqj31eIXOESdYUHFxcGSKUM0Kw5ueccSzdKZkk7vi6X6Xb-h2NLOyLWmYGyLn6EN3q')" }}></motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="h-full w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBr2s-EYThs3c8M9MS0jPoLQpzOA-pcgASZtxaNPAncxaXKC7GxSSrN9orKFOHXNP-t33RPOyYdCiykOkUwj5R_Wt235DN9gIeZEZ9Nevyz2bxUgXc45NSA4pnMDl0yEs0LFNmjOgj_K8OTWuQCpqyPTrmZsDtzDmJRJoUwNCQiZtEx8u1cozxf5ibRGb5A6qgYlTvinQ-YIpZQbfk_fnhmlZv0PQ7YubB-Gp5W2o4O37hFkEaqAhfcpJ41M-R3M4QwUnRkVKCAjx2L')" }}></motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="h-full w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4zVXGK8KEUOXtVzi1f_K-NaBMgmcl6ZTqGrbJcj8AbJ-lA3uDO6s7CcQTpmk0r9Jb7427i1XLId9yNFfFg7l0JB895GgwzPv17uaPctZz_Fy3SyEQQLGrbKk3WAzLuV3f_Oh6jQ-mgJJXyc8HY_sjIWfbXowRstSW4XuEAnpPoXoyLdNYwVWV1qRYCt-uZ1M3vcCwixPVFkI_i3P9qFy3JrUZPNXeK1HLFlWc9aKKRZo-vOzD6rEyLSKp3ZiDRACBGjn7cBQYPW79')" }}></motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="h-full w-full bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwGMxiT3BEhFfZKialI1yPFrGTEPWv3jn1Q8i4CQjJFZmwShax6OKG9VVn7kwIl7vK73RPUL15fl54BXRU2WHTojJbthcrJwn2s_Sk9IRMr7lqgII91z-zYcsygu6K56ygl21k-7o0Mcr7h6tpBm8piTzgOg9rvR_EsowqCvpB3yhOp5T1LOziGC5_1-2vxlTCpVMcJk5HiNhzQDszC7rqEyKVBQJsDPpfhZsWBgBdUGwuunK-EKmRCcqppZfPPhMBfokDuNVbI8DU')" }}></motion.div>
                </div>
            </section>

            {/* Phone Modal */}
            {showPhoneModal && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowPhoneModal(false)}
                        className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '100%', opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 z-[9999] h-full w-full max-w-md bg-white dark:bg-[#1a160d] shadow-2xl"
                    >
                        <div className="flex h-full flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-[#332d1b] px-6 py-4">
                                <h2 className="text-2xl font-bold text-[#181611] dark:text-white font-display">Contact Us</h2>
                                <button
                                    onClick={() => setShowPhoneModal(false)}
                                    className="flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-[#221d10] transition-colors"
                                >
                                    <span className="text-2xl text-gray-500 dark:text-gray-400">×</span>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-12">
                                {/* Animated Phone Icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                                    className="flex size-24 items-center justify-center rounded-full bg-brand-cyan/10"
                                >
                                    <Phone className="w-12 h-12 text-brand-cyan" />
                                </motion.div>

                                {/* Phone Number with Stagger Animation */}
                                <div className="flex flex-col items-center gap-4">
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Call or Text
                                    </p>
                                    <motion.a
                                        href="tel:+2347010627765"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-4xl font-bold text-[#181611] dark:text-white hover:text-brand-cyan dark:hover:text-brand-cyan transition-colors font-display"
                                    >
                                        {"+234 7010 6277 65".split('').map((char, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + index * 0.05 }}
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </motion.a>
                                </div>

                                {/* Action Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.3 }}
                                    className="flex flex-col gap-3 w-full max-w-xs"
                                >
                                    <a
                                        href="tel:+2347010627765"
                                        className="flex items-center justify-center gap-2 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark text-white px-6 py-3.5 font-bold transition-colors"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now
                                    </a>
                                    <a
                                        href="sms:+2347010627765"
                                        className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-[#332d1b] bg-white dark:bg-[#1a160d] text-[#181611] dark:text-white px-6 py-3.5 font-medium hover:bg-gray-50 dark:hover:bg-[#221d10] transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Send SMS
                                    </a>
                                </motion.div>

                                {/* Additional Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="text-center text-sm text-gray-500 dark:text-gray-400"
                                >
                                    <p>Available Mon-Sun</p>
                                    <p className="font-medium">09:00 AM - 09:00 PM</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </div>
    );
}
