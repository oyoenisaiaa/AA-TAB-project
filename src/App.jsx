import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AiPage from './pages/AiPage';
import LogIn from './pages/LogIn';
import PasswordResetForm from './pages/ResetPassword';
import SignUp from './pages/SignUp';
import './App.css';
import Relax from './pages/Relax';
import Mindfulness from './pages/Mindfulness';
import Stretch from './pages/Stretch';
import Contact from './pages/Contact';
import Team from './pages/Team';
import FAQs from './components/FAQs';
import ErrorPage from './pages/ErrorPage';


const App = () => {
  const [firstName, setFirstName] = useState(null);

  return (
    <Router>
      <Layout firstName={firstName} setFirstName={setFirstName}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aipage" element={<AiPage />} />
          <Route path="/login" element={<LogIn setFirstName={setFirstName} />} />
          <Route path="/password-reset" element={<PasswordResetForm />} />
          <Route path="/signup" element={<SignUp setFirstName={setFirstName} />} />
          <Route path="/reset-password/:token" element={<PasswordResetForm />} />
          <Route path="/relax" element={<Relax />} />
          <Route path="/mindfulness" element={<Mindfulness />} />
          <Route path="/stretch" element={<Stretch />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/shop" element={<ErrorPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;





  






