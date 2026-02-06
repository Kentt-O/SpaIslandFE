import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sparkles, Droplets, Diamond } from "lucide-react";

export function About() {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Hero / Narrative Introduction */}
            <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-20 lg:px-40 w-full">
                <div className="w-full max-w-[1200px] flex flex-col gap-12">
                    {/* Headline Block */}
                    <div className="flex flex-col gap-4 text-center max-w-4xl mx-auto z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary uppercase tracking-widest text-xs font-bold font-sans"
                        >
                            About SpaIsland
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[#181611] dark:text-white text-5xl md:text-6xl lg:text-7xl font-bold font-display italic leading-tight tracking-tight"
                        >
                            An Island of Calm in the Heart of Victoria Island.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#897f61] dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mt-4"
                        >
                            Luxury Defined at BWC Hotel. Experience a high-altitude retreat designed for the busy professional.
                        </motion.p>
                    </div>

                    {/* Floating Card + Background Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative w-full rounded-2xl overflow-hidden shadow-2xl mt-8 group h-[600px]"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuANEtFuAW-r4UV8l9K7wCe9mQPH93ujFCSQl8P67KIHYyXLkEImcsIWvA_2pVxVcunCyrh6Ac6e3qvA4CM2x_Tm7HBKOOxXFkh2dQgpppmL8LKMGTav_AD6n1uWmAF3zBwxAWTyMamx-5c6sbbvoUkIrvUxU7UDjMNSggjBw-NbtfiKZSshaPbcMi61i_f2ghHCuF1ltSFuy5szxHyUQ86wrRGr5D79m8jircVtYrlGYgGHEJXtKbbJjKU4qVBk9TIQaKFIUZ6vpC5O")' }}
                        ></div>

                        {/* Floating Narrative Card */}
                        <div className="absolute bottom-0 left-0 w-full md:bottom-10 md:left-10 md:w-auto md:max-w-md bg-white/95 dark:bg-[#15120a]/95 backdrop-blur-sm p-8 md:rounded-xl shadow-lg border border-white/20 dark:border-[#332d1b]">
                            <h3 className="text-2xl font-bold italic mb-4 text-[#181611] dark:text-white font-display">A Transition, Not Just a Destination</h3>
                            <p className="text-[#181611]/80 dark:text-white/80 leading-relaxed font-sans">
                                Located within the sanctuary of BWC Hotel, SpaIsland is more than a destination—it is a transition. We blend modern wellness with timeless serenity, offering a unique escape from the city's pulse.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-primary font-bold cursor-pointer hover:gap-3 transition-all">
                                <span>Discover Our Story</span>
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 md:px-20 lg:px-40 w-full bg-white dark:bg-[#1a160d]">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-background-light dark:bg-[#221d10] border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 group"
                        >
                            <div className="size-14 rounded-full bg-white dark:bg-[#2a2415] flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Leaf className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold italic mb-2 text-[#181611] dark:text-white font-display">Serenity</h3>
                            <p className="text-[#897f61] font-sans">A sanctuary of silence designed to disconnect you from the noise of the world.</p>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-background-light dark:bg-[#221d10] border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 group"
                        >
                            <div className="size-14 rounded-full bg-white dark:bg-[#2a2415] flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Diamond className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold italic mb-2 text-[#181611] dark:text-white font-display">Luxury</h3>
                            <p className="text-[#897f61] font-sans">Premium champagne service and bespoke treatments for the discerning traveler.</p>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center text-center p-8 rounded-2xl bg-background-light dark:bg-[#221d10] border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1 group"
                        >
                            <div className="size-14 rounded-full bg-white dark:bg-[#2a2415] flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <Droplets className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold italic mb-2 text-[#181611] dark:text-white font-display">Wellness</h3>
                            <p className="text-[#897f61] font-sans">Holistic rejuvenation therapies that restore balance to body and mind.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Visual Grid / Gallery */}
            <section className="py-20 px-4 md:px-20 lg:px-40 w-full dark:bg-[#15120a]">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 flex flex-col gap-6">
                        <h2 className="text-4xl md:text-5xl font-bold italic leading-tight text-[#181611] dark:text-white font-display">
                            Immerse Yourself in<br />
                            <span className="text-primary decoration-2 underline-offset-4">Pure Relaxation</span>
                        </h2>
                        <p className="text-[#897f61] text-lg leading-relaxed max-w-md">
                            From our hydrotherapy pools to our private massage suites, every corner of SpaIsland is crafted for your peace.
                        </p>
                        <div className="mt-4">
                            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#181611]/10 dark:border-white/10 hover:bg-background-light dark:hover:bg-white/5 transition-colors text-[#181611] dark:text-white font-bold">
                                <span>View Full Gallery</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex-[1.5] grid grid-cols-2 gap-4 h-[500px] w-full">
                        <div
                            className="col-span-1 h-full rounded-2xl bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-500"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmJGcI-Tuh0G-4imTuJ7-bls_pE3_jDF0FFzIXVmFBTjUIvOVxCWwd6HAJXLJ2GEWYfQaucyIenSx80U82OC2uO2LdhPtDj_iz-Q6TGGYG12yGUUody06yIh8S2KA5bpzvnUNN-F1PMTSeQozPrORoCusEjzA-u-ymKeK7_pdqeiOwEmyFd_yVmkBALNsyPW3PXjJde5UKrVFXjfr-Jhdh26A3TLE9uAb9KTgKpHEvJ0rQOXjblNSqteyzDfaawilwyQYhg38ug_rd")' }}
                        ></div>
                        <div className="col-span-1 flex flex-col gap-4 h-full">
                            <div
                                className="flex-1 rounded-2xl bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-500"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDY8T6p_eZd4UtdQ2mWnmN6xWmZv3sSQf46Gn7EQRedfbJO4DBAOVCFCDGgBzWKwujlEJPUIv6UpSzuf05AuXqi6gEbS3tF9TymkwjdaYfrn9z1FBQSXy6cnR5KsF1kQgOIDj3_aX834P8uAUiEq6uH574tSRVHSEhOSitYQLuU9QEswux-wzcdJSeKr_rQiVnGMjWmx0siThJvWHLUIysK1EjDMru7eFMj18Sik_M91yGr1B50dK94uC3WstYFk0OxksmAFwYDwFwZ")' }}
                            ></div>
                            <div
                                className="flex-1 rounded-2xl bg-cover bg-center shadow-md hover:scale-[1.02] transition-transform duration-500"
                                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABVcgFHlEj0QEtRb3suxSa3MIqWEt7pxGHkUMAYlF8SjEbO_WDtH5V6BjLPk4bjrqV8zbpVWnmoDbd-qO7Uvt-HY3fOH2Qk-wnY8mXkxWgwRv0P_jvhXCSQBim0SSPfkCaJXtY5Uno8ohhcFlLImztuzMctpng8SiA_VcxZFT3TOpx9I8-6SZ1YBO1uj2KDRUN0Qq1rh3Q8Xu0odyxBVZOmugUupRyXNqVreJCa9xPnkyMMHoSZp8faiThq3dVtg-qDxyZGEIm8_2k")' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-4 text-center w-full bg-background-light dark:bg-[#1a160d]">
                <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
                    <h2 className="text-4xl font-bold italic text-[#181611] dark:text-white font-display">Ready for your escape?</h2>
                    <p className="text-[#897f61]">Book your session today and experience the island of calm.</p>
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-8 bg-primary text-[#181611] text-base font-bold shadow-lg hover:bg-primary/90 transition-all transform hover:scale-[1.02]">
                        <span className="truncate">Book Your Escape</span>
                    </button>
                </div>
            </section>
        </div>
    );
}
