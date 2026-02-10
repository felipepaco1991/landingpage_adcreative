import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCopy } from "@/lib/landingCopy";

export default function SuccessStoriesSection({ onContactClick }) {
    const { successStories } = getCopy();
    const stories = successStories.items;

    return (
        <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-red-100/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-gradient-radial from-amber-100/25 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                        <span className="text-sm text-emerald-700 font-medium">{successStories.badge}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-gray-900">{successStories.titleLead}</span>
                        <span className="text-red-600">{successStories.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {successStories.intro}
                    </p>
                </motion.div>

                {/* Stories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                {/* Country Flag */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-14 h-14 rounded-xl overflow-hidden border border-gray-200">
                                        <img 
                                            src={story.flag} 
                                            alt={story.location}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Company Info */}
                                <h3 className="text-xl font-bold text-gray-900 mb-1">
                                    {story.company} <span className="text-sm font-normal text-gray-500">({story.location})</span>
                                </h3>

                                <p className="text-gray-600 leading-relaxed mt-3">
                                    {story.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="group"
                    >
                        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 shadow-lg shadow-red-200 h-full flex flex-col items-center justify-center text-center text-white relative overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
                            
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Rocket className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{successStories.ctaTitle}</h3>
                                <p className="text-white/80 mb-6 leading-relaxed">
                                    {successStories.ctaBody}
                                </p>
                                <Button 
                                    onClick={() => {
                                      if (onContactClick) {
                                        onContactClick()
                                      } else {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                                      }
                                    }}
                                    className="bg-white text-red-600 hover:bg-gray-100 font-semibold shadow-lg"
                                >
                                    {successStories.ctaButton}
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

