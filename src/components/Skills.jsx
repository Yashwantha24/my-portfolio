import React from 'react';
import { motion } from 'framer-motion';
import { data } from '../data';

const Skills = () => {
    const skillCategories = data.skills;

    return (
        <section id="skills" className="py-20 px-6 md:px-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-accent font-mono text-xl">02.</span>
                <h2 className="text-3xl font-bold text-textLight">Skills</h2>
                <div className="h-[1px] bg-secondary flex-grow ml-4"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-lightNavy p-6 rounded shadow-lg border border-transparent hover:border-accent hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <h3 className="text-xl font-bold text-textLight mb-4 group-hover:text-accent transition-colors">{category.title}</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {category.skills.map((skill, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-textDim text-sm font-mono">
                                    <span className="text-accent">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
