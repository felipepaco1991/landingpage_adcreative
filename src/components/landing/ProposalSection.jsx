import React from 'react';
import { motion } from "framer-motion";
import { Globe, Target, Sparkles, Lightbulb, TrendingUp, Shield } from "lucide-react";

export default function ProposalSection() {
    const proposals = [];

    return (
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/3 w-[450px] h-[450px] bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-emerald-100/30 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {/* Opportunity Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <span className="text-sm text-blue-700 font-medium">Oportunidade</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900">O mercado brasileiro </span>
                        <span className="text-red-600">te espera</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
                        O Brasil é um dos mercados mais estratégicos do mundo para o setor de viagens e turismo, com grande potencial de crescimento. Ao mesmo tempo, apresenta desafios específicos de competitividade, digitalização, gestão e estruturação de canais.
                    </p>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
                        Empresas internacionais que desejam atuar no país precisam de parceiros locais confiáveis, com visão estratégica, capacidade de execução e relacionamento com os principais players do mercado.
                    </p>
                    <p className="text-xl font-semibold text-red-600 max-w-3xl mx-auto">
                        É exatamente nesse ponto que a Ad.Creatives atua.
                    </p>
                </motion.div>


            </div>
        </section>
    );
}
