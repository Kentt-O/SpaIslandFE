import { motion } from "framer-motion";
import { ArrowRight, Printer, Download, HelpCircle, CheckCircle, AlertTriangle, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Privacy() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleDownload = async () => {
        // Dynamic import to avoid SSR issues if any, though this is SPA
        const html2pdf = (await import('html2pdf.js')).default;
        const element = document.getElementById('privacy-content');
        const opt = {
            margin: [10, 10],
            filename: 'SpaIsland_Privacy_Policy.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    };

    return (
        <div className="relative w-full overflow-hidden font-sans text-[#111817] dark:text-white">
            {/* Abstract Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent -z-10 pointer-events-none"></div>

            <div className="layout-container max-w-[1280px] mx-auto flex flex-col px-6 lg:px-12 py-10 md:py-16 pt-32">
                {/* Page Heading & Actions */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#f0f4f4] dark:border-white/10 pb-8">
                    <div className="flex flex-col gap-3 max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-2">
                            <span className="h-px w-8 bg-gold"></span>
                            <span className="text-gold uppercase tracking-widest text-xs font-bold">
                                Legal & Privacy
                            </span>
                        </div>
                        <h1 className="text-[#111817] dark:text-white text-4xl md:text-5xl font-medium leading-tight tracking-tight font-display">
                            Privacy Policy & <br />
                            <span className="italic text-brand-cyan">Terms of Service</span>
                        </h1>
                        <p className="text-[#618986] dark:text-gray-400 text-base font-normal mt-2">
                            Effective Date: October 24, 2023 | Last Updated: 3 days ago
                        </p>
                    </div>
                    {/* Actions Bar */}
                    <div className="flex flex-wrap gap-4">
                        <button onClick={handlePrint} className="group flex items-center gap-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full pl-3 pr-5 py-2 hover:border-brand-cyan hover:shadow-sm transition-all cursor-pointer">
                            <div className="rounded-full bg-[#f0f4f4] dark:bg-white/10 p-2 group-hover:bg-brand-cyan/10 transition-colors">
                                <Printer className="text-gray-700 dark:text-gray-200 w-5 h-5 group-hover:text-brand-cyan" />
                            </div>
                            <span className="text-[#111817] dark:text-white text-sm font-medium">Print</span>
                        </button>
                        <button onClick={handleDownload} className="group flex items-center gap-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full pl-3 pr-5 py-2 hover:border-brand-cyan hover:shadow-sm transition-all cursor-pointer">
                            <div className="rounded-full bg-[#f0f4f4] dark:bg-white/10 p-2 group-hover:bg-brand-cyan/10 transition-colors">
                                <Download className="text-gray-700 dark:text-gray-200 w-5 h-5 group-hover:text-brand-cyan" />
                            </div>
                            <span className="text-[#111817] dark:text-white text-sm font-medium">
                                Download PDF
                            </span>
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                    {/* Sidebar (Table of Contents) */}
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 flex flex-col gap-6">
                            <div className="flex flex-col gap-1 pb-4 border-b border-gray-100 dark:border-white/5">
                                <h3 className="text-[#111817] dark:text-white text-lg font-semibold">
                                    Table of Contents
                                </h3>
                                <p className="text-[#618986] text-xs uppercase tracking-wider">
                                    Jump to section
                                </p>
                            </div>
                            <nav className="flex flex-col gap-1">
                                {[
                                    { id: "introduction", label: "1. Introduction" },
                                    { id: "info-collect", label: "2. Information We Collect" },
                                    { id: "data-usage", label: "3. How We Use Your Data" },
                                    { id: "booking", label: "4. Booking & Cancellation" },
                                    { id: "third-party", label: "5. Third-Party Services" },
                                    { id: "contact", label: "6. Contact Us" },
                                ].map((item, index) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`flex items-center justify-between group px-4 py-3 rounded-lg text-left transition-all ${index === 0
                                            ? "bg-brand-cyan/5 text-brand-cyan border-l-2 border-brand-cyan font-medium"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#111817] dark:hover:text-white border-l-2 border-transparent"
                                            }`}
                                    >
                                        <span className="text-sm">{item.label}</span>
                                        {index === 0 && <ArrowRight className="w-4 h-4" />}
                                    </button>
                                ))}
                            </nav>
                            {/* Mini Contact Card in Sidebar */}
                            <div className="mt-8 bg-background-light dark:bg-white/5 p-5 rounded-xl border border-dashed border-gray-200 dark:border-white/10">
                                <HelpCircle className="text-brand-cyan mb-2 w-6 h-6" />
                                <p className="text-xs font-medium text-gray-900 dark:text-white mb-1">
                                    Have legal questions?
                                </p>
                                <a
                                    href="mailto:legal@spaisland.com"
                                    className="text-xs text-brand-cyan hover:underline"
                                >
                                    legal@spaisland.com
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Text Content */}
                    <div id="privacy-content" className="col-span-1 lg:col-span-9 lg:pl-10">
                        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none font-display text-[#111817] dark:text-white">
                            <div className="mb-16 scroll-mt-32" id="introduction">
                                <span className="text-brand-cyan font-bold tracking-widest text-xs uppercase mb-2 block">
                                    01. Overview
                                </span>
                                <h2 className="text-3xl font-medium text-[#111817] dark:text-white mb-6 font-display">
                                    Introduction
                                </h2>
                                <p className="text-[#111817]/80 dark:text-gray-300 text-lg leading-loose mb-4">
                                    At <span className="font-bold text-[#111817] dark:text-white">SpaIsland</span>,
                                    we are committed to maintaining the trust and confidence of our
                                    visitors. This Privacy Policy explains how we use any personal
                                    information we collect about you when you use our website. We
                                    believe that transparency is the foundation of any good
                                    relationship, and we want you to feel comfortable knowing
                                    exactly how we handle your data.
                                </p>
                                <p className="text-[#111817]/80 dark:text-gray-300 text-lg leading-loose">
                                    By accessing or using our services, you agree to the terms of
                                    this Privacy Policy. If you do not agree with the terms of
                                    this Privacy Policy, please do not access or use our services.
                                </p>
                            </div>
                            <hr className="border-gray-100 dark:border-white/10 mb-16" />

                            <div className="mb-16 scroll-mt-32" id="info-collect">
                                <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                                    02. Data
                                </span>
                                <h2 className="text-3xl font-medium text-[#111817] dark:text-white mb-6 font-display">
                                    Information We Collect
                                </h2>
                                <p className="text-[#111817]/80 dark:text-gray-300 text-lg leading-loose mb-6">
                                    We collect information about you when you register with us or
                                    place an order for products or services. We also collect
                                    information when you voluntarily complete customer surveys,
                                    provide feedback and participate in competitions. Website
                                    usage information is collected using cookies.
                                </p>
                                <div className="bg-[#fcfdfd] dark:bg-white/5 border border-[#f0f4f4] dark:border-white/10 rounded-xl p-8 mb-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-brand-cyan mt-1 shrink-0 w-6 h-6" />
                                            <div>
                                                <strong className="block text-[#111817] dark:text-white mb-1">
                                                    Personal Identification
                                                </strong>
                                                <span className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                    Name, email address, phone number, and physical
                                                    address for billing purposes.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-brand-cyan mt-1 shrink-0 w-6 h-6" />
                                            <div>
                                                <strong className="block text-[#111817] dark:text-white mb-1">
                                                    Health & Wellness Data
                                                </strong>
                                                <span className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                    Specific preferences, allergies, or health conditions
                                                    relevant to your treatments.
                                                </span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-brand-cyan mt-1 shrink-0 w-6 h-6" />
                                            <div>
                                                <strong className="block text-[#111817] dark:text-white mb-1">
                                                    Transaction Data
                                                </strong>
                                                <span className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                                    Details about payments to and from you and other
                                                    details of products and services you have purchased
                                                    from us.
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr className="border-gray-100 dark:border-white/10 mb-16" />

                            <div className="mb-16 scroll-mt-32" id="data-usage">
                                <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                                    03. Usage
                                </span>
                                <h2 className="text-3xl font-medium text-[#111817] dark:text-white mb-6 font-display">
                                    How We Use Your Data
                                </h2>
                                <p className="text-[#111817]/80 dark:text-gray-300 text-lg leading-loose mb-4">
                                    We collect information about you to process your order, manage
                                    your account and, if you agree, to email you about other
                                    products and services we think may be of interest to you. We
                                    use your information collected from the website to personalize
                                    your repeat visits to our website.
                                </p>
                                <p className="text-[#111817]/80 dark:text-gray-300 text-lg leading-loose">
                                    SpaIsland will not share your information for marketing
                                    purposes with companies outside the group. In processing your
                                    order, we may send your details to, and also use information
                                    from credit reference agencies and fraud prevention agencies.
                                </p>
                            </div>

                            <div className="mb-16 scroll-mt-32" id="booking">
                                <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                                    04. Policies
                                </span>
                                <h2 className="text-3xl font-medium text-[#111817] dark:text-white mb-6 font-display">
                                    Booking & Cancellation
                                </h2>
                                <div className="flex flex-col gap-6">
                                    <div className="p-6 bg-gold/10 rounded-lg border border-gold/20">
                                        <h3 className="text-lg font-bold text-[#111817] dark:text-white mb-2 flex items-center gap-2">
                                            <AlertTriangle className="text-gold w-5 h-5" />
                                            Cancellation Policy
                                        </h3>
                                        <p className="text-[#111817]/80 dark:text-gray-300 leading-relaxed text-sm">
                                            We respectfully request at least 24 hours notice for
                                            cancellations. Cancellations made with less than 24 hours
                                            notice will be subject to a charge of 50% of the scheduled
                                            service. No-shows will be charged 100% of the scheduled
                                            service.
                                        </p>
                                    </div>
                                    <p className="text-[#111817]/80 dark:text-gray-300 text-lg leading-loose">
                                        When you book an appointment with us, we require a credit
                                        card to hold your reservation. We will not charge your card
                                        until your appointment is complete or in the event of a late
                                        cancellation or no-show as described above.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-16 scroll-mt-32" id="third-party">
                                <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                                    05. Partners
                                </span>
                                <h2 className="text-3xl font-medium text-[#111817] dark:text-white mb-6 font-display">
                                    Third-Party Services
                                </h2>
                                <p className="text-[#111817]/80 dark:text-gray-300 text-lg leading-loose">
                                    In general, the third-party providers used by us will only
                                    collect, use and disclose your information to the extent
                                    necessary to allow them to perform the services they provide
                                    to us. However, certain third-party service providers, such as
                                    payment gateways and other payment transaction processors,
                                    have their own privacy policies in respect to the information
                                    we are required to provide to them for your purchase-related
                                    transactions.
                                </p>
                            </div>

                            <div className="mb-16 scroll-mt-32" id="contact">
                                <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">
                                    06. Support
                                </span>
                                <h2 className="text-3xl font-medium text-[#111817] dark:text-white mb-6 font-display">
                                    Contact Us
                                </h2>
                                <p className="text-[#111817]/80 dark:text-gray-300 text-lg leading-loose mb-8">
                                    If you have any questions about our privacy policy or
                                    information we hold about you, please contact us.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm flex flex-col gap-3">
                                        <div className="size-10 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-1">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-bold text-lg">Email Us</h4>
                                        <p className="text-gray-500 text-sm">
                                            Our legal team typically responds within 48 hours.
                                        </p>
                                        <a
                                            href="mailto:privacy@spaisland.com"
                                            className="text-brand-cyan font-medium hover:underline mt-auto"
                                        >
                                            spaisland.ng@gmail.com
                                        </a>
                                    </div>
                                    <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-100 dark:border-white/10 shadow-sm flex flex-col gap-3">
                                        <div className="size-10 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-1">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <h4 className="font-bold text-lg">Visit Us</h4>
                                        <p className="text-gray-500 text-sm">
                                            SpaIsland HQ, Victoria Island<br />
                                            Lagos, Nigeria
                                        </p>
                                        <Link
                                            to="/contact"
                                            className="text-brand-cyan font-medium hover:underline mt-auto"
                                        >
                                            Get Directions
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
