"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import images from "../../public/images";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Navbar() {
    const {t} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t("navbar.home"), href: "#home" },
    { name: t("navbar.features"), href: "#features" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.partners"), href: "#partners" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50 max-h-16">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        {/* <div className="text-2xl font-bold text-[#203260]">Brand</div> */}

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setIsOpen(false)} // closes the mobile menu after click
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="text-[#203260] hover:text-[#FF8242] transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? (
              // Close icon
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <img src={images.logo} alt="4me Logo" className="max-w-6" /> */}
            <Image
                src={images.logo}
                alt="4me Logo"
                width={80}
                height={50}
              />
          </motion.div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              >
                <a
                  href={item.href}
                  className="block text-gray-700 hover:text-gray-900"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
