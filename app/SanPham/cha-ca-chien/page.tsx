"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, ShieldCheck, ThermometerSnowflake, Utensils, ShoppingCart, Check, ArrowRight, Play, Star, ChevronRight } from 'lucide-react';
import { useCart } from '@/app/components/Giohang';
import Link from 'next/link';

const products = [
    {
        id: "chien-05",
        name: "Chả cá chiên 0.5kg",
        image: "/Pictures/cha-ca-chien-nua-ky4408_300x300.png",
        price: "Liên hệ",
        tag: "Bán chạy"
    },
    {
        id: "chien-10",
        name: "Chả cá chiên 1kg",
        image: "/Pictures/cha-ca-chien4806_300x300.png",
        price: "Liên hệ",
        tag: "Tiết kiệm"
    }
];

export default function ProductPage() {
    const [cartStatus, setCartStatus] = useState<string | null>(null);
    const { addToCart } = useCart();
    const handleAddToCart = (id: string) => {
        setCartStatus(id);
        setTimeout(() => setCartStatus(null), 2000);
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-600 px-6">
            {/* Mở đầu giới thiệu Chả Cá Chiên */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-cyan-50 rounded-full blur-[100px] opacity-60" />

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className='pt-20'
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 rounded-full mb-8">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <span className="text-red-600 font-black uppercase tracking-[0.2em] text-[10px]">Đặc sản gia truyền từ 1995</span>
                            </div>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
                            Chả Cá Chiên <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Cây Sang</span>
                        </h1>

                        <p className="text-slate-500 text-lg max-w-lg mb-10 leading-relaxed font-medium border-l-4 border-cyan-200 pl-6">
                            Bí quyết mang hương vị biển miền Trung đậm đà vào từng thớ thịt cá tươi nguyên chất.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link href="/DatHang">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                    whileTap={{ scale: 0.95 }} className="bg-slate-900 text-white px-10 py-4 rounded-[2rem] font-black flex items-center gap-3 shadow-2xl transition-all h-[64px]"
                                >
                                    ĐẶT HÀNG NGAY <ChevronRight size={20} strokeWidth={3} />
                                </motion.button>
                            </Link>

                            <button className="flex items-center gap-3 font-bold text-slate-700 px-6 py-2 hover:text-blue-600 transition-colors h-[64px]">
                                {/* h-[64px] giúp nút này cao bằng nút Đặt Hàng */}
                                <span className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm flex-shrink-0">
                                    <Play fill="currentColor" size={16} className="ml-1" />
                                </span>
                                <span>Xem quy trình</span>
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative lg:h-[600px] flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-20"
                        >
                            <img
                                src="/Pictures/chacachien-1.jpg"
                                alt="Main Product"
                                className="w-full max-w-[500px] object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.3)]"
                            />
                        </motion.div>
                        {/* Shape chuyển sang Blue */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-[40px] -rotate-6 scale-95" />
                    </motion.div>
                </div>
            </section>


            {/* Chất lượng sản phẩm và Bảo quản */}
            <section className="py-32 relative bg-slate-900 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-white text-4xl font-bold mb-4 tracking-tight">Cam Kết Chất Lượng</h2>
                        <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12 text-white">
                        {[
                            { icon: Leaf, title: "100% Cá Tươi", desc: "Cá nguyên liệu được chọn lọc từ cảng vào sáng sớm, không pha tạp.", color: "text-blue-400" },
                            { icon: ThermometerSnowflake, title: "Bảo Quản Chuẩn", desc: "Đóng gói hút chân không, đảm bảo vệ sinh ATTP tuyệt đối.", color: "text-cyan-400" },
                            { icon: Utensils, title: "Chế Biến Sẵn", desc: "Tiện lợi cho bữa cơm gia đình: Bún, bánh canh, bánh mì...", color: "text-blue-300" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="group p-10 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all cursor-default"
                            >
                                <item.icon className={`${item.color} mb-6 group-hover:scale-125 transition-transform`} size={48} />
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Cách chế biến */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-start">

                        {/* Hình ảnh & Badge */}
                        <div className="lg:w-1/2 sticky top-24">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="space-y-4"
                                >
                                    <img src="/Pictures/chacachien-2.jpg" className="rounded-[2.5rem] shadow-xl h-[450px] w-full object-cover" alt="Detail 1" />
                                    <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white">
                                        <h4 className="text-5xl font-black mb-2 tracking-tighter">30+</h4>
                                        <p className="text-[10px] uppercase tracking-widest opacity-70 font-bold">Năm kinh nghiệm gia truyền</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="space-y-4 pt-12"
                                >
                                    <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                                        <div className="flex gap-1 text-blue-400 mb-4">
                                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                                        </div>
                                        <p className="font-bold text-slate-900 leading-tight">"Vị dai đặc trưng không lẫn vào đâu được."</p>
                                    </div>
                                    <img src="/Pictures/chacachien-3.jpg" className="rounded-[2.5rem] shadow-xl h-[450px] w-full object-cover" alt="Detail 2" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Nội dung & Danh sách sản phẩm */}
                        <div className="lg:w-1/2 lg:pl-10">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="mb-12"
                            >
                                <h2 className="text-5xl font-black mb-8 leading-[1.1] tracking-tight">Bí quyết "Hồi Lại" <br />Tạo độ dai hoàn hảo</h2>
                                <p className="text-slate-500 text-lg leading-relaxed mb-6 text-justify">
                                    Chả cá sau khi định hình sẽ được nghỉ ngơi 3-4 giờ để các thớ thịt cá "hồi" lại kết cấu liên kết chặt chẽ. Khi chiên dưới ngọn lửa chuẩn xác, lớp vỏ sẽ phồng căng, vàng rộm và giữ trọn mùi thơm tự nhiên.
                                </p>
                            </motion.div>

                            <div className="space-y-4">
                                {products.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        whileHover={{ y: -5 }}
                                        className="group relative flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all"
                                    >
                                        <div className="relative w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden p-2 flex-shrink-0">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                            <span className="absolute top-2 left-2 px-2 py-1 bg-white/80 backdrop-blur-md rounded-lg text-[9px] font-bold text-blue-600 uppercase tracking-tighter shadow-sm">
                                                {product.tag}
                                            </span>
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="font-black text-xl text-slate-900 mb-1 group-hover:text-blue-600 transition-colors tracking-tight">{product.name}</h4>
                                            <div className="flex items-center gap-2 mb-4">
                                                <ShieldCheck size={14} className="text-blue-500" />
                                                <span className="text-[11px] text-slate-400 font-medium">Hút chân không bảo quản lâu</span>
                                            </div>
                                            <p className="text-2xl font-black text-slate-900 tracking-tighter">{product.price}</p>
                                        </div>

                                        <button
                                            onClick={() => {
                                                handleAddToCart(product.id);
                                                addToCart(product);
                                            }}
                                            className={`h-16 w-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${cartStatus === product.id
                                                ? "bg-green-500 text-white shadow-lg shadow-green-200 rotate-[360deg]"
                                                : "bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-200 hover:shadow-blue-500/20"
                                                }`
                                            }
                                        >
                                            <AnimatePresence mode="wait">
                                                {cartStatus === product.id ? (
                                                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                        <Check size={28} strokeWidth={3} />
                                                    </motion.div>
                                                ) : (
                                                    <motion.div key="cart" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                        <ShoppingCart size={24} />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </button>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Tư vấn */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="mt-12 p-8 rounded-[2rem] bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl shadow-blue-100"
                            >
                                <h5 className="font-bold text-xl mb-2">Ưu đãi hôm nay!</h5>
                                <p className="opacity-90 text-sm mb-6">Miễn phí giao hàng cho đơn hàng đặc sản từ 2kg tại nội thành Đà Nẵng.</p>
                                <button className="w-full bg-white text-blue-600 font-black py-4 rounded-xl hover:bg-blue-50 transition-colors uppercase tracking-tight">
                                    LIÊN HỆ TƯ VẤN NGAY
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}