"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from 'next/link';
import { newsData } from '@/app/data/news'; 

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function SmoothNewsSection() {
  const latestArticles = newsData.slice(0, 3);

  return (
    <section className="relative py-20 bg-[#f4f7fa] overflow-hidden">
      {/* Background Decor - Chuyển sang tone xanh dương nhẹ */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-50/60 blur-[100px] rounded-full -z-10" />

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4 tracking-widest uppercase"
        >
          <BookOpen size={14} />
          <span>Bí quyết ẩm thực</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase"
        >
          Tin tức & <span className="text-blue-600">Cẩm nang</span>
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-blue-500 mx-auto rounded-full"
        />
      </div>

      {/* Main Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 relative z-10"
      >
        {latestArticles.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(30,58,138,0.1)] transition-all duration-500 border border-slate-100"
          >
            {/* Image Container */}
            <Link href={`/Tintuc/${item.slug}`} className="relative h-64 overflow-hidden block">
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-60 transition-opacity duration-500" />
              
              {/* Badge */}
              <div className="absolute top-5 left-5 z-20">
                <span className="bg-white/95 backdrop-blur-md text-blue-900 text-[10px] font-black uppercase tracking-[0.15em] px-4 py-2 rounded-xl shadow-lg">
                  {item.title.toLowerCase().includes("mẹo") ? "Bí quyết" : "Tin tức"}
                </span>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                <div className="absolute -left-[100%] top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] transition-all duration-1000 group-hover:left-[150%]" />
              </div>
            </Link>

            {/* Content Area */}
            <div className="p-8 flex flex-col flex-grow">
              <p className="text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-3">
                {item.date}
              </p>
              
              <Link href={`/Tintuc/${item.slug}`}>
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-snug">
                  {item.title}
                </h3>
              </Link>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                {item.description}
              </p>

              <div className="mt-auto pt-6 border-t border-slate-50">
                <Link 
                  href={`/Tintuc/${item.slug}`}
                  className="flex items-center gap-2 text-sm font-black text-slate-900 group/btn"
                >
                  <span className="relative">
                    Khám phá ngay
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-slate-200" />
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover/btn:w-full" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2 text-blue-500" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <Link href="/Tintuc">
          <button className="px-10 py-4 rounded-full bg-blue-900 text-white font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 text-xs uppercase tracking-widest">
            Xem tất cả bài viết
          </button>
        </Link>
      </motion.div>
    </section>
  );
}