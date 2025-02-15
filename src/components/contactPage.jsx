import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
      to_name: "Gulf Glam",
    };

    try {
      await emailjs.send(
        "service_un1mrap",
        "template_knem4at",
        emailData,
        "uMjJD7qchV5Q8wIdR"
      );
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending email", error);
      setError("Failed to send message. Try again later.");
    }
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen  font-Montserrat"
    >
      <div className="max-w-3xl w-full mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl overflow-hidden p-8 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#CA9576]/10 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#CA9576]/10 rounded-tl-full"></div>
          <div className="absolute -left-4 top-1/3 w-12 h-12 bg-[#CA9576]/20 rounded-full"></div>
          <div className="absolute -right-4 bottom-1/3 w-20 h-20 bg-[#CA9576]/15 rounded-full"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-[#CA9576] mb-2 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-center mb-8 text-lg">
              We'd love to hear from you. Send us a message below!
            </p>

            {success && (
              <div className="bg-green-50 text-green-700 p-4 rounded-xl text-center mb-6 flex items-center justify-center gap-2 shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-lg">Message sent successfully!</span>
              </div>
            )}

            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-xl text-center mb-6 flex items-center justify-center gap-2 shadow-sm">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="text-lg">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#CA9576] transition-colors duration-300">
                  <FaUser className="text-lg" />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full pl-12 py-4 px-5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#CA9576] focus:bg-white outline-none transition-all duration-300 shadow-sm group-hover:shadow-md text-lg"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#CA9576] transition-colors duration-300">
                  <FaPhone className="text-lg" />
                </div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone"
                  className="w-full pl-12 py-4 px-5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#CA9576] focus:bg-white outline-none transition-all duration-300 shadow-sm group-hover:shadow-md text-lg"
                  onChange={handleChange}
                  value={formData.phone}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#CA9576] transition-colors duration-300">
                  <FaEnvelope className="text-lg" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full pl-12 py-4 px-5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#CA9576] focus:bg-white outline-none transition-all duration-300 shadow-sm group-hover:shadow-md text-lg"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative group">
                <div className="absolute left-4 top-4 text-gray-400 group-hover:text-[#CA9576] transition-colors duration-300">
                  <FaComment className="text-lg" />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full pl-12 py-4 px-5 bg-gray-50 border-0 rounded-xl focus:ring-2 focus:ring-[#CA9576] focus:bg-white outline-none h-32 resize-none transition-all duration-300 shadow-sm group-hover:shadow-md text-lg"
                  onChange={handleChange}
                  value={formData.message}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#CA9576] to-[#B88566] text-white py-4 rounded-xl font-medium text-lg hover:bg-[#B88566] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <FaPaperPlane className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
