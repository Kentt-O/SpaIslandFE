import { motion } from "framer-motion";

export function Membership() {
    return (
        <section className="relative py-24 px-6 overflow-hidden z-10">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiPtZA6mViy5Clc_QMtlAH_cW1txUIoFLvZDgROUykY7VD6HQIplRIjH52eW5aKr_x6XvIoBCgcZTOt11La19BR49PvgjGpydS2jhPzMjN7VXpqTuPAje8cSgIvOm08qhtziAuGZ9BZHnfu75XPXBYIjNxtG_yqTC4DgrNXNtMsbkH0Y3w16VDGYtyczBgnJ5OVM1F2sinhiXV4CieKNE5Zmi3tVhN3hiMyzDV477Upr3eonKrIlCSxgtg3Nc5UwCMoGUKh2F7uBN-')" }}
            ></div>
            <motion.div
                className="absolute inset-0 backdrop-blur-[2px]"
                animate={{
                    backgroundColor: [
                        "rgba(255, 255, 255, 0.8)",
                        "rgba(237, 185, 29, 0.15)", // Gold tint
                        "rgba(20, 184, 166, 0.15)", // Teal tint
                        "rgba(255, 255, 255, 0.8)"
                    ]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="absolute inset-0 dark:bg-black/80 bg-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl md:text-5xl font-bold text-[#181611] dark:text-white"
                >
                    Become a Member
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[#181611] dark:text-gray-200 text-lg max-w-2xl mx-auto"
                >
                    Join our exclusive circle for priority booking, complimentary upgrades, and access to members-only wellness events.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-primary text-[#181611] font-bold py-4 px-10 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                    View Membership Plans
                </motion.button>
            </div>
        </section>
    );
}
