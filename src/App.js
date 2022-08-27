import { Route, Routes } from 'react-router-dom';
import './App.css';
import Facebook from './component/Facebook/Facebook';
import Home from './component/Home/Home';
import Instagram from './component/Instagram/Instagram';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/facebook" element={<Facebook />} />
    <Route path="/instagram" element={<Instagram />} />
    </Routes>
  );
}

export default App;
