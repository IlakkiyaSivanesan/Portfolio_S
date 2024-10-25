"use client";
import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Redux",
    "Express",
    "AWS",
    "Framer Motion",
  ];

  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is in view
          observer.disconnect(); // Stop observing once the animation has triggered
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div id="skills" className="flex justify-center items-center">
      {" "}
      {/* Added ID here */}
      <div className="text-center" ref={skillsRef}>
        <h2 className="text-center text-4xl font-bold text-slate-200 mb-8 md:mb-10 mt-9">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`bg-gray-700 text-slate-200 px-4 py-2 rounded-lg ${
                isVisible ? "animate-pop-in" : ""
              }`}
              style={{ animationDelay: isVisible ? `${index * 0.1}s` : "0s" }} // Adding delay for each skill
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
