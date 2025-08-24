import { useState, useRef, useEffect } from "react";
import ContactPage from "./components/contactPage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsApp";
import LearnMore from "./components/LearnMore";

function App() {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const learnMoreRef = useRef(null);
  const heroRef = useRef(null);

  // Scroll to LearnMore when it opens
  useEffect(() => {
    if (showLearnMore) {
      learnMoreRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showLearnMore]);

  return (
    <>
      <Navbar />
      <div ref={heroRef}>
        <Hero onLearnMore={() => setShowLearnMore(true)} />
      </div>

      {showLearnMore && (
        <div ref={learnMoreRef}>
          <LearnMore
            onClose={() => {
              setShowLearnMore(false);
              // Scroll back to Hero after closing
              setTimeout(() => {
                heroRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }, 300); // small delay so UI feels smooth
            }}
          />
        </div>
      )}

      <NewProducts />
      <Testimonials />
      <ContactPage />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;

// import { useState } from "react";
// import ContactPage from "./components/contactPage";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import NewProducts from "./components/NewProducts";
// import Testimonials from "./components/Testimonials";
// import WhatsAppButton from "./components/WhatsApp";
// import LearnMore from "./components/LearnMore";

// function App() {
//   const [showLearnMore, setShowLearnMore] = useState(false);

//   return (
//     <>
//       <Navbar />
//       <Hero onLearnMore={() => setShowLearnMore(true)} />

//       {/* Conditionally render LearnMore */}
//       {showLearnMore && <LearnMore onClose={() => setShowLearnMore(false)} />}

//       <NewProducts />
//       <Testimonials />
//       <ContactPage />
//       <Footer />
//       <WhatsAppButton />
//     </>
//   );
// }

// export default App;
