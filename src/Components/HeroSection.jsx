import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaCode, FaWhatsapp  } from 'react-icons/fa';
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
  title: 'Senior Full Stack Engineer',
  expertise: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
  experience: 'I am fresher',
  availability: 'Open for opportunities',
  contact: 'mdtanvirislamrakib7@gmail.com'
};`.trim();


    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.3
            }
        }
    };

    const floatAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden">
            {/* Glass morphism background layer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-3xl z-0"
            ></motion.div>

            {/* Floating background elements */}
            <motion.div
                animate={floatAnimation}
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-600/20 blur-3xl z-0"
            ></motion.div>
            <motion.div
                animate={{ ...floatAnimation, y: [0, -20, 0] }}
                className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-600/20 blur-3xl z-0"
            ></motion.div>

            <div className="relative z-10 w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Professional Intro */}
                    <motion.div
                        initial="hidden"
                        animate={loaded ? "visible" : "hidden"}
                        variants={titleVariants}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                Hello, I'm <span className="text-blue-400">MD. Tanvir Islam Rakib</span>
                            </h1>
                            <div className="flex items-center space-x-4">
                                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
                                <h2 className="text-3xl font-medium text-gray-300">
                                    <Typewriter
                                        words={['MERN Stack Engineer', 'React Developer', 'Node.js Developer', 'Tech Enthusiast']}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    />
                                </h2>
                            </div>
                        </div>

                        <motion.p
                            variants={fadeInVariants}
                            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                        >
                            I architect and build scalable web applications with cutting-edge technologies.
                            Passionate about creating efficient, maintainable code and exceptional user experiences.
                        </motion.p>

                        <motion.div
                            variants={fadeInVariants}
                            className="flex flex-wrap items-center gap-6 pt-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative flex items-center space-x-3">
                                    <HiDownload className="w-6 h-6 text-white" />
                                    <span className="text-lg font-semibold text-white">Download Resume</span>
                                </div>
                            </motion.button>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex space-x-5"
                            >
                                {[
                                    { icon: <FaGithub className="w-6 h-6" />, label: 'GitHub', link: 'https://github.com/mdtanvirislamrakib' },
                                    { icon: <FaLinkedin className="w-6 h-6" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/tanvir-islam-rakib/' },
                                    { icon: <FaWhatsapp className="w-6 h-6" />, label: 'WhatsApp', link: 'https://wa.me/qr/U7272NW4GWDDJ1' },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        href={social?.link}
                                        target='_blank'
                                        className="p-4 bg-gray-800/50 hover:bg-gray-700/70 rounded-xl border border-gray-700/50 transition-all duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <div className="text-gray-300 group-hover:text-white transition-colors">
                                            {social.icon}
                                        </div>
                                    </motion.a>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Code Display */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl"
                        >
                            {/* Window Controls */}
                            <div className="flex items-center px-6 py-4 bg-gray-800/50 border-b border-gray-700/50">
                                <div className="flex space-x-2 mr-6">
                                    <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-sm text-gray-400 font-mono">profile.js</div>
                            </div>

                            {/* Code Block */}
                            {/* Code Block */}
                            <pre className="language-javascript max-h-[400px] overflow-auto p-6 text-sm md:text-base">
                                <code
                                    className="language-javascript"
                                    dangerouslySetInnerHTML={{
                                        __html: Prism.highlight(codeSnippet, Prism.languages.javascript, 'javascript'),
                                    }}
                                />
                            </pre>



                            {/* Code Actions */}
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