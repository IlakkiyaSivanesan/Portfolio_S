"use client";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Electrical and Electronics Engineering Graduate",
      location: "Pondicherry University",
      description:
        "Graduated as Electrical and Electronics Engineer with 8.5 CGPA with passion towards Software Development.",
      icon: AcademicCapIcon,
      date: "2020",
    },
    {
      title: "Software Engineer",
      location: "Cognizant, Chennai",
      description:
        "I worked as a Software Engineer (React, Node, MongoDb, Redux, AWS) for 3 years. I also upskilled to Full-stack by leading a team of 4 and built an Internet Banking App in 2 months.",
      icon: BriefcaseIcon,
      date: "2021 - 2024",
    },
    {
      title: "Software Engineer",
      location: "LetzTrip, Bangalore",
      description:
        "I worked as a Software Engineer (React, Redux, Next, Tailwindcss) for 3 months. I also upskilled to create UI/UX designs.",
      icon: BriefcaseIcon,
      date: "2024",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <div id="experience" className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-slate-200 mb-8 mt-16">
        My Experience
      </h2>
      <motion.div
        className="relative w-full max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation when in viewport
        variants={containerVariants}
      >
        {/* Vertical line for larger screens */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600 hidden md:block"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex justify-between items-center w-full mb-10 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
            variants={itemVariants}
          >
            {/* Card with title, location, and description */}
            <div className="w-full md:w-5/12">
              <motion.div
                className="bg-gray-800 text-slate-200 p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }} // Hover effect
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.location}</p>
                <p className="mt-3 text-gray-300">{exp.description}</p>
              </motion.div>
            </div>

            {/* Icons for desktop view only */}
            <div className="hidden md:flex w-1/12 justify-center">
              <motion.div
                className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-800 border-2 border-white"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <exp.icon className="h-6 w-6text-slate-200" />
              </motion.div>
            </div>

            {/* Year display */}
            <div className="w-5/12 text-gray-400 text-sm text-center md:text-left md:block">
              {exp.date}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ExperienceTimeline;
