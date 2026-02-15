import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { data } from '../data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold text-accent font-mono hover:text-white transition-colors">
                    &lt;{data.name.split(' ')[0]} /&gt;
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-textDim hover:text-accent font-medium text-sm uppercase tracking-wide transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href={data.resumeUrl}
                        className="border border-accent text-accent px-4 py-2 rounded md:text-sm font-mono hover:bg-accent/10 transition-all duration-300 flex items-center gap-2 group"
                    >
                        Resume <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-accent focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-primary/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <button
                    className="absolute top-8 right-8 text-accent"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={32} />
                </button>

                <ul className="flex flex-col items-center space-y-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl text-textLight hover:text-accent font-medium tracking-wide transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href={data.resumeUrl}
                            className="mt-4 border border-accent text-accent px-8 py-3 rounded text-lg font-mono hover:bg-accent/10 transition-all"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
