"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const ProjectCard = () => {
  // Variants for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: off-screen and hidden
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    }, // Animated state: visible with smooth upward movement
  };

  return (
    <section id="projects">
      {" "}
      {/* Added ID here */}
      <h2 className="text-center text-4xl font-bold text-slate-200 mt-2 mb-8 md:mb-12">
        Projects
      </h2>
      {/* First Card */}
      <motion.div
        className="flex justify-center items-center mt-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers animation when the card is in view
        variants={cardVariants} // Attach animation variants
      >
        <motion.div
          className="flex flex-col-reverse md:flex-row bg-[#1a1a1a] text-slate-200 w-[43rem] h-[25rem] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }} // Hover animation
        >
          {/* Text section */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-3">PAPAJOHNS</h2>
            <p className="text-sm text-justify mb-4">
              PAPAJOHNS is a famous pizza maker and delivery food company in the
              USA. It has multiple stores across America and delivers food
              nationwide. As a UAD Application Support Engineer, I monitor all
              UAD applications, using AWS CloudWatch to analyze and resolve
              issues, ensuring the applications run smoothly.
            </p>
          </div>
          {/* Right side for image */}
          <div className="relative w-[20rem] h-[24rem]">
            <Image
              src="/images/projects/pizza.png"
              alt="PAPAJOHNS Website"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
      {/* Second Card */}
      <motion.div
        className="flex justify-center items-center mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        <motion.div
          className="flex flex-col-reverse md:flex-row bg-[#1a1a1a] text-white w-[43rem] h-[25rem] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex-1 p-6 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-3">Letz Trip</h2>
            <p className="text-sm text-justify mb-4">
              Letztrip offers seamless planning and execution for all kinds of
              travel, whether its solo, with friends, family, or as a couple.
              Our app provides a specific user experience for each type of trip,
              optimized by AI to give you the best recommendations. Enjoy
              effortless travel planning and personalized suggestions tailored
              to your unique travel needs.
            </p>
          </div>
          {/* Right side for image */}
          <div className="relative w-[20rem] h-[24rem]">
            <Image
              src="/images/projects/pro.png"
              alt="letz trip"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectCard;
