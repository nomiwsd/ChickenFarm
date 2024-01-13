import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Homepage';
import Footer from './Components/Footer/Footer';
import AboutUspage from './Components/AboutUsPage/AboutUspage';
import Servicespage from './Components/ServicesPage/Servicespage';
import ContactusPage from './Components/ContactUspage/ContactusPage';

function App() {
  
  return (
    <div className="App">
       <Router>
    <Header/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<AboutUspage />} />
       <Route path="/service" element={<Servicespage />} />
       <Route path="/contactus" element={<ContactusPage />} />
     
      </Routes>
      <Footer/> 
    </Router>
    </div>
  )
}

export default App
