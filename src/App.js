import "./App.css";
import { GuestList } from "./GuestList.js";
import { Route, Routes } from "react-router";
import { AddGuest } from "./AddGuest";
import { RemoveGuest } from "./RemoveGuest";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GuestList />} />
        <Route path="/add" element={<AddGuest />} />
        <Route path="/remove" element={<RemoveGuest />} />
      </Routes>
    </div>
  );
}

export default App;
