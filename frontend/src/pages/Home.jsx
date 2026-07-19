import { Link } from "react-router-dom";
import { FaShieldAlt, FaRobot, FaSearch } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-between">

        <div className="max-w-xl">

          <h1 className="text-6xl font-extrabold leading-tight">
            AI Powered
            <span className="text-cyan-400"> Fake Profile </span>
            Detection
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            ProSpy helps identify fake social media accounts using
            Artificial Intelligence and Machine Learning.
          </p>

          <Link
            to="/detect"
            className="inline-block mt-8 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-lg font-semibold"
          >
            Start Detection 🚀
          </Link>

        </div>

        <div className="mt-16 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="AI"
            className="w-96"
          />
        </div>

      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 pb-24 px-8">

        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-xl">
          <FaRobot className="text-5xl text-cyan-400 mx-auto mb-4"/>
          <h2 className="text-2xl font-bold">AI Prediction</h2>
          <p className="mt-3 text-gray-400">
            Predict fake profiles with Machine Learning.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-xl">
          <FaShieldAlt className="text-5xl text-cyan-400 mx-auto mb-4"/>
          <h2 className="text-2xl font-bold">Secure</h2>
          <p className="mt-3 text-gray-400">
            Built for Cyber Security research.
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-xl">
          <FaSearch className="text-5xl text-cyan-400 mx-auto mb-4"/>
          <h2 className="text-2xl font-bold">Fast Detection</h2>
          <p className="mt-3 text-gray-400">
            Instant prediction with confidence score.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;