import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScrollWrapper from './SmoothScrollWrapper';
import Design from './Design';
import Home from './Home';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
   
      <SmoothScrollWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </SmoothScrollWrapper>
    </Router>
  );
};

export default App;
