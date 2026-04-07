'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, Award, Globe, Ship } from "lucide-react";
import Image from "next/image";
import { FaFish, FaStar, FaCheckCircle, FaStore, FaMapMarkerAlt, FaPhoneAlt, FaGlobe } from "react-icons/fa";
import Link from "next/link";

export default function IntroductionPage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        // Trả về một bản skeleton đơn giản hoặc null để tránh lệch định dạng
        return <div className="min-h-screen bg-black" />;
    }
    const steps = [
        {
            icon: FaFish,
            title: "1. Nguyên liệu tươi ngon",
            content: "Chả cá Cây Sang được chế biến từ các loại cá tươi ngon, làm sạch, lấy hết xương và da.",
            delay: "100"
        },
        {
            icon: FaCheckCircle,
            title: "2. Chế biến",
            content: "Cho thêm gia vị và bỏ vào máy xay lên cho đến khi đạt độ dai nhất định.",
            delay: "300"
        },
        {
            icon: FaStar,
            title: "3. Định hình & Hoàn thiện",
            content: "Định hình thành đủ hình dạng: miếng tấm, viên tròn, dẹp đồng xu... rồi đem đi chiên hoặc hấp chín.",
            delay: "500"
        }
    ];

    const types = [
        { name: "Chả cá chiên", href: "/SanPham/cha-ca-chien" },
        { name: "Chả cá hấp", href: "/SanPham/cha-ca-hap" },
        { name: "Chả cá sống", href: "/SanPham/cha-ca-tuoi" }
    ];

    return (
        <main className="min-h-screen mx-auto">

            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

                {/* Tiêu đề */}
                <div className="absolute inset-0">
                    {/* Tiêu đề */}
                    <Image
                        src="/Pictures/cha-ca-cay-sang-2.jpg"
                        alt="Hero"
                        fill 
                        priority
                        sizes="100vw"
                        className="object-cover scale-105" 
                    />
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/80 backdrop-blur-sm" />
                <div className="relative z-10 text-center text-white px-6">

                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block mb-4 px-4 py-1 text-sm tracking-widest uppercase bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                    >
                        Đặc sản Đà Nẵng
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="font-extrabold leading-tight mb-6 text-5xl sm:text-6xl md:text-8xl lg:text-[110px]"
                    >
                        <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
                            ĐẶC SẢN CHẢ CÁ
                        </span>

                        <span className="block mt-3 text-red-500 relative inline-block text-6xl sm:text-7xl md:text-9xl lg:text-[130px]">
                            CÂY SANG
                            <span className="absolute inset-0 blur-2xl opacity-50 bg-red-500 -z-10"></span>
                        </span>
                    </motion.h1>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-6"></div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg md:text-2xl text-gray-200 tracking-wide max-w-2xl mx-auto leading-relaxed"
                    >
                        Tinh hoa biển Đà Nẵng từ năm 1995 – giữ trọn hương vị truyền thống qua từng thế hệ
                    </motion.p>

                </div>
            </section>
            {/* Mô tả hành trình */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <motion.div initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }} className="relative group">
                        <div className="absolute -inset-2 bg-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>

                        <Image
                            src="/Pictures/slide-2-8002.jpg"
                            alt="Cơ sở Cây Sang"
                            width={600}
                            height={400}
                            className="relative rounded-2xl shadow-2xl object-cover w-full h-[400px]"
                        />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}>
                        <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center gap-2">
                            <Ship size={28} /> Hành Trình Di Sản
                        </h2>

                        <p className="text-gray-600 leading-relaxed mb-6 text-lg italic text-justify">
                            Khởi nguồn từ năm 1995 trên nền tảng nghề khai thác hải sản truyền thống của vùng ven biển, <strong>Chả Cá Cây Sang</strong> đã tận dụng nguồn nguyên liệu tươi dồi dào để tạo nên hương vị đậm đà, mang đậm bản sắc địa phương.
                            Trong giai đoạn 1995–2010, khi hải sản không chỉ được tiêu thụ tươi mà còn được chế biến đa dạng, chả cá dần khẳng định vị thế là một sản phẩm tiêu biểu.
                            Nhờ sự khéo léo và kinh nghiệm lâu năm của người dân, chả cá Cây Sang nhanh chóng được đón nhận, trở thành đặc sản quen thuộc, góp phần gìn giữ và lan tỏa giá trị ẩm thực truyền thống của vùng biển.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white shadow rounded-lg border-l-4 border-red-500">
                                <span className="block text-2xl font-bold text-red-600">30+</span>
                                <span className="text-sm text-gray-500">Năm kinh nghiệm</span>
                            </div>

                            <div className="p-4 bg-white shadow rounded-lg border-l-4 border-blue-500">
                                <span className="block text-2xl font-bold text-blue-600">OCOP 3★</span>
                                <span className="text-sm text-gray-500">Chứng nhận</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Quảng bá */}
            <section className="py-20 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">

                    <motion.div initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }} className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Vươn Tầm Quốc Tế</h2>
                        <p className="text-gray-500">
                            Hương vị được yêu chuộng tại Mỹ và khắp các tỉnh thành
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <CheckCircle className="text-green-500" />, title: "Độ dai tự nhiên", desc: "Không hàn the, thơm mùi tiêu." },
                            { icon: <Globe className="text-blue-500" />, title: "Xuất khẩu Mỹ", desc: "Quà biếu cho người xa quê." },
                            { icon: <MapPin className="text-red-500" />, title: "Phủ sóng Đà Nẵng", desc: "Cung cấp cho nhà hàng lớn." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10, scale: 1.03 }}
                                className="p-8 bg-white rounded-3xl shadow-lg text-center transition"
                            >
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Giấy chứng nhận */}
            <section className="py-20 px-6 -mt-10">
                <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2rem] shadow-xl border border-orange-200 bg-white">

                    <div className="flex flex-col md:flex-row items-center gap-10">

                        <motion.div
                            whileHover={{ rotate: 2, scale: 1.03 }}
                            className="w-full md:w-1/2"
                        >
                            <Image
                                src="/Pictures/GiayChungNhan.jpg"
                                alt="Chứng nhận OCOP"
                                width={500}
                                height={400}
                                className="rounded-lg shadow-xl"
                            />
                        </motion.div>

                        <div className="w-full md:w-1/2">
                            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-4">
                                CHỨNG NHẬN QUỐC GIA
                            </div>

                            <h2 className="text-3xl font-bold mb-4">
                                Sản phẩm OCOP 3 SAO
                            </h2>

                            <p className="text-gray-600 mb-6 italic">
                                Đạt hạng sản phẩm 3 SAO năm 2020 theo quyết định của UBND TP Đà Nẵng.
                            </p>

                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <Award size={20} className="text-orange-500" />
                                    Quy trình khép kín
                                </li>
                                <li className="flex items-center gap-2">
                                    <Award size={20} className="text-orange-500" />
                                    Đảm bảo VSATTP
                                </li>
                                <li className="flex items-center gap-2">
                                    <Award size={20} className="text-orange-500" />
                                    Đặc sản vùng miền
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            <div className="bg-slate-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden -mt-10">
    <div className="max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-10 -mt-10" data-aos="fade-down">
            <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#005596] leading-tight">
                QUY TRÌNH CHẾ BIẾN
                <span className="block text-[#00b4d8] mt-2 uppercase">CHẢ CÁ CÂY SANG</span>
            </motion.h1>
            <div className="w-30 h-1.5 bg-[#00b4d8] mx-auto mt-1 rounded-full"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto italic mt-2">
                Khám phá hành trình từ những con cá tươi ngon nhất đến món chả cá đặc sản Đà Nẵng.
            </p>
        </motion.div>

        {/* Quy trình chế biến */}
        <motion.section
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-24 md:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-blue-50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group"
                        >
                            <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-blue-100 group-hover:bg-[#00b4d8] group-hover:rotate-[360deg] transition-all duration-700">
                                <Icon className="text-[#00b4d8] group-hover:text-white text-4xl transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#005596] mb-4 group-hover:text-[#00b4d8] transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {step.content}
                            </p>
                        </div>
                    );
                })}
            </div>
        </motion.section>

        {/* Chất lượng */}
        <section className="mb-24 md:mb-32 bg-white rounded-[2rem] p-8 md:p-16 shadow-xl border border-blue-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div data-aos="fade-right" data-aos-delay="200">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#005596] mb-6">
                        Hương vị của Biển, <br />
                        <span className="text-[#00b4d8] underline decoration-wavy decoration-1 underline-offset-8">An toàn cho Sức khỏe</span>
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Chả cá Cây Sang mang đậm hương vị của biển. Đặc biệt <strong>không sử dụng hàn the</strong>, được sản xuất hàng ngày, đảm bảo tươi ngon, an toàn vệ sinh thực phẩm.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100">
                        <span className="w-full text-gray-400 font-semibold uppercase text-sm tracking-wider mb-2">Sản phẩm nổi bật:</span>
                        {types.map((type, index) => (
                            <Link
                                key={index}
                                href={type.href}
                                className="no-underline text-[#005596] px-6 py-2.5 bg-blue-50 rounded-xl font-bold transition-all hover:bg-[#005596] hover:text-white hover:shadow-lg active:scale-95"
                            >
                                {type.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#005596] to-[#0077b6] p-10 rounded-[2rem] text-white shadow-lg relative" data-aos="fade-left" data-aos-delay="400">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-white/10 rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 group">
                            <FaStore className="text-4xl text-[#00b4d8]" />
                        </div>
                        <h3 className="text-2xl font-bold">Uy tín từ tâm</h3>
                    </div>
                    <p className="text-blue-50 font-light text-lg leading-relaxed italic">
                        "Chúng tôi không quảng bá thương hiệu rầm rộ, chỉ chú trọng đến chất lượng sản phẩm. Chính sự tin tưởng của quý khách hàng là minh chứng lớn nhất cho chả cá Cây Sang."
                    </p>
                    <div className="mt-6 flex justify-end">
                        <span className="text-[#00b4d8] font-bold">— Cơ sở Chả cá Cây Sang</span>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#005596] text-white rounded-[2.5rem] shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Contact Details */}
                <div className="p-10 md:p-16">
                    <h2 className="text-2xl font-extrabold mb-5 flex items-center gap-3">
                        <span className="w-12 h-1 bg-[#00b4d8]"></span>
                        THÔNG TIN LIÊN HỆ
                    </h2>

                    <div className="space-y-8">
                        {[
                            { icon: FaMapMarkerAlt, label: "Cơ sở 1", text: "87 - 89 Nguyễn Đức Trung, Thanh Khê, Đà Nẵng" },
                            { icon: FaPhoneAlt, label: "Hotline 1", text: "0917 987 656 - 0914 168 712" },
                            { icon: FaMapMarkerAlt, label: "Cơ sở 2", text: "269/39 Ông Ích Khiêm, Hải Châu, Đà Nẵng" },
                            { icon: FaPhoneAlt, label: "Hotline 2", text: "0858 757 355 - 0766 686 600" },
                            { icon: FaGlobe, label: "Website", text: "www.chacacaysang.com", isLink: true },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex gap-5 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00b4d8] transition-all">
                                        <Icon className="text-[#00b4d8] group-hover:text-white text-xl" />
                                    </div>
                                    <div>
                                        <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">{item.label}</span>
                                        {item.isLink ? (
                                            <Link href={`https://${item.text}`} target="_blank" className="no-underline block text-sm font-medium hover:text-[#00b4d8] transition-colors">
                                                {item.text}
                                            </Link>
                                        ) : (
                                            <p className="text-base font-medium leading-tight">{item.text}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Gọi */}
                <div className="bg-[#00b4d8] p-10 md:p-16 flex flex-col justify-center items-center text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
                        <FaPhoneAlt size={40} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-5xl font-black mb-4">GIAO TẬN NƠI</h2>
                    <p className="text-xl mb-10 font-medium opacity-90 text-blue-900">Miễn phí giao hàng nội thành TP. Đà Nẵng cho đơn hàng sỉ</p>

                    <a
                        href="tel:0917987656"
                        className="no-underline bg-white text-[#005596] font-black px-12 py-5 rounded-2xl text-xl shadow-xl hover:bg-[#005596] hover:text-white transition-all transform hover:scale-105 active:scale-95"
                    >
                        GỌI NGAY: 0917 987 656
                    </a>
                </div>
            </div>
        </section>
    </div>
</div>
        </main>
    );
}