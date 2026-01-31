import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DoctorDetails from "./pages/DoctorDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:specId/1" element={<DoctorDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
