"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Phone, Globe, Send, CheckCircle2, X, RefreshCw, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

// 1. Đặt Interface bên ngoài để dùng chung
interface FormErrors {
  fullname?: string;
  phone?: string;
  email?: string;
  message?: string;
  captcha?: string;
}

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // 2. Khai báo State formData (Cái này bạn đang thiếu dẫn đến lỗi 'formData not defined')
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    address: "",
    message: ""
  });

  // 3. Sửa kiểu dữ liệu của State errors cho đồng bộ
  const [errors, setErrors] = useState<FormErrors>({});

  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const validateForm = () => {
    let newErrors: FormErrors = {};

    if (!formData.fullname.trim()) {
      newErrors.fullname = "Vui lòng nhập họ và tên";
    }

    const phoneRegex = /^(0|84)(3|5|7|8|9)([0-9]{8})$/;
    if (!formData.phone) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập nội dung";
    }

    if (captchaInput.toUpperCase() !== captchaCode) {
      newErrors.captcha = "Mã bảo vệ không chính xác";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      // Reset form
      setFormData({ fullname: "", phone: "", email: "", address: "", message: "" });
      setCaptchaInput("");
      generateCaptcha();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Xóa lỗi khi người dùng gõ
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#005596] mb-4 tracking-tight uppercase">Liên hệ với chúng tôi</h2>
          <div className="w-24 h-1.5 bg-[#00b4d8] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-blue-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 italic text-blue-100">Cơ Sở Sản Xuất Chả Cá Cây Sang</h3>
                <div className="space-y-8">
                  <div className="flex gap-4 font-medium"><MapPin className="text-blue-400 shrink-0" /><div><p className="font-bold text-blue-300">Cơ sở 1:</p><p className="text-blue-100 text-sm">87-89 Nguyễn Đức Trung, Thanh Khê, Đà Nẵng</p></div></div>
                  <div className="flex gap-4 font-medium"><Phone className="text-blue-400 shrink-0" /><div><p className="font-bold text-blue-300">Điện thoại:</p><p className="text-blue-100 text-sm">0917 987 656 - 0914 168 712</p></div></div>
                  <div className="flex gap-4 font-medium"><MapPin className="text-blue-400 shrink-0" /><div><p className="font-bold text-blue-300">Cơ sở 2:</p><p className="text-blue-100 text-sm">269/39 Ông Ích Khiêm, Q. Hải Châu, TP. Đà Nẵng</p></div></div>
                  <div className="flex gap-4 font-medium"><Phone className="text-blue-400 shrink-0" /><div><p className="font-bold text-blue-300">Điện thoại:</p><p className="text-blue-100 text-sm">0858 757 355 - 0766 686 600</p></div></div>
                  <div className="flex gap-4 font-medium"><Globe className="text-blue-400 shrink-0" /><div><p className="font-bold text-blue-300">Website:</p><p className="text-blue-100 text-sm italic">www.chacacaysang.com</p></div></div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 relative">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Họ và tên *</label>
                <input name="fullname" value={formData.fullname} onChange={handleChange} type="text" className={`w-full px-5 py-3 rounded-xl bg-slate-50 border ${errors.fullname ? 'border-red-400' : 'border-slate-100'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`} placeholder="Nguyễn Văn A" />
                {errors.fullname && <p className="text-red-500 text-xs flex items-center gap-1 font-medium"><AlertCircle size={12} /> {errors.fullname}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Số điện thoại *</label>
                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className={`w-full px-5 py-3 rounded-xl bg-slate-50 border ${errors.phone ? 'border-red-400' : 'border-slate-100'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`} />
                {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1 font-medium"><AlertCircle size={12} /> {errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email</label>
                <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="nguyenvana@email.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Địa chỉ</label>
                <input name="address" value={formData.address} onChange={handleChange} type="text" className="w-full px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Quận Thanh Khê, Đà Nẵng" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">Nội dung liên hệ *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={`w-full px-5 py-3 rounded-xl bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-100'} focus:ring-2 focus:ring-blue-500 outline-none transition-all`} placeholder="Bạn cần hỗ trợ gì?"></textarea>
                {errors.message && <p className="text-red-500 text-xs flex items-center gap-1 font-medium"><AlertCircle size={12} /> {errors.message}</p>}
              </div>

              <div className={`md:col-span-2 p-4 bg-slate-50 rounded-2xl border ${errors.captcha ? 'border-red-300' : 'border-slate-100'} flex flex-wrap items-center gap-4`}>
                <div className="flex items-center gap-3">
                  <div className="bg-slate-900 text-white px-4 py-2 rounded-lg font-mono tracking-[0.3em] text-xl italic select-none shadow-inner border-2 border-slate-700">
                    {captchaCode}
                  </div>
                  <button type="button" onClick={generateCaptcha} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-blue-600">
                    <RefreshCw size={18} />
                  </button>
                </div>
                <div className="flex-grow">
                  <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      if (errors.captcha) setErrors(prev => ({ ...prev, captcha: undefined }));
                    }}
                    className="w-full px-5 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all uppercase"
                    placeholder="Nhập mã bảo vệ *"
                  />
                  {errors.captcha && <p className="text-red-500 text-xs mt-1 flex items-center gap-1 font-medium"><AlertCircle size={12} /> {errors.captcha}</p>}
                </div>
              </div>

              <div className="md:col-span-2 pt-2">
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 group">
                  GỬI YÊU CẦU LIÊN HỆ
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSubmitted(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-white rounded-[2.5rem] p-8 md:p-12 max-w-sm w-full text-center shadow-2xl">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2 font-sans uppercase">Thành công!</h3>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">Yêu cầu của bạn đã được gửi. Chúng tôi sẽ phản hồi sớm nhất có thể.</p>
              <button onClick={() => setIsSubmitted(false)} className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg">ĐÓNG THÔNG BÁO</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}