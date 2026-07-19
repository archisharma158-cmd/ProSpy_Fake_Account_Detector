function About() {
  const features = [
    "AI-Powered Fake Account Detection",
    "Machine Learning Prediction",
    "Real-time Analysis",
    "Prediction Dashboard",
    "Interactive Charts",
    "Confidence Score",
    "Prediction History",
    "Responsive Design",
  ];

  const technologies = [
    "React.js",
    "Flask",
    "Python",
    "Scikit-learn",
    "Tailwind CSS",
    "Axios",
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-12">

      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-cyan-400">
          About ProSpy
        </h1>

        <p className="text-gray-300 mt-5 max-w-3xl mx-auto text-lg">
          ProSpy is an AI-powered web application that detects fake Instagram
          accounts using Machine Learning. The system analyzes multiple profile
          characteristics and predicts whether an account is Genuine or Fake
          with a confidence score.
        </p>
      </div>

      {/* Project Objective */}
      <div className="max-w-6xl mx-auto mt-14">
        <div className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">
            Project Objective
          </h2>

          <p className="text-gray-300 leading-8">
            The objective of ProSpy is to help identify fake Instagram profiles
            using Artificial Intelligence and Machine Learning. Detecting fake
            accounts helps reduce scams, spam, impersonation, and other cyber
            threats on social media platforms.
          </p>
        </div>
      </div>

      {/* Features & Technologies */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-12">

        {/* Features */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Key Features
          </h2>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="text-gray-300">
                ✅ {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-cyan-500">
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Technologies Used
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg p-4 text-center hover:bg-cyan-600 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Developers */}
      <div className="max-w-6xl mx-auto mt-14">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          Meet the Developers
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Archi */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-cyan-500 shadow-lg text-center hover:scale-105 transition duration-300">

            <div className="text-6xl mb-4">👩‍💻</div>

            <h3 className="text-2xl font-bold">
              Archi Sharma
            </h3>

            <p className="text-cyan-400 mt-2">
              B.Tech – Artificial Intelligence
            </p>

            <p className="text-gray-400">
              Quantum University
            </p>

            <p className="text-gray-300 mt-5 leading-7">
              Passionate about Artificial Intelligence and Machine Learning,
              building intelligent solutions for real-world challenges.
            </p>

          </div>

          {/* Parth */}
          <div className="bg-slate-900 rounded-2xl p-8 border border-cyan-500 shadow-lg text-center hover:scale-105 transition duration-300">

            <div className="text-6xl mb-4">👨‍💻</div>

            <h3 className="text-2xl font-bold">
              Parth Goyal
            </h3>

            <p className="text-cyan-400 mt-2">
              B.Tech – Cyber Security
            </p>

            <p className="text-gray-400">
              Quantum University
            </p>

            <p className="text-gray-300 mt-5 leading-7">
              Passionate about Cyber Security, Artificial Intelligence, and
              developing secure AI-powered applications for modern cyber
              challenges.
            </p>

          </div>

        </div>

        {/* Collaboration */}
        <div className="bg-slate-900 rounded-2xl p-8 border border-cyan-500 shadow-lg mt-10">

          <h2 className="text-3xl font-bold text-cyan-400 text-center mb-5">
            Collaboration
          </h2>

          <p className="text-gray-300 text-center leading-8 max-w-4xl mx-auto">
            ProSpy is a collaborative project developed by <strong>Archi Sharma</strong> and <strong>Parth Goyal</strong>. The project combines Artificial Intelligence, Machine Learning, and modern web technologies to detect fake Instagram accounts with high accuracy while providing an interactive and user-friendly experience.
          </p>

        </div>

      </div>

    </div>
  );
}

export default About;