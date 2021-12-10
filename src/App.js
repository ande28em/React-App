import "./App.css";
import { GuestList } from "./GuestList.js";
import { Route, Routes } from "react-router";
import { AddGuest } from "./AddGuest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GuestList />} />
        <Route path="/add" element={<AddGuest />} />
      </Routes>
    </div>
  );
}

export default App;
