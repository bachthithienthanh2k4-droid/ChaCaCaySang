"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaShoppingCart, FaTimes, FaShieldAlt, FaThermometerEmpty } from 'react-icons/fa';
import { products } from '../data/products';
import { useCart } from '../components/Giohang';

const OrderSection = () => {
    const { addToCart } = useCart();

    const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null);
    return (
        <div className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Tiêu đề */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <h2           className="text-4xl md:text-5xl font-extrabold text-[#005596] mb-4 tracking-tight uppercase">Đặt hàng trực tuyến</h2>
                    <div className="w-24 h-1.5 bg-[#00b4d8] mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto italic">Giao hàng tận nơi tại Đà Nẵng và các tỉnh lân cận. Cam kết tươi ngon mỗi ngày.</p>
                </motion.div>

                {/* Danh sách sản phẩm */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-blue-50 group flex flex-col"
                        >
                            <div
                                className="relative h-64 overflow-hidden cursor-pointer"
                                onClick={() => setSelectedProduct(item)}
                            >
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-4 left-4 bg-[#00b4d8] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{item.type}</div>
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white text-[#005596] px-5 py-2 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">Xem chi tiết</span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-[#005596] mb-2 leading-tight">{item.name}</h3>
                                <p className="text-gray-500 text-xs mb-4 line-clamp-2">{item.description}</p>

                                <div className="mt-auto pt-4 flex flex-col gap-3">
                                    <span className="text-[#00b4d8] font-black text-xl">{item.price}</span>
                                    <motion.button
                                        whileTap={{ scale: 0.95 }}
                                        // 3. Sử dụng hàm addToCart từ Context
                                        onClick={() => addToCart(item)}
                                        className="flex items-center justify-center gap-2 bg-[#005596] text-white py-3 rounded-xl font-bold hover:bg-[#00b4d8] transition-colors shadow-md"
                                    >
                                        <FaPlus size={12} /> Thêm vào giỏ
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Chi tiết sản phẩm */}
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
                                <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 text-gray-400 hover:text-red-500 z-10 p-2 transition-colors"><FaTimes size={24} /></button>
                                <div className="flex flex-col md:flex-row h-full">
                                    <div className="md:w-1/2 bg-slate-50 p-10 flex items-center justify-center">
                                        <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-[300px] md:max-h-[400px] object-contain drop-shadow-2xl" />
                                    </div>
                                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        <h2 className="text-3xl font-black text-[#005596] leading-tight mb-2 uppercase">{selectedProduct.name}</h2>
                                        <p className="text-[#00b4d8] font-bold text-2xl mb-6">Giá: {selectedProduct.price}</p>

                                        <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                                            <div className="flex gap-3">
                                                <FaShieldAlt className="text-[#00b4d8] mt-1 shrink-0" />
                                                <p><strong>Thành phần:</strong> {selectedProduct.ingredients || "Cá tươi, gia vị truyền thống."}</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <FaThermometerEmpty className="text-[#00b4d8] mt-1 shrink-0" />
                                                <p><strong>Bảo quản:</strong> {selectedProduct.storage || "Ngăn mát hoặc ngăn đông."}</p>
                                            </div>
                                            <p className="pl-7 font-medium text-blue-600 italic">📜 Chứng nhận ATTP: {selectedProduct.cert || "Đang cập nhật"}</p>
                                        </div>

                                        <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                            <p className="text-[#005596] font-bold text-[11px]">Cơ sở sản xuất chả cá Cây Sang nhận đặt và giao hàng tại TP.Đà Nẵng và các tỉnh lân cận.</p>
                                        </div>

                                        <button
                                            // 4. Đồng bộ nút bấm trong Modal luôn
                                            onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                                            className="mt-8 w-full bg-[#005596] text-white py-4 rounded-2xl font-black shadow-xl hover:bg-[#00b4d8] transition-all flex items-center justify-center gap-3 active:scale-95"
                                        >
                                            THÊM VÀO GIỎ HÀNG <FaShoppingCart />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default OrderSection;