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
          <Route path="/Food" element={<Food />} />
          <Route path="/Transportation" element={<Transportation />} />
          <Route path="/Lodging" element={<Lodging />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
