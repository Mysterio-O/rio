import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'motion/react';

const Identity = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const age = formData.get('age');
        const relibility = formData.get('relibility');
        const gender = formData.get('gender');

        if (age > 25) {
            Swal.fire({
                icon: 'error',
                title: 'Oops, Too Fab for This!',
                text: 'Sorry, darling, this party’s for the young at heart! 😎',
                customClass: {
                    popup: 'swal2-popup',
                    title: 'swal2-title',
                    content: 'swal2-content',
                    confirmButton: 'swal2-confirm',
                },
                showClass: { popup: 'swal2-bounce-in' },
                hideClass: { popup: 'swal2-zoom-out' },
            });
        } else if (relibility === 'No') {
            Swal.fire({
                icon: 'info',
                title: 'Slay, Queen!',
                text: 'Time to ditch that baggage and shine solo! 💃',
                customClass: {
                    popup: 'swal2-popup',
                    title: 'swal2-title',
                    content: 'swal2-content',
                    confirmButton: 'swal2-confirm',
                },
                showClass: { popup: 'swal2-bounce-in' },
                hideClass: { popup: 'swal2-zoom-out' },
            }).then(() => {
                navigate('/surprise', { state: { name, age, relibility, gender } });
            });
        } else if (gender === 'Male') {
            Swal.fire({
                icon: 'error',
                title: 'Hey, King!',
                text: 'This is a ladies-only vibe, sorry bro! 👑',
                customClass: {
                    popup: 'swal2-popup',
                    title: 'swal2-title',
                    content: 'swal2-content',
                    confirmButton: 'swal2-confirm',
                },
                showClass: { popup: 'swal2-bounce-in' },
                hideClass: { popup: 'swal2-zoom-out' },
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Cosmic Cutie Alert!',
                text: `${name}, you're ready to sparkle in the starry sky! 🌟 Get set for a surprise!`,
                customClass: {
                    popup: 'swal2-popup bg-gradient-to-b from-gray-900 to-indigo-950 text-white',
                    title: 'swal2-title text-purple-400',
                    content: 'swal2-content text-pink-300',
                    confirmButton: 'swal2-confirm bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2',
                },
                showClass: { popup: 'animate__animated animate__fadeInUp' },
                hideClass: { popup: 'animate__animated animate__fadeOutDown' },
                background: 'rgba(0, 0, 0, 0.9)',
                backdrop: `
                    rgba(0,0,0,0.4)
                    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Ccircle cx='400' cy='400' r='20' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='450' cy='350' r='10' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='350' cy='450' r='15' fill='%23ffffff' opacity='0.4'/%3E%3C/svg%3E")
                    center
                    no-repeat
                `,
            }).then(() => {
                navigate('/surprise', { state: { name, age, relibility, gender } });
            });
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.4,
                type: 'spring',
                stiffness: 120,
            },
        },
    };

    const inputVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    const wiggleVariants = {
        wiggle: {
            rotate: [0, 5, -5, 5, 0],
            transition: { duration: 0.4, times: [0, 0.2, 0.4, 0.6, 1] },
        },
    };

    return (
        <div className="relative flex items-center justify-center min-h-[80vh] sm:min-h-screen py-8 sm:py-12 w-full">
            <motion.div
                className="gradient-bg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="absolute top-12 left-12 w-40 h-40 sm:w-64 sm:h-64 bg-[#ff80ab] dark:bg-[#d81b60] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="absolute bottom-12 right-12 w-40 h-40 sm:w-64 sm:h-64 bg-[#ffd54f] dark:bg-[#ff8c00] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1.5 }}
            />
            <motion.div
                className="bg-white dark:bg-gray-900 p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-3xl"
                variants={formVariants}
                initial="hidden"
                animate="visible"
            >
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                    <motion.legend
                        className="text-2xl sm:text-3xl font-bold text-center vibrant-text bg-clip-text text-transparent bg-gradient-to-r from-[#ff4081] to-[#ffbf00] dark:from-[#d81b60] dark:to-[#ff8c00]"
                        variants={inputVariants}
                    >
                        You look pretty!!
                    </motion.legend>
                    <motion.input
                        className="input input-bordered dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-300 text-sm sm:text-base"
                        type="text"
                        placeholder="What's your name?"
                        name="name"
                        required
                        variants={inputVariants}
                        whileFocus={{ scale: 1.05, borderColor: '#ff4081', boxShadow: '0 0 15px rgba(255,64,129,0.5)', ...wiggleVariants.wiggle }}
                        whileHover={{ scale: 1.03 }}
                    />
                    <motion.legend
                        className="text-lg sm:text-xl font-semibold vibrant-text dark:text-gray-200"
                        variants={inputVariants}
                    >
                        Don't ask a woman her age
                    </motion.legend>
                    <motion.input
                        className="input input-bordered dark:bg-gray-800 dark:border-gray-700 dark:text-white transition-all duration-300 text-sm sm:text-base"
                        type="text"
                        placeholder="How old are you?"
                        name="age"
                        required
                        variants={inputVariants}
                        whileFocus={{ scale: 1.05, borderColor: '#ff4081', boxShadow: '0 0 15px rgba(255,64,129,0.5)', ...wiggleVariants.wiggle }}
                        whileHover={{ scale: 1.03 }}
                    />
                    <motion.legend
                        className="text-lg sm:text-xl font-semibold vibrant-text dark:text-gray-200"
                        variants={inputVariants}
                    >
                        Although doesn't matter
                    </motion.legend>
                    <motion.legend
                        className="text-lg sm:text-xl text-center font-semibold vibrant-text dark:text-gray-200"
                        variants={inputVariants}
                    >
                        Are you single?
                    </motion.legend>
                    <motion.select
                        name="relibility"
                        className="select select-bordered rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-white text-sm sm:text-base"
                        required
                        variants={inputVariants}
                        whileFocus={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,64,129,0.5)', ...wiggleVariants.wiggle }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <option value="" disabled>Select One</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </motion.select>
                    <motion.legend
                        className="text-lg sm:text-xl text-center font-semibold vibrant-text dark:text-gray-200"
                        variants={inputVariants}
                    >
                        Select Gender
                    </motion.legend>
                    <motion.select
                        name="gender"
                        className="select select-bordered rounded-full dark:bg-gray-800 dark:border-gray-700 dark:text-white text-sm sm:text-base"
                        required
                        variants={inputVariants}
                        whileFocus={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,64,129,0.5)', ...wiggleVariants.wiggle }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <option value="" disabled>Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </motion.select>
                    <motion.input
                        whileHover={{ scale: 1.1, boxShadow: '0 0 25px rgba(255,64,129,0.7)' }}
                        whileTap={{ scale: 0.95, rotate: 5 }}
                        type="submit"
                        value="Check Surprise"
                        className="btn btn-animated w-full py-3 rounded-full shadow-lg text-sm sm:text-base"
                        variants={inputVariants}
                    />
                </form>
            </motion.div>
        </div>
    );
};

export default Identity;