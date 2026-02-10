import React, { useRef } from 'react';
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProposalSection from "@/components/landing/ProposalSection";
import ServicesSection from "@/components/landing/ServicesSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import SuccessStoriesSection from "@/components/landing/SuccessStoriesSection";
import ContactSection from "@/components/landing/ContactSection";
import { getCopy } from "@/lib/landingCopy";

export default function Home() {
    const contactRef = useRef(null);
    const { footer, global } = getCopy();

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-white">
            <HeroSection onContactClick={scrollToContact} />
            <div className="border-t border-gray-300" />
            <AboutSection />
            <div className="border-t border-gray-300" />
            <ProposalSection />
            <div className="border-t border-gray-300" />
            <ServicesSection />
            <div className="border-t border-gray-300" />
            <DifferentialSection />
            <div className="border-t border-gray-300" />
            <SuccessStoriesSection onContactClick={scrollToContact} />
            <div className="border-t border-gray-300" />
            <div ref={contactRef}>
                <ContactSection />
            </div>

            <a
                href="https://wa.link/s45vtx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={global.whatsappAria}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 transition-transform duration-300 hover:scale-110"
            >
                <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-xl animate-pulse" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="relative h-7 w-7 fill-current"
                    aria-hidden="true"
                >
                    <path d="M19.11 17.39c-.27-.14-1.62-.8-1.88-.9-.25-.09-.44-.14-.63.14-.18.27-.72.9-.88 1.08-.16.18-.32.2-.6.07-.27-.14-1.15-.43-2.2-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.56.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.63-1.5-.87-2.05-.23-.55-.47-.47-.63-.47h-.54c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.06-.11-.25-.18-.52-.32zM16.03 5.33c-5.87 0-10.65 4.78-10.65 10.65 0 1.88.49 3.72 1.43 5.34L5.2 26.67l5.5-1.58a10.6 10.6 0 0 0 5.33 1.44c5.87 0 10.65-4.78 10.65-10.65 0-5.87-4.78-10.65-10.65-10.65zm0 19.38c-1.67 0-3.31-.44-4.74-1.29l-.34-.2-3.25.93.95-3.17-.22-.33a8.79 8.79 0 0 1-1.36-4.77c0-4.87 3.96-8.83 8.83-8.83 4.87 0 8.83 3.96 8.83 8.83 0 4.87-3.96 8.83-8.83 8.83z" />
                </svg>
            </a>
            
            {/* Footer */}
            <footer className="bg-[#0A0A0A] py-8 border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-white/60 text-sm">
                            {footer.copyright}
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-white/60 hover:text-white transition-colors">{footer.privacy}</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors">{footer.terms}</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

