import ContactPage from "./components/contactPage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewProducts />
      <Testimonials />
      <ContactPage />
      <Footer />
    </>
  );
}

export default App;
