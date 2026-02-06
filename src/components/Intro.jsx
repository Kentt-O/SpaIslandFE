import { motion } from "framer-motion";
import { Sprout } from "lucide-react";

export function Intro() {
    return (
        <section className="py-20 md:py-32 bg-background-light dark:bg-background-dark relative z-10">
            <div className="max-w-[960px] mx-auto px-6 text-center flex flex-col items-center gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <Sprout className="w-12 h-12 text-primary" />
                    <motion.div
                        className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="font-display text-3xl md:text-4xl font-bold text-[#181611] dark:text-white leading-tight"
                >
                    A Sanctuary for the Busy Professional
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="w-16 h-0.5 bg-primary/40 rounded-full"
                ></motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-[#181611]/80 dark:text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl font-display"
                >
                    Escape the bustle of Lagos and step into a world of refined tranquility. SpaIsland offers a curated selection of therapies designed to restore balance to your body and clarity to your mind.
                </motion.p>
            </div>
        </section>
    );
}
