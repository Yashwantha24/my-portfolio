import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from '../data';

const Preloader = ({ finishLoading }) => {
    const [text, setText] = useState('');
    // const fullText = `${data.name}.`; // Removed from here

    useEffect(() => {
        const timeout = setTimeout(() => {
            finishLoading();
        }, 2500); // Simulate loading time

        return () => clearTimeout(timeout);
    }, [finishLoading]);

    // Typing effect
    useEffect(() => {
        const fullText = `${data.name}.`;
        let currentText = '';
        let index = 0;

        const interval = setInterval(() => {
            if (index < fullText.length) {
                currentText += fullText[index];
                setText(currentText);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-textLight font-mono"
                >
                    {text}
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="text-accent"
                    >
                        _
                    </motion.span>
                </motion.div>

                {/* Loading Bar */}
                <div className="absolute -bottom-8 left-0 w-full h-1 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-accent"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
