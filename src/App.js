import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return (

    <div>

      <Router>

        <ScrollToTop />

        <NavBar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/sobre" element={<About />} />

          <Route path="/contato" element={<Contact />} />

        </Routes>

        <Footer />

      </Router>

    </div>

  );

}

export default App;
