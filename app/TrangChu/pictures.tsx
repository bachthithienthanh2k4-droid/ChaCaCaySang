"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

const images = [
    '/Pictures/7-3013.jpg', '/Pictures/8-2286.jpg', '/Pictures/9-5427.jpg',
    '/Pictures/10-1416.jpg', '/Pictures/11-1049.jpg', '/Pictures/12-1356.jpg',
    '/Pictures/13-5673.jpg', '/Pictures/14-3566.jpg', '/Pictures/15-8313.jpg',
    '/Pictures/685a5781result-2841.jpg', '/Pictures/685a5788result-2647.jpg',
    '/Pictures/685a5843result-2482.jpg', '/Pictures/685a5852result-4566.jpg',
    '/Pictures/bf1eb55c50a3a0fdf9b2result-1300.jpg',
    '/Pictures/e444f1016bfe9ba0c2efresult-8083.jpg',
    '/Pictures/img2820result-908.jfif',
];

export default function Pictures() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let animationId: number;
        let isPaused = false;
        const speed = 0.8;

        const animate = () => {
            if (!isPaused) {
                container.scrollLeft += speed;
                if (container.scrollLeft >= container.scrollWidth / 2) {
                    container.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        const stop = () => (isPaused = true);
        const start = () => (isPaused = false);

        container.addEventListener("mouseenter", stop);
        container.addEventListener("mouseleave", start);

        return () => {
            cancelAnimationFrame(animationId);
            container.removeEventListener("mouseenter", stop);
            container.removeEventListener("mouseleave", start);
        };
    }, []);

    const loopImages = [...images, ...images];

    return (
        <section className="relative pt-10 pb-20 bg-[radial-gradient(circle_at_top,_#fef9f3,_#ffffff)] overflow-hidden bg-fixed">
            
            {/* TITLE */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-[60px]"
            >
                <h2 className="text-[52px] font-[800] tracking-[2px] bg-gradient-to-r from-[#1e293b] to-[#64748b] bg-clip-text text-transparent italic uppercase">
                    Hình ảnh thu hoạch
                </h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "320px" }}
                    transition={{ duration: 1 }}
                    className="h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-2"
                />
            </motion.div>

            {/* WRAPPER */}
            <div className="relative max-w-[1200px] mx-auto overflow-hidden rounded-[20px]">
                
                {/* CONTAINER */}
                <div 
                    ref={containerRef}
                    className="flex gap-6 p-5 overflow-x-scroll no-scrollbar whitespace-nowrap select-none"
                >
                    {loopImages.map((src, index) => (
                        <div 
                            key={index} 
                            className="group relative min-w-[360px] h-[240px] rounded-[24px] overflow-hidden flex-shrink-0 bg-white/40 backdrop-blur-[10px] shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                        >
                            <Image
                                src={src}
                                alt={`image-${index}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-115 group-hover:brightness-75"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                            {/* Icon hover */}
                            <div className="absolute bottom-[15px] right-[15px] bg-white/80 backdrop-blur-[6px] p-2 rounded-full opacity-0 translate-y-[10px] transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 text-slate-800">
                                <ImageIcon size={22} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Fade Edges */}
                <div className="absolute top-0 left-0 w-[120px] h-full z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
                <div className="absolute top-0 right-0 w-[120px] h-full z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
            </div>

            {/* SLOGAN */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-10 mx-auto table text-center font-bold tracking-[2px] py-3.5 px-[30px] bg-gradient-to-r from-[#b38b4d] via-[#e2c18d] to-[#b38b4d] color-[#3b2f1d] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] uppercase"
            >
                🌿 CÂY SANG - CHẤT LƯỢNG & TRÁCH NHIỆM 🌿
            </motion.div>
        </section>
    );
}