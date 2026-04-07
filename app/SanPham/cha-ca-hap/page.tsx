"use client";
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Award, Star, ArrowRight, MapPin, BookOpen, AlertCircle, CheckCircle2, ShoppingCart, Check, ChevronRight } from 'lucide-react';
import { div } from 'framer-motion/client';
import { useCart } from '@/app/components/Giohang';
import Link from 'next/link';


const products = [
    {
        id: "hap-05",
        name: "Chả cá hấp 0.5kg",
        image: "/Pictures/cha-ca-hap-nua-ky7449_300x300.png",
        price: "Liên hệ",
        tag: "Bán chạy"
    },
    {
        id: "hap-10",
        name: "Chả cá hấp 1kg",
        image: "/Pictures/cha-ca-hap6498_300x300.jpg",
        price: "Liên hệ",
        tag: "Tiết kiệm"
    }
];
const ChaCaLanding = () => {
    const { addToCart } = useCart();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 10]);
    const scaleImage = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
    const [cartStatus, setCartStatus] = useState<string | null>(null);

    const handleAddToCart = (id: string) => {
        setCartStatus(id);
        setTimeout(() => setCartStatus(null), 2000);
    };

    return (
        <div ref={containerRef} className="bg-[#fcfcfc] text-slate-900 selection:bg-blue-100 overflow-x-hidden">

            {/* Giới thiệu */}
            <section className="relative min-h-[90vh] flex items-center pt-20">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[18vw] font-black text-slate-50 z-0 pointer-events-none uppercase tracking-tighter">
                    Premium Quality
                </div>

                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 rounded-full mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                            <span className="text-red-600 font-bold uppercase tracking-widest text-[10px]">Đặc sản gia truyền từ 1995</span>
                        </div>

                         <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900">
                            Chả Cá Hấp <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Cây Sang</span>
                        </h1>

                        <p className="text-slate-500 text-lg max-w-lg mb-10 leading-relaxed font-medium border-l-4 border-cyan-200 pl-6">
                            Vị ngọt thanh khiết từ cá biển tươi, không dầu mỡ, giữ trọn vẹn dinh dưỡng qua quy trình hấp lò chuyên dụng hiện đại.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <Link href="/DatHang">
                             <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black flex items-center gap-3 shadow-2xl transition-all"
                            >
                                ĐẶT HÀNG NGAY <ChevronRight size={20} strokeWidth={3} />
                            </motion.button>
                            </Link>

                            <div className="flex items-center gap-4 bg-white p-2 pr-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-[11px] font-medium leading-tight text-slate-500">
                                    <span className="text-slate-900 font-bold">1,200+ khách hàng</span> <br /> hài lòng mỗi tháng
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div style={{ rotate, scale: scaleImage }} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl opacity-50 -z-10"></div>
                        <img
                            src="/Pictures/chacahap-1.jpg"
                            alt="Chả cá hấp Cây Sang"
                            className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.12)] rounded-[2.5rem] object-cover border-8 border-white"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Thành tích */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-full">

                        {/* OCOP Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-800 to-blue-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-end min-h-[450px]"
                        >
                            <Award className="absolute -right-10 -top-10 w-64 h-64 opacity-10" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-6">
                                    <Star fill="white" size={32} />
                                </div>
                                <h2 className="text-4xl font-bold mb-4">OCOP 3 Sao <br /> Quốc Gia</h2>
                                <p className="text-blue-50/80 leading-relaxed text-justify mb-6">
                                    Đảm bảo quy trình sản xuất nghiêm ngặt, đạt chuẩn ATTP số 05/2020. Cam kết không hàn the, không chất bảo quản độc hại.
                                </p>
                                <div className="flex gap-1 text-yellow-400">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                            </div>
                        </motion.div>

                        {/* Bảo quản */}
                        <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-8 text-white flex gap-6 items-center border border-slate-800 hover:bg-slate-800 transition-all hover:scale-105 transition-transform duration-500">
                            <div className="shrink-0 w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                                <Clock size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl mb-2">Bảo quản thông minh</h3>
                                <p className="text-slate-400 text-sm">
                                    0-5°C duy trì 5 ngày | Dưới -18°C duy trì 15 ngày. <br />
                                    Nên bọc kín để giữ độ ẩm cho miếng chả.
                                </p>
                            </div>
                        </div>

                        {/* Chất lượng */}
                        <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 hover:bg-slate-100 transition-colors hover:scale-105 transition-transform duration-500">
                            <ShieldCheck className="text-blue-600 mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-2">Độ Tươi</h4>
                            <p className="text-slate-500 text-sm">Cá từ cảng sớm, hấp ngay trong ngày.</p>
                        </div>

                        {/* Vận chuyển */}
                        <div className="bg-red-50 rounded-[2.5rem] p-8 border border-red-100 hover:bg-red-100 transition-colors hover:scale-105 transition-transform duration-500">
                            <Truck className="text-red-600 mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-2">Vận Chuyển</h4>
                            <p className="text-slate-500 text-sm">Giao nhanh toàn quốc từ Đà Nẵng.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Sơ chế */}
            <section className="py-24 bg-slate-950 text-white">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-5xl font-bold mb-8 leading-tight">
                            Sức khỏe từ <br /> <span className="text-blue-400 underline decoration-slate-800 underline-offset-8">Công nghệ Hấp sạch</span>
                        </h2>
                        <div className="space-y-8">
                            <p className="text-slate-400 leading-relaxed text-lg italic border-l-4 border-blue-600 pl-6">
                                "Phù hợp cho thực đơn giảm cân, người không thích dầu mỡ nhưng vẫn muốn tận thưởng vị ngọt tự nhiên của biển cả."
                            </p>

                            <div className="grid gap-6">
                                {[
                                    { t: "Công nghệ lò chuyên dụng", d: "Hơi nước nóng sâu giúp chả chín đều, mặt chả láng mịn, đẹp mắt." },
                                    { t: "Vị ngọt nguyên bản", d: "Hấp giữ lại 99% dưỡng chất và vị cá tươi so với chiên nhiệt độ cao." }
                                ].map((item, idx) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        key={idx}
                                        className="flex gap-4 p-6 rounded-3xl bg-slate-900/50 border border-slate-800"
                                    >
                                        <div className="bg-blue-600/20 text-blue-400 p-3 rounded-xl h-fit">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-1">{item.t}</h4>
                                            <p className="text-slate-500 text-sm">{item.d}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/Pictures/chacahap-2.jpg" className="rounded-[2rem] w-full h-80 object-cover mt-12 hover:scale-105 transition-transform duration-500" />
                            <img src="/Pictures/chacahap-3.jpg" className="rounded-[2rem] w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-10 rounded-full border border-white/20">
                            <BookOpen size={40} className="text-blue-400" />
                        </div>
                    </div>
                </div>
            </section>

            {/* LƯU Ý */}
            <section className="py-24 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Bí quyết thưởng thức</h2>
                    <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Nhiệt độ là then chốt",
                            desc: "Phải để lửa lớn, nước thật sôi mới cho chả vào. Điều này giúp lớp ngoài se lại ngay lập tức, giữ nước ngọt bên trong.",
                            icon: <AlertCircle className="text-orange-500" />
                        },
                        {
                            title: "Canh thời gian vàng",
                            desc: "Khi miếng chả nở vừa phải là lúc chín tới. Vớt ra ngay để nguội tự nhiên sẽ tạo độ dai đặc trưng của Cây Sang.",
                            icon: <Clock className="text-blue-500" />
                        },
                        {
                            title: "Tránh hấp quá lâu",
                            desc: "Hấp quá thời gian sẽ làm chả bị nhừ, mất kết cấu và thẩm mỹ. Miếng chả ngon phải có độ đàn hồi và mặt láng mịn.",
                            icon: <CheckCircle2 className="text-green-500" />
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 relative group"
                        >
                            <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-10 container mx-auto px-6 relative">
                <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50" />

                <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500">
                            Lựa chọn của bạn
                        </h2>
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <span className="h-1 w-12 bg-blue-600 rounded-full" />
                            <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">Đóng gói hút chân không tiêu chuẩn</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner"
                    >
                        <button className="px-6 py-3 bg-white rounded-xl shadow-sm text-slate-900 font-bold text-sm flex items-center gap-2">
                            <BookOpen size={16} /> Thực đơn
                        </button>
                        <button className="px-6 py-3 text-slate-500 font-bold text-sm flex items-center gap-2 hover:text-blue-600 transition-colors">
                            <ShoppingCart size={16} /> Giỏ hàng
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -12 }}
                            className="group relative bg-white border border-slate-100 rounded-[3.5rem] p-8 md:p-10 transition-all duration-500 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]"
                        >
                            <div className="absolute top-8 right-8 z-20">
                                <span className="flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-200">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                    {product.tag}
                                </span>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-10 items-center">
                                <div className="relative shrink-0">
                                    <div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] rotate-6 scale-90 group-hover:rotate-12 group-hover:scale-100 transition-transform duration-700" />
                                    <motion.div
                                        whileHover={{ rotate: -5, scale: 1.1 }}
                                        className="relative w-44 h-44 bg-white rounded-[2.5rem] shadow-xl p-4 overflow-hidden border border-slate-50"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                </div>

                                <div className="flex-1 text-center lg:text-left">
                                    <h4 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {product.name}
                                    </h4>
                                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                                        <span className="h-4 w-[1px] bg-slate-200" />
                                        <span className="flex items-center gap-1 text-green-600 font-bold text-[10px] uppercase tracking-tighter">
                                            <Check size={12} strokeWidth={3} /> Còn hàng
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-4 bg-slate-50/80 backdrop-blur-sm p-4 rounded-[2rem] border border-slate-100">
                                        <p className="pl-4 text-2xl font-black text-slate-900 tracking-tighter">
                                            {product.price}
                                        </p>

                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => {
                                                handleAddToCart(product.id);
                                                addToCart(product);
                                            }}
                                            className={`h-14 px-6 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all duration-500 shadow-lg ${cartStatus === product.id
                                                ? "bg-green-500 text-white shadow-green-200"
                                                : "bg-slate-900 text-white hover:bg-blue-600 shadow-slate-200"
                                                }`}
                                        >
                                            <AnimatePresence mode="wait">
                                                {cartStatus === product.id ? (
                                                    <motion.div key="check" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                                                        <Check size={20} strokeWidth={3} /> <span className="text-sm">Đã thêm</span>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div key="cart" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2">
                                                        <ShoppingCart size={18} /> <span className="text-sm">Mua ngay</span>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 group relative p-12 rounded-[3.5rem] bg-slate-900 overflow-hidden"
                >
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] group-hover:bg-blue-600/30 transition-colors" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex gap-6 items-center flex-col md:flex-row text-center md:text-left">
                            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-500/20 rotate-3">
                                <Truck size={36} className="text-white" />
                            </div>
                            <div>
                                <h5 className="text-3xl font-black text-white mb-2 tracking-tight">Ưu đãi hôm nay!</h5>
                                <p className="text-slate-400 font-medium max-w-sm">Miễn phí ship hỏa tốc cho đơn hàng từ <span className="text-blue-400 font-bold">2kg</span> tại nội thành Đà Nẵng.</p>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group/btn relative bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg overflow-hidden transition-all shadow-xl shadow-white/5"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                GỌI TƯ VẤN NGAY <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                            </span>
                        </motion.button>
                    </div>
                </motion.div>
            </section>
        </div >
    );
};

export default ChaCaLanding;