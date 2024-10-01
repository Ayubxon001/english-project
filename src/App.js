import { Button, TextInput } from "flowbite-react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
