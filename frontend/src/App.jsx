import Footer from "./components/Footer";
import Hero from "./components/Home/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Home/>
      <Footer/>
    </div>
  )
}