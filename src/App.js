import "./App.css";
import { GuestList } from "./GuestList.js";
import { Route, Routes } from "react-router";
import { UpdateGuest } from "./UpdateGuest.js";
import { Print } from "./PrintList.js"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GuestList />} />
        <Route path="/update/:id" element={<UpdateGuest />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </div>
  );
}

export default App;
