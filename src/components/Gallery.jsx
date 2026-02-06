import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const galleryItems = [
    {
        title: "The Waiting Lounge",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-rkB4-QlgSkQP0O0fCWqDCs_w6FmdJ6VCZ0ZtkVeB8okv_yUIg1WdO308yS4F5__frWle3Fw_d31tloN6iI_tmRUpTNVBl8snkVJQJqbWL0gDLuyJBtlLJd82kpBeZudZt0hsDaM9oc0ZLGqP7fBkIB1TSzGEVh6vfAySktGEBQRFbwQVV2aQyUJoaatyCCC0zcXEjIXsMPxwV707ZmVNWywTRKxtXfYDUcXrCCiPGfwraIVpfxYppbs5JB6d8Kysmbh6YhomfaGk"
    },
    {
        title: "Aromatherapy Essentials",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC73DUlkR2ndwJ8KMqnOmcy1Ca59wACwe-Bn1aTjL_g22DbyAS5ePKPxgXqrwUAjSPXbrwpc91_kqykeyVhGJcGNix8SEnSkxToq0xMy8GYsL_7uMtS769Rao1gwMxSpo2k4c159LhSmg9t0Q1v9fhIkhYsM4TTOR7Ldw5xtUU97B2A_63aGXesG_OkrB0IpgUSciqbttJngzcD_06ObZZWhYsKKm49ddpsMfcNW1TO5G1LVBNNmokUgd-6uPIz4gRSjw59vwJMHoJp"
    },
    {
        title: "Private Suites",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMIdxZ-ue2KWnLlRCjD0-IqSU7f8NTuVYrlFjeqZ5X5buQful9QG6cQw--scV6XhRK4OP3EoO12QBIfOexiBrbHCCaSS4SlxePmLNPb94KEXmyKBw6y40u5z-8CT0lMNK0FkIrUKIBD7_UAmC_RJkLAk3rKXuEiA2AxyI8Fdc4zwoljIs_RwZGJTdyFyHTw5FB2etxCfX_YAHnJ5Nh_5dTDXWBtCVPdyycWXucIeWKeaz-pYNrg4v-S3RfWBcbdJhylTf0COskmJWP"
    },
    {
        title: "Hot Stone Therapy",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsd_kbREmy7VhaXo8e5qewANazNUTrUjAvXeXFruDaR-E8t3KK_GW-nsznwcYqmiyVZVXDZHHniduVoH5m079F29gemceCcdXO2Hjj2nt18QFvGlmOnPEnalsXioUJh8SEIU3SlKQQubKk1x-tm3YJLAB9Jq32LJqcr67o6M_ALa98AXj5gV72IZVgwxRMfihB-CtvpUGAEH5qS5Llmhavdce1feGZY8Y7Fb0X30iThyxelJ0cCybhGMcMglApDeplxNnFX5wC5Pya"
    }
];

export function Gallery() {
    const containerRef = useRef(null);

    return (
        <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden relative z-10">
            <div className="max-w-[1280px] mx-auto px-6 mb-10">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-3xl font-bold text-[#181611] dark:text-white"
                >
                    Visual Serenity
                </motion.h3>
            </div>

            <div
                ref={containerRef}
                className="flex overflow-x-auto no-scrollbar gap-4 px-6 pb-8 snap-x snap-mandatory"
            >
                {galleryItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[500px] rounded-2xl overflow-hidden relative group cursor-pointer"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: `url('${item.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                            <p className="text-white font-display text-xl font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                {item.title}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
