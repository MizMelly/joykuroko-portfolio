import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import { FiChevronDown } from "react-icons/fi";

export default function Home({ darkMode }) {
  const skills = [
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind CSS" },
    { icon: SiReact, color: "#61DAFB", name: "React Native" },
    { icon: SiFlutter, color: "#02569B", name: "Flutter" },
    { icon: FaNodeJs, color: "#68A063", name: "Node.js" },
    {
      icon: SiExpress,
      color: darkMode ? "#E5E7EB" : "#111827",
      name: "Express.js",
    },
    { icon: SiPostgresql, color: "#336791", name: "PostgreSQL" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const textColor = darkMode ? "text-indigo-200" : "text-black";

const nameClass = darkMode ? "text-white font-extrabold" : "text-black font-extrabold";
  
const nameShadow = darkMode
  ? "0 0 8px #fef08a, 0 0 16px #facc15, 0 0 24px #eab308" 
  : "0 4px 12px rgba(0,0,0,0.2)";

  const buttonPrimary = darkMode
    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:brightness-110 hover:shadow-indigo-500/40"
    : "bg-black text-white hover:bg-gray-900 hover:shadow-xl shadow-black/30";

  const buttonSecondary = darkMode
    ? "border-indigo-400/70 text-indigo-200 hover:bg-indigo-950/40 hover:border-indigo-300"
    : "border-gray-400 text-black hover:bg-gray-100 hover:border-gray-500";

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {/* Spacer */}
      <div className="w-full pt-16 sm:pt-24 md:pt-32 lg:pt-40" />

      {/* Greeting + Name */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-10 md:mb-12 w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`text-2xl md:text-5xl whitespace-nowrap ${textColor}`}
        >
          Hello, I'm
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
        >
          <TypeAnimation
  sequence={["Joy Kuroko", 2200]}
  wrapper="span"
  speed={45}
  cursor={false}
  repeat={0}
  className="font-extrabold"
  style={{
    color: "#ffffff", 
    textShadow: nameShadow,
    fontSize: "3rem",
  }}
/>
           </motion.div>
      </div>

      {/* Role */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.5 }}
        className={`text-2xl md:text-4xl font-semibold mb-10 md:mb-12 ${textColor} max-w-4xl`}
      >
        <TypeAnimation
          sequence={[
            2800,
            "Junior Full-Stack Web & Mobile Application Developer",
            2000,
          ]}
          wrapper="span"
          speed={55}
          cursor={false}
          repeat={0}
        />
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5.2, duration: 1 }}
        className={`text-base md:text-lg max-w-3xl mb-12 md:mb-16 leading-snug ${textColor}`}
      >
        Building clean, fast, user-centric digital experiences across web & mobile platforms.
        Passionate about learning, clean architecture, performance, and products people truly love.
      </motion.p>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.0, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16 max-w-5xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 6.0 + index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.15, y: -5 }}
            className="flex flex-col items-center min-w-[90px]"
          >
            <skill.icon size={40} color={skill.color} />
            <span className={`text-xs mt-2 ${textColor}`}>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 7.0, duration: 0.9 }}
        className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-center items-center mb-12"
      >
        <motion.button
          onClick={() => scrollToSection("contact")}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className={`px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer shadow-xl ${buttonPrimary}`}
        >
          Get in Touch
        </motion.button>

        <motion.button
          onClick={() => scrollToSection("projects")}
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.98 }}
          className={`px-10 py-5 border-2 font-semibold text-lg rounded-full transition-all duration-300 cursor-pointer ${buttonSecondary}`}
        >
          View Projects
        </motion.button>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl cursor-pointer ${textColor}`}
        onClick={() => scrollToSection("about")}
      >
        <FiChevronDown />
      </motion.div>
    </section>
  );
}