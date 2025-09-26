import React from "react";

const GithubProjects = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="container mx-auto px-6 py-20">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight">
          GitHub Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          {/* Project 1 */}
          <a
            href="https://github.com/SujitSakore/Codevx"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black border border-transparent hover:border-purple-500/70 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 hover:scale-[1.03]"
          >
            <h3 className="font-bold text-2xl md:text-3xl mb-3 group-hover:text-purple-400 text-center md:text-left">
              AI Proctoring Assessment Website
            </h3>
            <p className="text-base text-gray-400 leading-relaxed text-center md:text-left">
              Full-stack platform for coding/aptitude assessments with AI-based 
              proctoring, real-time evaluation, and responsive design.
            </p>
          </a>

          {/* Project 2 */}
          <a
            href="https://github.com/SujitSakore/PyDeepFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black border border-transparent hover:border-purple-500/70 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 hover:scale-[1.03]"
          >
            <h3 className="font-bold text-2xl md:text-3xl mb-3 group-hover:text-purple-400 text-center md:text-left">
              PyDeepFlow
            </h3>
            <p className="text-base text-gray-400 leading-relaxed text-center md:text-left">
              Custom Deep Learning package optimized for simplicity, 
              learning, and integration into projects.
            </p>
          </a>

          {/* Project 3 */}
          <a
            href="https://github.com/SujitSakore/Cadmi_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black border border-transparent hover:border-purple-500/70 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 hover:scale-[1.03]"
          >
            <h3 className="font-bold text-2xl md:text-3xl mb-3 group-hover:text-purple-400 text-center md:text-left">
              CADMI-AI
            </h3>
            <p className="text-base text-gray-400 leading-relaxed text-center md:text-left">
              Predicts apt information for students seeking references 
              for possible admissions in undergraduate universities.
            </p>
          </a>

          {/* Project 4 */}
          <a
            href="https://github.com/SujitSakore/speak-to-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl p-8 bg-gradient-to-br from-gray-900 to-black border border-transparent hover:border-purple-500/70 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 hover:scale-[1.03]"
          >
            <h3 className="font-bold text-2xl md:text-3xl mb-3 group-hover:text-purple-400 text-center md:text-left">
              Speak-to-Docs
            </h3>
            <p className="text-base text-gray-400 leading-relaxed text-center md:text-left">
              Speech-enabled Retrieval-Augmented Generation solution 
              for smarter document interaction.
            </p>
          </a>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/SujitSakore"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-purple-500/30"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubProjects;
