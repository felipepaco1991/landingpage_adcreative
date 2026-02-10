import React from 'react';
import { motion } from "framer-motion";
import { Globe, Lightbulb, Users, Zap, Building } from "lucide-react";
import { getCopy } from "@/lib/landingCopy";

export default function ServicesSection() {
    const { services: servicesCopy } = getCopy();
    const icons = [Globe, Lightbulb, Users, Zap, Building];
    const content = servicesCopy.items.map((item, index) => ({
        ...item,
        icon: icons[index] || Globe,
    }));

    return (
        <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-red-100/30 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-amber-100/25 to-transparent rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
                        <span className="text-sm text-red-700 font-medium">{servicesCopy.badge}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900">{servicesCopy.titleLead}</span>
                        <span className="text-red-600">{servicesCopy.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {servicesCopy.intro}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl hover:shadow-red-100 transition-all duration-300 hover:-translate-y-1 h-full">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
