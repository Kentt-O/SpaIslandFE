import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                    isScrolled ? "glass-nav py-3" : "py-5 bg-transparent"
                )}
            >
                <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="size-8 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">spa</span>
                        </div>
                        <h1 className={cn("font-display text-2xl font-bold tracking-tight", isScrolled ? "text-[#181611] dark:text-white" : "text-white")}>
                            SpaIsland
                        </h1>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className={cn(
                                "font-display text-base font-medium transition-colors",
                                isScrolled
                                    ? "text-[#181611] dark:text-white hover:text-primary"
                                    : "text-white/90 hover:text-white"
                            )}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={cn(
                                "font-display text-base font-medium transition-colors",
                                isScrolled
                                    ? "text-[#181611] dark:text-white hover:text-primary"
                                    : "text-white/90 hover:text-white"
                            )}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/contact"
                            className={cn(
                                "font-display text-base font-medium transition-colors",
                                isScrolled
                                    ? "text-[#181611] dark:text-white hover:text-primary"
                                    : "text-white/90 hover:text-white"
                            )}
                        >
                            Contact
                        </Link>
                        <Link
                            to="/membership"
                            className={cn(
                                "font-display text-base font-medium transition-colors",
                                isScrolled
                                    ? "text-[#181611] dark:text-white hover:text-primary"
                                    : "text-white/90 hover:text-white"
                            )}
                        >
                            Membership
                        </Link>
                        {["Treatments"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className={cn(
                                    "font-display text-base font-medium transition-colors",
                                    isScrolled
                                        ? "text-[#181611] dark:text-white hover:text-primary"
                                        : "text-white/90 hover:text-white"
                                )}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/booking/service"
                            className="hidden md:flex items-center justify-center h-10 px-6 rounded-full bg-primary text-[#181611] font-bold text-sm hover:bg-primary/80 transition-colors shadow-sm"
                        >
                            Book Now
                        </Link>
                        <button className={cn(
                            "flex items-center justify-center size-10 rounded-full transition-colors relative group overflow-hidden",
                            isScrolled ? "bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20" : "bg-white/20 hover:bg-white/30"
                        )}>
                            <User className={cn("w-5 h-5 transition-transform group-hover:scale-110", isScrolled ? "text-[#181611] dark:text-white" : "text-white")} />
                            <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 animate-pulse"></span>
                        </button>
                        <button
                            className="md:hidden flex items-center justify-center size-10 text-primary z-50 relative"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="material-symbols-outlined">
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </span>
                        </button>
                    </div>
                </div>
            </header >

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background-light dark:bg-background-dark pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            <Link to="/" className="font-display text-2xl font-bold text-[#181611] dark:text-white" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                            <Link to="/about" className="font-display text-2xl font-bold text-[#181611] dark:text-white" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                            <Link to="/contact" className="font-display text-2xl font-bold text-[#181611] dark:text-white" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                            <Link to="/membership" className="font-display text-2xl font-bold text-[#181611] dark:text-white" onClick={() => setMobileMenuOpen(false)}>Membership</Link>
                            {["Treatments"].map((item) => (
                                <a key={item} href="#" className="font-display text-2xl font-bold text-[#181611] dark:text-white" onClick={() => setMobileMenuOpen(false)}>
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
