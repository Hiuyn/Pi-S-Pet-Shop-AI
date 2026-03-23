import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Share2, MessageCircle, Heart } from 'lucide-react';

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => {
    return BLOG_POSTS.find(p => p.id === id);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Không tìm thấy bài viết</h2>
        <Link to="/blog" className="text-primary-blue font-bold hover:underline">Quay lại trang tin tức</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-primary-blue transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Quay lại
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-primary-blue/10 text-primary-blue px-4 py-1 rounded-full text-sm font-bold">
              {post.category}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="relative aspect-video rounded-[40px] overflow-hidden mb-12 shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid md:grid-cols-[1fr_200px] gap-12">
            <div className="prose prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-8 italic border-l-4 border-primary-blue pl-6">
                {post.excerpt}
              </p>
              
              <div className="text-slate-700 leading-relaxed space-y-6 text-lg">
                <p>
                  Chăm sóc thú cưng không chỉ là việc cung cấp thức ăn và chỗ ở, mà còn là một hành trình xây dựng tình cảm và sự thấu hiểu. Mỗi loài thú cưng đều có những đặc điểm tâm sinh lý riêng biệt mà người nuôi cần nắm vững để đảm bảo chúng luôn khỏe mạnh và hạnh phúc.
                </p>
                <p>
                  Trong bài viết này, chúng ta sẽ cùng đi sâu vào những khía cạnh quan trọng nhất của việc chăm sóc, từ chế độ dinh dưỡng cân bằng, môi trường sống an toàn cho đến việc rèn luyện thói quen và kiểm tra sức khỏe định kỳ.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Chế độ dinh dưỡng là nền tảng</h2>
                <p>
                  Dinh dưỡng đóng vai trò quyết định đến tuổi thọ và chất lượng cuộc sống của thú cưng. Bạn nên lựa chọn các loại hạt hoặc thức ăn tươi phù hợp với độ tuổi, giống loài và mức độ vận động của chúng. Đừng quên luôn cung cấp nước sạch và hạn chế các loại thức ăn của người có thể gây hại như sô-cô-la, hành tỏi hay đồ ăn quá mặn.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Môi trường sống và vận động</h2>
                <p>
                  Một không gian sống sạch sẽ, thoáng mát sẽ giúp thú cưng tránh được các bệnh về da và hô hấp. Bên cạnh đó, việc dành thời gian chơi đùa và dắt chúng đi dạo hàng ngày là vô cùng cần thiết để giải tỏa năng lượng, tránh tình trạng stress hay béo phì.
                </p>
                <p>
                  Hy vọng những chia sẻ trên sẽ giúp bạn có thêm kiến thức bổ ích để chăm sóc "người bạn nhỏ" của mình tốt hơn. Hãy luôn dành tình yêu thương và sự kiên nhẫn, bạn sẽ nhận lại được sự trung thành và niềm vui vô bờ bến từ chúng.
                </p>
              </div>

              <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors">
                    <Heart size={24} /> <span className="font-bold">124</span>
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 hover:text-primary-blue transition-colors">
                    <MessageCircle size={24} /> <span className="font-bold">12</span>
                  </button>
                </div>
                <button className="flex items-center gap-2 text-slate-500 hover:text-primary-blue transition-colors">
                  <Share2 size={24} /> <span className="font-bold">Chia sẻ</span>
                </button>
              </div>
            </div>

            <aside className="hidden md:block">
              <div className="sticky top-32">
                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Tác giả</h4>
                <div className="flex items-center gap-3 mb-8">
                  <img
                    src="https://i.pravatar.cc/150?u=admin"
                    alt="Admin"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-slate-800 text-sm">Pi Sà Admin</p>
                    <p className="text-xs text-slate-400">Chuyên gia thú cưng</p>
                  </div>
                </div>

                <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Tags phổ biến</h4>
                <div className="flex flex-wrap gap-2">
                  {['#chamsoc', '#meo', '#cho', '#dinhduong', '#camnang'].map(tag => (
                    <span key={tag} className="text-xs bg-slate-50 text-slate-500 px-3 py-1 rounded-lg hover:bg-primary-blue/10 hover:text-primary-blue cursor-pointer transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
