import { motion } from 'framer-motion';

export const ProductDetailModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        layoutId={`product-${product.id}`}
        className="bg-white rounded-[2rem] max-w-4xl w-full overflow-hidden relative shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-5 right-5 z-10 text-gray-400 hover:text-red-500 text-2xl">✕</button>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-slate-50 p-8 flex items-center justify-center">
             <img src={product.image} alt={product.name} className="max-h-[400px] object-contain drop-shadow-xl" />
          </div>

          {/* Thông tin chi tiết lấy từ data */}
          <div className="md:w-1/2 p-8 md:p-12">
            <h2 className="text-3xl font-extrabold text-[#005596] mb-2">{product.name}</h2>
            <p className="text-[#00b4d8] font-bold text-2xl mb-6">Giá: {product.price}</p>
            
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p><strong>✨ Đặc điểm:</strong> {product.description}</p>
              <p><strong>🐟 Thành phần:</strong> {product.ingredients}</p>
              <p><strong>❄️ Bảo quản:</strong> {product.storage}</p>
              <p><strong>📜 Chứng nhận:</strong> {product.cert}</p>
            </div>

            <button 
              onClick={() => onAddToCart(product)}
              className="mt-10 w-full bg-[#005596] text-white py-4 rounded-2xl font-bold hover:bg-[#00b4d8] transition-all shadow-lg"
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};