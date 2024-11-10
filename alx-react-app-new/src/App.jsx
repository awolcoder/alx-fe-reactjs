// PREVIOS CODE OF App.jsx

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


// function App() {
//   const [count, setCount] = useState(0)


//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// export default App



// Task 1
// src/App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; // Ensure this line is added

function App() {
    return (
        <div>
            <WelcomeMessage /> {/* Ensure this component is included here */}
        </div>
    );
}



// Task 2
// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}




// Task 3
// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <Footer />
        </div>
    );
}


// Styling, States, Rendering, Routes and Hooks task 1
// src/App.jsx
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Counter Application</h1>
      <Counter />
    </div>
  );
}

export default App;
