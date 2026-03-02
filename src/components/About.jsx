import { motion } from 'framer-motion';
import { FaNodeJs, FaJs, FaReact } from 'react-icons/fa';
import {
  SiReact,
  SiFlutter,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
};

const stackItems = [
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'React.js', icon: FaReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Node.js', icon: FaNodeJs, color: '#68A063' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#47A248' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
   {name:'React Native', icon: FaReact, color: "#61DAFB"},
      { name: 'Flutter', icon: SiFlutter, color: "#02569B"},
];

const expertiseItems = [
  { icon: '<>', title: 'Clean Architecture', subtitle: 'Scalable, maintainable code following best practices' },
  { icon: '⚡', title: 'Performance First', subtitle: 'Lightning-fast applications optimized for speed' },
  { icon: '🎨', title: 'Beautiful UX', subtitle: 'Intuitive interfaces with pixel-perfect design' },
  { icon: '💡', title: 'Innovation', subtitle: 'Leveraging cutting-edge technologies and patterns' },
];

export default function About({ darkMode }) {
  const textColor = darkMode ? "text-indigo-200" : "text-black";
  const secondaryTextColor = darkMode ? "text-indigo-300/90" : "text-gray-700";
  const cardBg = darkMode ? "bg-gray-900/70 border-gray-700" : "bg-white border-gray-200";
  const bigCardBg = darkMode ? "bg-gray-900/80 border-gray-700/80 backdrop-blur-sm" : "bg-white/90 border-gray-200/80 backdrop-blur-sm";
  const bannerBg = darkMode ? "bg-yellow-900/50 text-yellow-300" : "bg-yellow-100 text-yellow-800";
  const pillBg = darkMode ? "bg-gray-800/70 text-indigo-300" : "bg-gray-200/80 text-indigo-700";

  return (
    <section
      id="about"
      className={`min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-24 md:pt-32 md:pb-32 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-stretch"
        >

          {/* LEFT COLUMN */}
          <div className="h-full flex flex-col justify-between text-center md:text-left">
            <div>
              <motion.div
                variants={fadeInUp}
                className={`inline-block px-5 py-2 mb-4 rounded-full border ${pillBg} text-sm font-medium`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className={`text-4xl md:text-5xl font-bold mb-6 ${textColor}`}
              >
                About Me
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className={`text-lg md:text-xl leading-relaxed mb-6 ${textColor}`}
              >
                I build digital products that solve real-world problems and scale smoothly, blending clean architecture with modern technologies.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className={`text-lg md:text-xl leading-relaxed mb-6 ${secondaryTextColor}`}
              >
                I specialize in React, Next.js, Node.js, and cross-platform solutions, focusing on clean, scalable, and maintainable code.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className={`text-lg md:text-xl leading-relaxed mb-8 ${textColor}`}
              >
                Beyond coding, I stay up to date with modern tech trends and continuously push myself to deliver impactful solutions.
              </motion.p>
            </div>

            {/* STATS */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4 md:gap-6 items-stretch auto-rows-fr"
            >
              {[
                { icon: '🏆', title: '25+', subtitle: 'Projects Completed' },
                { icon: '⏳', title: '2+', subtitle: 'Years Experience' },
                { icon: '❤️', title: '100%', subtitle: 'Client Satisfaction' },
                { icon: '💻', title: '8+', subtitle: 'Technologies Mastered' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className={`h-full p-5 rounded-xl border ${cardBg} flex flex-col justify-between items-center text-center shadow-md`}
                >
                  <span className="text-3xl mb-2">{stat.icon}</span>
                  <span className={`text-xl font-bold ${textColor}`}>{stat.title}</span>
                  <span className={`text-xs ${secondaryTextColor}`}>{stat.subtitle}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="h-full flex flex-col justify-between">
            <motion.div
              variants={fadeInUp}
              className={`p-8 md:p-10 rounded-2xl border ${bigCardBg} shadow-2xl`}
            >
              <motion.h3
                variants={fadeInUp}
                className={`text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 ${textColor}`}
              >
                <span className="text-yellow-500">⚡</span> Technical Stack
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10 items-stretch auto-rows-fr">
                {stackItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`h-full p-6 rounded-xl border ${cardBg} flex flex-col justify-between items-center shadow-lg`}
                  >
                    <item.icon size={40} color={item.color} />
                    <span className={`text-sm font-medium ${textColor}`}>
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className={`px-6 py-4 rounded-xl ${bannerBg} text-center font-medium`}>
                Continuously expanding my expertise with modern technologies
              </div>
            </motion.div>

            {/* EXPERTISE */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 grid grid-cols-2 gap-6 items-stretch auto-rows-fr"
            >
              {expertiseItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  className={`h-full p-5 rounded-xl border ${cardBg} flex flex-col justify-between items-center text-center shadow-md`}
                >
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className={`text-xl font-bold ${textColor}`}>
                    {item.title}
                  </span>
                  <span className={`text-xs ${secondaryTextColor}`}>
                    {item.subtitle}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}