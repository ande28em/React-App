import "./App.css";
import { GuestList } from "./GuestList.js";
import { Route, Routes } from "react-router";
import { UpdateGuest } from "./UpdateGuest.js";
import { Print } from "./PrintList.js"
import { useSelector } from "react-redux";

function App() {
  const isWaiting = useSelector((state) => state.isWaiting);
  return (
    <div className="App">
      {isWaiting && <div className="spinner" />}
      <Routes>
        <Route path="/" element={<GuestList />} />
        <Route path="/update/:id" element={<UpdateGuest />} />
        <Route path="/print" element={<Print />} />
      </Routes>
    </div>
  );
}

export default App;
