"use client";

import React from "react";
import Link from "next/link";
import SetAppointmentButton from "~/components/buttons/SetAppointmentButton";
import { motion } from "framer-motion";
import Image from "next/image";

const ulVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0, // Adjust the animation duration as needed
    },
  },
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <motion.ul
            variants={ulVariants}
            initial="hidden"
            animate="visible"
            tabIndex={0}
            className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 bg-neutral shadow rounded-box w-52"
          >
            <li>
              <Link href="/cars">Cars</Link>
            </li>
            <li>
              <a>Why Us?</a>
              <ul className="p-2">
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>Our Values</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </motion.ul>
        </div>
        <a href="/">
          <Image
            src="/alliance.png"
            alt="Alliance Group Auto Logo"
            width={200}
            height={50}
          />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <motion.ul
          variants={ulVariants}
          initial="hidden"
          animate="visible"
          className="menu menu-horizontal text-white px-1"
        >
          <li>
            <a href="/cars">Cars</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Why Us?</summary>
              <ul className="p-2">
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>Our Values</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </motion.ul>
      </div>
      <div className="navbar-end">
        <SetAppointmentButton href="https://www.calendly.com/alliancegroupauto/carappt" />
      </div>
    </div>
  );
};

export default Navbar;
