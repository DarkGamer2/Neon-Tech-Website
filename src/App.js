import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import PremiumToolkit from "./Pages/PremiumToolkit";
import AcerNitroMontior from "./Pages/AcerNitroMontior";
import AMDRyzen from "./Pages/AMDRyzen.jsx";
import GTATril from "./Pages/GTATril";
import Kingston from "./Pages/Kingston";
import MountainDew from "./Pages/MountainDew";
import Cart from "./Pages/Cart";
import CreateListing from "./Pages/CreateListing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/toolkit" element={<PremiumToolkit />} />
        <Route path="/acermonitor" element={<AcerNitroMontior/>}/>
        <Route path="/amdryzen" element={<AMDRyzen/>} />
        <Route path="/GTAtril" element={<GTATril/>} />
        <Route path="/kingston" element={<Kingston/>} />
        <Route path="/mountaindew" element={<MountainDew/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="createListing" element={<CreateListing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
