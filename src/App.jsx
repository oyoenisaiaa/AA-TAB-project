import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AiPage from './pages/AiPage';
// import Services from './pages/Services';
import ErrorPage from './pages/ErrorPage';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import './App.css';
import Relax from './pages/Relax';
import Mindfulness from './pages/Mindfulness';
import Stretch from './pages/Stretch';
import Contact from './pages/Contact';


const App = () => {
  const [firstName, setFirstName] = useState(null);

  return (
    <Router>
      <Layout firstName={firstName} setFirstName={setFirstName}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aipage" element={<AiPage />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path="/shop" element={<ErrorPage />} /> */}
          <Route path="/login" element={<LogIn setFirstName={setFirstName} />} />
          <Route path="/signup" element={<SignUp setFirstName={setFirstName} />} />
          <Route path="/relax" element={<Relax />} />
          <Route path="/mindfulness" element={<Mindfulness />} />
          <Route path="/stretch" element={<Stretch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Alert from './components/Alert'
// import HomePage from './components/HomePage';
// import Features from './pages/Features';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import ErrorPage from './pages/ErrorPage';
// import NavBar from './components/NavBar';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Alert message="Reminder to Take a Break! Check out our features to learn more!" />
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



