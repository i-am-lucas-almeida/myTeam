import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ScrollToTop from './components/layouts/ScrollToTop';

import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import './styles/App.css';
import './styles/Home.css';
import './styles/Contact.css';

function App() {

  return (
    
    <div>

      <Router>

        <ScrollToTop />

        <NavBar/>

        <Routes>

          <Route path='/' element={<Home/>} />

          <Route path='/sobre' element={<About/>} />

          <Route path='/contato' element={<Contact/>} />

        </Routes>

        <Footer/>

      </Router>

    </div>

  );

}

export default App;
