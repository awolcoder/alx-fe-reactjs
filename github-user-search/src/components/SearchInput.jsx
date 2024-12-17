import React from "react";

const SearchInput = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        style={{
          padding: "8px",
          margin: "10px 0",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "100%",
        }}
      />
      <button
        style={{
          padding: "8px 16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
