import { newsData } from '@/app/data/news';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ChevronLeft, Share2, Clock, User } from 'lucide-react';

export default async function DetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = newsData.find((item) => item.slug === slug);

  if (!news) {
    return notFound();
  }

  const relatedNews = newsData.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link
          href="/Tintuc"
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#005596] transition-colors mb-6 group"
        >
          <ChevronLeft size={18} className="mr-1 transform group-hover:-translate-x-1 transition-transform" />
          Quay lại danh sách tin tức
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {news.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 md:gap-8 text-sm text-gray-500 border-y border-gray-100 py-5">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-[#005596]" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} className="text-[#005596]" />
              <span>Đăng bởi Admin</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#005596]" />
              <span>5 phút đọc</span>
            </div>
          </div>
        </header>

        <div className="mb-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#005596] to-[#00b4d8] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src={news.image}
            alt={news.title}
            className="relative rounded-2xl w-full h-[300px] md:h-[500px] object-cover shadow-xl"
          />
        </div>

        {/* Nội dung chính bài viết */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div
              className="prose prose-lg prose-blue max-w-none 
                        prose-headings:text-[#005596] 
                        prose-headings:font-bold 
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                        prose-p:text-gray-700 prose-p:leading-relaxed
                        prose-li:text-gray-600 prose-strong:text-[#005596]
                        prose-blockquote:border-l-[#00b4d8] prose-blockquote:bg-blue-50 
                        prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:italic
                        prose-img:rounded-3xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Share2 size={20} className="text-[#005596]" />
                </div>
                <span className="font-bold text-gray-800">Chia sẻ bài viết này</span>
              </div>
              <div className="flex gap-3">
                <button className="px-5 py-2.5 bg-[#1877F2] text-white rounded-xl font-medium text-sm hover:opacity-90 transition-opacity">Facebook</button>
                <button className="px-5 py-2.5 bg-[#0068FF] text-white rounded-xl font-medium text-sm hover:opacity-90 transition-opacity">Zalo</button>
                <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium text-sm hover:bg-gray-50 transition-colors">Sao chép link</button>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#00b4d8] rounded-full"></span>
                Tin liên quan
              </h3>
              <div className="space-y-6">
                {relatedNews.map((item) => (
                  <Link key={item.slug} href={`/Tintuc/${item.slug}`} className="group block">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:ring-2 ring-[#00b4d8] transition-all"
                      />
                      <div className="flex flex-col justify-center">
                        <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                        <h4 className="text-sm font-bold text-gray-800 group-hover:text-[#005596] line-clamp-2 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-10 p-6 bg-gradient-to-br from-[#005596] to-[#00b4d8] rounded-3xl text-white shadow-lg shadow-blue-200/50">
                <h4 className="font-bold mb-2 text-lg">Cẩm nang nội trợ</h4>
                <p className="text-xs opacity-90 mb-4 leading-relaxed">Nhận ngay các bí quyết nấu ăn ngon từ chuyên gia hàng tháng.</p>
                <button className="w-full bg-white text-[#005596] font-bold py-3 rounded-xl text-sm hover:bg-gray-100 transition-colors shadow-md">
                  Đăng ký nhận tin
                </button>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}