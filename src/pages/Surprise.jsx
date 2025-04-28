import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Random from './Random';
import { motion } from 'motion/react';

const Surprise = () => {
    const [surprise, setSurprise] = useState(false);
    const location = useLocation();
    const { name = 'Stranger', age, relibility, gender } = location.state || {};

    // Audio setup
  const audio = new Audio('/public/bg.mp3'); // Adjust the path to your audio file
  audio.loop = true; // Enable looping for repeated playback

    const handleSurprise = () => {
        console.log('Surprise button clicked, setting surprise to true');
        setSurprise(true);
    };

    // Play audio when surprise is true
  useEffect(() => {
    if (surprise) {
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
    // Cleanup: Pause and reset audio when component unmounts or surprise changes
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset to start
    };
  }, [surprise]);

    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center py-8 sm:py-12 bg-gradient-to-b from-gray-900 via-indigo-950 to-black overflow-hidden">
            {/* Animated Stars */}
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
            {/* Glowing Moon */}
            <motion.div
                className="absolute top-10 right-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-100 to-yellow-100 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.5)] opacity-80"
                animate={{
                    x: [0, 10, 0],
                    y: [0, 5, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            {/* Background Glow Effects */}
            <motion.div
                className="absolute w-64 h-64 bg-purple-900 rounded-full mix-blend-screen filter blur-3xl opacity-30"
                style={{ top: '20%', left: '10%' }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="absolute w-64 h-64 bg-blue-900 rounded-full mix-blend-screen filter blur-3xl opacity-30"
                style={{ bottom: '20%', right: '10%' }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="container text-center relative z-10 flex flex-col items-center justify-center mt-8 sm:mt-4 md:mt-0"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 80 }}
            >
                {!surprise && relibility === 'No' && (
                    <motion.h2
                        className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 dark:text-pink-300"
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                    >
                        You got a boyfriend and you're still here!! That sounds pretty
                    </motion.h2>
                )}
                {surprise && (
                    <motion.div
                        className="flex flex-col items-center w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h3
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-purple-400 dark:text-pink-300 mb-6 sm:mb-8 jump-from-top sm:mt-0 mt-[30vh]"
                            initial={{ y: '-100vh', opacity: 0, scale: 0.8 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 1, type: 'spring', stiffness: 100, damping: 10 }}
                        >
                            I Love You {name}. Will you be mine?
                        </motion.h3>
                        <div className="mt-4">
                            <Random />
                        </div>
                    </motion.div>
                )}
                {!surprise && (
                    <motion.button
                        onClick={handleSurprise}
                        className="btn btn-primary btn-animated mt-4 sm:mt-6 text-sm sm:text-base bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg"
                        whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(139,92,246,0.6)' }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Check Surprise
                    </motion.button>
                )}
            </motion.div>
        </div>
    );
};

export default Surprise;