import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import PrivateRouter from "./components/PrivateRouter.jsx";
import Dashboard from "./pages/Instructor/Dashboard.jsx";



function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route 
          path="/dashboard" 
          element={
            <PrivateRouter>
              <Dashboard/>
            </PrivateRouter>
          }
          
        />


        </Routes>

      <Footer />

    </div>
  )
}

export default App
