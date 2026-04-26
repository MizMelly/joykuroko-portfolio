import { motion } from "framer-motion";

const projects = [
  
  {
  title: "LOUDAM – Complaint Management Platform",
  desc:
    "A full-stack complaint management system that allows users to file, track, and manage complaints with real-time status updates and admin oversight.",
  tech: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "JWT", "Multer"],
  performance: "98%",
  metric: "System Efficiency",
  complexity: "Advanced",
  year: "2026",
  liveDemo: "https://loudamnaija.com/",
},
 {
  title: "A School Training Portal",
  desc:
    "A modern training portal for managing courses, enrollments, and user progress tracking.",
  tech: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
  performance: "90%",
  metric: "12+ Features",
  complexity: "Intermediate",
  year: "2026",
  liveDemo: "https://team-delta-lms.vercel.app/",  
  },
  {
    title: "Distributor-App",
    desc:
      "Modern Sales & Distribution System (User Module) developed the user-facing mobile interface using Flutter,integrating with a Node.js backend and PostgreSQL database for order and sales interactions.with advanced features, real-time streaming simulation, and personalized content recommendations.",
    tech: ["Flutter", "Node.js", "PostgreSQL", "Express"],
    performance: "95%",
    metric: "90/100",
    complexity: "Advanced",
    year: "2026",
    liveDemo: "https://distrohub-xi.vercel.app/",  
  }, 
 {
  title: "Fintech",
  desc:
    "A fully functional banking application with secure user authentication, account dashboards, balance tracking, fund transfers, transaction history, and seamless backend API integration.",
  tech: ["React Native","Node.js", "PostgreSQL", "Express"],
  performance: "92%",
  metric: "15+ Features",
  complexity: "Advanced",
  year: "2025",
  liveDemo: "https://github.com/MizMelly/Fintech",  
},

{
  title: "SIMBA – Dog Pet HMO",
  desc:
    "A pet healthcare management platform designed for dog owners to manage pet health records, HMO plans, appointments, and veterinary services efficiently.",
  tech: ["React Native", "Node.js", "Express.js", "PostgreSQL"],
  performance: "96%",
  metric: "Health Tracking Efficiency",
  complexity: "Advanced",
  year: "2025",
  liveDemo: "https://simba-inky.vercel.app/",
},
  {
  title: "Restaurant",
  desc:
    "A modern restaurant website showcasing menu items, services, and branding with smooth animations and a responsive, user-friendly interface.",
  tech: ["React", "Tailwind CSS", "Framer Motion"],
  performance: "96%",
  metric: "UX Focused",
  complexity: "Intermediate",
  year: "2026",
  liveDemo: "https://dashing-basbousa-73d3af.netlify.app/",
},

  {
  title: "Hair-Shop",
  desc:
    "An online hair store with product listings, product details, shopping cart functionality, user authentication, order placement, and seamless backend API integration.",
  tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Express"],
  performance: "90%",
  metric: "12+ Features",
  complexity: "Intermediate",
  year: "2025",
  liveDemo: "https://fintech-c6cs.onrender.com/",  
  },
    
];

export default function Projects({ darkMode }) {

  const sectionBg = darkMode ? "bg-[#0b1220]" : "bg-white";
  const cardBg = darkMode ? "bg-[#0f172a] border-blue-500/20" : "bg-white border-gray-200";
  const textPrimary = darkMode ? "text-white" : "text-gray-900";
  const textSecondary = darkMode ? "text-gray-400" : "text-gray-600";
  const pillBg = darkMode
    ? "bg-[#020617] text-gray-300 border-blue-500/20"
    : "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <section
      id="projects"
      className={`min-h-screen px-4 sm:px-6 lg:px-8 py-24 ${sectionBg}`}
    >
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
            darkMode
              ? "bg-[#0f172a] text-blue-300 border-blue-500/30"
              : "bg-gray-100 text-blue-600 border-gray-300"
          }`}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Real World Projects
        </div>

        <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${textPrimary}`}>
          My Projects
        </h2>

        <p className={`max-w-2xl mx-auto text-base sm:text-lg ${textSecondary}`}>
          From commercial clones to innovative web applications, explore my
          journey in building digital solutions that solve real-world problems.
        </p>
      </div>

      {/* PROJECT CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`flex flex-col rounded-2xl overflow-hidden border shadow-lg transition-all ${cardBg}`}
          >
            {/* TOP BAR */}
            <div className={`flex items-center justify-between px-4 py-3 text-xs ${textSecondary}`}>
              <span className="flex items-center gap-2 text-green-400">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Completed
              </span>
              <span>{project.year}</span>
            </div>

            {/* IMAGE */}
            <div className="h-40 bg-linear-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
              <span className="text-4xl text-blue-500">⚛️</span>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col grow p-6">
              <h3 className={`text-lg font-bold mb-2 ${textPrimary}`}>
                {project.title}
              </h3>

              <p className={`text-sm mb-4 grow ${textSecondary}`}>
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 text-xs rounded-full border ${pillBg}`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* METRICS */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs mb-5">
                <div>
                  <p className="text-blue-500 font-bold">{project.performance}</p>
                  <p className={textSecondary}>Performance</p>
                </div>
                <div>
                  <p className="text-blue-500 font-bold">{project.metric}</p>
                  <p className={textSecondary}>Quality</p>
                </div>
                <div>
                  <p className="text-blue-500 font-bold">{project.complexity}</p>
                  <p className={textSecondary}>Complexity</p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3 mt-auto">
  <button
    className={`flex-1 py-2 rounded-lg border transition ${
      darkMode
        ? "bg-[#020617] text-gray-300 border-blue-500/20 hover:bg-gray-800"
        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
    }`}
    onClick={() => window.open(`https://github.com/MizMelly/${project.title.toLowerCase().replace(/\s+/g, '-')}`, "_blank")}
  >
    Code
  </button>

  {project.liveDemo && (
    <button
      className="flex-1 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-md"
      onClick={() => window.open(project.liveDemo, "_blank")}
    >
      Live Demo
    </button>
  )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GITHUB BUTTON */}
      <div className="flex justify-center">
        <motion.a
          href="https://github.com/MizMelly"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition ${
  darkMode
    ? "bg-blue-600 text-white hover:bg-blue-500"
    : "bg-blue-500 text-white hover:bg-blue-600"
}`} >
          <span className="text-2xl">🐙</span>
          Explore More on GitHub →
        </motion.a>
      </div>
    </section>
  );
}