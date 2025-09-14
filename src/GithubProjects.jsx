import React from "react";

const GithubProjects = () => {
  return (
    <section className="min-h-screen bg-black text-white overflow-y-auto">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">GitHub Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">

          
          {/* AI Proctoring Assessment Website */}
          <a
            href="https://github.com/SujitSakore/Codevx"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 transition hover:bg-gray-900 h-full"
          >
            <div className="font-semibold text-xl mb-3">AI Proctoring Assessment Website</div>
            <div className="text-sm text-gray-300">
              Full-stack platform for coding/aptitude assessments with AI-based proctoring, real-time evaluation, and responsive design.
            </div>
          </a>

          {/* PyDeepFlow */}
          <a
            href="https://github.com/SujitSakore/PyDeepFlow"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 transition hover:bg-gray-900 h-full"
          >
            <div className="font-semibold text-xl mb-3">PyDeepFlow</div>
            <div className="text-sm text-gray-300">
              This is my own Deep Learning Package, optimized for performing Deep Learning Tasks and easy to learn and integrate into projects.
            </div>
          </a>

          {/* CADMI-AI */}
          <a
            href="https://github.com/SujitSakore/Cadmi_AI"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 transition hover:bg-gray-900 h-full"
          >
            <div className="font-semibold text-xl mb-3">CADMI-AI</div>
            <div className="text-sm text-gray-300">
            Predicts apt information for a student who needs references for possible admissions in undergraduate universitites.
            </div>
          </a>

          {/* speak-to-docs*/}
          <a
            href="https://github.com/SujitSakore/speak-to-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 transition hover:bg-gray-900 h-full"
          >
            <div className="font-semibold text-xl mb-3">speak-to-docs</div>
            <div className="text-sm text-gray-300">
             Speech-enabled Retrieval-Augmented Generation solution
            </div>
          </a>

          {/* Game */}
          <a
            href="https://github.com/SujitSakore/Space-Shooter-Game"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 transition hover:bg-gray-900 h-full md:col-span-2"
          >
            <div className="font-semibold text-xl mb-3">Space Shooter Game</div>
            <div className="text-sm text-gray-300">
              Developed a fully responsive space-shooting website game individually using JavaScript events. Game is compatible with all devices including touch devices. Tech Stack: HTML, CSS, JavaScript.
            </div>
          </a>
           {/* Air-Ticket-Reservation */}
          <a
            href="https://github.com/SujitSakore/Air-Ticket-Reservation"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 transition hover:bg-gray-900 h-full md:col-span-2"
          >
            <div className="font-semibold text-xl mb-3">Air Ticket Reservation</div>
            <div className="text-sm text-gray-300">
              Air Ticket Reservation streamlines flight bookings with user-friendly features. It simplifies search, reservation, and management, ensuring a seamless experience. Designed for efficiency, it redefines travel planning with ease.
            </div>
          </a>
          {/* Expense-Tracker */}
          <a
            href="https://github.com/SujitSakore/Expense-Tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-700 rounded-lg p-6 transition hover:bg-gray-900 h-full md:col-span-2"
          >
            <div className="font-semibold text-xl mb-3">Expense-Tracker</div>
            <div className="text-sm text-gray-300">
              Expense Tracker is a handy tool for managing personal finances. It helps users track expenses, categorize spending, and gain insights into their financial habits. Designed for simplicity and efficiency, it empowers users to make informed decisions about their money.
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubProjects;
