import { useState } from "react";
import axios from "axios";
import { usePrediction } from "../context/PredictionContext";

function Detect() {
  const { addPrediction } = usePrediction();

  const initialForm = {
    username: "",
    "profile pic": 1,
    "nums/length username": 0.10,
    "fullname words": 2,
    "nums/length fullname": 0,
    "name==username": 0,
    "description length": 50,
    "external URL": 0,
    private: 0,
    "#posts": 100,
    "#followers": 500,
    "#follows": 300,
  };

  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setFormData({
        ...formData,
        username: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: Number(value),
      });
    }
  };

  const resetForm = () => {
    setFormData(initialForm);
    setResult(null);
  };

  const handleSubmit = async (e) => {
    console.log("About to send request");
    e.preventDefault();

    setLoading(true);
    setResult(null);

    try {
      const requestData = { ...formData };
      delete requestData.username;

      const res = await axios.post(
        "https://prospy-fake-account-detector.onrender.com/predict",
        requestData
      );

      setResult(res.data);

      const confidence =
        res.data.prediction === "Fake"
          ? (res.data.confidence * 100).toFixed(2)
          : ((1 - res.data.confidence) * 100).toFixed(2);

      addPrediction({
        username:
          formData.username.trim() === ""
            ? "Unknown"
            : formData.username,
        prediction: res.data.prediction,
        confidence,
      });
    } catch (err) {
      console.error(err);
      alert("Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  };

  const confidence =
    result?.prediction === "Fake"
      ? result?.confidence * 100
      : (1 - (result?.confidence || 0)) * 100;

  const riskLevel =
    confidence >= 80
      ? "🔴 High Risk"
      : confidence >= 50
      ? "🟡 Medium Risk"
      : "🟢 Low Risk";

  return (
    <div className="min-h-screen bg-[#020617] text-white py-10 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-cyan-400">
          AI Fake Instagram Account Detection
        </h1>

        <p className="text-center text-gray-400 mt-3 mb-10">
          Fill all account details below and let our AI model determine
          whether the Instagram profile is Genuine or Fake.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-2 gap-8"
        >          {/* ================= Account Information ================= */}

          <div className="bg-slate-900 rounded-2xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              👤 Account Information
            </h2>

            {/* Username */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Instagram Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="e.g. john_doe"
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              />

              <p className="text-sm text-gray-400 mt-2">
                This is only stored in prediction history.
              </p>
            </div>

            {/* Profile Picture */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Profile Picture
              </label>

              <select
                name="profile pic"
                value={formData["profile pic"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              >
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* Username Randomness */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Username Randomness
              </label>

              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                name="nums/length username"
                value={formData["nums/length username"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              />

              <p className="text-sm text-gray-400 mt-2">
                Higher values indicate more random usernames.
              </p>
            </div>

            {/* Fullname Words */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Number of Words in Full Name
              </label>

              <input
                type="number"
                min="0"
                name="fullname words"
                value={formData["fullname words"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              />
            </div>

            {/* Fullname Randomness */}

            <div>
              <label className="block mb-2 font-semibold">
                Fullname Randomness
              </label>

              <input
                type="number"
                min="0"
                max="1"
                step="0.01"
                name="nums/length fullname"
                value={formData["nums/length fullname"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              />

              <p className="text-sm text-gray-400 mt-2">
                Higher values indicate random-looking full names.
              </p>
            </div>

          </div>          {/* ================= Security & Privacy ================= */}

          <div className="bg-slate-900 rounded-2xl p-6 shadow-xl">

            <h2 className="text-2xl font-bold text-cyan-400 mb-6">
              🔒 Security & Privacy
            </h2>

            {/* Name Equals Username */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Name Equals Username
              </label>

              <select
                name="name==username"
                value={formData["name==username"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              >
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* External URL */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                External URL
              </label>

              <select
                name="external URL"
                value={formData["external URL"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              >
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* Private Account */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Private Account
              </label>

              <select
                name="private"
                value={formData.private}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              >
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* Description Length */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Description Length
              </label>

              <input
                type="number"
                min="0"
                name="description length"
                value={formData["description length"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              />
            </div>

            {/* Posts */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Total Posts
              </label>

              <input
                type="number"
                min="0"
                name="#posts"
                value={formData["#posts"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              />
            </div>

            {/* Followers */}

            <div className="mb-5">
              <label className="block mb-2 font-semibold">
                Followers
              </label>

              <input
                type="number"
                min="0"
                name="#followers"
                value={formData["#followers"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              />
            </div>

            {/* Following */}

            <div className="mb-6">
              <label className="block mb-2 font-semibold">
                Following
              </label>

              <input
                type="number"
                min="0"
                name="#follows"
                value={formData["#follows"]}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-500 outline-none"
              />
            </div>

            {/* Submit Button */}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl text-lg font-bold transition ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600"
              }`}
            >
              {loading
                ? "🔍 Analyzing..."
                : "🚀 Predict Account"}
            </button>

          </div>

        </form>        {/* ================= Prediction Result ================= */}

        {result && (
          <div className="max-w-5xl mx-auto mt-12">

            <div className="bg-slate-900 border border-cyan-500 rounded-2xl shadow-2xl p-8">

              <h2 className="text-3xl font-bold text-center mb-8">
                🤖 AI Prediction Result
              </h2>

              <div className="text-center">

                <h1
                  className={`text-5xl font-extrabold mb-6 ${
                    result.prediction === "Fake"
                      ? "text-red-500"
                      : "text-green-400"
                  }`}
                >
                  {result.prediction === "Fake"
                    ? "🚨 Fake Account"
                    : "✅ Genuine Account"}
                </h1>

                <div className="grid md:grid-cols-3 gap-6">

                  <div className="bg-slate-800 rounded-xl p-6">

                    <h3 className="text-3xl font-bold text-cyan-400">
                      {confidence.toFixed(2)}%
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Confidence
                    </p>

                  </div>

                  <div className="bg-slate-800 rounded-xl p-6">

                    <h3 className="text-3xl font-bold text-yellow-400">
                      {riskLevel}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Risk Level
                    </p>

                  </div>

                  <div className="bg-slate-800 rounded-xl p-6">

                    <h3 className="text-3xl font-bold text-green-400">
                      AI
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Machine Learning Model
                    </p>

                  </div>

                </div>

                {/* Progress Bar */}

                <div className="mt-10">

                  <div className="flex justify-between text-sm mb-2">

                    <span>Confidence</span>

                    <span>{confidence.toFixed(2)}%</span>

                  </div>

                  <div className="w-full h-5 rounded-full bg-slate-700 overflow-hidden">

                    <div
                      className={`h-full transition-all duration-1000 ${
                        result.prediction === "Fake"
                          ? "bg-red-500"
                          : "bg-green-500"
                      }`}
                      style={{
                        width: `${confidence}%`,
                      }}
                    />

                  </div>

                </div>

                {/* AI Summary */}

                <div className="mt-10 bg-slate-800 rounded-xl p-6 text-left">

                  <h3 className="text-xl font-bold text-cyan-400 mb-4">
                    AI Summary
                  </h3>

                  <p className="leading-7 text-gray-300">

                    {result.prediction === "Fake"
                      ? "The AI model detected multiple suspicious characteristics in this Instagram account. Based on the supplied profile features, this account appears likely to be fake or automated. Manual verification is still recommended before making any final decision."
                      : "The AI model found characteristics that are generally associated with genuine Instagram accounts. The supplied profile information appears authentic, although manual verification is always recommended for complete assurance."}

                  </p>

                </div>
                                {/* Action Buttons */}

                <div className="grid md:grid-cols-2 gap-5 mt-10">

                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-700 hover:bg-gray-800 transition py-4 rounded-xl font-bold text-lg"
                  >
                    🔄 Reset Form
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="bg-cyan-600 hover:bg-cyan-700 transition py-4 rounded-xl font-bold text-lg"
                  >
                    🔍 Analyze Another Account
                  </button>

                </div>

              </div>

            </div>

          </div>
        )}

      </div>

      {/* Footer */}

      <footer className="mt-16 border-t border-slate-800 py-6 text-center text-gray-400">

        <h3 className="text-lg font-semibold text-cyan-400">
          ProSpy
        </h3>

        <p className="mt-2">
          AI Powered Fake Instagram Account Detection
        </p>

        <p className="mt-2 text-sm">
          Built with React • Flask • Machine Learning
        </p>

        <p className="mt-3 text-sm">
          Developed by <span className="text-cyan-400 font-semibold">Parth Goyal</span> &
          <span className="text-cyan-400 font-semibold"> Archi Sharma</span>
        </p>

      </footer>

    </div>
  );
}

export default Detect;
