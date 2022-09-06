import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import './App.css'
import Footer from "./Footer";
import About from "./about";
import Consult from "./consult";
import Duhpsy from "./duhpsy";
import Subpsy from "./subpsy";
import Taro from './Taro'
import Contact from "./contact";
import Webinars from "./Webinars";
import {Route, Routes} from "react-router-dom";



function App() {
  return (

    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/subpsy" element={<Subpsy />} />
          <Route path="/taro" element={<Taro />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/duhpsy" element={<Duhpsy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/webinars" element={<Webinars />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
