import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import coffee from './images/Coffee.jpg';
import coffee1 from './images/Coffee 1.jpg';
import coffee2 from './images/Coffee 2.webp';
import coffee3 from './images/Coffee 3.webp';
import coffee4 from './images/Coffee 4.webp';
import coffee5 from './images/Coffee 5.webp';
import coffee6 from './images/Coffee 6.webp';
import coffee7 from './images/Coffee 7.webp';
import coffee8 from './images/Coffee 8.webp';

const Slide = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to move to the next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to move to the previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Array of images
    const images = [coffee, coffee1, coffee2, coffee3, coffee4,coffee5,coffee6,coffee7,coffee8];

    useEffect(() => {
        // Set up autoplay interval
        const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='flex flex-col justify-center items-center m-auto'>
            <h1 className='text-center text-white mb-4'>Slider</h1>
            <div className='relative flex justify-center items-center bg-black h-screen overflow-hidden'>
                {images.map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`image ${index}`}
                        className="rounded-[12px]"
                        initial={{ x: '100%', scale: 0.7, opacity: 0 }}
                        animate={{
                            x: currentIndex === index ? '0%' : (currentIndex < index ? '100%' : '-100%'),
                            scale: currentIndex === index ? 1 : 0.7,
                            opacity: currentIndex === index ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        style={{ position: 'absolute', width: '200px' }}
                    />
                ))}
                <button
                    className='absolute bottom-10 left-10 text-white bg-indigo-400 rounded-md py-2 px-4'
                    onClick={handlePrev}
                >
                    Prev
                </button>
                <button
                    className='absolute bottom-10 right-10 text-white bg-indigo-400 rounded-md py-2 px-4'
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slide;
