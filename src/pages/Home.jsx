import React, { useRef } from 'react';
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProposalSection from "@/components/landing/ProposalSection";
import ServicesSection from "@/components/landing/ServicesSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import SuccessStoriesSection from "@/components/landing/SuccessStoriesSection";
import ContactSection from "@/components/landing/ContactSection";

export default function Home() {
    const contactRef = useRef(null);

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
            
            {/* Footer */}
            <footer className="bg-[#0A0A0A] py-8 border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-white/60 text-sm">
                            © 2026 Ad.Creatives. Todos os direitos reservados.
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-white/60 hover:text-white transition-colors">Política de Privacidade</a>
                            <a href="#" className="text-white/60 hover:text-white transition-colors">Termos de Serviço</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

