"use client";
import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGoogle, FaYoutube, FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation"; // Thêm dòng này

function AppHeader() {
    const [active, setActive] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const pathname = usePathname(); // Lấy đường dẫn hiện tại (ví dụ: /Gioithieu)

    const icons = [
        { icon: FaFacebookF, color: "text-blue-600", link: "https://www.facebook.com/ChaCaCaySang/" },
        { icon: FaTwitter, color: "text-sky-400", link: "https://twitter.com/" },
        { icon: FaGoogle, color: "text-red-500", link: "https://www.google.com/" },
        { icon: FaYoutube, color: "text-red-600", link: "https://www.youtube.com/" },
    ];

    const navLinks = [
        { name: "Trang chủ", id: "trangchu", href: "/TrangChu" },
        { name: "Giới thiệu", id: "gioithieu", href: "/Gioithieu" },
        { name: "Tin tức", id: "tintuc", href: "/Tintuc" },
        { name: "Liên hệ", id: "lienhe", href: "/LienHe" },
        { name: "Đặt hàng", id: "dathang", href: "/DatHang" },
    ];
    const productCategories = [
        { name: "Chả cá chiên", href: "/SanPham/cha-ca-chien" },
        { name: "Chả cá hấp", href: "/SanPham/cha-ca-hap" },
        { name: "Chả cá sống", href: "/SanPham/cha-ca-tuoi" },
    ];

    const isActive = (href: string) => pathname === href;
    const getLinkStyle = (href: string) => `
        relative font-bold transition-all duration-300 py-2
        ${isActive(href) ? "text-[#350c87]" : "text-gray-700 hover:text-[#ff4500]"}
    `;


    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/TrangChu" onClick={() => setActive("TrangChu")}>
                            <Image
                                src="/Pictures/logo.png"
                                alt="logo"
                                width={80}
                                height={80}
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className={`${getLinkStyle(link.href)} no-underline text-gray-700 hover:text-[#ff4500] !decoration-transparent`}
                                onClick={() => setActive(link.id)}
                            >
                                {link.name}
                                <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-900 transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 hover:w-full"}`}></span>                            </Link>
                        ))}

                        {/* Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            {/* Dropdown này sẽ active nếu URL chứa "/SanPham" */}
                            <button className={`${pathname.includes('/SanPham') ? "text-[#350c87]" : "text-gray-700"} relative font-bold flex items-center gap-1 outline-none py-2`}>
                                Sản phẩm <FaChevronDown size={12} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-900 transition-all duration-300 ${pathname.includes('/SanPham') ? "w-full" : "w-0"}`}></span>
                            </button>

                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 w-56 bg-white shadow-xl border border-gray-100 py-2 rounded-lg transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                {productCategories.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => {
                                            setActive("dropdown");
                                            setIsDropdownOpen(false);
                                        }}
                                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff4500] transition-colors no-underline !decoration-transparent"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.id}
                                href={link.href}
                                className={`${getLinkStyle(link.href)} no-underline !decoration-transparent`}
                            >
                                {link.name}
                                <span className={`absolute left-0 bottom-0 h-0.5 bg-blue-900 transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 hover:w-full"}`}></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right side: Phone & Socials */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 transition-colors">
                            <div className="bg-blue-600 p-2 rounded-full text-white animate-pulse">
                                <FaPhoneAlt size={12} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-blue-900 font-bold text-xs">0917 987 656</span>
                                <span className="text-blue-900 font-bold text-xs">0914 168 712</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            {icons.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 hover:bg-white hover:shadow-md transition-all hover:-translate-y-1"
                                >
                                    <item.icon className={`${item.color} text-lg`} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 p-2"
                        >
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg max-h-[80vh] overflow-y-auto">
                    {/* Trang chủ & Giới thiệu */}
                    {navLinks.slice(0, 2).map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className="block px-3 py-3 text-base font-bold text-gray-700 hover:bg-orange-50 rounded-md no-underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="px-3 py-2">
                        <div className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                            Sản phẩm <FaChevronDown size={10} />
                        </div>
                        <div className="pl-4 border-l-2 border-orange-100 space-y-2">
                            {productCategories.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-2 text-sm text-gray-600 hover:text-[#ff4500] no-underline"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {navLinks.slice(2).map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className="block px-3 py-3 text-base font-bold text-gray-700 hover:bg-orange-50 rounded-md no-underline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default AppHeader;