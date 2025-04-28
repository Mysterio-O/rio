import React, { useState, useEffect } from 'react';
import Identity from '../Identity/Identity';
import { motion } from 'motion/react';

const Header = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        setTheme(systemTheme);
        document.documentElement.setAttribute('data-theme', systemTheme);
        document.documentElement.className = systemTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        document.documentElement.className = newTheme;
    };

    return (
        <motion.div
            className="container mt-8 sm:mt-12 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            <motion.button
                className="btn btn-circle btn-animated absolute top-0 right-0 bg-gray-200 dark:bg-gray-900"
                onClick={toggleTheme}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                title="Toggle Theme"
            >
                {theme === 'dark' ? '☀️' : '🌙'}
            </motion.button>
            <motion.h2
                className="text-center text-5xl sm:text-6xl md:text-7xl font-extrabold font-comic-relief vibrant-text bg-clip-text text-transparent bg-gradient-to-r from-[#ff4081] to-[#ffbf00] dark:from-[#d81b60] dark:to-[#ff8c00] mb-8 sm:mb-12"
                initial={{ opacity: 0, y: -60, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 120 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3, repeat: Infinity, repeatType: 'reverse' } }}
            >
                This is a place for beauties!!
            </motion.h2>
            <motion.div
                className="flex justify-center items-center w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                <Identity />
            </motion.div>
        </motion.div>
    );
};

export default Header;