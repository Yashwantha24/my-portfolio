import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { data } from '../data';

const Experience = () => {
    const experiences = data.experiences;

    return (
        <section id="experience" className="py-20 px-6 md:px-24 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-accent font-mono text-xl">04.</span>
                <h2 className="text-3xl font-bold text-textLight">Experience</h2>
                <div className="h-[1px] bg-secondary flex-grow ml-4"></div>
            </motion.div>

            <div className="space-y-12 border-l-2 border-secondary ml-3 md:ml-6 pl-8 md:pl-12 relative">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <span className="absolute -left-[43px] md:-left-[59px] top-0 p-2 bg-primary border-2 border-accent rounded-full text-accent">
                            <Briefcase size={20} />
                        </span>

                        <div className="bg-lightNavy p-6 rounded-lg shadow-lg hover:shadow-neon transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-textLight">{exp.role}</h3>
                                    <p className="text-accent font-mono text-sm">@ {exp.company}</p>
                                </div>
                                <div className="flex items-center gap-2 text-textDim text-sm font-mono mt-2 md:mt-0">
                                    <Calendar size={16} />
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {exp.description.map((item, idx) => (
                                    <li key={idx} className="text-textDim text-sm flex items-start gap-2">
                                        <span className="text-accent mt-1">▹</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
