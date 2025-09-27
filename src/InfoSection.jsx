import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ContactSection = () => {
  const [time, setTime] = useState("");
  const [showForm, setShowForm] = useState(false);

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

  return (
    <section className="min-h-screen flex flex-col justify-between bg-black text-white px-4">
      {/* MAIN CONTENT */}
      <div className="container mx-auto flex flex-col items-center justify-center flex-grow py-12">
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Contact Me
        </h2>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full mx-auto items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaPaperPlane className="text-purple-500 text-2xl" />
              <a
                href="mailto:sujitsakore33@gmail.com"
                className="text-lg hover:text-purple-400 transition"
              >
                sujitsakore33@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <FaPhone className="text-purple-500 text-2xl" />
              <a
                href="tel:7020464564"
                className="text-lg hover:text-purple-400 transition"
              >
                7020464564
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                {
                  icon: <FaLinkedin size={22} />,
                  link: "https://linkedin.com/in/sujitsakore",
                },
                {
                  icon: <FaInstagram size={22} />,
                  link: "https://www.instagram.com/sujit_sakore_patil?igsh=MTIxenphdnA3Mzhlag==",
                },
                { icon: <FaGithub size={22} />, link: "https://github.com/SujitSakore" },
                {
                  icon: <FaTwitter size={22} />,
                  link: "https://x.com/Sujit_Sakore?t=LMUqYo7zc2xtq0ZgbHULsA&s=08",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-purple-600 transition shadow-md"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* CV Button */}
            <div className="pt-4">
              <a
                href="https://drive.google.com/file/d/1YT_t1NIkZwXdHzN5TxMzAqpb0dBIRZI4/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 rounded-lg font-semibold shadow-lg transition"
              >
                Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (MAP + DETAILS) */}
          <div className="flex flex-col items-center space-y-6 w-full">
            {/* Map */}
            <div
              className="rounded-2xl overflow-hidden shadow-xl border border-purple-700 transition duration-300 hover:shadow-purple-500/40"
              style={{ width: "80%", height: "300px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d809812.3768456928!2d73.59358703783576!3d19.09436189416828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1756655184889!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

            {/* Location, Time, Status */}
            <div className="flex justify-around items-center text-center w-full">
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-lg font-semibold">Pune, India</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">India Time</p>
                <p className="text-lg font-semibold">{time}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <p className="text-lg font-semibold text-green-400 animate-pulse">
                  Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MESSAGE BUTTON + FORM */}
        <div className="text-center mt-10 w-full">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-8 py-3 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-purple-600 hover:to-indigo-600 rounded-full font-semibold transition shadow-lg"
          >
            📩 Send a Message / Query
          </button>

          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-6"
              >
                <div className="max-w-lg mx-auto bg-gray-900 rounded-2xl shadow-lg border border-purple-700 hover:shadow-purple-500/40 transition">
                  <form
                    className="space-y-4 p-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.target;
                      const formData = new FormData(form);

                      try {
                        await fetch(
                          "https://script.google.com/macros/s/AKfycbwy-jziBIQ1pXMix92Kh75IwdumTI2zTsHCxoTXbhazgEMivYyg6XNF2cQsje7DPj6Hug/exec",
                          {
                            method: "POST",
                            mode: "no-cors",
                            body: formData,
                          }
                        );
                        alert("✅ Message sent successfully!");
                        form.reset();
                      } catch (err) {
                        console.error(err);
                        alert("❌ Failed to send message.");
                      }
                    }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                    <textarea
                      name="message"
                      placeholder="Write your message..."
                      rows="4"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 rounded-lg font-semibold transition"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-50 text-sm">
        Thank you, from Sujit ❤️
      </footer>
    </section>
  );
};

export default ContactSection;
