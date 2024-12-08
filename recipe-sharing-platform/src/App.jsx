function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to the Recipe Sharing Platform!</h1>
    </div>
  );
}

import React from "react";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default App
