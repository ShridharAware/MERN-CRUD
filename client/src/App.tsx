import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Update from "./pages/Update";
import Home from "./pages/Home";
import Users from "./components/Users";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/:id" element={<Update />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
