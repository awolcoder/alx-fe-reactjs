// import React from "react";
// import SearchInput from "./components/SearchInput";

// function App() {
//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>GitHub User Search Application</h1>
//       <p>Start searching for GitHub profiles here!</p>
//       <SearchInput />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Search from './components/Search';

const App = () => {
    return (
        <div>
            <h1>GitHub User Search</h1>
            <Search />
        </div>
    );
};

export default App;
