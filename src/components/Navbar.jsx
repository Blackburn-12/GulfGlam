import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.5; // 50vh

      if (window.scrollY > scrollThreshold) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 font-Montserrat border-b border-black z-50 transition-colors duration-300 ${
        hasScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div>
        <img src="/images/GulfGlam.png" alt="Logo" className="h-14" />
      </div>

      {/* Navigation Links */}
      <ul className="hidden lg:flex space-x-5 text-lg font-medium">
        <li>
          <a
            href="#home"
            className="hover:text-[#90664e]"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);

              const targetSection = document.getElementById("home");
              if (targetSection) {
                window.scrollTo({
                  top: targetSection.offsetTop - 80, // Adjust offset to match navbar height
                  behavior: "smooth",
                });
              }
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#new-products"
            className="hover:text-[#90664e]"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);

              const targetSection = document.getElementById("new-products");
              if (targetSection) {
                window.scrollTo({
                  top: targetSection.offsetTop - 80, // Adjust offset to match navbar height
                  behavior: "smooth",
                });
              }
            }}
          >
            Our Products
          </a>
        </li>

        <li>
          <a
            href="https://www.trendyol.com/en/store/gulf-glam-m-1146223?sst=0"
            target="_blank"
            className="hover:text-[#90664e]"
          >
            Trendyol
          </a>
        </li>
        <li>
          <a
            href="https://www.noon.com/uae-en/p-214570/?utm_source=C1000207L&utm_medium=referral"
            target="_blank"
            className="hover:text-[#90664e]"
          >
            Noon
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-[#90664e]"
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(false);

              const targetSection = document.getElementById("contact");
              if (targetSection) {
                window.scrollTo({
                  top: targetSection.offsetTop - 80, // Adjust offset to match navbar height
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Phone Icon with Number */}
      <div className="hidden lg:flex items-center space-x-2">
        <FiPhone size={24} />
        <span className="text-lg font-medium">+971 50 705 5487</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6"
        >
          <FiX size={30} />
        </button>
        <ul className="text-xl space-y-6 text-center">
          <li>
            <a
              href="#home"
              className="hover:text-[#90664e]"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);

                const targetSection = document.getElementById("home");
                if (targetSection) {
                  window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust offset to match navbar height
                    behavior: "smooth",
                  });
                }
              }}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#new-products"
              className="hover:text-[#90664e]"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);

                const targetSection = document.getElementById("new-products");
                if (targetSection) {
                  window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust offset to match navbar height
                    behavior: "smooth",
                  });
                }
              }}
            >
              Our Products
            </a>
          </li>
          <li>
            <a
              href="https://www.trendyol.com/en/store/gulf-glam-m-1146223?sst=0"
              target="_blank"
              className="hover:text-[#90664e]"
              onClick={() => setIsOpen(false)}
            >
              Trendyol
            </a>
          </li>
          <li>
            <a
              href="https://www.noon.com/uae-en/p-214570/?utm_source=C1000207L&utm_medium=referral"
              target="_blank"
              className="hover:text-[#90664e]"
            >
              Noon
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#90664e]"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);

                const targetSection = document.getElementById("contact");
                if (targetSection) {
                  window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust offset to match navbar height
                    behavior: "smooth",
                  });
                }
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
