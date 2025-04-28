import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

const flirtMessages = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? Because I just got lost in your eyes.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "Are you French? Because Eiffel for you.",
    "You must be tired, because you've been running through my mind all day.",
    // ... (remaining messages omitted for brevity, include full array as provided)
];

// Vibrant color palette for light and dark themes
const colorPalette = {
  light: [
    '#ff4081', // Bright Pink
    '#ffbf00', // Amber
    '#9c27b0', // Purple
    '#ff80ab', // Light Pink
    '#ffd54f', // Light Amber
    '#ce93d8', // Light Purple
  ],
  dark: [
    '#d81b60', // Dark Pink
    '#ff8c00', // Dark Amber
    '#7b1fa2', // Dark Purple
    '#f06292', // Medium Pink
    '#ff6f00', // Medium Amber
    '#ab47bc', // Medium Purple
  ],
};

// Animation variants for different styles
const animationStyles = [
  {
    name: 'fade',
    charVariants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    },
  },
  {
    name: 'slideUp',
    charVariants: {
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    },
  },
  {
    name: 'slideLeft',
    charVariants: {
      hidden: { opacity: 0, x: -15 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    },
  },
  {
    name: 'bounce',
    charVariants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 200, damping: 10 },
      },
    },
  },
  {
    name: 'rotate',
    charVariants: {
      hidden: { opacity: 0, rotate: -90 },
      visible: { opacity: 1, rotate: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    },
  },
  {
    name: 'scalePop',
    charVariants: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    },
  },
  {
    name: 'shake',
    charVariants: {
      hidden: { opacity: 0, x: 0 },
      visible: {
        opacity: 1,
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] },
      },
    },
  },
  {
    name: 'wiggle',
    charVariants: {
      hidden: { opacity: 0, rotate: 0 },
      visible: {
        opacity: 1,
        rotate: [0, 10, -10, 10, 0],
        transition: { duration: 0.6, times: [0, 0.2, 0.4, 0.6, 1] },
      },
    },
  },
];

// Container variants for staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Delay between each character
    },
  },
};

// Moving object variants
const objectVariants = {
  animate: (i) => ({
    x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
    y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
    scale: [0.5, 1, 0.5],
    opacity: [0.3, 0.7, 0.3],
    rotate: Math.random() * 360,
    transition: {
      duration: 8 + Math.random() * 4,
      repeat: Infinity,
      repeatType: 'loop',
      delay: i * 0.3,
      ease: 'easeInOut',
    },
  }),
};

const Random = () => {
  const [clicked, setClicked] = useState(false);
  const [mssg, setMssg] = useState('');
  const [animationStyle, setAnimationStyle] = useState(animationStyles[0]);
  const [objects, setObjects] = useState([]);

  // Generate moving objects and regenerate on new message
  useEffect(() => {
    const newObjects = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: ['heart', 'star', 'sparkle', 'flower', 'bubble'][Math.floor(Math.random() * 5)],
    }));
    setObjects(newObjects);
  }, [mssg]);

  // Get random color based on theme
  const getRandomColor = (theme) => {
    const colors = theme === 'dark' ? colorPalette.dark : colorPalette.light;
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Get random animation style
  const getRandomAnimationStyle = () => {
    const randomIndex = Math.floor(Math.random() * animationStyles.length);
    return animationStyles[randomIndex];
  };

  const handleRandomText = () => {
    const randomMssg = flirtMessages[Math.floor(Math.random() * flirtMessages.length)];
    setMssg(randomMssg);
    setAnimationStyle(getRandomAnimationStyle());
    setClicked(true);
  };

  // Split message into characters
  const chars = mssg.split('');
  const theme = document.documentElement.className || 'dark'; // Get current theme

  return (
    <motion.div
      className="container mt-8 sm:mt-12 flex flex-col items-center justify-center relative min-h-screen"
    >
      {/* Moving Objects */}
      {objects.map(({ id, type }) => (
        <motion.div
          key={`${mssg}-${id}`}
          className={`moving-object ${type}`}
          custom={id}
          animate="animate"
          variants={objectVariants}
        >
          {type === 'heart' && '❤️'}
          {type === 'star' && '⭐'}
          {type === 'sparkle' && '✨'}
          {type === 'flower' && '🌸'}
          {type === 'bubble' && '🫧'}
        </motion.div>
      ))}
      <motion.button
        onClick={handleRandomText}
        className="btn btn-animated btn-wide text-xl h-full sm:text-base z-10"
        whileHover={{ scale: 1.2, boxShadow: '0 0 30px rgba(255,64,129,0.8)', rotate: 5 }}
        whileTap={{ scale: 0.9, rotate: -5 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring' } }}
      >
        {clicked ? 'Continue clicking to see more' : 'Click to hear some "Moner Kotha"'}
      </motion.button>
      <AnimatePresence>
        {mssg && (
          <motion.p
            className="p-4 mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-center typewriter-cursor vibrant-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -40, transition: { duration: 0.5 } }}
            key={mssg}
          >
            {chars.map((char, index) => (
              <motion.span
                key={`${mssg}-${index}`}
                variants={animationStyle.charVariants}
                style={{ color: getRandomColor(theme) }}
                className="inline-block"
                whileHover={{ scale: 1.2, textShadow: '0 0 15px rgba(255,64,129,0.9)' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, type: 'spring' }}
        className="mt-16 sm:mt-20 z-10"
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0], transition: { duration: 0.4 } }}
        >
          <Link
            to="/"
            className="text-[#ff4081] dark:text-[#d81b60] hover:underline text-sm sm:text-base vibrant-text"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Random;