'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Leaf, ChevronLeft, ChevronRight, ShoppingCart, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../components/Giohang';
import { FaShieldAlt, FaShoppingCart, FaThermometerEmpty } from 'react-icons/fa';

const products = [
  {
    id: 'cha-ca-chien-0.5kg',
    title: 'Chả cá chiên 0.5kg',
    img: '/Pictures/cha-ca-chien-nua-ky4408_300x300.png',
    desc: [
      'Thành phần: cá nguyên liệu, muối, đường, hành tiêu, tỏi, mì chính, bột năng.',
      'Bảo quản: Ngăn mát hoặc ngăn đông, tránh ánh sáng trực tiếp.',
    ],
    price: 'Liên hệ',
  },
  {
    id: 'cha-ca-chien-1kg',
    title: 'Chả cá chiên 1kg',
    img: '/Pictures/cha-ca-chien4806_300x300.png',
    desc: [
      'Sản phẩm cao cấp, phù hợp làm quà biếu.',
      'Giữ được độ dai và vị ngọt tự nhiên của cá.',
    ],
    price: 'Liên hệ',

  },
  {
    id: 'cha-ca-hap-0.5kg',
    title: 'Chả cá hấp 0.5kg',
    img: '/Pictures/cha-ca-hap-nua-ky7449_300x300.png',
    desc: [
      'Ít dầu mỡ, tốt cho sức khỏe.',
      'Giữ nguyên hương vị tươi ngon tự nhiên.',
    ],
    price: 'Liên hệ',

  },
  {
    id: 'cha-ca-hap-1kg',
    title: 'Chả cá hấp 1kg',
    img: '/Pictures/cha-ca-hap6498_300x300.jpg',
    desc: [
      'Thành phần: cá nguyên liệu, muối, đường, hành tiêu, tỏi, mì chính, bột năng.',
      'Bảo quản: Ngăn mát hoặc ngăn đông, tránh ánh sáng trực tiếp.',
    ],
    price: 'Liên hệ',

  },
];

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
  const { addToCart } = useCart();

  const product = products[activeIndex];

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="pt-0 pb-10 flex items-center justify-center p-4 bg-[#f8fafc] relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[300px] h-[80px] bg-sky-100/40 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-5xl w-full bg-white/80 backdrop-blur-xl p-4 md:p-8 rounded-[28px] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] border border-white"
      >
        {/* LEFT: Image Section */}
        <div className="flex flex-col gap-2">
          <div className="relative aspect-square w-full bg-slate-50 rounded-[20px] overflow-hidden group shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full p-4"
              >
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 justify-center lg:justify-start">
            {products.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-12 h-12 rounded-full overflow-hidden border transition-all duration-300 
                  ${activeIndex === idx ? 'border-sky-500 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <Image src={item.img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Info Section */}
        <div className="flex flex-col justify-center gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
              <Leaf size={12} />
              Sản phẩm nổi bật
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2 uppercase italic">
              {product.title}
            </h1>
            <div className="h-1 w-16 bg-sky-500 rounded-full" />
          </div>

          <div className="space-y-3">
            {product.desc.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100"
              >
                <div className="bg-sky-500 text-white p-1 rounded-full shrink-0 mt-1">
                  <Check size={10} strokeWidth={4} />
                </div>
                <p className="text-slate-600 text-[13px] font-medium leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <button
              onClick={() => addToCart({ ...product, name: product.title, image: product.img })}
              className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold transition-all hover:bg-sky-600 hover:shadow-lg active:scale-95"
            >
              <ShoppingCart size={18} />
              Đặt hàng
            </button>

            <button
              onClick={() => setSelectedProduct(product)} // SỬA: item thành product
              className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-6 py-3.5 rounded-xl font-bold transition-all hover:bg-slate-50"
            >
              <Search size={18} />
              Chi tiết
            </button>
          </div>

          <div className="flex gap-2 pt-3">
            {products.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === idx ? 'w-8 bg-sky-500' : 'w-2 bg-slate-200'}`}
              />
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="hidden lg:block">
          <button onClick={prevSlide} className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-md border hover:text-sky-500 transition-all active:scale-90">
            <ChevronLeft size={22} />
          </button>
          <button onClick={nextSlide} className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-md border hover:text-sky-500 transition-all active:scale-90">
            <ChevronRight size={22} />
          </button>
        </div>
      </motion.div>

      {/* MODAL CHI TIẾT */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="fixed inset-0 m-auto z-[101] max-w-4xl h-fit max-h-[90vh] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden overflow-y-auto"
            >
              <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 z-10 p-2 transition-colors">
                <X size={24} />
              </button>
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-1/2 bg-slate-50 p-10 flex items-center justify-center">
                  <Image src={selectedProduct.img} alt={selectedProduct.title} width={400} height={400} className="object-contain drop-shadow-2xl" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-black text-[#005596] leading-tight mb-2 uppercase">{selectedProduct.title}</h2>
                  <p className="text-[#00b4d8] font-bold text-2xl mb-6">Giá: {selectedProduct.price || "Liên hệ"}</p>

                  <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                    <div className="flex gap-3">
                      <FaShieldAlt className="text-[#00b4d8] mt-1 shrink-0" />
                      <p><strong>Thông tin:</strong> {selectedProduct.desc[0]}</p>
                    </div>
                    <div className="flex gap-3">
                      <FaThermometerEmpty className="text-[#00b4d8] mt-1 shrink-0" />
                      <p><strong>Bảo quản:</strong> {selectedProduct.desc[1]}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => { addToCart({ ...selectedProduct, name: selectedProduct.title, image: selectedProduct.img }); setSelectedProduct(null); }}
                    className="mt-8 w-full bg-[#005596] text-white py-4 rounded-2xl font-black shadow-xl hover:bg-sky-600 transition-all flex items-center justify-center gap-3 active:scale-95"
                  >
                    THÊM VÀO GIỎ HÀNG <FaShoppingCart />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}