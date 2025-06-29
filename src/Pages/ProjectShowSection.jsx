import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaStripe, FaGithub as FaGithubIcon } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFramer, SiJsonwebtokens, SiNetlify, SiVercel, SiReactrouter, SiFirebase, SiSoundcharts } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TbBrandFramerMotion } from "react-icons/tb";





import historiVault from "../assets/historiVault.PNG"
import taskHub from "../assets/freelance-task.PNG"
import eventify from "../assets/event.PNG"
import madicare from "../assets/madicare.PNG"

const projects = [
  {
    name: 'HistoriVault',
    desc: 'A full-stack MERN-based web application designed to preserve and showcase historical artifacts like the Rosetta Stone, Antikythera Mechanism, and many more. Users can explore, like, and contribute their own historical findings, all within a sleek, interactive, and secure interface.',
    image: historiVault,
    github: 'https://github.com/mdtanvirislamrakib/Historical-Artifacts-Website',
    live: 'https://historical-artifacts.netlify.app/',
    bgColor: 'bg-gradient-to-br from-black via-blue-900 to-violet-800',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'JWT', icon: <SiJsonwebtokens className="text-rose-400" /> },
      { name: 'framer-motion', icon: <TbBrandFramerMotion className="text-violet-500" /> },
    ],
  },
  {
    name: 'TaskHub',
    desc: 'TaskHub is a full-stack web application that allows users to post freelance tasks, bid on them, and manage task-based collaborations. It provides dynamic task listings, real-time bid updates, secure authentication, and an engaging user dashboard — all wrapped in a sleek, responsive interface.',
    image: taskHub,
    github: 'https://github.com/mdtanvirislamrakib/Freelance-task-marketplace-client',
    live: 'https://freelance-task-matketplace.netlify.app/',
    bgColor: 'bg-gradient-to-br from-black via-blue-900 to-violet-800',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-400" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
    ],
  },
  {
    name: 'Eventify',
    desc: 'Event Explorer is a responsive single-page application built with React, designed to help users discover and explore upcoming local events like conferences, art exhibitions, sports events, and more. Authenticated users can view detailed event pages, reserve seats, and manage their profiles.',
    image: eventify,
    github: 'https://github.com/mdtanvirislamrakib/Event-Explorer-Website',
    live: 'https://eventify-explore-events.netlify.app/',
    bgColor: 'bg-gradient-to-br from-black via-blue-900 to-violet-800',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-400" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'Netlify', icon: <SiNetlify className="text-teal-400" /> },
    ],
  },
  {
    name: 'MediCare',
    desc: 'MediCare is a responsive, frontend-only medical web application built using modern web technologies like React and Tailwind CSS. It is designed to provide a clean, intuitive, and professional user interface for showcasing medical services, doctor profiles, statistics, and health-related content.',
    image: madicare,
    github: 'https://github.com/mdtanvirislamrakib/PHUDU-Medical',
    live: 'https://splendid-stroopwafel-1f5da0.netlify.app/',
    bgColor: 'bg-gradient-to-br from-black via-blue-900 to-violet-800',
    techStack: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'React Router', icon: <SiReactrouter className="text-red-400" /> },
      { name: 'GitHub', icon: <FaGithubIcon className="text-gray-200" /> },
      { name: 'Recharts', icon: <SiSoundcharts className="text-sky-400" /> },
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
        
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full mx-auto" />
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            A selection of projects showcasing modern technologies, clean interfaces, and scalable solutions.
          </p>
        </motion.div>
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
              initial={{ scale: 0.98 }}
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
                  className="w-full h-full object-contain absolute inset-0 hover:scale-105 transition-transform duration-600 ease-in-out"
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
