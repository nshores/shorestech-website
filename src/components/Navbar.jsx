import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0"
                    >
                        <a href="/" className="text-2xl font-bold text-blue-600">
                            ShoresTech
                        </a>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Services
                        </a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                            About
                        </a>
                        <a
                            href="https://opsandautomation.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                            Blog
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a
                                href="#services"
                                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={toggleMenu}
                            >
                                Services
                            </a>
                            <a
                                href="#about"
                                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={toggleMenu}
                            >
                                About
                            </a>
                            <a
                                href="#portfolio"
                                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={toggleMenu}
                            >
                                Portfolio
                            </a>
                            <a
                                href="https://opsandautomation.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={toggleMenu}
                            >
                                Blog
                            </a>
                            <a
                                href="#contact"
                                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar; 