import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Anasayfa</Link> |{" "}
        <Link to="/hakkinda">Hakkında</Link> |{" "}
        <Link to="/iletisim">İletişim</Link>
      </nav>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="hakkinda" element={<About />} />
      <Route path="iletisim" element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
