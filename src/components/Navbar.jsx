import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

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
          <a href="#home" className="hover:text-[#90664e]">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#90664e]">
            About Us
          </a>
        </li>
        <li>
          <a href="#products" className="hover:text-[#90664e]">
            Our Products
          </a>
        </li>
        <li>
          <a href="#amazon" target="_blank" className="hover:text-[#90664e]">
            Amazon
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
      </ul>

      {/* Phone Icon with Number */}
      <div className="hidden lg:flex items-center space-x-2">
        <FiPhone size={24} />
        <span className="text-lg font-medium">+123 456 7890</span>
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
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#products" onClick={() => setIsOpen(false)}>
              Our Products
            </a>
          </li>
          <li>
            <a href="#amazon" onClick={() => setIsOpen(false)}>
              Amazon
            </a>
          </li>
          <li>
            <a href="#noon" onClick={() => setIsOpen(false)}>
              Noon
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
