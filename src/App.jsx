import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./pages/Home";
import Transportation from "./pages/Transportation";
import Lodging from "./pages/Lodging";
import Food from "./pages/Food";
import FAQ from "./pages/FAQ";
import Entertainment from "./pages/Entertainment";
import Booking from "./pages/Booking";
import "./styles.css";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
