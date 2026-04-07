"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, MapPin, PartyPopper, X } from "lucide-react";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const FooterDaNang = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Giả lập tạo mã ưu đãi ngẫu nhiên
    const randomCoupon = "CAYSANG" + Math.floor(1000 + Math.random() * 9000);
    setCouponCode(randomCoupon);
    
    // Hiện Pop-up
    setShowPopup(true);
  };

  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Pictures/Cầu_Rồng_Đà_202604011705.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-[3px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* COLUMN 1 - BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-cyan-400">Chả Cá Cây Sang</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Đặc sản chả cá Đà Nẵng chuẩn vị truyền thống. Cam kết chất lượng –
            sạch – ngon – an toàn cho mọi gia đình.
          </p>

          {/* Social */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.facebook.com/ChaCaCaySang/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-cyan-500 transition duration-300 flex items-center justify-center text-white"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full hover:bg-red-500 transition duration-300 flex items-center justify-center text-white"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </motion.div>

        {/* COLUMN 2 - CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">Liên hệ</h3>
          <div className="space-y-4 max-w-sm text-sm text-gray-300">
            {/* Address 1 */}
            <div className="bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
              <p className="font-semibold text-white text-sm mb-1">Cơ sở 1</p>
              <div className="flex items-start gap-2 text-xs">
                <MapPin size={14} className="text-cyan-400 mt-[2px]" />
                <span>87 - 89 Nguyễn Đức Trung, Thanh Khê</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs mt-1">
                <Phone size={14} />
                <span>0917 987 656 - 0914 168 712</span>
              </div>
            </div>

            {/* Address 2 */}
            <div className="bg-white/5 p-3 rounded-lg border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
              <p className="font-semibold text-white text-sm mb-1">Cơ sở 2</p>
              <div className="flex items-start gap-2 text-xs">
                <MapPin size={14} className="text-cyan-400 mt-[2px]" />
                <span>269/39 Ông Ích Khiêm, Hải Châu</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400 text-xs mt-1">
                <Phone size={14} />
                <span>0858 757 355 - 0766 686 600</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 text-xs hover:text-cyan-400 transition cursor-pointer">
              <Mail size={14} className="text-cyan-400" />
              <span>chacacaysang@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* COLUMN 3 - SUBSCRIBE */}
        <motion.div className="space-y-4">
          <h3 className="text-xl font-semibold">Nhận ưu đãi</h3>
          <p className="text-gray-300 text-sm">Đăng ký để nhận khuyến mãi và sản phẩm mới nhất.</p>
          <form onSubmit={handleSubscribe} className="flex rounded-lg overflow-hidden border border-white/10">
            <input
              type="email"
              required
              placeholder="Email của bạn..."
              className="flex-grow px-3 py-2 bg-white/90 text-gray-800 outline-none"
            />
            <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 text-sm font-semibold transition">
              Đăng ký
            </button>
          </form>
        </motion.div>
      </div>
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center"
            >
              {/* Nút đóng */}
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <X size={20} />
              </button>

              <div className="flex justify-center mb-4 text-cyan-500">
                <PartyPopper size={48} />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-slate-800">Thành công!</h3>
              <p className="text-gray-600 mb-6">
                Cảm ơn bạn đã đăng ký. Đây là món quà nhỏ dành cho bạn:
              </p>

              <div className="bg-cyan-50 border-2 border-dashed border-cyan-200 p-4 rounded-xl mb-6">
                <p className="text-sm text-cyan-600 font-medium mb-1">MÃ GIẢM GIÁ 10%</p>
                <p className="text-2xl font-mono font-bold text-cyan-700 tracking-wider">
                  {couponCode}
                </p>
              </div>

              <button
                onClick={() => setShowPopup(false)}
                className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
              >
                Tuyệt vời, cảm ơn!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <span>© 2026 Chả Cá Cây Sang</span>
          <span className="mt-2 md:mt-0">
            Made with ❤️ by Thanh Bạch
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterDaNang;