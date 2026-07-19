import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { usePrediction } from "../context/PredictionContext";
import { useState } from "react";

const COLORS = ["#ef4444", "#22c55e"];

function Dashboard() {
  const { history, clearHistory } = usePrediction();

  const [search, setSearch] = useState("");

  const filteredHistory = history.filter((item) =>
    item.username.toLowerCase().includes(search.toLowerCase())
  );

  const fakeCount = history.filter(
    (item) => item.prediction === "Fake"
  ).length;

  const genuineCount = history.filter(
    (item) => item.prediction === "Genuine"
  ).length;

  const averageConfidence =
    history.length > 0
      ? (
          history.reduce(
            (sum, item) => sum + Number(item.confidence),
            0
          ) / history.length
        ).toFixed(2)
      : 0;

  const pieData = [
    { name: "Fake", value: fakeCount },
    { name: "Genuine", value: genuineCount },
  ];

  const barData = [
    { name: "Fake", Accounts: fakeCount },
    { name: "Genuine", Accounts: genuineCount },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-8">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Dashboard
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

        <input
          type="text"
          placeholder="🔍 Search Username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 p-3 rounded-lg bg-slate-800 border border-cyan-500 outline-none"
        />

        <button
          onClick={clearHistory}
          className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg font-semibold transition"
        >
          🗑 Clear History
        </button>

      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-gray-400">Total Predictions</h2>
          <p className="text-4xl font-bold text-cyan-400 mt-3">
            {history.length}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-gray-400">Fake Accounts</h2>
          <p className="text-4xl font-bold text-red-500 mt-3">
            {fakeCount}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-gray-400">Genuine Accounts</h2>
          <p className="text-4xl font-bold text-green-400 mt-3">
            {genuineCount}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-gray-400">Average Confidence</h2>
          <p className="text-4xl font-bold text-cyan-400 mt-3">
            {averageConfidence}%
          </p>
        </div>

      </div>
            <div className="grid lg:grid-cols-2 gap-8">

        {/* Pie Chart */}
        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

          <h2 className="text-2xl font-bold mb-6">
            Detection Distribution
          </h2>

          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={120}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* Bar Chart */}
        <div className="bg-slate-900 rounded-xl p-6 shadow-lg">

          <h2 className="text-2xl font-bold mb-6">
            Detection Comparison
          </h2>

          <ResponsiveContainer width="100%" height={350}>

            <BarChart data={barData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="Accounts"
                fill="#06b6d4"
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* Bottom Analytics */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-slate-900 rounded-xl p-6 text-center shadow-lg">
          <h2 className="text-cyan-400 text-4xl font-bold">
            95%
          </h2>

          <p className="mt-2 text-gray-400">
            Model Accuracy
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-center shadow-lg">
          <h2 className="text-green-400 text-4xl font-bold">
            0.9s
          </h2>

          <p className="mt-2 text-gray-400">
            Average Prediction Time
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 text-center shadow-lg">
          <h2 className="text-yellow-400 text-4xl font-bold">
            AI
          </h2>

          <p className="mt-2 text-gray-400">
            Powered Detection
          </p>
        </div>

      </div>

      {/* Prediction History */}

      <div className="bg-slate-900 rounded-xl p-6 mt-10 shadow-lg">

        <h2 className="text-2xl font-bold mb-6">
          Recent Predictions
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="border-b border-slate-700">

              <tr>
                <th className="py-3">Username</th>
                <th className="py-3">Prediction</th>
                <th className="py-3">Confidence</th>
                <th className="py-3">Time</th>
              </tr>

            </thead>

            <tbody>              {filteredHistory.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-400"
                  >
                    No predictions found.
                  </td>
                </tr>
              ) : (
                filteredHistory.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-slate-800 hover:bg-slate-800 transition"
                  >
                    <td className="py-4 font-medium">
                      {item.username}
                    </td>

                    <td
                      className={
                        item.prediction === "Fake"
                          ? "text-red-500 font-semibold"
                          : "text-green-400 font-semibold"
                      }
                    >
                      {item.prediction}
                    </td>

                    <td className="text-cyan-400">
                      {item.confidence}%
                    </td>

                    <td className="text-gray-400">
                      {item.time}
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;