import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = import.meta.env.VITE_SUPPORT_PHONE_NUMBER;
  const message = encodeURIComponent(
    "Hello, I would like to chat with you regarding Gulf Glam!"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
