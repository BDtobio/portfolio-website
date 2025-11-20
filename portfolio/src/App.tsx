
import { Routes, Route , BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';

import Contact from './views/Contact/Contact';
import Hero from './views/Hero/Hero';
import Projects from './views/Projects/Projects';



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
