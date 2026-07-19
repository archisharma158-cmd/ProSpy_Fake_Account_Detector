import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-cyan-400">
          Contact Us
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          We'd love to hear from you. Feel free to connect with the ProSpy team.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Information */}
        <div className="bg-slate-900 rounded-2xl border border-cyan-500 p-8 shadow-lg">

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Contact Information
          </h2>

          <div className="space-y-6">

            {/* Project */}
            <div>
              <h3 className="text-xl font-semibold">📧 Project Email</h3>
              <p className="text-gray-300">
                prospy793@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">📍 Location</h3>
              <p className="text-gray-300">
                Quantum University, Roorkee, Uttarakhand
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">🏫 University</h3>
              <p className="text-gray-300">
                Quantum University
              </p>
            </div>

            {/* Developer 1 */}
            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-2xl font-bold text-cyan-400">
                👩‍💻 Archi Sharma
              </h3>

              <p className="text-gray-300">
                B.Tech – Artificial Intelligence
              </p>

              <p className="text-gray-400 mt-2">
                📧 archisharma158@gmail.com
              </p>

              <a
                href="https://www.linkedin.com/in/archi-sharma-05a3a2371"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-cyan-300 hover:text-cyan-500"
              >
                🔗 LinkedIn Profile
              </a>

              <a
                href="https://github.com/archisharma158-cmd"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-cyan-300 hover:text-cyan-500"
              >
                💻 GitHub Profile
              </a>
            </div>

            {/* Developer 2 */}
            <div className="border-t border-slate-700 pt-6">
              <h3 className="text-2xl font-bold text-cyan-400">
                👨‍💻 Parth Goyal
              </h3>

              <p className="text-gray-300">
                B.Tech – Cyber Security
              </p>

              <p className="text-gray-400 mt-2">
                📧 goyalparth61@gmail.com
              </p>

              <a
                href="https://www.linkedin.com/in/parth-goyal-215231385"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-cyan-300 hover:text-cyan-500"
              >
                🔗 LinkedIn Profile
              </a>

              <a
                href="https://github.com/goyalparth61-netizen"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-cyan-300 hover:text-cyan-500"
              >
                💻 GitHub Profile
              </a>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-slate-900 rounded-2xl border border-cyan-500 p-8 shadow-lg">

          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-slate-800 outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-slate-800 outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-slate-800 outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-slate-800 outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 p-4 rounded-lg text-lg font-bold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-16 border-t border-slate-700 pt-6 text-center text-gray-400">

        <p className="text-lg">
          © 2026 <span className="text-cyan-400 font-semibold">ProSpy</span> —
          AI Powered Fake Instagram Account Detection
        </p>

        <p className="mt-2">
          Developed by{" "}
          <span className="text-cyan-400 font-semibold">
            Archi Sharma
          </span>{" "}
          &{" "}
          <span className="text-cyan-400 font-semibold">
            Parth Goyal
          </span>
        </p>

      </div>

    </div>
  );
}

export default Contact;