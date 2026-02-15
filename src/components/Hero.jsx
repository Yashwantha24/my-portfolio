import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { data } from '../data';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-24 mx-auto pt-20">
            <div className="max-w-4xl">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-accent font-mono mb-5 text-lg"
                >
                    Hi, my name is
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-textLight mb-4 leading-tight"
                >
                    {data.name}.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-7xl font-bold text-textDim mb-6 leading-tight"
                >
                    I build things for the web.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-textDim text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
                >
                    {data.bio}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href={data.resumeUrl}
                        className="px-8 py-4 border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-mono"
                    >
                        Download Resume
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-cyan-400 transition-colors"
                    >
                        View Projects
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-6 mt-12"
                >
                    <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent transition-transform hover:-translate-y-1">
                        <Github size={24} />
                    </a>
                    <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent transition-transform hover:-translate-y-1">
                        <Linkedin size={24} />
                    </a>
                    <a href={data.social.email} className="text-textLight hover:text-accent transition-transform hover:-translate-y-1">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block"
            >
                <a href="#about" className="text-textDim hover:text-accent transition-colors">
                    <ArrowDown size={24} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
