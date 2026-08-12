"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/lib/content";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-mp-red shadow-[0_8px_24px_rgba(179,35,28,0.55)] md:hidden"
      aria-label="Reservar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="#F3ECD9" className="h-7 w-7">
        <path d="M16.001 3C9.373 3 4 8.373 4 15.001c0 2.386.7 4.61 1.909 6.478L4 29l7.72-1.868A11.94 11.94 0 0 0 16.001 27C22.629 27 28 21.629 28 15.001 28 8.373 22.629 3 16.001 3zm6.964 17.09c-.294.828-1.72 1.583-2.372 1.683-.606.093-1.372.132-2.211-.14-.503-.163-1.15-.38-1.978-.744-3.484-1.505-5.76-5.005-5.936-5.24-.176-.235-1.436-1.91-1.436-3.644s.913-2.587 1.238-2.94c.324-.353.706-.44.94-.44.235 0 .47.002.676.012.216.01.507-.082.793.605.294.706.996 2.44 1.084 2.617.088.176.147.382.03.617-.118.235-.176.382-.353.588-.176.206-.37.46-.53.617-.176.176-.36.367-.155.72.206.353.914 1.51 1.96 2.443 1.347 1.2 2.483 1.573 2.836 1.75.353.176.559.147.766-.088.206-.235.882-1.03 1.117-1.383.235-.353.47-.294.793-.176.324.118 2.06.97 2.413 1.147.353.176.588.264.676.412.088.147.088.85-.206 1.677z" />
      </svg>
    </motion.a>
  );
}
