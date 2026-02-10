import React from 'react';
import { motion } from "framer-motion";
import { Target, Leaf, Zap } from "lucide-react";
import { getCopy } from "@/lib/landingCopy";

export default function DifferentialSection() {
    const { differential } = getCopy();
    const icons = [Target, Leaf, Zap];
    const pillars = differential.pillars.map((pillar, index) => ({
        ...pillar,
        icon: icons[index] || Target,
    }));

    return (
        <section className="py-24 bg-gradient-to-br from-[#0a0a0a] via-[#150808] to-[#1f0c0c] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-red-900/35 via-red-800/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-900/25 via-red-900/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-rose-900/20 to-transparent rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                        <span className="text-sm text-white/80 font-medium">{differential.badge}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {differential.titleLead}
                        <span className="text-yellow-400">{differential.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-white/80 leading-relaxed mb-4 max-w-3xl mx-auto">
                        {differential.paragraph1}
                    </p>
                    <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                        {differential.paragraph2}
                    </p>
                </motion.div>

                {/* Pillars Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 text-center h-full">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <pillar.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                                <p className="text-white/70 leading-relaxed">{pillar.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-2xl md:text-3xl font-bold text-white">
                        {differential.tagline}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

