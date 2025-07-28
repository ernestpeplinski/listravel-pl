

import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import Calendar from './sections/Calendar';
import Contact from './sections/Contact';
import NotFound from './sections/NotFound';
import About from './sections/about';


const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kalendarz" element={<Calendar />} />
            <Route path="/o-nas" element={<About />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
