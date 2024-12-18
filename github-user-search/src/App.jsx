import React from "react";
import SearchInput from "./components/SearchInput";
import Search from './components/Search';

function App() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
       <h1>GitHub User Search</h1>
      <h2>GitHub User Search Application</h2>
      <p>Start searching for GitHub profiles here!</p>
      <SearchInput />
    </div>
  );
}

export default App;
