import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";



function App() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      
      <Footer/>

    </div>
  )
}

export default App
