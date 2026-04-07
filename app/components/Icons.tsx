"use client";
import React from 'react';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';

const QuickContactBar = () => {
  const actions = [
    { 
      id: 1, 
      icon: <Mail size={18} />, 
      label: 'Gửi Email: chacacaysang@gmail.com', 
      color: 'bg-yellow-500', 
      href: 'mailto:info@chacacaysang.com' 
    },
    { 
      id: 2, 
      icon: <MessageCircle size={18} />, 
      label: 'Nhắn tin Zalo', 
      color: 'bg-blue-500', 
      href: 'https://zalo.me/0917987656' 
    },
    { 
      id: 3, 
      icon: <FaFacebook size={18} />, 
      label: 'Nhắn tin Facebook', 
      color: 'bg-blue-600', 
      href: 'https://m.me/chacacaysang' 
    },
    { 
      id: 4, 
      icon: <Phone size={18} />, 
      label: 'Gọi điện ngay', 
      color: 'bg-yellow-600', 
      href: 'tel:0917987656' 
    },
  ];

  return (
    <div className="fixed left-4 top-1/2 translate-y-1/2 z-50 flex flex-col gap-4">
      {actions.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className="group relative flex items-center"
        >
          <span className="absolute left-full ml-4 px-4 py-2 bg-white text-slate-800 text-sm font-bold rounded-xl shadow-lg opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-slate-100">
            {item.label}
          </span>

          <div className={`${item.color} text-white p-3.5 rounded-full shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-white`}>
            {item.icon}
          </div>
          
          {item.id === 4 && (
            <span className="absolute inset-0 rounded-full bg-yellow-500 animate-ping opacity-25"></span>
          )}
        </a>
      ))}
    </div>
  );
};

export default QuickContactBar;