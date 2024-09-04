import "./App.css";
import AddProperty from "./components/addproperty/AddProperty";
import Booking from "./components/booking/Booking";
import Login from "./components/login/Login";
import Menu from "./components/navbar/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/book-slot" element={<Booking />}></Route>
        <Route path="/login-page" element={<Login />}></Route>
        <Route path="/add-property" element={<AddProperty />}></Route>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="*" element={<h1>404 ! Not Found</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
