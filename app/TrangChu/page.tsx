'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';
import Gallery from './gallery';
import Products from './products';
import Pictures from './pictures';
import SmoothNewsSection from './SmoothNewsSection';

export default function TrangChu() {
    const items = [
        { id: '01', title: "Tinh Hoa Biển Cả", desc: "Khám phá những món ăn đặc sản từ biển, tươi ngon và giàu dinh dưỡng.", img: "/Pictures/slide-1-8092.jpg" },
        { id: '02', title: "Nguyên Liệu Tươi Sạch", desc: "Chúng tôi cam kết sử dụng nguyên liệu tươi ngon, an toàn và chất lượng cao.", img: "/Pictures/slide-2-8002.jpg" },
        { id: '03', title: "Công Thức Gia Truyền", desc: "Bảo tồn và phát huy những công thức nấu ăn truyền thống độc đáo.", img: "/Pictures/chaca1-6819.png" },
        { id: '04', title: "Đậm Đà Vị Quê", desc: "Trải nghiệm hương vị đặc trưng của vùng miền, đậm đà và khó quên.", img: "/Pictures/chaca2-4741.png" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Hàm chuyển slide
    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items.length]);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    // Auto play 5s
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="min-h-screen bg-[#fcfcfd] text-slate-900 selection:bg-blue-100 overflow-x-hidden">

            <section className="relative w-full h-[500px] md:h-[650px] bg-black overflow-hidden">

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={items[activeIndex].img}
                            alt="bg"
                            fill
                            className="object-cover scale-105 blur-[1px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="flex-1 mt-20 md:mt-0">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-white"
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: 64 }}
                                    className="h-1 bg-amber-500 mb-8"
                                />
                                <h1 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-[1.1]">
                                    {items[activeIndex].title.split(' ').map((word, i) => (
                                        <span key={i} className={i % 2 !== 0 ? "text-transparent stroke-text" : ""}>
                                            {word}{' '}
                                        </span>
                                    ))}
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl max-w-md leading-relaxed mb-10 opacity-90">
                                    {items[activeIndex].desc}
                                </p>

                                <div className="flex items-center gap-6">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                                    >
                                        <FaPlay className="ml-1" />
                                    </motion.button>
                                    <button className="group relative px-8 py-4 overflow-hidden rounded-full border border-white/20 font-bold uppercase tracking-widest text-sm transition-all hover:border-amber-500">
                                        <span className="relative z-10">Khám phá ngay</span>
                                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:text-black transition-opacity z-20">Khám phá ngay</span>
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>



                </div>

                {/* BOTTOM CONTROLS */}
                <div className="absolute bottom-8 left-6 md:left-20 z-20 flex items-center gap-10">
                    <div className="flex gap-3">
                        <button onClick={prevSlide} className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-all">
                            <FaChevronLeft size={14} />
                        </button>
                        <button onClick={nextSlide} className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-md hover:bg-white hover:text-black transition-all">
                            <FaChevronRight size={14} />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-4 text-white/50 font-mono">
                        <span className="text-white text-2xl font-black">0{activeIndex + 1}</span>
                        <div className="w-32 h-[1px] bg-white/10 relative">
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"
                                animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                        <span>0{items.length}</span>
                    </div>
                </div>
            </section>


            {/* 2. INTRO SECTION - CLEAN & PROFESSIONAL */}
            <section className="py-16 px-6 bg-white mx-auto">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative max-w-sm mx-auto lg:max-w-none"
                    >
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                            <Image
                                src="/Pictures/i-dien-6323.jpg"
                                alt="Chả cá Cây Sang"
                                width={600}
                                height={700}
                                className="object-cover rounded-[2rem] transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-100 rounded-full -z-0 opacity-40 blur-xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-[1px] border-slate-200 rounded-[2rem] -z-0"></div>
                    </motion.div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-amber-600 font-bold tracking-[0.2em] uppercase text-[15px]">Di sản truyền thống</h3>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                                Chả Cá
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Cây Sang</span>
                            </h2>
                        </div>

                        <div className="text-slate-600 text-base leading-relaxed space-y-4">
                            <p className="font-medium italic border-l-2 border-amber-500 pl-4 py-1 text-sm md:text-base">
                                "Hành trình từ khát vọng vươn tầm đặc sản địa phương đến thương hiệu hàng đầu từ năm 1995."
                            </p>
                            <p className="text-sm md:text-xl">
                                Cơ Sở Sản Xuất Chả Cá Cây Sang gửi gắm tâm huyết vào từng miếng chả dai giòn, đậm đà vị cá tươi vừa cập bến.
                            </p>
                        </div>

                        <motion.a
                            href="/Gioithieu"
                            whileHover={{ y: -2 }}
                            className="group relative inline-flex items-center gap-3 px-8 py-3 bg-slate-900 rounded-full overflow-hidden transition-all shadow-lg hover:shadow-amber-500/20"
                        >
                            {/* Lớp nền chạy khi hover */}
                            <div className="absolute inset-0 w-0 bg-amber-500 transition-all duration-[0.4s] ease-out group-hover:w-full" />

                            <span className="relative z-10 text-[11px] font-black uppercase tracking-widest text-white transition-colors duration-300">
                                Tìm hiểu thêm
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="relative z-10 w-4 h-4 text-white transform transition-transform duration-300 group-hover:translate-x-1"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.5);
                }
            `}</style>

            <Gallery />
            <Products />
            <Pictures />
            <SmoothNewsSection />
        </div>
    );
}