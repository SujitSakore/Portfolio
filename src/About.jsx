import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-6 md:px-24 bg-transparent text-white"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-6xl font-bold mb-10 md:mb-16 text-center">
        About Me
      </h2>

      {/* Container for Image + Text */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10 md:gap-20">
        
        {/* Left Side - Image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Gradient Border Wrapper */}
          <div className="p-[3px] rounded-3xl bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 shadow-[0_0_20px_rgba(139,92,246,0.6)]">
            <img
              src="/public/sujit_about.jpeg"
              alt="Sujit Sakore"
              className="rounded-3xl w-60 h-60 md:w-96 md:h-96 object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Sujit Sakore</span>. <br />
            I'm a{" "}
            <span className="text-indigo-400 font-semibold">
              Final-year Computer Science undergraduate at NIT Nagaland
            </span>{" "}
            with proven experience in{" "}
            <span className="font-bold text-white">
              data science, full-stack development, and technical leadership
            </span>.
            <br /><br />
            Adept at delivering impactful projects, coordinating large-scale
            events, and excelling in competitive programming. Passionate about
            leveraging technology to drive innovation and create beautiful,
            functional solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
