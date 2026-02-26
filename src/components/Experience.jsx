import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Experience({ darkMode }) {
  return (
    <section
      id="experience"
      className={`
        min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24
        transition-colors duration-300
        ${
          darkMode
            ? "bg-gradient-to-b from-black via-[#0a0a1f] to-black"
            : "bg-gradient-to-b from-gray-50 via-white to-gray-100"
        }
      `}
    >
      <div className="max-w-5xl w-full text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 ${
            darkMode ? "text-transparent" : "text-black"
          }`}
          style={
            darkMode
              ? {
                  background:
                    "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }
              : {}
          }
        >
          Experience
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed ${
            darkMode ? "text-gray-400" : "text-black"
          }`}
        >
          From university studies to professional internships and mentorship roles,
          my journey in technology continues to evolve and expand.
        </motion.p>

        {/* Experience Pills */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
        >
          {[
            ["◁▷", "Kuraz Technology"],
            ["🔍", "INSA"],
            ["👥", "Nile Tech"],
            ["❤️", "Women Techsters Fellowship"],
            ["📚", "NSDA"],
          ].map(([icon, label]) => (
            <motion.button
              key={label}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-full
                text-base font-medium border transition-all duration-300
                ${
                  darkMode
                    ? "bg-blue-600/10 text-blue-300 border-blue-500/30"
                    : "bg-blue-50 text-black border-blue-200"
                }`}
            >
              <span className="text-xl">{icon}</span>
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto rounded-2xl p-8 mb-10 border backdrop-blur-md
            transition-colors ${
              darkMode
                ? "bg-gray-900/80 border-blue-500/20 text-gray-100"
                : "bg-white/90 border-gray-200 text-black shadow-lg"
            }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Frontend Developer Intern
          </h3>

          <p className={`${darkMode ? "text-gray-400" : "text-black"} mb-6`}>
            2026 • Remote
          </p>

          <ul
            className={`space-y-3 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            <li>› Built responsive apps with React & TypeScript</li>
            <li>› Worked in agile teams & code reviews</li>
            <li>› Improved performance by 30%</li>
            <li>› Used Git & CI/CD pipelines</li>
          </ul>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto rounded-2xl p-8 mb-10 border backdrop-blur-md
            transition-colors ${
              darkMode
                ? "bg-gray-900/80 border-blue-500/20 text-gray-100"
                : "bg-white/90 border-gray-200 text-black shadow-lg"
            }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Full-Stack Web/Mobile Developer Intern
          </h3>

          <p className={`${darkMode ? "text-gray-400" : "text-black"} mb-6`}>
            2025 • on-site
          </p>

          <ul
            className={`space-y-3 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            <li>› Built responsive apps with React & TypeScript</li>
            <li>› Worked in agile teams & code reviews</li>
            <li>› Improved performance by 30%</li>
            <li>› Used Git & CI/CD pipelines</li>
          </ul>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto rounded-2xl p-8 mb-10 border backdrop-blur-md
            transition-colors ${
              darkMode
                ? "bg-gray-900/80 border-blue-500/20 text-gray-100"
                : "bg-white/90 border-gray-200 text-black shadow-lg"
            }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Head Developer/Training Facilitator
          </h3>

          <p className={`${darkMode ? "text-gray-400" : "text-black"} mb-6`}>
            2024 • On-site
          </p>

          <ul
            className={`space-y-3 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            <li>› Built responsive apps with React & TypeScript</li>
            <li>› Worked in agile teams & code reviews</li>
            <li>› Improved performance by 30%</li>
            <li>› Used Git & CI/CD pipelines</li>
          </ul>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`max-w-4xl mx-auto rounded-2xl p-8 mb-10 border backdrop-blur-md
            transition-colors ${
              darkMode
                ? "bg-gray-900/80 border-blue-500/20 text-gray-100"
                : "bg-white/90 border-gray-200 text-black shadow-lg"
            }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Frontend Developer Intern
          </h3>

          <p className={`${darkMode ? "text-gray-400" : "text-black"} mb-6`}>
            2024 • on-site
          </p>

          <ul
            className={`space-y-3 ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            <li>› Built responsive apps with React & TypeScript</li>
            <li>› Worked in agile teams & code reviews</li>
            <li>› Improved performance by 30%</li>
            <li>› Used Git & CI/CD pipelines</li>
          </ul>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="/your-resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full
              bg-blue-600 text-white font-semibold text-lg
              hover:bg-blue-500 transition shadow-lg"
          >
            ↗ Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}