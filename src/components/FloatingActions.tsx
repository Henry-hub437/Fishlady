import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingActions() {
  // Replace with the actual WhatsApp number format
  const WHATSAPP_NUMBER = "2347068579340";
  const PHONE_NUMBER = "tel:07068579340";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href={PHONE_NUMBER}
        className="w-14 h-14 bg-brand-dark text-white rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-800 transition-colors transform hover:-translate-y-1"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20b958] transition-colors transform hover:-translate-y-1"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </div>
  );
}
