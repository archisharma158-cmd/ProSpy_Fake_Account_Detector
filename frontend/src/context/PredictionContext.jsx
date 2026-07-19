import { createContext, useContext, useEffect, useState } from "react";

const PredictionContext = createContext();

export function PredictionProvider({ children }) {
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("predictionHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // Add New Prediction
  const addPrediction = (prediction) => {
    setHistory((prev) => [
      {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        ...prediction,
      },
      ...prev,
    ]);
  };

  // Clear Prediction History
  const clearHistory = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to clear all prediction history?"
    );

    if (confirmDelete) {
      setHistory([]);
      localStorage.removeItem("predictionHistory");
    }
  };

  // Save History to Local Storage
  useEffect(() => {
    localStorage.setItem(
      "predictionHistory",
      JSON.stringify(history)
    );
  }, [history]);

  return (
    <PredictionContext.Provider
      value={{
        history,
        addPrediction,
        clearHistory,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
}

export function usePrediction() {
  return useContext(PredictionContext);
}