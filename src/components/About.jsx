import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

const About = () => {
    return (
        <section id="about" className="py-20 px-6 md:px-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-accent font-mono text-xl">01.</span>
                <h2 className="text-3xl font-bold text-textLight">About Me</h2>
                <div className="h-[1px] bg-secondary flex-grow ml-4"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {data.about.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-textDim text-lg leading-relaxed mb-6">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative group mx-auto md:mx-0"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300">
                        <div className="absolute inset-0 z-10 transition-colors duration-300"></div>
                        <img
                            src={data.profileImage}
                            alt="Profile"
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="absolute inset-0 border-2 border-accent rounded-lg w-64 h-64 md:w-80 md:h-80 -z-10 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
