import Footer from "./ui/Footer";
import Hero from "./ui/Hero";
import HomePage from "./ui/HomePage";
import Navbar from "./ui/Navbar";
import Technologies from "./ui/Technologies";

import "/src/styles/App.css";

function App() {
  return (
    <HomePage>
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />
    </HomePage>
  );
}

export default App;
