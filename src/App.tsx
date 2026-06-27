import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Assets
import HeroImage from "./assets/3.png";
import P1Image from "./assets/p1.png";
import P2Image from "./assets/p2.png";
import P3Image from "./assets/p3.png";
import P5Image from "./assets/p5.png";
import P6Image from "./assets/p6.png";
// Animation
import { TypeAnimation } from "react-type-animation";

// React Icons (Font Awesome)
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

// Simple Icons
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
} from "react-icons/si";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
  { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
  { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
  { icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
  { icon: <FaGithub />, name: "GitHub", color: "#ffffff" },
  { icon: <SiVite />, name: "Vite", color: "#646CFF" },
];


  return (
    <div className="bg-white text-black scroll-smooth">

      {/* ================= NAVBAR ================= */}
<header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">

  <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">

   

    {/* Desktop */}

    <nav className="hidden md:flex gap-12">

      {navItems.map((item) => (

        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="uppercase tracking-[3px] text-sm"
        >
          {item}
        </a>

      ))}

    </nav>

    {/* Mobile */}

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden"
    >
      ☰
    </button>

  </div>

  {menuOpen && (

    <div className="md:hidden bg-white border-t">

      {navItems.map((item) => (

        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className="block px-6 py-5 uppercase border-b"
        >
          {item}
        </a>

      ))}

    </div>

  )}

</header>
{/* ================= HERO ================= */}

{/* <section
  id="home"
  className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center pt-36"
>
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Name */}

    {/* <motion.h1
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tight text-black"
      style={{
        textShadow:
          "0px 6px 20px rgba(0,0,0,0.20), 0px 2px 6px rgba(0,0,0,0.15)",
      }}
    >
      ABHISHEK
    </motion.h1> */}

    {/* Tagline */}

    {/* <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .4 }}
      className="mt-5 uppercase tracking-[12px] text-xl md:text-2xl font-medium text-black/50"
      style={{
        textShadow: "0 0 10px rgba(0,0,0,.08)",
      }}
    >
      BUILDING MODERN EXPERIENCES
    </motion.p> */}

    {/* Hero Image */}

    {/* <motion.img
      src={HeroImage}
      alt="Hero"
      initial={{
        opacity: 0,
        y: 80,
        scale: .9,
      }}
      animate={{
        opacity: 1,
        y: [0, -12, 0],
        scale: 1,
      }}
      transition={{
        duration: 1,
        delay: .5,
        y: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        },
      }}
      className="mx-auto mt-2 w-full max-w-3xl object-contain"
      draggable={false}
      style={{
        filter:
          "drop-shadow(0 45px 40px rgba(0,0,0,.22)) drop-shadow(0 15px 20px rgba(0,0,0,.18))",
      }}
    />

  </div> */}

{/* </section>}  */}

{/* ================= HERO ================= */}

<section
  id="home"
  className="relative min-h-[100svh] bg-black overflow-hidden flex items-center"
>
  {/* Background Glow */}

  <div className="absolute left-[-220px] top-1/2 -translate-y-1/2 w-[450px] h-[450px] lg:w-[650px] lg:h-[650px] rounded-full bg-white/5 blur-[180px]" />

  <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 pt-28 sm:pt-32 lg:pt-16 pb-12">

    <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-2
      items-center
      gap-10
      md:gap-16
      lg:gap-20
      "
    >

      {/* ================= IMAGE ================= */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        className="
        order-1
        lg:order-2
        flex
        justify-center
        lg:justify-end
        "
      >

        <img
          src={HeroImage}
          alt="Abhishek"
          draggable={false}
          className="
          w-full
          max-w-[260px]
          sm:max-w-[340px]
          md:max-w-[450px]
          lg:max-w-[560px]
          xl:max-w-[620px]
          object-contain
          select-none
          "
          style={{
            filter:
              "drop-shadow(0 35px 60px rgba(255,255,255,.08)) drop-shadow(0 18px 35px rgba(0,0,0,.6))",
          }}
        />

      </motion.div>

      {/* ================= TEXT ================= */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: .8 }}
        className="
        order-2
        lg:order-1
        flex
        flex-col
        justify-center
        text-center
        lg:text-left
        "
      >

        <h1
          className="
          text-4xl
          sm:text-6xl
          md:text-7xl
          lg:text-[7rem]
          xl:text-[8rem]
          font-black
          uppercase
          leading-none
          tracking-tight
          text-white
          "
        >
          ABHISHEK
        </h1>

        <h2
          className="
          mt-6
          uppercase
          text-sm
          sm:text-lg
          md:text-xl
          lg:text-2xl
          tracking-[5px]
          sm:tracking-[8px]
          lg:tracking-[10px]
          text-gray-300
          leading-relaxed
          "
          style={{
            textShadow: "0 0 12px rgba(255,255,255,.12)",
          }}
        >
          BUILDING
          <br />
          MODERN
          <br />
          EXPERIENCES
        </h2>

      </motion.div>

    </div>

  </div>
</section>

{/* ================= ABOUT ================= */}

<section
  id="about"
  className="py-36 bg-white"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    <div className="grid lg:grid-cols-12 gap-20">

      {/* ================= LEFT ================= */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="lg:col-span-5"
      >

        <p className="uppercase tracking-[6px] text-gray-500 mb-5">
          About Me
        </p>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95]">

          Creating
          <br />

          Modern
          <br />

          Digital Products.

        </h2>

        <p className="mt-10 text-gray-600 text-lg leading-10">

          I'm <span className="font-semibold text-black">Abhishek Rajput</span>,
          a Frontend Developer and Product Designer passionate about building
          clean, scalable, and user-focused web applications.

        </p>

        <p className="mt-6 text-gray-600 text-lg leading-10">

          My expertise includes React, TypeScript, Tailwind CSS, Figma,
          responsive design, and creating seamless user experiences.
          I enjoy transforming ideas into beautiful digital products
          that are both functional and visually engaging.

        </p>

        {/* <motion.a
          whileHover={{ x: 8 }}
          href="#projects"
          className="inline-flex items-center gap-3 mt-12 uppercase tracking-[3px] font-semibold"
        >
          View My Work
          <ArrowRight size={20} />
        </motion.a> */}

      </motion.div>

      {/* ================= RIGHT ================= */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="lg:col-span-7"
      >

        <p className="uppercase tracking-[6px] text-gray-500 mb-12">
          Experience
        </p>

        {/* Timeline */}

        <div className="space-y-14">

          {/* Experience 01 */}

          <div className="relative pl-10 border-l-2 border-black">

            <div className="absolute -left-[10px] top-2 w-5 h-5 rounded-full bg-black"></div>

            <p className="uppercase tracking-[3px] text-sm text-gray-400">
              AUG 2024 — PRESENT
            </p>

            <h3 className="text-3xl font-black mt-3">
              Product Designer & UI Designer
            </h3>

            <h4 className="text-lg text-gray-500 mt-2">
              Nuts And Delish Pvt. Ltd.
            </h4>

            <p className="mt-6 text-gray-600 leading-8">

              Designed premium product packaging, marketing creatives,
              social media assets, and responsive web interfaces.
              Collaborated closely with developers and marketing teams
              to deliver high-quality digital experiences.

            </p>

          </div>

          {/* Experience 02 */}

          <div className="relative pl-10 border-l-2 border-gray-300">

            <div className="absolute -left-[10px] top-2 w-5 h-5 rounded-full bg-gray-400"></div>

            <p className="uppercase tracking-[3px] text-sm text-gray-400">
              DEC 2023 — AUG 2024
            </p>

            <h3 className="text-3xl font-black mt-3">
              Graduate Technical Intern
            </h3>

            <h4 className="text-lg text-gray-500 mt-2">
              ANZ Bank
            </h4>

            <p className="mt-6 text-gray-600 leading-8">

              Worked on enterprise banking applications, collaborated in Agile
              teams, improved frontend workflows, optimized reusable UI
              components, and contributed to internal digital products.

            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>

</section>

{/* ================= SKILLS ================= */}

<section
  id="skills"
  className="py-24 lg:py-32 bg-black overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    {/* ================= HEADING ================= */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-14 lg:mb-20"
    >

      <p className="uppercase tracking-[5px] text-gray-400 text-xs sm:text-sm">
        MY EXPERTISE
      </p>

      <h2 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-black text-white">
        Tech Stack
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-gray-400 leading-8">
        Technologies and tools I use to design, develop and build
        modern, scalable and responsive digital experiences.
      </p>

    </motion.div>

    {/* ================= GRID ================= */}

    <div
      className="
      grid
      grid-cols-2
      sm:grid-cols-3
      md:grid-cols-4
      lg:grid-cols-5
      xl:grid-cols-5
      gap-5
      lg:gap-8
      justify-items-center
      "
    >

      {skills.map((skill, index) => (

        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: .5,
            delay: index * .08,
          }}
          whileHover={{
            y: -10,
            scale: 1.05,
          }}
          className="
          group
          w-full
          max-w-[150px]
          h-[145px]
          sm:h-[160px]
          lg:h-[170px]
          bg-[#111]
          rounded-2xl
          lg:rounded-3xl
          border
          border-white/10
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          transition-all
          duration-300
          hover:border-white/30
          hover:shadow-[0_0_35px_rgba(255,255,255,.15)]
          "
        >

          <motion.div
            whileHover={{
              rotate: 360,
              scale: 1.15,
            }}
            transition={{
              duration: .6,
            }}
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            "
            style={{
              color: skill.color,
            }}
          >
            {skill.icon}
          </motion.div>

          <h3
            className="
            mt-4
            text-white
            text-[11px]
            sm:text-xs
            lg:text-sm
            uppercase
            tracking-[2px]
            font-semibold
            text-center
            px-2
            "
          >
            {skill.name}
          </h3>

        </motion.div>

      ))}

    </div>

  </div>

</section>

 {/* ================= PROJECT 01 ================= */}


<motion.section
  id="projects"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-24 border-t border-gray-200"
>
  <div className="max-w-7xl mx-auto px-8">

    {/* Heading */}

    <div className="mb-20">

      <p className="uppercase tracking-[3px] text-gray-400 text-sm">
        PROJECT_01
      </p>

      <h2 className="text-7xl font-black uppercase mt-2">
        PROJECT 
      </h2>

    </div>

    {/* Content */}

    <div className="grid lg:grid-cols-3 gap-16 items-center">

     {/* Image */}

<motion.div
  whileHover={{
    scale: 1.04,
  }}
  transition={{ duration: 0.4 }}
  className="overflow-hidden rounded-lg"
>
  <img
    src={P1Image}
    alt="Project 01"
    className="w-full h-[320px] object-cover grayscale hover:grayscale-0 transition duration-700"
    draggable={false}
  />
</motion.div>

      {/* Number */}

      <div className="flex justify-center">

        <h1 className="text-[180px] lg:text-[220px] font-thin leading-none text-black">
          01
        </h1>

      </div>

      {/* Description */}

      <div>

        <p className="uppercase tracking-[5px] text-gray-400 text-xs">
          React • TypeScript • Tailwind
        </p>

        <h3 className="text-3xl font-black mt-6">
          E-Commerce Platform
        </h3>

        <p className="mt-8 text-gray-600 leading-9">

          Designed and developed a premium e-commerce platform
          featuring product browsing, smart filtering,
          responsive layouts, secure checkout and reusable UI
          components. The project focuses on performance,
          scalability and modern frontend architecture.

        </p>

      </div>

    </div>

  </div>
</motion.section>
{/* ================= PROJECT 02 ================= */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-20 lg:py-28 border-t border-gray-200 bg-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">

      {/* Left */}

      <div className="order-2 lg:order-1 text-center lg:text-left">

        <p className="uppercase tracking-[3px] text-gray-400 text-xs sm:text-sm">
          PROJECT_02
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase leading-tight">
          SAAS
          <br />
          INVENTORY
          <br />
          MANAGEMENT
        </h2>

        <p className="mt-6 text-gray-600 leading-8 text-base sm:text-lg">
          Enterprise-grade inventory management platform
          featuring analytics dashboards, authentication,
          role-based access, real-time reporting, and a
          responsive user experience.
        </p>

      </div>

      {/* Center Image */}

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-xl order-1 lg:order-2"
      >
        <img
          src={P2Image}
          alt="Project 02"
          draggable={false}
          className="
            w-full
            h-[220px]
            sm:h-[300px]
            md:h-[380px]
            lg:h-[380px]
            object-cover
            grayscale
            hover:grayscale-0
            transition
            duration-700
          "
        />
      </motion.div>

      {/* Right */}

      <div className="flex justify-center order-3">

        <h1
          className="
            text-[90px]
            sm:text-[130px]
            md:text-[180px]
            lg:text-[240px]
            font-thin
            leading-none
            text-black
            select-none
          "
        >
          02
        </h1>

      </div>

    </div>

  </div>
</motion.section>

{/* ================= PROJECT 03 ================= */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-20 lg:py-28 border-t border-gray-200 bg-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-[3fr_0.8fr_1.4fr] gap-10 lg:gap-16 items-center">

      {/* ================= IMAGE ================= */}

      <motion.a
        href="https://kotak-bank-redesign.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="group flex justify-center lg:justify-start cursor-pointer"
      >

        <div
          className="
            overflow-hidden
            rounded-3xl
            shadow-xl
            hover:shadow-2xl
            transition-all
            duration-500
          "
        >

          <img
            src={P3Image}
            alt="Kotak Bank Redesign"
            draggable={false}
            className="
              w-full
              max-w-[450px]
              sm:max-w-[550px]
              md:max-w-[700px]
              lg:max-w-[850px]
              xl:max-w-[950px]
              h-auto
              object-contain
              grayscale
              transition-all
              duration-700
              group-hover:grayscale-0
              group-hover:scale-105
            "
          />

        </div>

      </motion.a>

      {/* ================= NUMBER ================= */}

      <div className="flex justify-center">

        <h1
          className="
            text-[100px]
            sm:text-[150px]
            md:text-[190px]
            lg:text-[230px]
            xl:text-[260px]
            font-thin
            leading-none
            text-black
            select-none
          "
        >
          03
        </h1>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="text-center lg:text-left">

        <p className="uppercase tracking-[4px] text-gray-400 text-sm">
          PROJECT_03
        </p>

        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight">
          KOTAK BANK
          <br />
          REDESIGN
        </h2>

        <p className="mt-8 text-gray-600 text-lg leading-9">
          Complete redesign of the Kotak banking experience with a
          scalable design system, improved navigation,
          accessibility enhancements, and responsive React
          implementation focused on digital banking users.
        </p>

      </div>

    </div>

  </div>
</motion.section>

{/* ================= PROJECT 04 ================= */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-20 lg:py-28 border-t border-gray-200 bg-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">

      {/* Left */}

      <div className="order-2 lg:order-1 text-center lg:text-left">

        <p className="uppercase tracking-[3px] text-gray-400 text-xs sm:text-sm">
          PROJECT_04
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
          Mobile
          <br />
          App Design
        </h2>

        <p className="mt-6 text-gray-600 leading-8 text-base sm:text-lg">
          End-to-end airline mobile application covering
          onboarding, flight booking, live flight updates,
          and airport navigation with a focus on usability
          and seamless travel experiences.
        </p>

      </div>

      {/* Number */}

      <div className="flex justify-center order-3 lg:order-2">

        <h1
          className="
            text-[90px]
            sm:text-[130px]
            md:text-[180px]
            lg:text-[240px]
            xl:text-[250px]
            font-thin
            leading-none
            text-black
            select-none
          "
        >
          04
        </h1>

      </div>

      {/* Image */}

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden rounded-xl order-1 lg:order-3"
      >

        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
          alt="Mobile App Design"
          className="
            w-full
            h-[240px]
            sm:h-[320px]
            md:h-[380px]
            lg:h-[420px]
            object-cover
            grayscale
            hover:grayscale-0
            transition
            duration-700
          "
        />

      </motion.div>

    </div>

  </div>
</motion.section>

{/* ================= PROJECT 05 ================= */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-20 lg:py-28 border-t border-gray-200 bg-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">

      {/* Left */}

      <div className="order-1">

        <p className="uppercase tracking-[3px] text-gray-400 text-xs sm:text-sm">
          PROJECT_05
        </p>

        <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-none">
          Mobile
          <br />
          App Design
        </h2>

        <motion.a
  href="https://www.figma.com/proto/AeEdcfCe7xdUktQa6gIvUP/AirConnect?t=WYmjeKo63F5Wb3Wd-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=4-637"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.4 }}
  className="group mt-8 lg:mt-10 block overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
>

  <img
    src={P5Image}
    alt="AirConnect Mobile App"
    draggable={false}
    className="
      w-full
      h-[240px]
      sm:h-[320px]
      md:h-[420px]
      lg:h-[500px]
      object-cover
      grayscale
      transition-all
      duration-700
      group-hover:grayscale-0
      group-hover:scale-105
    "
  />

</motion.a>

      </div>

      {/* Right */}

      <div className="flex flex-col justify-between h-full order-2 text-center lg:text-left">

        <div>

          {/* <p className="uppercase tracking-[4px] text-gray-400 text-xs sm:text-sm">
            React • TypeScript • Tailwind CSS
          </p> */}

          <p className="mt-8 text-gray-600 leading-8 text-base sm:text-lg">

           End-to-end airline mobile application covering onboarding, flight booking, live flight updates, and airport navigation 
           with a focus on usability and seamless travel experiences.
          </p>

        </div>

        <div className="mt-10 lg:mt-20 flex justify-center lg:justify-start">

          <h1
            className="
              text-[90px]
              sm:text-[130px]
              md:text-[180px]
              lg:text-[220px]
              font-thin
              leading-none
              text-black
              select-none
            "
          >
            05
          </h1>

        </div>

      </div>

    </div>

  </div>
</motion.section>

{/* ================= PROJECT 06 ================= */}

<motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="py-20 lg:py-28 border-t border-gray-200 bg-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    {/* Heading */}

    {/* <div className="mb-12 lg:mb-20">

      <p className="uppercase tracking-[3px] text-gray-400 text-xs sm:text-sm">
        PROJECT_06
      </p>

      <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase">
        PORTFOLIO
        <span className="text-gray-300"> WEBSITE</span>
      </h2>

    </div> */}

    {/* Content */}

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-center">

     {/* Image */}

<motion.a
  href="https://www.figma.com/proto/QGqQw0aEf6pdQxm2lawAsC/FoodOrdering?node-id=218-870&p=f&t=GKtPf7FEW7FdZFLu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=211%3A28&show-proto-sidebar=1"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.4 }}
  className="
    group
    overflow-hidden
    rounded-3xl
    order-1
    block
    cursor-pointer
    shadow-lg
    hover:shadow-2xl
    transition-all
    duration-500
  "
>

  <img
    src={P6Image}
    alt="Food Ordering App"
    draggable={false}
    className="
      w-full
      h-[220px]
      sm:h-[300px]
      md:h-[340px]
      lg:h-[340px]
      object-cover
      grayscale
      transition-all
      duration-700
      group-hover:grayscale-0
      group-hover:scale-105
    "
  />

</motion.a>
      {/* Number */}

      <div className="flex justify-center order-3 lg:order-2">

        <h1
          className="
            text-[90px]
            sm:text-[130px]
            md:text-[170px]
            lg:text-[220px]
            xl:text-[240px]
            font-thin
            leading-none
            text-black
            select-none
          "
        >
          06
        </h1>

      </div>

      {/* Description */}

      <div className="order-2 lg:order-3 text-center lg:text-left">

        <p className="uppercase tracking-[3px] text-gray-400 text-xs sm:text-sm">
        PROJECT_06
      </p>
        <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black uppercase">
          Food Delivery App
        </h3>

        <p className="mt-6 text-gray-600 leading-8 text-base sm:text-lg">

          Modern food ordering experience designed with intuitive discovery, order tracking, payment flows, and user 
          account management for a frictionless mobile experience.

        </p>

      </div>

    </div>

  </div>
</motion.section>

{/* ================= CONTACT ================= */}

<section
  id="contact"
  className="bg-black text-white py-20 lg:py-32 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

      {/* ================= LEFT ================= */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <h2
          className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-8xl
          font-black
          leading-tight
          "
        >
          Let's Work
          <br />
          Together.
        </h2>

        <p
          className="
          mt-8
          text-base
          sm:text-lg
          lg:text-xl
          text-gray-400
          leading-8
          lg:leading-10
          max-w-xl
          "
        >
          I'm a Frontend Developer passionate about building
          modern, responsive and user-friendly web applications.
          I enjoy transforming ideas into elegant digital experiences
          with React, TypeScript, Tailwind CSS and modern UI design.
        </p>

        <p
          className="
          mt-6
          text-sm
          sm:text-base
          lg:text-lg
          text-gray-500
          leading-8
          max-w-xl
          "
        >
          Whether you're looking to build a new product,
          improve an existing application or collaborate
          on an exciting idea, I'd love to hear from you.
        </p>

      </motion.div>

      {/* ================= RIGHT ================= */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
      >

        <div className="space-y-10 lg:space-y-14">

          {/* Email */}

          <div>

            <p className="uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm">
              Email
            </p>

            <a
              href="mailto:rajputabhi192001@gmail.com"
              className="
              mt-3
              block
              text-lg
              sm:text-2xl
              lg:text-3xl
              font-semibold
              break-all
              hover:text-gray-300
              transition
              "
            >
              rajputabhi192001@gmail.com
            </a>

          </div>

          {/* Phone */}

          <div>

            <p className="uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm">
              Phone
            </p>

            <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold">
              +91 60062 10353
            </h3>

          </div>

          {/* Location */}

          <div>

            <p className="uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm">
              Location
            </p>

            <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold">
              Bengaluru, Karnataka, India
            </h3>

          </div>

          {/* Social */}

          <div>

            <p className="uppercase tracking-[3px] text-gray-500 text-xs sm:text-sm mb-5">
              Social Links
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/Abhishek200119"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                sm:w-14 sm:h-14
                rounded-full
                border
                border-gray-600
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-rajput-b65228261/"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                sm:w-14 sm:h-14
                rounded-full
                border
                border-gray-600
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
                "
              >
                <FaLinkedin size={20} />
              </a>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </div>
</section>


    </div>
  );
}

export default App;