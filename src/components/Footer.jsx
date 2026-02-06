import { Facebook, Twitter, Instagram, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-[#15120a] border-t border-[#e6e3db] dark:border-[#332d1b] pt-16 pb-8 relative z-10 w-full">
            <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#181611] dark:text-white">
                        <span className="material-symbols-outlined text-2xl text-primary">spa</span>
                        <span className="font-display text-xl font-bold">SpaIsland</span>
                    </div>
                    <p className="text-[#897f61] text-sm leading-relaxed">
                        A luxury wellness sanctuary in the heart of Lagos, dedicated to your holistic wellbeing.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-[#181611] dark:text-white text-sm uppercase tracking-wider">
                        Discover
                    </h4>
                    <a className="text-[#897f61] hover:text-primary transition-colors text-sm" href="#">
                        Our Story
                    </a>
                    <a className="text-[#897f61] hover:text-primary transition-colors text-sm" href="#">
                        Treatments
                    </a>
                    <a className="text-[#897f61] hover:text-primary transition-colors text-sm" href="#">
                        The Atlantic Reset
                    </a>
                    <a className="text-[#897f61] hover:text-primary transition-colors text-sm" href="#">
                        Gift Cards
                    </a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-[#181611] dark:text-white text-sm uppercase tracking-wider">
                        Visit Us
                    </h4>
                    <div className="flex items-start gap-2 text-[#897f61] text-sm">
                        <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                        <p>
                            14 Victoria Island Avenue,
                            <br />
                            Lagos, Nigeria
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#897f61] text-sm">
                        <Phone className="w-5 h-5 shrink-0 text-primary" />
                        <p>+234 7010 6277 65</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-[#181611] dark:text-white text-sm uppercase tracking-wider">
                        Stay Connected
                    </h4>
                    <div className="flex gap-2">
                        <input
                            className="bg-[#f8f8f6] dark:bg-[#221d10] border-none rounded-lg px-4 py-2 w-full text-sm focus:ring-1 focus:ring-primary outline-none"
                            placeholder="Your email address"
                            type="email"
                        />
                        <button className="bg-primary text-[#181611] p-2 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#897f61]">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="text-[#181611] transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">About Us</Link></li>
                            <li><Link to="/contact" className="text-[#181611] transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">Contact</Link></li>
                            <li><Link to="/membership" className="text-[#181611] transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">Membership</Link></li>
                            <li><Link to="/gift-cards" className="text-[#181611] transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">Gift Cards</Link></li>
                            <li><Link to="/privacy" className="text-[#181611] transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-12 max-w-7xl border-t border-gray-200 pt-8 text-center dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-[#897f61] dark:text-gray-500">© 2023 SpaIsland. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link to="/privacy" className="text-[#897f61] hover:text-primary text-xs transition-colors dark:text-gray-500 dark:hover:text-white">Privacy Policy</Link>
                    <Link to="/privacy" className="text-[#897f61] hover:text-primary text-xs transition-colors dark:text-gray-500 dark:hover:text-white">Terms of Service</Link>
                    <a href="#" className="text-[#897f61] hover:text-primary text-xs transition-colors dark:text-gray-500 dark:hover:text-white">Cookie Settings</a>
                </div>
            </div>
        </footer >
    );
}
