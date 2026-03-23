import { Product, Category, BlogPost, Testimonial } from './types';

export const PRODUCT_CATEGORIES: Category[] = [
  { id: '1', name: 'Đồ ăn', icon: '🍖' },
  { id: '2', name: 'Phụ kiện', icon: '🎀' },
  { id: '3', name: 'Đồ chơi', icon: '🧸' },
  { id: '4', name: 'Sức khỏe', icon: '💊' },
];

export const BLOG_CATEGORIES: Category[] = [
  ...PRODUCT_CATEGORIES,
  { id: '5', name: 'Góc chia sẻ', icon: '💬' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Hạt Neko Kitchen Premium',
    price: 250000,
    image: '/images/hat-neko.png',
    category: 'Đồ ăn',
    description: 'Thức ăn hạt cao cấp cho mèo với đầy đủ dinh dưỡng.',
  },
  {
    id: '2',
    name: 'Vòng cổ chuông Pi Sà',
    price: 45000,
    image: '/images/vong-co-chuong.png',
    category: 'Phụ kiện',
    description: 'Vòng cổ xinh xắn có chuông cho thú cưng.',
  },
  {
    id: '3',
    name: 'Cần câu mèo lông vũ',
    price: 35000,
    image: '/images/can-cau-meo-long-vu.png',
    category: 'Đồ chơi',
    description: 'Đồ chơi tương tác giúp mèo vận động.',
  },
  {
    id: '4',
    name: 'Pate cá ngừ tươi',
    price: 15000,
    image: '/images/pate-ca-ngu.png',
    category: 'Đồ ăn',
    description: 'Pate thơm ngon từ cá ngừ đại dương.',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Cách chăm sóc mèo con mới về nhà',
    excerpt: 'Những lưu ý quan trọng khi bạn đón một thành viên mới...',
    image: 'https://picsum.photos/seed/blog1/600/400',
    date: '20/03/2024',
    category: 'Góc chia sẻ',
  },
  {
    id: '2',
    title: 'Top 5 loại đồ chơi mèo yêu thích nhất',
    excerpt: 'Khám phá những món đồ chơi khiến Boss không thể rời mắt...',
    image: 'https://picsum.photos/seed/blog2/600/400',
    date: '18/03/2024',
    category: 'Đồ chơi',
  },
  {
    id: '3',
    title: 'Chế độ dinh dưỡng cho chó già',
    excerpt: 'Khi cún cưng bước sang tuổi xế chiều, bạn cần thay đổi...',
    image: 'https://picsum.photos/seed/blog3/600/400',
    date: '15/03/2024',
    category: 'Sức khỏe',
  },
  {
    id: '4',
    title: 'Kinh nghiệm huấn luyện cún đi vệ sinh đúng chỗ',
    excerpt: 'Việc huấn luyện cún đi vệ sinh đúng chỗ không hề khó nếu bạn biết cách...',
    image: 'https://picsum.photos/seed/blog4/600/400',
    date: '12/03/2024',
    category: 'Góc chia sẻ',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Nguyễn Văn A',
    comment: 'Sản phẩm rất chất lượng, mèo nhà mình rất thích hạt ở đây!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=a',
  },
  {
    id: '2',
    name: 'Trần Thị B',
    comment: 'Giao hàng nhanh, đóng gói cẩn thận. Sẽ ủng hộ dài dài.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=b',
  },
  {
    id: '3',
    name: 'Lê Văn C',
    comment: 'Đồ chơi rất bền, cún nhà mình chơi mãi không hỏng.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=c',
  },
];
