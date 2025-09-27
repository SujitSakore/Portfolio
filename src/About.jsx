import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center px-6 md:px-24 relative overflow-hidden">
      <div className="container mx-auto py-20 flex flex-col items-center z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight text-white">
          About Me
        </h2>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 md:gap-20">
          
          {/* Left Side - Image */}
          <motion.div
            className="relative flex justify-center group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Gradient Border with smooth hover scale */}
            <div className="p-[3px] rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 shadow-lg transition-all duration-300 group-hover:scale-105 md:group-hover:scale-110">
              <img
                src="/sujit_about.jpeg"
                alt="Sujit Sakore"
                className="rounded-2xl w-60 h-60 md:w-96 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            className="text-center md:text-left max-w-xl space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed md:leading-loose">
              Hi, I'm <span className="text-white font-semibold hover:text-purple-400 transition-colors duration-300">Sujit Sakore</span>. <br />
              I'm a{" "}
              <span className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors duration-300">
                Final-year Computer Science undergraduate at NIT Nagaland
              </span>{" "}
              with experience in{" "}
              <span className="font-bold text-white hover:text-purple-400 transition-colors duration-300">
                data science, full-stack development, and technical leadership
              </span>.
              <br /><br />
              Adept at delivering impactful projects, coordinating large-scale
              events, and excelling in competitive programming. Passionate about
              leveraging technology to drive innovation and create elegant,
              functional solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Optional subtle animated background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 via-black to-indigo-900 opacity-20 animate-[gradientShift_30s_ease-in-out_infinite] pointer-events-none"></div>

      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default About;
