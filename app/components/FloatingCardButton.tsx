"use client"

import { FaShoppingCart } from "react-icons/fa"
import { useCart } from "./Giohang";
import { motion } from 'framer-motion';


export default function FloatingCardButton() {
    const { cart, setIsCartOpen } = useCart(); 
    return (
        <>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 bg-[#005596] text-white p-5 rounded-full shadow-2xl z-[80] flex items-center justify-center border-4 border-white"
        >
          <div className="relative">
            <FaShoppingCart size={28} />
            {cart.length > 0 && (
              <span className="absolute -top-5 -right-5 bg-[#ff4500] text-white min-w-[24px] h-6 rounded-full text-xs flex items-center justify-center font-bold animate-bounce px-1">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </div>
        </motion.button>
        </>
    )
};
