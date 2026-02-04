import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Linkedin, User, MessageSquare, CheckCircle2, Loader2, Building } from "lucide-react";

export default function ContactSection() {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 600));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', company: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#150808] to-[#1f0c0c]" />
            
            {/* Decorative */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-red-900/35 via-red-800/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-900/25 via-red-900/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-rose-900/20 to-transparent rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Sua empresa está avaliando expandir para o Brasil?
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Entre em contato conosco e descubra como podemos ajudar sua empresa a ter sucesso no mercado brasileiro
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Left Card - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-red-600/80 to-red-700/80 backdrop-blur-sm rounded-3xl p-8 text-white"
                    >
                        <h3 className="text-2xl font-bold mb-4">Envie uma mensagem</h3>
                        <p className="text-white/80 mb-8">
                            Fale diretamente com nosso time e entenda como podemos acelerar sua entrada no mercado brasileiro.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
                            <Button 
                                type="button"
                                onClick={() => window.open('https://wa.link/s45vtx', '_blank')}
                                className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold py-6 rounded-xl shadow-lg"
                            >
                                Clique no botão para contato direto
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <a
                                href="https://wa.link/s45vtx"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Contato via WhatsApp"
                                className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="h-6 w-6 fill-current"
                                    aria-hidden="true"
                                >
                                    <path d="M19.11 17.39c-.27-.14-1.62-.8-1.88-.9-.25-.09-.44-.14-.63.14-.18.27-.72.9-.88 1.08-.16.18-.32.2-.6.07-.27-.14-1.15-.43-2.2-1.37-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.56.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.63-1.5-.87-2.05-.23-.55-.47-.47-.63-.47h-.54c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.26.18 1.74.11.53-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.06-.11-.25-.18-.52-.32zM16.03 5.33c-5.87 0-10.65 4.78-10.65 10.65 0 1.88.49 3.72 1.43 5.34L5.2 26.67l5.5-1.58a10.6 10.6 0 0 0 5.33 1.44c5.87 0 10.65-4.78 10.65-10.65 0-5.87-4.78-10.65-10.65-10.65zm0 19.38c-1.67 0-3.31-.44-4.74-1.29l-.34-.2-3.25.93.95-3.17-.22-.33a8.79 8.79 0 0 1-1.36-4.77c0-4.87 3.96-8.83 8.83-8.83 4.87 0 8.83 3.96 8.83 8.83 0 4.87-3.96 8.83-8.83 8.83z" />
                                </svg>
                            </a>
                        </div>

                        <div className="space-y-4">
                            <a href="mailto:contato@adcreatives.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                                <span>contato@adcreatives.com</span>
                            </a>
                            <a href="https://www.linkedin.com/company/ad-creatives/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Card - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 shadow-2xl"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Agende uma conversa</h3>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h4>
                                <p className="text-gray-500">Entraremos em contato em breve.</p>
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <Label htmlFor="name" className="text-gray-700 text-sm mb-2 block">Nome</Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="name"
                                            placeholder="Seu nome completo"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="pl-10 py-6 rounded-xl border-gray-200 focus:border-red-300 focus:ring-red-200"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="company" className="text-gray-700 text-sm mb-2 block">Nome da empresa</Label>
                                    <div className="relative">
                                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="company"
                                            placeholder="Nome da sua empresa"
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                            className="pl-10 py-6 rounded-xl border-gray-200 focus:border-red-300 focus:ring-red-200"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email" className="text-gray-700 text-sm mb-2 block">Email</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="seu@email.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="pl-10 py-6 rounded-xl border-gray-200 focus:border-red-300 focus:ring-red-200"
                                            required
                                        />
                                    </div>
                                </div>


                                <div>
                                    <Label htmlFor="message" className="text-gray-700 text-sm mb-2 block">Mensagem</Label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <Textarea
                                            id="message"
                                            placeholder="Como podemos ajudar sua empresa?"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="pl-10 min-h-[120px] rounded-xl border-gray-200 focus:border-red-300 focus:ring-red-200"
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold py-6 rounded-xl shadow-lg shadow-red-500/20"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar mensagem
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


