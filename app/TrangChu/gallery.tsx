'use client';

import Link from 'next/link';

export default function Gallery() {
  const items = [
    {
      src: '/Pictures/cha-ca-chien-da-nang-3020.png',
      title: 'Chả Cá Chiên',
      subtitle: 'Đậm đà vị truyền thống',
      link: '/SanPham/cha-ca-chien',
    },
    {
      src: '/Pictures/cha-ca-hap-da-nang-1850.png',
      title: 'Chả Cá Hấp',
      subtitle: 'Ngọt thanh vị cá tươi',
      link: '/SanPham/cha-ca-hap',
    },
    {
      src: '/Pictures/cha-ca-tuoi-song-da-nang-9411.png',
      title: 'Chả Cá Tươi',
      subtitle: 'Nguyên liệu chuẩn loại 1',
      link: '/SanPham/cha-ca-tuoi',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-20 px-6 bg-slate-50">
      {items.map((item, index) => (
        <Link 
          href={item.link} 
          key={index} 
          className="group relative w-[320px] h-[460px] rounded-[32px] bg-white overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
        >
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                Đặc sản Đà Nẵng
              </p>
              <h3 className="text-2xl font-black mb-1 leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                {item.subtitle}
              </p>
              
              <div className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold uppercase tracking-wider transition-all hover:bg-white hover:text-blue-600">
                Xem chi tiết
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="ArrowRightIcon" />
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}