"use client"; // Cần thiết nếu bạn dùng Framer Motion trong Next.js App Router

import { newsData } from '../data/news';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 bg-gray-50/50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-[#005596] mb-4 tracking-tight uppercase"
        >
          Tin tức mới nhất
        </motion.h1>
        <div className="w-24 h-1.5 bg-[#00b4d8] mx-auto rounded-full"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden h-64">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-sm font-medium">Đọc bài viết trong 5 phút</span>
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#005596] shadow-sm">
                NỔI BẬT
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#00b4d8]">Tên chuyên mục</span>
                <span className="text-gray-300">•</span>
                <p className="text-sm text-gray-500 font-medium">{item.date}</p>
              </div>
              
              <h2 className="font-bold text-xl mb-4 leading-snug text-gray-800 group-hover:text-[#005596] transition-colors line-clamp-2">
                {item.title}
              </h2>
              
              <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                {/* Giả sử bạn có trường description hoặc summary trong data */}
                {item.description || "Khám phá những thông tin chi tiết và cập nhật mới nhất về thị trường cũng như công nghệ tại đây..."}
              </p>

              <Link 
                href={`/Tintuc/${item.slug}`} 
                className="inline-flex items-center text-[#00b4d8] font-bold text-sm uppercase tracking-widest group/link"
              >
                Xem chi tiết
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}