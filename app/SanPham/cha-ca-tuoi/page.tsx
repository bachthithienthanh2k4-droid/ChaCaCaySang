"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Snowflake, ShieldCheck, Droplets, UtensilsCrossed, ChevronRight, Check, Star, Award } from 'lucide-react';
import Link from 'next/link';

const ChaCaSongPage = () => {

    return (
        <div className="bg-[#f8fafc] min-h-screen selection:bg-cyan-100">

            {/* Giới thiệu*/}
           <section className="relative pt-20 pb-24 overflow-hidden bg-white">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-cyan-50/50 to-transparent -skew-x-12 translate-x-32 z-0" />
            <motion.div 
                animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* KHỐI NỘI DUNG */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 rounded-full mb-8 shadow-sm border border-red-100">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                            </span>
                            <span className="text-red-600 font-black uppercase tracking-[0.2em] text-[10px]">Đặc sản gia truyền từ 1995</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
                            Chả Cá Sống <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Cây Sang</span>
                        </h1>

                        <p className="text-slate-500 text-lg max-w-lg mb-10 leading-relaxed font-medium border-l-4 border-cyan-200 pl-6">
                            Tuyển chọn từ cá mối, cá nhồng mới đánh bắt. Thịt cá được lóc xương, <span className="text-slate-900 font-bold">quết dẻo thủ công</span>, giữ trọn hương vị biển cả đậm đà.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link href="/DatHang">
                             <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black flex items-center gap-3 shadow-2xl transition-all"
                            >
                                ĐẶT HÀNG NGAY <ChevronRight size={20} strokeWidth={3} />
                            </motion.button>
                            </Link>
                           
                            
                            <div className="flex items-center gap-4 px-6 py-4 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-[2rem] shadow-sm">
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <span className="text-sm font-black text-slate-700 leading-tight uppercase tracking-tighter">
                                    Sạch 100% <br />
                                    <span className="text-[10px] text-slate-400 font-medium tracking-normal italic uppercase">Không hàn the & bột</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                        className="relative"
                    >
                        {/* Các chi tiết trang trí bay lơ lửng xung quanh ảnh */}
                        <motion.div 
                            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-10 -right-10 z-20 bg-white p-6 rounded-[2rem] shadow-2xl hidden md:block"
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <Star className="text-yellow-400" fill="currentColor" size={16} />
                                <span className="font-black text-slate-900">4.9/5</span>
                            </div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Đánh giá khách hàng</p>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-8 -left-8 z-20 bg-cyan-600 text-white p-6 rounded-[2.5rem] shadow-2xl shadow-cyan-200"
                        >
                            <Droplets size={32} className="mb-2" />
                            <p className="text-xs font-black uppercase tracking-widest">Độ tươi 100%</p>
                        </motion.div>

                        {/* Image Frame */}
                        <div className="relative group">
                            {/* Glow effect phía sau */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-[4rem] rotate-6 scale-95 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                            
                            {/* Main Image Container */}
                            <div className="relative z-10 overflow-hidden rounded-[3.5rem] border-[12px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-slate-50">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8 }}
                                    src="/Pictures/cha-ca-tuoi-song-da-nang-9411.png"
                                    alt="Chả cá sống Cây Sang"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Lớp phủ nhẹ tăng độ sâu */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>

            {/* FEATURES - Bento Grid cho đặc tính sản phẩm */}
            <section className="py-24 container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm"
                    >
                        <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                            <Leaf size={28} />
                        </div>
                        <h3 className="text-xl font-black mb-4">Nguyên liệu sạch</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Cá mối, cá nhồng tươi mới đánh bắt, lóc lấy phần thịt tinh khiết nhất để làm chả.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl shadow-slate-200"
                    >
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-cyan-400">
                            <UtensilsCrossed size={28} />
                        </div>
                        <h3 className="text-xl font-black mb-4">Đa năng chế biến</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Phù hợp để chiên, hấp, nấu canh, nấu lẩu tùy sở thích và nhu cầu của từng gia đình.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm"
                    >
                        <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                            <Snowflake size={28} />
                        </div>
                        <h3 className="text-xl font-black mb-4">Bảo quản lạnh</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Duy trì ở 0-5°C trong 4-5 ngày hoặc ngăn đông lạnh (-18°C) để giữ trọn vị tươi trong 15 ngày.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CHI TIẾT KỸ THUẬT - Card hiện đại */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                     >
                        <h2 className="text-5xl font-black mb-12 tracking-tighter italic">Chất lượng <span className="text-cyan-400">OCOP 3 SAO</span></h2>
                        <div className="space-y-6">
                            {[
                                "Cá nguyên liệu sạch 100%, rõ nguồn gốc",
                                "Không sử dụng hàn the hay chất bảo quản",
                                "Sản xuất trong môi trường khép kín, an toàn vệ sinh",
                                "Gia vị tự nhiên: Hành, tiêu, tỏi, muối, đường, mì chính, bột năng"
                            ].map((text, i) => (
                                <div key={i} className="flex gap-5 p-6 bg-white/5 rounded-3xl border border-white/10">
                                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30">
                                        <Check size={18} strokeWidth={4} />
                                    </div>
                                    <p className="text-lg font-bold text-slate-200">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative flex justify-center"
                    >
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-full scale-125"
                        />
                        <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex flex-col items-center justify-center p-10 text-center shadow-[0_0_50px_rgba(34,211,238,0.2)]">
                            <Award size={60} className="mb-6" />
                            <p className="text-2xl font-black italic leading-tight">Đặc sản trứ danh Đà Nẵng từ 1995</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-black mb-4">Giao hàng tận nơi tại Đà Nẵng</h2>
                    <p className="text-slate-500 mb-12">Nhận đặt và giao hàng nhanh chóng cho gia đình và các tỉnh lân cận.</p>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-cyan-100/50">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Hotline 1</p>
                            <a href="tel:0917987656" className="text-3xl font-black text-cyan-600 hover:text-cyan-700 transition-colors">0917.987.656</a>
                        </div>
                        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-cyan-100/50">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Hotline 2</p>
                            <a href="tel:0914168712" className="text-3xl font-black text-cyan-600 hover:text-cyan-700 transition-colors">0914.168.712</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChaCaSongPage;