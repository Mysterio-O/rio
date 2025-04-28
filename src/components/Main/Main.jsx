import React from 'react';
import Header from '../Header/Header';
import { motion } from 'motion/react';

const Main = () => {
    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Header />
        </motion.div>
    );
};

export default Main;