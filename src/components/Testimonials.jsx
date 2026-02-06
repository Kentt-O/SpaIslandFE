import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-20 px-6 bg-[#f4f3f0] dark:bg-[#1f1b13] relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1
                    }}
                    className="inline-block mb-6 relative"
                >
                    <Quote className="w-16 h-16 text-primary/80 fill-primary/10" />
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                    />
                </motion.div>

                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-display text-2xl md:text-4xl font-light italic text-[#181611] dark:text-white leading-relaxed mb-8"
                >
                    "SpaIsland is not just a spa; it's a necessary retreat for my sanity. The Atlantic Reset treatment is transformative."
                </motion.blockquote>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center gap-2"
                >
                    <div
                        className="w-12 h-12 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvpF5T-hcLkNMWEmVKNWY05knabldl0pDxZMOOTaI8gS0lv7t43zAKE45Xj-r37EVgwEb_rVpYu1ruxSVDSl6yORn6I_XzrK1Vpfbpe7ypZWirJqNrkYtV4o5vG3TGdMT63_9IxonfeCdwzJgKGUWxlla5XHUaFCDRIt0_scZNmeFqOszLzXdbXgpGVqV3vLMyjPsri0Gsem1F0A4fe0k79M6wGbK1e_7FwMxEpHzb-eEXYlP-WFuyrycPswgA60sC-MYIYEeRq_Tf')" }}
                    ></div>
                    <div className="text-[#181611] dark:text-white font-bold text-sm uppercase tracking-wide">Adesua O.</div>
                    <div className="text-[#897f61] text-xs font-medium">BWC Traveler & Executive</div>
                </motion.div>
            </div>
        </section>
    );
}
