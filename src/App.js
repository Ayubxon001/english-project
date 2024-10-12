import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Register from "./Pages/Register";
import Signup from "./Pages/Signup";
import RegisterPassword from "./Pages/RegisterPassword";
import RootLayout from "./layouts/RootLayout";
import Components from "./components/Components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Components />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/password" element={<RegisterPassword />} />
      </Routes>
    </div>
  );
}

export default App;
