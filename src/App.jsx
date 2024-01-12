import './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Components/Header/Header'
import Home from './Components/Homepage';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
       <Router>
    <Header/>
       <Routes>
       <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Development" element={<Development />} />
      <Route path="/BPO" element={<BPOsection />} /> */}
      </Routes>
      <Footer/> 
    </Router>
    </div>
  )
}

export default App
