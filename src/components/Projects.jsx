import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { data } from '../data';

const Projects = () => {
    const projects = data.projects;

    return (
        <section id="projects" className="py-20 px-6 md:px-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-accent font-mono text-xl">03.</span>
                <h2 className="text-3xl font-bold text-textLight">Projects</h2>
                <div className="h-[1px] bg-secondary flex-grow ml-4"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-lightNavy rounded-lg overflow-hidden shadow-lg hover:shadow-neon transition-all duration-300 group"
                    >
                        <div className="relative overflow-hidden h-48">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-textLight rounded-full hover:bg-accent hover:text-primary transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-textLight rounded-full hover:bg-accent hover:text-primary transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-textLight mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-textDim text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs font-mono text-accent">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="mr-2">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
