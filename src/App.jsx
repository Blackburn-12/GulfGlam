import { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ContactPage from "./components/contactPage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsApp";
import LearnMore from "./components/LearnMore";

// Admin Components
import AdminLogin from "./components/admin/AdminLogin";
import AdminSignup from "./components/admin/AdminSignup";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProductManagement from "./components/admin/ProductManagement";
import ProtectedRoute from "./components/admin/ProtectedRoute";

// Main App Component
function MainApp() {
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

// App Component with Routing
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainApp />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          {/* <Route path="/admin/signup" element={<AdminSignup />} /> */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute>
                <ProductManagement />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
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
