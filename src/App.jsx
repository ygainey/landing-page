import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import QRSection from "./components/QRSection.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <About />
      <QRSection />
      <Footer />
    </div>
  );
}

export default App;

