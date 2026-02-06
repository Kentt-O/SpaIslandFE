import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden [clip-path:inset(0)]">
            <div className="fixed top-0 left-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src="https://assets.mixkit.co/videos/preview/mixkit-ripples-of-a-swimming-pool-in-slow-motion-2292-large.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute inset-0 bg-teal-900/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center gap-8 pt-20">
                <div className="space-y-4 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-widest font-bold"
                    >
                        Welcome to Lagos' Premier Sanctuary
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-sm"
                    >
                        The Atlantic Reset
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="font-display text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Reclaim your calm in the heart of the city. An immersive experience
                        designed for the modern professional.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                >
                    <button className="glass-btn h-16 md:h-20 px-10 md:px-12 rounded-full text-lg md:text-xl font-bold tracking-wide min-w-[240px] shadow-[0_0_25px_rgba(237,185,29,0.4)] hover:-translate-y-1 transform transition-all duration-300">
                        Book Your Reset
                    </button>
                    <button className="h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-base font-bold tracking-wide min-w-[200px] transition-colors">
                        Explore Treatments
                    </button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 z-10"
            >
                <span className="material-symbols-outlined text-4xl">
                    keyboard_arrow_down
                </span>
            </motion.div>
        </section>
    );
}
