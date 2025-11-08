import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";



function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      
      <Footer/>

    </div>
  )
}

export default App
