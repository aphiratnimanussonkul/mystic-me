import "./App.css";
import TarotCardPicker from "./pages/TarotCardPage";
import PhoneNumber from "./pages/PhoneNumber";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/mystic-me">
      <Routes>
        <Route path="/phone" element={<PhoneNumber />} />
        <Route path="/tarot" element={<TarotCardPicker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
