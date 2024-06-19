"use client";

import { useState } from "react";

const JokeGenerator = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Failed to fetch a joke. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="joke-container bg-white p-6 rounded-lg shadow-md max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Random Joke Generator By Subham
      </h1>
      <button
        onClick={fetchJoke}
        className="bg-blue-500 text-white p-3 rounded-lg w-full mb-4 hover:bg-blue-600 transition-colors"
      >
        {loading ? "Loading..." : "Get a Random Joke"}
      </button>
      {joke && <p className="text-lg text-gray-700">{joke}</p>}
    </div>
  );
};

export default JokeGenerator;
