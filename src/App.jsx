import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Consulting from "./pages/consulting";
import Aicouch from "./pages/aicoach";
import Home from "./pages/home";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/aicoach" element={<Aicouch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
