"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinksTopRow = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Skills",
    path: "#skills",
  },
];

const navLinksBottomRow = [
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container mx-auto px-4 py-2">
        {/* Mobile view: nav links in two rows */}
        <div className="flex flex-col md:hidden items-center space-y-4 mt-2">
          {/* Top row of links (mobile) */}
          <ul className="flex flex-wrap justify-center space-x-4">
            {navLinksTopRow.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-white border border-primary-500 rounded-full px-4 py-2 hover:bg-primary-500 hover:text-black transition-all lowercase"
                />
              </li>
            ))}
          </ul>

          {/* Add space between the two rows */}
          <div className="mt-4"></div>

          {/* Bottom row of links (mobile) */}
          <ul className="flex flex-wrap justify-center space-x-4 mb-6">
            {/* Added mb-6 for bottom margin */}
            {navLinksBottomRow.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-white border border-primary-500 rounded-full px-4 py-2 hover:bg-primary-500 hover:text-black transition-all lowercase"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop view: nav links in a single row */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-center mt-10">
          {/* Top row of links (desktop) */}
          <ul className="flex space-x-10">
            {navLinksTopRow.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-white border border-primary-500 rounded-full px-4 py-2 hover:bg-transparent-500 hover:text-violet-600 transition-all lowercase"
                />
              </li>
            ))}
          </ul>
          {/* Add space between top and bottom rows on desktop */}
          <div className="mx-8 md:mx-21"></div>{" "}
          {/* Increased space for desktop */}
          {/* Bottom row of links (desktop) */}
          <ul className="flex space-x-8">
            {navLinksBottomRow.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-white border border-primary-500 rounded-full px-4 py-2 hover:bg-transparent-500 hover:text-violet-600 transition-all lowercase"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
