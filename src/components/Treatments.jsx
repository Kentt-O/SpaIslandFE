import { motion } from "framer-motion";
import { Droplets, Leaf, Sparkles, ArrowRight } from "lucide-react";

const treatments = [
    {
        title: "Hydrotherapy",
        description: "Revitalize your senses with our therapeutic water treatments designed to improve circulation and relaxation.",
        price: "Starting at ₦80,000",
        icon: <Droplets className="w-8 h-8" />,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC-R0jnhqnS8c9d6VFgn5CqVoiuECx0vURjAeekYNoP45HS_1xRN_UtDsKVLbIqM0ArqxOVnQrfZFKYwJhdCyTrEzZaqbH8Sog2N3B6Kt-lqbnd-TgxyYYd8fEb3v2j1Ln2RuTimws4VxkAHNezFSj-JcsK7IOjN5cPae8n1gUma2l58l4YAcyoSA9ORtu1jx3Nb-TVcn6K26HjJ8-OKViwZWTrhuzEuxPF4UcAnsZkBJ4Qwb8KdJUkgRUM4OWgfn0DfdtRZLM4m2P"
    },
    {
        title: "Deep Tissue Massage",
        description: "Relieve deep-seated tension and restore muscle function with expert massage techniques.",
        price: "Starting at ₦65,000",
        icon: <Leaf className="w-8 h-8" />,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC36bSAt6OGOZ08j5uzeHtBpe1XfQIr9_WFoKR94MQ0Nlbai7fm__VGZBaO25yLIF6OygrbG2X_4Kq94kFfd3QtF_MCc77NuV6HzwTLWh0DGVDlYfb41RWUpLrvBUVKTtbNvQ20vCpctsEPLGh8ByHvrqdKn-bCw1Zg8ATjnO8bD1AV19ubrxklYdaGjxIXR0q0w4Co1qeTjl_LzeXTgKYXXTW9GfbCVQsrArp9EpagKl_x8tAByhVpdajiM92lfM1wQlhln_W9_o4b"
    },
    {
        title: "Facial Rejuvenation",
        description: "Restore your skin's natural glow with organic facial therapies and premium serums.",
        price: "Starting at ₦55,000",
        icon: <Sparkles className="w-8 h-8" />,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbdLaC4T4dSIsAEO-aqrpMW2pGs02IbwMkGS5r9it0M6G7P2BBT1RFz1n28jzG8MEJF_ScUmb5qihfDl6oZ1qtIAyevz_tJdjKzftUWjfZ47lNjQaWUQVV2lcvFhaa5j3-Muywbwz4MOXMiq-rDNwETgOsUjpw2Eyp3BP2X90TTb2ewniAWXFBCtsadE9zwDKneWWMyjUAABjmSE4BhwEnrKjtmExskjr6rA0UcvkhlOlGc5iikmJRhEQK2qDK6alosw0NTP4MwED-"
    }
];

export function Treatments() {
    return (
        <section className="py-20 md:py-32 bg-background-light dark:bg-background-dark relative z-10 transition-colors">
            <div className="max-w-[1280px] mx-auto px-6">

                {/* Intro Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl"
                    >
                        <h3 className="font-display text-4xl md:text-5xl font-bold text-[#181611] dark:text-white mb-4">Signature Treatments</h3>
                        <p className="text-[#897f61] text-lg font-display">Experience world-class therapies designed to rejuvenate.</p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        href="#"
                        className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                    >
                        View Menu <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {treatments.map((treatment, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col gap-4 rounded-xl p-6 border border-[#e6e3db] dark:border-[#332d1b] bg-white dark:bg-[#1a160d] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="absolute top-6 right-6 p-2 rounded-full bg-white dark:bg-[#332d1b] text-primary shadow-sm z-10 shadow-primary/10">
                                {treatment.icon}
                            </div>

                            <div className="h-64 w-full rounded-lg overflow-hidden relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${treatment.image}')` }}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h4 className="font-display text-2xl font-bold text-[#181611] dark:text-white">{treatment.title}</h4>
                                <p className="text-[#897f61] text-sm leading-relaxed">{treatment.description}</p>
                                <span className="text-primary font-bold text-sm mt-2 block">{treatment.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center md:hidden">
                    <button className="w-full py-3 rounded-lg border border-[#e6e3db] dark:border-[#332d1b] text-[#181611] dark:text-white font-bold">View Full Menu</button>
                </div>
            </div>
        </section>
    );
}
