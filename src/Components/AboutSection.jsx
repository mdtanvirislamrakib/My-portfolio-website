import { motion } from 'framer-motion';
// import profileImg from '../assets/images/your-image.jpg'; // 🔁 Replace with your actual image path

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={"http://adfadfjasd.com"}
            alt="MD. Tanvir Islam Rakib"
            className="rounded-2xl w-80 h-80 object-cover shadow-xl border border-white/10"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I'm <span className="text-white font-semibold">MD. Tanvir Islam Rakib</span>, a passionate and dedicated MERN Stack Developer based in Bangladesh. 
            My journey into programming started with curiosity and a drive to build things that solve real-world problems. Over time, this passion evolved into a focused path of learning modern web technologies like React, Node.js, and MongoDB.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I enjoy crafting clean, scalable, and efficient code. Whether it’s a responsive UI or a robust backend API, I love working across the full stack to bring ideas to life. My favorite kind of work is the one that involves creativity, logical thinking, and solving challenges that push me to grow.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Outside of coding, I enjoy watching football, exploring creative design ideas, and occasionally sketching or exploring new tech trends. I believe in continuous learning and teamwork, and I’m always excited to collaborate on projects that make a positive impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
