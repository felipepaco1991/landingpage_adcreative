import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection({ onContactClick }) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0808] to-[#2d1010]" />
            
            {/* Background Image */}
            <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a]/40 via-[#0a0a0a]/80 to-[#0a0a0a]" />
                <img 
                    src="/assets/landing/cristo.jpg"
                    alt="Background"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-gradient-radial from-red-900/30 via-red-800/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-radial from-amber-900/20 via-red-900/10 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-sm text-white/80 tracking-wide">Hub de Negócios</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        <span className="text-white">Conectando inovação global ao </span>
                        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-emerald-400 bg-clip-text text-transparent">
                            turismo brasileiro
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-white/60 mb-10 leading-relaxed max-w-2xl">
                        Aceleramos a entrada e a expansão de empresas internacionais no Brasil, com estratégia, execução local e parcerias certas — reduzindo riscos e encurtando o caminho até resultados reais.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        <Button 
                            onClick={() => {
                              if (onContactClick) {
                                onContactClick()
                              } else {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                            size="lg"
                            className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:scale-105"
                        >
                            <span>Agende uma reunião</span>
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button 
                            variant="outline"
                            size="lg"
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-emerald-400/30 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/20 hover:border-emerald-400/40 px-8 py-6 text-lg rounded-xl"
                        >
                            Como atuamos
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

