import React from 'react';
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { getCopy } from "@/lib/landingCopy";

export default function AboutSection() {
    const { about } = getCopy();

    return (
        <section id="about" className="py-24 bg-gradient-to-br from-[#fafafa] via-[#f8f8f8] to-[#f5f5f5] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/40 via-rose-50/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-amber-100/30 to-transparent blur-3xl" />
            
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-6">
                            <span className="text-sm text-red-700 font-medium">{about.badge}</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="text-gray-900">{about.titleLead}</span>
                            <span className="text-red-600">{about.titleHighlight}</span>
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {about.paragraph1}
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {about.paragraph2}
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">{about.paragraph3}</p>

                        {/* Badge */}
                        <div className="inline-flex items-center px-6 py-3 rounded-xl bg-red-50 border border-red-100">
                            <span className="text-2xl font-bold text-red-600">35+</span>
                            <span className="ml-2 text-sm text-red-700 font-medium">{about.experienceLabel}</span>
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100 relative">
                            {/* Profile with Photo */}
                            <div className="mb-6">
                                <div className="rounded-2xl overflow-hidden mb-4">
                                    <img 
                                        src="/assets/landing/Gregorio.png"
                                        alt="Gregorio Polaino"
                                        className="w-full h-80 object-cover object-top"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900">Gregorio Polaino</h3>
                                    <p className="text-gray-500 mt-1">{about.profileRole}</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative dots */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

