import ContactPage from "./components/contactPage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsApp"; // Import WhatsApp button

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewProducts />
      <Testimonials />
      <ContactPage />
      <Footer />
      <WhatsAppButton /> {/* Add WhatsApp button here */}
    </>
  );
}

export default App;
