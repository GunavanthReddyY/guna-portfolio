import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import UnderConstruction from './pages/UnderConstruction';
import CyberSecurity from './pages/CyberSecurity';
import Automation from './pages/Automation';
import Prompts from './pages/Prompts';
import Events from './pages/Events';
import Contact from './pages/Contact'; // adjust path if needed

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Other pages will be added later; for now, show UnderConstruction */}
                <Route path="/about" element={<About />} />

        <Route path="/cyber" element={<CyberSecurity />} />

        <Route path="/automation" element={<Automation />} />

        <Route path="/prompts" element={<Prompts />} />

        <Route path="/events" element={<Events/>} />
        <Route path="/contact" element={<Contact />} />


        {/* Catch-all */}
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Layout>
  );
}

export default App;
