import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
