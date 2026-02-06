import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Mail, Truck, Star, Phone } from "lucide-react";
import { useState } from "react";

const giftValues = [
    {
        id: "refresh",
        name: "The Refresh",
        amount: 25000,
        description: "Perfect for a single luxury treatment like a Deep Tissue Massage.",
    },
    {
        id: "indulgence",
        name: "The Indulgence",
        amount: 60000,
        description: "Ideal for a half-day package including massage, facial, and lunch.",
        popular: true,
    },
    {
        id: "ultimate",
        name: "The Ultimate Escape",
        amount: 150000,
        description: "The full VIP experience. Full day access, multiple treatments & champagne.",
    },
];

const cardDesigns = [
    {
        id: "ocean",
        name: "Ocean Calm",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaSiKXFNfESqxatdN7pKGVtoESI6sqCDW7KqSK7SG18KvHhOvEIJhiXgPK9INj3Np9dEGDq_JgzB_I3Fb-rim85KXtXw82UENd7MLs9NLY1_SkvgOQargFAdAWEDKE84APMH4zL49W0jVvJKIejCO4iIiwLZFm5JlQJoGvNCwkjhw5Wfj5ofWsMNo0Mi9Jww8nwbsQ4RH9rSbRbyxYK3ETf1fspBoTvZb9_QsUkKJajpTLTTPZ94VSGrXO7Pf_W_Yjitd1O0wjbx_Q",
    },
    {
        id: "golden",
        name: "Golden Touch",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4fNbldp3JWk2rgaO2YgArcRraIZ53h9xxXqKZspQ0FX9vKrQAk4l8ptNSgy8so3tTyS333eMq8solEb-VQN4HAfX9ReubmUx19Mbs4optqZuT0VoXPxaqP6YqtwfgPZz309aA-ObH19Jrsm2wL2OvFnAG55XJ_-Fz2P9WkrhYArt6urWO2iT_JJFSIbTVdNemTQaTe846nwBiFyq9R0xmBVWa43PlmwEwlQZG-O4nf35omEXuNUfuOBzqh0t87ZiETpGdi0lqV9gb",
    },
    {
        id: "zen",
        name: "Zen Garden",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuOwdl6eicO8-Jti83s_oIKtCeOZZHr5dh_Ml2eYxiLEwVSgFS1B8ypUuxi_0TIZx0r5e1fKwx5nSCM_sIa74Yl8cvNhCznK7HvBEdfqFb4MlZ1HlDz8lSHWE9iRsW6fNNLvluqq_XSVjNXU3v6fQAspj1Rnpok5TkhcNaMVrcWyCrVsIhxWTSlTo8wXyWwUvMHOi4Q73e-x4q4mZtmyPKNfvNshbsS0Wfi2gHRcAVBqwF3GoO07M71tgTOYueZ8s4Po7Yc4Xlcx2H",
    },
    {
        id: "minimal",
        name: "Classic Minimal",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_QXlAdW7g8QIup61hHLtfHyW1Zn1EPQbxAiDwsiwe61ipM2x5ZMTIHnSvCW90cnebmMyX0EJqWrmq8WXzVqB-_IDEOngZZIu5obDUNBSFT2BSyhSN1aYI8KFE1P2aSIkmvyH_Gsk8zeHn2UiroB4KK2rRBpd1VUvtbTqI4UdRj-7J9LXsoRYmEhbzmKpm3_If7pFYciIORwDqlhFUZZTW3d2NxxB3L-ueqNWYKDhILy_x3ZuCWhmFL3iiqClZ1NiUgIUTksf1BO9C",
    },
];

