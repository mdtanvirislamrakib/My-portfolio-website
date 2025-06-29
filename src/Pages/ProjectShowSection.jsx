import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaStripe, FaGithub as FaGithubIcon } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFramer, SiJsonwebtokens, SiNetlify, SiVercel, SiReactrouter, SiAxios, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'ParcelHub',
    desc: 'ParcelHub is a complete parcel delivery solution built with MERN stack, JWT secured, and Stripe integrated for smooth transactions.',
    image: '/images/parcelhub.png',
    github: 'https://github.com/mdtanvirislamrakib/parcelhub-client',
    live: 'https://parcelhub.netlify.app',
    bgColor: 'bg-gradient-to-br from-black via-blue-900 to-violet-800',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-rose-400" /> },
      { name: 'Stripe', icon: <FaStripe className="text-indigo-400" /> },
      { name: 'Axios', icon: <SiAxios className="text-blue-300" /> },
    ],
  },
  {
    name: 'DocCure',
    desc: 'A modern, animated landing page for medical services featuring appointment sections and responsive design.',
    image: '/images/medicare.png',
    github: 'https://github.com/mdtanvirislamrakib/medical-landing',
    live: 'https://doctorecare.netlify.app',
    bgColor: 'bg-gradient-to-br from-black via-blue-900 to-violet-800',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-pink-400" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-cyan-300" /> },
    ],
  },
  {
    name: 'HistoriVault',
    desc: 'HistoriVault is a digital archive for browsing significant historical events, built with modern UI and dynamic routing.',
    image: '/images/historivault.png',
    github: 'https://github.com/mdtanvirislamrakib/historivault',
    live: 'https://historivault.vercel.app',
    bgColor: 'bg-gradient-to-br from-black via-blue-900 to-violet-800',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-400" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
      { name: 'Vercel', icon: <SiVercel className="text-white" /> },
    ],
  },
  {
    name: 'Portfolio Website',
    desc: 'Personal portfolio built with React, Framer Motion, and TailwindCSS showcasing skills, projects, and contact info.',
    image: '/images/portfolio.png',
    github: 'https://github.com/mdtanvirislamrakib/portfolio',
    live: 'https://mdtanvirislamrakib.web.app',
    bgColor: 'bg-gradient-to-br from-black via-blue-900 to-violet-800',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-pink-400" /> },
      { name: 'GitHub', icon: <FaGithubIcon className="text-gray-200" /> },
    ],
  },
];

const ProjectShowSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-[400vh] py-28"
    >
      {/* Title and Subtitle */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center select-none">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-gray-300 max-w-3xl mx-auto mt-5 text-lg tracking-wide"
        >
          A selection of projects showcasing modern technologies, clean interfaces, and scalable solutions.
        </motion.p>
      </div>

      {/* Sticky projects container */}
      <div className="relative h-[400vh] max-w-7xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen w-full flex items-center justify-center"
            style={{ top: `${index * 10}px` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true, margin: '-120px' }}
              className={`w-full max-w-7xl mx-auto rounded-3xl p-12 flex flex-col lg:flex-row gap-14
                          ${project.bgColor} shadow-xl`}
              style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.7)' }}
            >
              {/* Image */}
              <div className="w-full lg:w-[55%] h-80 md:h-[30rem] relative overflow-hidden rounded-2xl shadow-lg border border-white/25">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover absolute inset-0 hover:scale-105 transition-transform duration-600 ease-in-out"
                  loading="lazy"
                  draggable={false}
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center space-y-7 px-3 text-white">
                <h2 className="text-4xl font-extrabold tracking-tight select-text">{project.name}</h2>
                <p className="text-lg leading-relaxed text-gray-100 select-text">{project.desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.techStack.map(({ name, icon }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-lg border border-white/20 text-white text-sm font-semibold shadow-sm"
                    >
                      <span className="text-xl">{icon}</span> {name}
                    </div>
                  ))}
                </div>

                <div className="flex gap-6 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-lg bg-black/70 hover:bg-black/90 transition-colors border border-white/50 hover:border-white/70 shadow-md font-semibold"
                  >
                    <FaGithub className="text-xl" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl"
                  >
                    <FaExternalLinkAlt className="text-lg" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowSection;
