import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";

const InfoSection = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const indiaTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(indiaTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const leftIcons = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sujitsakore/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/SujitSakore",
    },
    {
      icon: <FaFileAlt />,
      label: "Resume",
      url: "",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="container mx-auto h-full flex items-center justify-center px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-8 py-12">
          {/* Left Column */}
          <div className="lg:w-1/2 border-r border-gray-800 flex flex-col justify-evenly space-y-12 pr-8">
            {leftIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
                className="flex items-center space-x-8 hover:text-cyan-400 transition duration-300"
              >
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg bg-white text-black">
                  {item.icon}
                </div>
                <span className="text-xl font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col justify-between space-y-12 pl-8">
            <div className="text-4xl font-bold">
              <span className="px-4 py-1 bg-white text-black">
                Sujit Sakore.
              </span>
            </div>

            <div className="text-lg space-y-4">
              <p className="text-xl">+917020464564</p>
              <p className="text-xl">sujitsakore33@gmail.com</p>
            </div>

            <div className="space-y-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d809812.3768456928!2d73.59358703783576!3d19.09436189416828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1756655184889!5m2!1sen!2sin"
                width="100%"
                height="300"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
              <div className="grid grid-cols-3 gap-8 text-base">
                <div>
                  <p className="font-semibold mb-2">Location</p>
                  <p>Pune, India</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">India Time</p>
                  <p>{time}</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Status</p>
                  <p className="text-green-400">● Available</p>
                </div>
              </div>
            </div>

            <div className="text-4xl font-bold">SSS.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