export function GiftCard() {
    const [selectedValue, setSelectedValue] = useState("indulgence");
    const [customAmount, setCustomAmount] = useState("");
    const [selectedDesign, setSelectedDesign] = useState("ocean");
    const [deliveryMethod, setDeliveryMethod] = useState("email");
    const [formData, setFormData] = useState({
        recipientName: "",
        recipientEmail: "",
        senderName: "",
        deliveryDate: "",
        message: "",
    });

    const getTotalAmount = () => {
        if (customAmount) {
            return parseInt(customAmount) || 0;
        }
        const selected = giftValues.find(v => v.id === selectedValue);
        return selected ? selected.amount : 0;
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        if (value.length <= 200) {
            setFormData({ ...formData, message: value });
        }
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative w-full min-h-[480px] flex items-center justify-center px-6 py-20 bg-cover bg-center"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAP0OykfSkBhh6OppjIHA3jaDb6lDkY2vR0PhWMiChaLtiUrUPjDd1aQ8wzt8uH-olxcxPn7vNgtYfXN0os-XZegAsta5y-VKliImM3Hzt5ZGbI8puvbRT21MwELXg-7fTtsFMJa6horatxK5yh_zH-geHTbczDmqBooAxJCWakxir-8bG9jTfr9Cf2dfJISCG5uzPpsAJuEL2KXOplHgiZ9PoV7yrwvr-Q800c1_e-DVX8n9a6gc7c3fKhRdbfaaCtcAOcSD8pWGb8')"
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6 text-center z-10 max-w-[720px]"
                >
                    <span className="text-white text-sm font-bold tracking-widest uppercase bg-white/20 backdrop-blur-md px-4 py-1 rounded-full w-fit mx-auto">
                        Luxury Gifting
                    </span>
                    <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg font-display">
                        The Perfect Gift for Busy Lives
                    </h1>
                    <h2 className="text-white text-base font-medium leading-relaxed max-w-xl mx-auto drop-shadow-md">
                        Treat your loved ones to an escape right here in Lagos. Select a value below to customize their experience.
                    </h2>
                </motion.div>
            </section>

            {/* Main Content */}
            <div className="px-6 md:px-40 flex flex-1 justify-center py-10 w-full max-w-[960px]">
                <div className="flex flex-col gap-12 w-full">
                    {/* Step 1: Value Selection */}
                    <section className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-cyan text-white font-bold text-sm">1</span>
                            <h2 className="text-[#181611] dark:text-white text-[22px] font-bold leading-tight tracking-tight font-display">
                                Select Gift Value
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {giftValues.map((gift, index) => (
                                <motion.div
                                    key={gift.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => {
                                        setSelectedValue(gift.id);
                                        setCustomAmount("");
                                    }}
                                    className={`relative flex flex-col gap-4 rounded-2xl border-2 p-6 cursor-pointer transition-all ${selectedValue === gift.id && !customAmount
                                            ? "border-brand-cyan shadow-lg scale-[1.02]"
                                            : "border-gray-200 dark:border-gray-700 hover:border-brand-cyan hover:shadow-lg"
                                        } ${gift.popular ? "bg-white dark:bg-[#1a160d]" : "bg-white dark:bg-[#1a160d]"}`}
                                >
                                    {gift.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-cyan text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            MOST POPULAR
                                        </div>
                                    )}
                                    {selectedValue === gift.id && !customAmount && (
                                        <div className="absolute top-4 right-4 text-brand-cyan">
                                            <CheckCircle className="w-6 h-6 fill-current" />
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-1">
                                        <h3 className={`text-sm font-bold uppercase tracking-wider ${selectedValue === gift.id && !customAmount ? "text-brand-cyan" : "text-gray-500"
                                            }`}>
                                            {gift.name}
                                        </h3>
                                        <p className="flex items-baseline gap-1 text-[#181611] dark:text-white">
                                            <span className="text-3xl font-black leading-tight tracking-tight">
                                                ₦{gift.amount.toLocaleString()}
                                            </span>
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                            {gift.description}
                                        </p>
                                    </div>
                                    <button className={`mt-auto w-full py-2 rounded-lg font-bold transition-colors ${selectedValue === gift.id && !customAmount
                                            ? "bg-brand-cyan text-white"
                                            : "bg-gray-100 dark:bg-gray-700 text-[#181611] dark:text-white hover:bg-brand-cyan hover:text-white"
                                        }`}>
                                        {selectedValue === gift.id && !customAmount ? "Selected" : "Select"}
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Custom Amount */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-2 bg-white dark:bg-[#1a160d] p-6 rounded-2xl border border-dashed border-gray-300 dark:border-gray-600"
                        >
                            <label className="flex flex-col md:flex-row items-center gap-4">
                                <span className="text-[#181611] dark:text-white text-base font-medium whitespace-nowrap">
                                    Or enter a custom amount:
                                </span>
                                <div className="relative w-full md:max-w-xs">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                                    <input
                                        className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-[#181611] dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                                        placeholder="e.g. 100,000"
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => {
                                            setCustomAmount(e.target.value);
                                            if (e.target.value) setSelectedValue("");
                                        }}
                                    />
                                </div>
                            </label>
                        </motion.div>
                    </section>

                    {/* Step 2: Design Selection */}
                    <section className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-cyan text-white font-bold text-sm">2</span>
                            <h2 className="text-[#181611] dark:text-white text-[22px] font-bold leading-tight tracking-tight font-display">
                                Choose Card Design
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {cardDesigns.map((design) => (
                                <label key={design.id} className="relative cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="design"
                                        checked={selectedDesign === design.id}
                                        onChange={() => setSelectedDesign(design.id)}
                                        className="sr-only"
                                    />
                                    <div className={`aspect-[1.6] rounded-xl overflow-hidden border-2 transition-all ${selectedDesign === design.id
                                            ? "border-brand-cyan ring-2 ring-brand-cyan/20"
                                            : "border-transparent"
                                        }`}>
                                        <img
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            src={design.image}
                                            alt={design.name}
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                        {selectedDesign === design.id && (
                                            <div className="absolute bottom-2 right-2 bg-white/90 p-1 rounded-full text-brand-cyan">
                                                <CheckCircle className="w-4 h-4" />
                                            </div>
                                        )}
                                    </div>
                                    <span className={`block text-center text-sm mt-2 font-medium ${selectedDesign === design.id ? "text-brand-cyan" : "text-gray-600 dark:text-gray-400"
                                        }`}>
                                        {design.name}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* Step 3: Personalization */}
                    <section className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-cyan text-white font-bold text-sm">3</span>
                            <h2 className="text-[#181611] dark:text-white text-[22px] font-bold leading-tight tracking-tight font-display">
                                Personalize Details
                            </h2>
                        </div>

                        <div className="bg-white dark:bg-[#1a160d] p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col gap-6">
                            {/* Delivery Method */}
                            <div className="flex flex-col gap-3 mb-2">
                                <label className="text-[#181611] dark:text-white text-base font-medium">Delivery Method</label>
                                <div className="flex p-1 bg-gray-100 dark:bg-gray-800 rounded-xl w-full max-w-md">
                                    <button
                                        onClick={() => setDeliveryMethod("email")}
                                        className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${deliveryMethod === "email"
                                                ? "bg-white dark:bg-gray-700 text-brand-cyan shadow-sm"
                                                : "text-gray-500 dark:text-gray-400 hover:text-[#181611] dark:hover:text-white"
                                            }`}
                                    >
                                        <Mail className="w-4 h-4" />
                                        Email (Instant)
                                    </button>
                                    <button
                                        onClick={() => setDeliveryMethod("physical")}
                                        className={`flex-1 py-2 px-4 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${deliveryMethod === "physical"
                                                ? "bg-white dark:bg-gray-700 text-brand-cyan shadow-sm"
                                                : "text-gray-500 dark:text-gray-400 hover:text-[#181611] dark:hover:text-white"
                                            }`}
                                    >
                                        <Truck className="w-4 h-4" />
                                        Physical Card
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#181611] dark:text-white text-sm font-bold">To (Recipient Name)</span>
                                    <input
                                        className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#181611] dark:text-white h-12 px-4 focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                                        placeholder="Jane Doe"
                                        type="text"
                                        value={formData.recipientName}
                                        onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#181611] dark:text-white text-sm font-bold">Recipient Email</span>
                                    <input
                                        className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#181611] dark:text-white h-12 px-4 focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                                        placeholder="jane@example.com"
                                        type="email"
                                        value={formData.recipientEmail}
                                        onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#181611] dark:text-white text-sm font-bold">From (Your Name)</span>
                                    <input
                                        className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#181611] dark:text-white h-12 px-4 focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                                        placeholder="John"
                                        type="text"
                                        value={formData.senderName}
                                        onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                                    />
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-[#181611] dark:text-white text-sm font-bold">Delivery Date</span>
                                    <input
                                        className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#181611] dark:text-white h-12 px-4 focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                                        type="date"
                                        value={formData.deliveryDate}
                                        onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                                    />
                                </label>
                            </div>

                            <label className="flex flex-col gap-2">
                                <span className="text-[#181611] dark:text-white text-sm font-bold">Personal Message</span>
                                <textarea
                                    className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-[#181611] dark:text-white p-4 focus:ring-2 focus:ring-brand-cyan focus:border-transparent resize-none"
                                    placeholder="Hope you enjoy a day of relaxation!"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleMessageChange}
                                />
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>Added to the digital card</span>
                                    <span>{formData.message.length}/200</span>
                                </div>
                            </label>
                        </div>
                    </section>

                    {/* Testimonial */}
                    <section className="py-6 px-8 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/10">
                        <div className="flex flex-col items-center text-center gap-4">
                            <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-lg italic font-medium text-gray-700 dark:text-gray-300 max-w-2xl">
                                "I bought a gift card for my wife's birthday. The physical card arrived in VI within hours and the packaging was exquisite. She loved the 'Indulgence' package!"
                            </p>
                            <p className="text-sm font-bold text-gray-900 dark:text-white">— Tunde O., Lagos</p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Sticky Summary Bar */}
            <div className="sticky bottom-0 z-40 w-full bg-white dark:bg-[#1a160d] border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] py-4 px-6 md:px-40">
                <div className="max-w-[960px] mx-auto flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Total Amount</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-black text-[#181611] dark:text-white">
                                ₦{getTotalAmount().toLocaleString()}
                            </span>
                            <span className="hidden md:inline text-sm text-gray-500">• 1 Gift Card</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex flex-col items-end text-xs text-gray-500 text-right">
                            <span>Valid for 12 months</span>
                            <span>Redeemable on all services</span>
                        </div>
                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-brand-cyan text-white text-base font-bold leading-normal tracking-wide shadow-lg hover:shadow-brand-cyan/50 hover:scale-105 transition-all">
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
