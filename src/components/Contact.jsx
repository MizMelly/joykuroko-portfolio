// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, 
  FaGithub, FaLinkedin, FaTwitter, FaTelegramPlane 
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact({ darkMode = true }) {
  return (
    <section
      id="contact"
      className={`
        min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden
        transition-colors duration-500
        ${darkMode 
          ? 'bg-gradient-to-b from-black via-[#0a0a1f] to-black text-white' 
          : 'bg-white text-gray-900'}
      `}
    >
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center mb-8 ${
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
          Contact Me
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-lg md:text-xl text-center max-w-3xl mx-auto mb-16 leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Let's discuss your next project, collaborate on something amazing, or just
          have a chat about technology and innovation.
        </motion.p>

        {/* Main two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Left: Let's Connect */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-2xl ${
              darkMode 
                ? 'bg-gray-900/70 backdrop-blur-md border border-gray-700/50 shadow-black/40' 
                : 'bg-white border border-gray-200 shadow-gray-200/50'
            }`}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Connect
            </h3>

            <p className={`mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
              Whether you're a company looking to hire, a developer wanting to collaborate, 
              or just someone who wants to chat about tech, I'd love to hear from you!
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                  darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  <FaEnvelope />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email</p>
                  <a href="mailto:meryemebrahim46@gmail.com" className={`hover:text-yellow-400 transition ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    meryemebrahim46@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                  darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Phone</p>
                  <a href="tel:+251965717483" className={`hover:text-yellow-400 transition ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    +234 907 208 7504
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                  darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Location</p>
                  <p className={darkMode ? 'text-gray-200' : 'text-gray-800'}>
                    Asaba, Delta State, Nigeria
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 mt-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                  darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'
                }`}>
                  💬
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/MizMelly" className={`text-2xl transition ${
                    darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                  }`}>
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/kuroko-joy/" className={`text-2xl transition ${
                    darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                  }`}>
                    <FaLinkedin />
                  </a>
                  <a href="#" className={`text-2xl transition ${
                    darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-600 hover:text-yellow-600'
                  }`}>
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className={`mt-10 flex items-center gap-3 rounded-lg p-4 border ${
              darkMode ? 'bg-green-900/30 border-green-700/50' : 'bg-green-50 border-green-200'
            }`}>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <p className={`font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                Currently Available for freelance projects and collaborations
              </p>
            </div>
          </motion.div>

          {/* Right: Send Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 shadow-2xl ${
              darkMode
                ? 'bg-gray-900/70 backdrop-blur-md border border-gray-700/50 shadow-black/40'
                : 'bg-white border border-gray-200 shadow-gray-200/50'
            }`}
          >
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Send Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className={`w-full px-5 py-3 rounded-lg border focus:outline-none focus:ring-1 transition ${
                      darkMode
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500/30'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500/30'
                    }`}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full px-5 py-3 rounded-lg border focus:outline-none focus:ring-1 transition ${
                      darkMode
                        ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500/30'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500/30'
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Subject *
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className={`w-full px-5 py-3 rounded-lg border focus:outline-none focus:ring-1 transition ${
                    darkMode
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500/30'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500/30'
                  }`}
                  required
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Message *
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                  className={`w-full px-5 py-3 rounded-lg border focus:outline-none focus:ring-1 transition resize-none ${
                    darkMode
                      ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500/30'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-yellow-500 focus:ring-yellow-500/30'
                  }`}
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 font-semibold rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 text-lg ${
                  darkMode 
                    ? 'text-white shadow-yellow-500/40 hover:shadow-yellow-500/60' 
                    : 'text-gray-900 shadow-yellow-500/30 hover:shadow-yellow-500/50'
                }`}
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer – exact match to your screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className={`text-lg md:text-xl mb-8 leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Prefer a more direct approach? Reach out on any platform!
          </p>

          <div className="flex justify-center gap-6 mb-10">
            <motion.a
              href="https://github.com/MizMelly"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white shadow-md shadow-gray-900/50' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 shadow-md shadow-gray-300/50'
              }`}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/kuroko-joy/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white shadow-md shadow-gray-900/50' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 shadow-md shadow-gray-300/50'
              }`}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://t.me/yourtelegram" // ← replace with your real Telegram link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ${
                darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white shadow-md shadow-gray-900/50' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 shadow-md shadow-gray-300/50'
              }`}
            >
              <FaTelegramPlane />
            </motion.a>
          </div>

          <p className={`text-xl md:text-2xl font-medium italic ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            "Think. Code. Deploy. Repeat."
          </p>
        </motion.div>
      </div>
    </section>
  );
}