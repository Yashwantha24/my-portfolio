import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { data } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 md:px-24 max-w-6xl mx-auto mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-accent font-mono text-xl">05.</span>
                <h2 className="text-3xl font-bold text-textLight">Contact Me</h2>
                <div className="h-[1px] bg-secondary flex-grow ml-4"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-textLight mb-6">Get In Touch</h3>
                    <p className="text-textDim text-lg mb-8 leading-relaxed">
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-textDim hover:text-accent transition-colors">
                            <Mail className="text-accent" />
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                        </div>
                        <div className="flex items-center gap-4 text-textDim hover:text-accent transition-colors">
                            <Phone className="text-accent" />
                            <a href={`tel:${data.phone}`}>{data.phone}</a>
                        </div>
                        <div className="flex items-center gap-4 text-textDim hover:text-accent transition-colors">
                            <MapPin className="text-accent" />
                            <span>{data.location}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-lightNavy p-8 rounded-lg shadow-lg border border-transparent hover:border-accent/30 transition-all duration-300"
                >
                    <div className="mb-6">
                        <label className="block text-textLight text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            className="w-full bg-primary text-textLight border border-secondary rounded py-3 px-4 leading-tight focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            id="name"
                            type="text"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-textLight text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            className="w-full bg-primary text-textLight border border-secondary rounded py-3 px-4 leading-tight focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-textLight text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea
                            className="w-full bg-primary text-textLight border border-secondary rounded py-3 px-4 leading-tight focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all h-32 resize-none"
                            id="message"
                            placeholder="Hello, I'd like to work with you..."
                        ></textarea>
                    </div>

                    <button
                        className="w-full bg-gradient-to-r from-accent to-cyan-600 hover:from-cyan-400 hover:to-cyan-700 text-primary font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center gap-2 transform active:scale-95 transition-all duration-200"
                        type="button"
                    >
                        Send Message <Send size={18} />
                    </button>
                </motion.form>
            </div>

            <footer className="mt-20 text-center text-textDim text-sm font-mono">
                <p>Designed & Built by {data.name}</p>
                <p className="mt-2">© {new Date().getFullYear()}</p>
            </footer>
        </section>
    );
};

export default Contact;
