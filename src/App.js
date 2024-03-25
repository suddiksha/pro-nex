import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import B1 from "./components/b1";
import B2 from "./components/b2";
import Product from "./components/product-page/product";
import Nav from "./components/navbar/nav";
import Contact from "./components/contact-us/contact";
import About from "./components/about-us/about";
import Market from "./components/market-page/market";
import Cap from "./components/capability/cap";
import Con from "./components/contact-page/cont";
import Land from "./components/landing -page/land";
import "./App.css";
function App() {
  return (
   <>
   <div className="nex">
    <Nav/>
   <Router>
        <Routes>
          <Route
            path="/"
            element={
          <>
 <Land/>
  
                
              </>
            }
          />
          <Route path="/product" element={<Product/>} />
          <Route path="/market" element={<Market/>} />


          <Route path="/about" element={<About />} />
          <Route path="/cap" element={<Cap/>} />
          <Route path="/con" element={<Con/>} />


        </Routes>
      </Router>
   </div>
   </>
  );
}

export default App;
