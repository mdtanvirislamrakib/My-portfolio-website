import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaCode, FaWhatsapp } from 'react-icons/fa';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    Prism.highlightAll();
  }, []);

  const codeSnippet = `// Professional Profile
const developer = {
  name: 'MD. Tanvir Islam Rakib',
  title: 'Junior MERN Stack Developer',
  expertise: ['React', 'Node.js', 'Express', 'MongoDB'],
  experience: 'I am fresher',
  availability: 'Open for opportunities',
  contact: 'mdtanvirislamrakib7@gmail.com'
};`.trim();

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden bg-black">
      {/* Glass morphism overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-800/80 backdrop-blur-3xl z-0"
      ></motion.div>

      {/* Floating glowing shapes */}
      <motion.div
        animate={floatAnimation}
        className="absolute top-1/4 left-1/4 w-36 h-36 bg-blue-600/30 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ ...floatAnimation, y: [0, -20, 0] }}
        className="absolute bottom-1/3 right-1/4 w-44 h-44 bg-purple-600/30 rounded-full blur-3xl z-0"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Intro */}
          <motion.div
            initial={{ opacity: 1, y: 30 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Hello, I'm <span className="text-blue-400">MD. Tanvir Islam Rakib</span>
              </h1>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
                <h2 className="text-3xl font-medium text-gray-300">
                  <Typewriter
                    words={['MERN Stack Developer', 'Frontend Developer', 'React Developer', 'Node.js Developer', 'Tech Enthusiast']}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h2>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              I architect and build scalable web applications with cutting-edge technologies. Passionate about writing
              clean, maintainable code and delivering seamless user experiences.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center space-x-3">
                  <HiDownload className="w-6 h-6 text-white" />
                  <span className="text-lg font-semibold text-white">Download Resume</span>
                </div>
              </motion.button>

              {/* Social Icons */}
              <div className="flex space-x-5">
                {[
                  {
                    icon: <FaGithub className="w-6 h-6" />,
                    label: 'GitHub',
                    link: 'https://github.com/mdtanvirislamrakib',
                  },
                  {
                    icon: <FaLinkedin className="w-6 h-6" />,
                    label: 'LinkedIn',
                    link: 'https://www.linkedin.com/in/tanvir-islam-rakib/',
                  },
                  {
                    icon: <FaWhatsapp className="w-6 h-6" />,
                    label: 'WhatsApp',
                    link: 'https://wa.me/+8801902264231',
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    className="p-4 bg-gray-800/50 hover:bg-gray-700/70 rounded-xl border border-gray-700/50 transition-all duration-300 group"
                  >
                    <div className="text-gray-300 group-hover:text-white transition-colors">{social.icon}</div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Code Block */}
          <motion.div
            initial={{ opacity: 1, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-gray-900/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl"
            >
              {/* Title Bar */}
              <div className="flex items-center px-6 py-4 bg-gray-800/50 border-b border-gray-700/50">
                <div className="flex space-x-2 mr-6">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <div className="text-sm text-gray-400 font-mono">profile.js</div>
              </div>

              {/* Code */}
              <pre className="language-javascript max-h-[400px] overflow-auto p-6 text-sm md:text-base">
                <code
                  className="language-javascript"
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(codeSnippet, Prism.languages.javascript, 'javascript'),
                  }}
                />
              </pre>

              {/* Footer */}
              <div className="flex justify-between items-center px-6 py-4 bg-gray-800/50 border-t border-gray-700/50">
                <div className="text-xs text-gray-500 font-mono">ES6 JavaScript</div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                  onClick={() => navigator.clipboard.writeText(codeSnippet)}
                >
                  <FaCode className="w-4 h-4" />
                  <span className="text-sm font-medium">Copy</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
