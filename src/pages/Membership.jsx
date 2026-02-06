import { motion } from "framer-motion";
import { ArrowDown, CheckCircle, ShieldCheck, Star, LogIn, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export function Membership() {
    return (
        <div className="relative flex min-h-screen w-full flex-col group/design-root font-sans">
            {/* Hero Section */}
            <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Bright and airy luxury spa interior with white linens and tropical plants"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu1H3AXfUZaCtlDIBFvmOoDNpm5Q5LE6hY8Z5ce7wnR_qxKFK0OoDWbRmoApKwLb3w9gqXeWnpae0hRXs6sfL6dmefO1QKfqzBinjPo_FAs-D6N15oZSIhUw9rO_w0vMTOGILprBcQs9n52wcs58YSxUdbC9IwHLC84cNTUM7VtkVQf51R9touB-lNOMwhMPVOqUpKL_6SzU3IIP2nTZheippzq5fLClbKHWmT2mXuUPwpLH2p1Sa6Fu18zWa8_ak5wLnxl0wGUK3X"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
                </div>
                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col gap-6 max-w-4xl mr-auto ml-0 pt-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur rounded-full w-fit border border-gold/30">
                        <Crown className="text-gold w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider text-[#111818]">
                            Premier Loyalty Program
                        </span>
                    </div>
                    <h1 className="text-[#111818] text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight">
                        Escape to the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-dark">
                            Island Club
                        </span>
                    </h1>
                    <p className="text-[#111818]/80 text-lg lg:text-xl font-medium max-w-lg leading-relaxed">
                        Unlock exclusive wellness. Memberships curated for the elite traveler
                        seeking coastal sophistication in the heart of Lagos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="h-12 px-8 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark text-[#111818] font-bold text-base transition-all shadow-lg hover:shadow-brand-cyan/30 flex items-center justify-center gap-2 cursor-pointer">
                            Explore Memberships
                            <ArrowDown className="w-5 h-5" />
                        </button>
                        <button className="h-12 px-8 rounded-xl bg-white/80 backdrop-blur border border-white hover:bg-white text-[#111818] font-bold text-base transition-all shadow-sm flex items-center justify-center cursor-pointer">
                            Member Login
                        </button>
                    </div>
                </div>
                {/* Decorative Gold Leaf Accent */}
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            {/* Section Header */}
            <div className="w-full bg-white py-16 px-6 lg:px-20 flex justify-center">
                <div className="max-w-3xl text-center flex flex-col gap-4">
                    <h2 className="text-gold font-bold uppercase tracking-widest text-sm">
                        Membership Tiers
                    </h2>
                    <h3 className="text-[#111818] text-3xl lg:text-4xl font-bold leading-tight font-display">
                        Select Your Sanctuary
                    </h3>
                    <p className="text-gray-500 text-lg">
                        Choose the level of luxury that fits your lifestyle. From occasional
                        escapes to daily retreats.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan/20 via-brand-cyan to-brand-cyan/20 mx-auto mt-4 rounded-full"></div>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="w-full bg-background-light pb-24 px-6 lg:px-20 flex justify-center">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

                    {/* The Voyager */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col gap-6 rounded-2xl border border-[#dce5e5] bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                    >
                        <div className="flex flex-col gap-2 border-b border-[#f0f4f4] pb-6">
                            <h4 className="text-gray-500 text-sm font-bold uppercase tracking-wider">
                                Entry Level
                            </h4>
                            <h1 className="text-[#111818] text-2xl font-bold font-display">The Voyager</h1>
                            <p className="text-gray-500 text-sm">
                                Perfect for the occasional escape.
                            </p>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-[#111818] text-4xl font-black tracking-tight">
                                    ₦50k
                                </span>
                                <span className="text-gray-500 text-sm font-medium">/month</span>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-4 flex-1">
                            {[
                                "Priority Booking window (24h)",
                                "5% Service Discount",
                                "Lounge Access",
                                "Seasonal Newsletter",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-[#111818]">
                                    <CheckCircle className="text-brand-cyan w-5 h-5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full h-12 rounded-xl border border-[#dce5e5] bg-transparent hover:bg-[#f0f4f4] text-[#111818] font-bold text-sm transition-colors mt-auto cursor-pointer">
                            Join Voyager
                        </button>
                    </motion.div>

                    {/* The Islander (Popular) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col gap-6 rounded-2xl border-2 border-brand-cyan bg-white p-8 shadow-xl transition-all duration-300 h-full transform md:scale-105 z-10"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-cyan text-[#111818] text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                            Most Popular
                        </div>
                        <div className="flex flex-col gap-2 border-b border-[#f0f4f4] pb-6">
                            <h4 className="text-brand-cyan-dark text-sm font-bold uppercase tracking-wider">
                                Regular Retreat
                            </h4>
                            <h1 className="text-[#111818] text-2xl font-bold font-display">The Islander</h1>
                            <p className="text-gray-500 text-sm">
                                Designed for consistent wellness.
                            </p>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-[#111818] text-4xl font-black tracking-tight">
                                    ₦120k
                                </span>
                                <span className="text-gray-500 text-sm font-medium">/month</span>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-4 flex-1">
                            {[
                                "Priority Booking window (48h)",
                                "15% Service Discount",
                                "2 Guest Passes/mo",
                                "Complimentary Herbal Tea",
                                "Access to Steam Room",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-[#111818]">
                                    <ShieldCheck className="text-brand-cyan w-5 h-5 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full h-12 rounded-xl bg-brand-cyan hover:bg-brand-cyan-dark text-[#111818] font-bold text-sm transition-colors mt-auto shadow-md cursor-pointer">
                            Join Islander
                        </button>
                    </motion.div>

                    {/* The Oasis (Premium) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative flex flex-col gap-6 rounded-2xl border border-gold bg-[#fffdf5] p-8 shadow-md hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 h-full overflow-hidden"
                    >
                        {/* Gold Leaf Background Pattern Simulation */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold/5 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

                        <div className="flex flex-col gap-2 border-b border-gold/20 pb-6 relative z-10">
                            <div className="flex justify-between items-center">
                                <h4 className="text-gold text-sm font-bold uppercase tracking-wider">
                                    Ultimate Luxury
                                </h4>
                                <span className="bg-gold/20 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded">
                                    LIMITED
                                </span>
                            </div>
                            <h1 className="text-[#111818] text-2xl font-bold flex items-center gap-2 font-display">
                                The Oasis
                                <Crown className="text-gold w-6 h-6" />
                            </h1>
                            <p className="text-gray-500 text-sm">Your private sanctuary.</p>
                            <div className="flex items-baseline gap-1 mt-4">
                                <span className="text-[#111818] text-4xl font-black tracking-tight">
                                    ₦250k
                                </span>
                                <span className="text-gray-500 text-sm font-medium">/month</span>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-4 flex-1 relative z-10">
                            {[
                                { text: "Private Suite Access", bold: true },
                                { text: "25% Service Discount", bold: false },
                                { text: "Unlimited Guest Passes", bold: false },
                                { text: "Personal Concierge", bold: false },
                                { text: "Exclusive Event Invites", bold: false },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-[#111818]">
                                    <Star className="text-gold w-5 h-5 shrink-0" />
                                    <span className={item.bold ? "font-bold" : ""}>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full h-12 rounded-xl bg-[#111818] hover:bg-black text-white font-bold text-sm transition-colors mt-auto relative z-10 border border-gold/50 cursor-pointer">
                            Join Oasis
                        </button>
                    </motion.div>

                </div>
            </div>

            {/* CTA / Login Section */}
            <div className="relative w-full py-20 px-6 lg:px-20 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Minimalist textures of sand and white wall shadows"
                        className="w-full h-full object-cover opacity-10"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUswkr_jTU-4C9J3uoa4LXmtSA_VpXDApJURZ7OVZktewxlSDJjvg6DVC-5pohH5rqoaxB58bDRk6_4stRdZygpJZtuiLJawu9HPAMOfzoFrKojfIJOqunlOnqorJXUFXzv9Azl7Sar7E8YVfTOJpt7eVQyQbrGQiRpKRpa6ilwI9_GaSe8gdAFw8g5kXTgXq1edsZGRCK0mSutyuFY_30H7-tsNQCJi6Vox6am-S8Ivz8ed27zzUFHAV42ET975XqlWkwi8GLd9T2"
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 bg-brand-cyan/10 rounded-3xl p-10 md:p-16 border border-brand-cyan/20">
                    <div className="flex flex-col gap-4 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#111818] tracking-tight font-display">
                            Already a Member?
                        </h2>
                        <p className="text-[#111818]/70 max-w-md">
                            Access your exclusive portal to manage bookings, view loyalty
                            rewards, and renew your sanctuary status.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white hover:bg-[#f8fcfc] text-[#111818] text-base font-bold shadow-lg transition-all hover:scale-105 border border-brand-cyan/20">
                            <LogIn className="w-5 h-5 mr-2" />
                            Member Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
