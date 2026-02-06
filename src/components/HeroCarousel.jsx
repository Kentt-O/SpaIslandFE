import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        type: "video",
        src: "https://assets.mixkit.co/videos/preview/mixkit-ripples-of-a-swimming-pool-in-slow-motion-2292-large.mp4",
        title: "The Atlantic Reset",
        subtitle: "Reclaim your calm in the heart of the city.",
        badge: "Welcome to Lagos' Premier Sanctuary",
        url: "#"
    },
    {
        type: "image",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC36bSAt6OGOZ08j5uzeHtBpe1XfQIr9_WFoKR94MQ0Nlbai7fm__VGZBaO25yLIF6OygrbG2X_4Kq94kFfd3QtF_MCc77NuV6HzwTLWh0DGVDlYfb41RWUpLrvBUVKTtbNvQ20vCpctsEPLGh8ByHvrqdKn-bCw1Zg8ATjnO8bD1AV19ubrxklYdaGjxIXR0q0w4Co1qeTjl_LzeXTgKYXXTW9GfbCVQsrArp9EpagKl_x8tAByhVpdajiM92lfM1wQlhln_W9_o4b",
        title: "Deep Tissue Therapy",
        subtitle: "Restorative massage techniques for modern life.",
        badge: "Signature Treatment",
        url: "#"
    },
    {
        type: "image",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbdLaC4T4dSIsAEO-aqrpMW2pGs02IbwMkGS5r9it0M6G7P2BBT1RFz1n28jzG8MEJF_ScUmb5qihfDl6oZ1qtIAyevz_tJdjKzftUWjfZ47lNjQaWUQVV2lcvFhaa5j3-Muywbwz4MOXMiq-rDNwETgOsUjpw2Eyp3BP2X90TTb2ewniAWXFBCtsadE9zwDKneWWMyjUAABjmSE4BhwEnrKjtmExskjr6rA0UcvkhlOlGc5iikmJRhEQK2qDK6alosw0NTP4MwED-",
        title: "Organic Facial Glow",
        subtitle: "Natural radiance with premium serums.",
        badge: "Holistic Care",
        url: "#"
    }
];

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-background-dark">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 w-full h-full"
                >
                    {slides[current].type === "video" ? (
                        <div className="relative w-full h-full">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src={slides[current].src} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay"></div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{ scale: 1.1 }}
                            transition={{ duration: 7, ease: "linear" }}
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${slides[current].src}')` }}
                        />
                    )}
                    <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 max-w-4xl"
                    >
                        <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-bold">
                            {slides[current].badge}
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                            {slides[current].title}
                        </h1>
                        <p className="font-display text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                            {slides[current].subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                            <button className="glass-btn h-14 md:h-16 px-8 md:px-10 rounded-full text-lg font-bold tracking-wide shadow-[0_0_25px_rgba(237,185,29,0.4)] hover:-translate-y-1 transform transition-all duration-300 relative overflow-hidden group">
                                <span className="relative z-10">Book Experience</span>
                                <span className="absolute inset-0 bg-primary/20 animate-pulse z-0"></span>
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 md:bottom-24 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
            </motion.div>

            {/* Controls */}
            <div className="absolute bottom-12 left-0 w-full flex justify-center items-center gap-6 z-20">
                <button onClick={prevSlide} className="group p-3 rounded-full bg-white/5 hover:bg-white/20 text-white/70 hover:text-white backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-white/30 relative">
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    <span className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-0 group-hover:opacity-30"></span>
                </button>
                <div className="flex gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${idx === current ? "w-8 bg-primary shadow-[0_0_10px_rgba(237,185,29,0.5)]" : "w-1.5 bg-white/30 hover:bg-white/60"}`}
                        />
                    ))}
                </div>
                <button onClick={nextSlide} className="group p-3 rounded-full bg-white/5 hover:bg-white/20 text-white/70 hover:text-white backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-white/30 relative">
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    <span className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-0 group-hover:opacity-30"></span>
                </button>
            </div>
        </section>
    );
}
