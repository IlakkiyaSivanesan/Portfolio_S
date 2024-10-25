"use client";
import React from "react";

const AboutSection = () => {
  return (
    <section
      className="text-slate-200 flex justify-center items-center m-8 p-0"
      id="about"
    >
      <div className="text-left flex flex-col h-full px-4">
        {/* Title with extra letter spacing and margin */}
        <h2 className="text-4xl font-bold text-slate-200 mb-7 text-center tracking-wide">
          About
        </h2>
        {/* Text with increased line spacing (between rows) for all screen sizes */}
        <p className="text-center lg:text-xl sm:text-sm leading-relaxed sm:leading-relaxed lg:leading-loose tracking-wide">
          After completing a degree in Electrical and Electronics Engineering, I
          decided to pursue my passion for programming. I started coding with
          Java then progressed to React and Database. My favourite aspect of
          programming is the problem-solving component. I enjoy the feeling of
          producing things that solve a real-world problem. My core stack
          consists of React.js, Next.js, Node.js, and MongoDB. I am also
          familiar with TypeScript and AWS. I am constantly looking to learn new
          technology. I worked as a Software Engineer with Cognizant Technology
          Solutions. When not coding, I enjoy watching movies, reading self-help
          books, and making crafts. I appreciate learning new stuff.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
