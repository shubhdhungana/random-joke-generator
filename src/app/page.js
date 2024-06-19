"use client";

import JokeGenerator from "@/components/JokeGenerator";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <JokeGenerator />
    </div>
  );
}
