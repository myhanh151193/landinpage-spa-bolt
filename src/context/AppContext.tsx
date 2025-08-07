import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types
export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  status: 'published' | 'draft';
  views: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  featured?: boolean;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  uploadDate: string;
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  phone: string;
  mobile: string;
  email: string;
  address: string;
  facebook: string;
  zalo: string;
  messenger: string;
}

interface AppContextType {
  services: Service[];
  setServices: (services: Service[]) => void;
  blogPosts: BlogPost[];
  setBlogPosts: (posts: BlogPost[]) => void;
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  galleryImages: GalleryImage[];
  setGalleryImages: (images: GalleryImage[]) => void;
  siteSettings: SiteSettings;
  setSiteSettings: (settings: SiteSettings) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Initial data
const initialServices: Service[] = [
  {
    id: 1,
    title: "Chăm Sóc Da Mặt",
    description: "Liệu pháp chăm sóc da chuyên sâu với công nghệ hiện đại và sản phẩm cao cấp",
    price: "Từ 800,000đ",
    image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    features: ["Làm sạch sâu", "Massage mặt", "Đắp mặt nạ", "Chăm sóc mắt"],
    category: "Chăm sóc da"
  },
  {
    id: 2,
    title: "Massage Thư Giãn",
    description: "Massage toàn thân với tinh dầu thiên nhiên giúp thư giãn cơ thể và tinh thần",
    price: "Từ 1,200,000đ",
    image: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    features: ["Massage cổ vai gáy", "Massage toàn thân", "Aromatherapy", "Hot stone"],
    category: "Massage"
  },
  {
    id: 3,
    title: "Liệu Pháp Thảo Dược",
    description: "Sử dụng thảo dược tự nhiên để detox và tái tạo năng lượng cho cơ thể",
    price: "Từ 1,500,000đ",
    image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    features: ["Tắm thảo dược", "Xông hơi", "Đắp bùn", "Massage bấm huyệt"],
    category: "Thảo dược"
  },
  {
    id: 4,
    title: "Gói VIP Premium",
    description: "Trải nghiệm dịch vụ cao cấp nhất với phòng riêng và dịch vụ cá nhân hóa",
    price: "Từ 3,000,000đ",
    image: "https://images.pexels.com/photos/7937255/pexels-photo-7937255.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    features: ["Phòng VIP riêng", "Butler cá nhân", "Menu đồ uống", "Yoga & meditation"],
    category: "VIP"
  },
  {
    id: 5,
    title: "Tắm Khoáng Nóng",
    description: "Tắm khoáng nóng giàu khoáng chất giúp thư giãn và chăm sóc da toàn thân",
    price: "Từ 600,000đ",
    image: "https://images.pexels.com/photos/6663577/pexels-photo-6663577.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    features: ["Jacuzzi khoáng", "Sauna khô", "Steam room", "Bể bơi thư giãn"],
    category: "Tiện ích"
  },
  {
    id: 6,
    title: "Chăm Sóc Cơ Thể",
    description: "Dịch vụ chăm sóc toàn diện cho cơ thể với các liệu pháp tái tạo",
    price: "Từ 900,000đ",
    image: "https://images.pexels.com/photos/7755257/pexels-photo-7755257.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    features: ["Tẩy tế bào chết", "Dưỡng ẩm", "Massage giảm stress", "Anti-aging"],
    category: "Chăm sóc cơ thể"
  }
];

const initialBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Bí Quyết Chăm Sóc Da Mặt Tại Nhà Hiệu Quả",
    excerpt: "Khám phá những phương pháp chăm sóc da đơn giản nhưng hiệu quả mà bạn có thể thực hiện ngay tại nhà để có làn da khỏe mạnh và rạng rỡ.",
    content: "Nội dung bài viết chi tiết...",
    author: "Dr. Linh Nguyễn",
    date: "15 Tháng 1, 2025",
    category: "Chăm Sóc Da",
    image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    status: 'published',
    views: "2.1K",
    featured: true
  },
  {
    id: 2,
    title: "Lợi Ích Tuyệt Vời Của Massage Đối Với Sức Khỏe",
    excerpt: "Tìm hiểu về những tác động tích cực của massage đối với cơ thể và tinh thần, từ giảm stress đến cải thiện tuần hoàn máu.",
    content: "Nội dung bài viết chi tiết...",
    author: "Ms. Mai Trần",
    date: "12 Tháng 1, 2025",
    category: "Massage & Thư Giãn",
    image: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    status: 'published',
    views: "1.8K"
  },
  {
    id: 3,
    title: "Thảo Dược Thiên Nhiên Trong Liệu Pháp Spa",
    excerpt: "Khám phá sức mạnh của các loại thảo dược tự nhiên được sử dụng trong các liệu pháp spa và tác dụng tuyệt vời của chúng.",
    content: "Nội dung bài viết chi tiết...",
    author: "Ms. Hương Võ",
    date: "10 Tháng 1, 2025",
    category: "Thảo Dược",
    image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    status: 'published',
    views: "1.5K"
  },
  {
    id: 4,
    title: "Cách Chọn Dịch Vụ Spa Phù Hợp Với Bạn",
    excerpt: "Hướng dẫn chi tiết giúp bạn lựa chọn dịch vụ spa phù hợp nhất với nhu cầu và tình trạng da của mình.",
    content: "Nội dung bài viết chi tiết...",
    author: "Dr. Linh Nguyễn",
    date: "8 Tháng 1, 2025",
    category: "Tư Vấn",
    image: "https://images.pexels.com/photos/7755257/pexels-photo-7755257.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    status: 'published',
    views: "1.2K"
  },
  {
    id: 5,
    title: "Xu Hướng Làm Đẹp 2025: Những Gì Bạn Cần Biết",
    excerpt: "Cập nhật những xu hướng làm đẹp mới nhất năm 2025 và cách áp dụng chúng vào routine chăm sóc của bạn.",
    content: "Nội dung bài viết chi tiết...",
    author: "Ms. Mai Trần",
    date: "5 Tháng 1, 2025",
    category: "Xu Hướng",
    image: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    status: 'published',
    views: "2.5K"
  },
  {
    id: 6,
    title: "Tắm Khoáng Nóng: Bí Quyết Thư Giãn Và Detox",
    excerpt: "Tìm hiểu về lợi ích của tắm khoáng nóng và cách tối đa hóa hiệu quả thư giãn và detox cho cơ thể.",
    content: "Nội dung bài viết chi tiết...",
    author: "Ms. Hương Võ",
    date: "3 Tháng 1, 2025",
    category: "Detox & Wellness",
    image: "https://images.pexels.com/photos/6663577/pexels-photo-6663577.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    status: 'published',
    views: "1.7K"
  }
];

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chị Lan Anh",
    role: "Doanh Nhân",
    image: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    content: "Serenity Spa là nơi tôi tin tưởng để thư giãn sau những ngày làm việc căng thẳng. Dịch vụ chuyên nghiệp, không gian sang trọng và đội ngũ nhân viên rất tận tình.",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    name: "Chị Minh Thư",
    role: "Giám Đốc Marketing",
    image: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    content: "Tôi đã thử nhiều spa nhưng chỉ có Serenity mới làm tôi cảm thấy thực sự hài lòng. Liệu pháp chăm sóc da của họ giúp da tôi trở nên mịn màng và rạng rỡ hơn rất nhiều.",
    rating: 5
  },
  {
    id: 3,
    name: "Chị Hương Giang",
    role: "Bác Sĩ",
    image: "https://images.pexels.com/photos/5069408/pexels-photo-5069408.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    content: "Massage thư giãn tại đây thực sự tuyệt vời! Sau mỗi lần đến, tôi cảm thấy cơ thể nhẹ nhàng và tinh thần sảng khoái. Đây chính là điều tôi cần sau những ca trực dài.",
    rating: 5
  },
  {
    id: 4,
    name: "Chị Phương Linh",
    role: "Nhà Thiết Kế",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    content: "Không gian tại Serenity Spa vô cùng yên tĩnh và thư giãn. Tôi đặc biệt yêu thích gói VIP Premium với dịch vụ cá nhân hóa. Đội ngũ nhân viên luôn chu đáo và chuyên nghiệp.",
    rating: 5
  },
  {
    id: 5,
    name: "Chị Thu Hà",
    role: "Luật Sư",
    image: "https://images.pexels.com/photos/3866555/pexels-photo-3866555.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    content: "Tôi đã giới thiệu Serenity Spa cho nhiều bạn bè và đồng nghiệp. Mọi người đều rất hài lòng với chất lượng dịch vụ. Giá cả hợp lý so với những gì nhận được.",
    rating: 5
  },
  {
    id: 6,
    name: "Chị Mai Phương",
    role: "Nhà Báo",
    image: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    content: "Liệu pháp thảo dược tại đây thực sự hiệu quả. Da tôi trở nên sáng khỏe và mịn màng hơn nhiều. Tôi sẽ tiếp tục tin tưởng và sử dụng dịch vụ của Serenity Spa.",
    rating: 5
  }
];

const initialGalleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Spa reception area",
    category: "Không gian",
    uploadDate: "2025-01-15"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Facial treatment",
    category: "Dịch vụ",
    uploadDate: "2025-01-14"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Massage therapy",
    category: "Dịch vụ",
    uploadDate: "2025-01-13"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/7937255/pexels-photo-7937255.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "VIP room",
    category: "Không gian",
    uploadDate: "2025-01-12"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Herbal treatment",
    category: "Dịch vụ",
    uploadDate: "2025-01-11"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/6663577/pexels-photo-6663577.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Hot spring bath",
    category: "Tiện ích",
    uploadDate: "2025-01-10"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/7755257/pexels-photo-7755257.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Body treatment",
    category: "Dịch vụ",
    uploadDate: "2025-01-09"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/6663390/pexels-photo-6663390.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Relaxation area",
    category: "Không gian",
    uploadDate: "2025-01-08"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/5069408/pexels-photo-5069408.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    alt: "Spa products",
    category: "Sản phẩm",
    uploadDate: "2025-01-07"
  }
];

const initialSiteSettings: SiteSettings = {
  siteName: 'Serenity Spa',
  siteDescription: 'Thiên đường thư giãn và làm đẹp hàng đầu tại Việt Nam',
  phone: '+84 28 1234 5678',
  mobile: '+84 901 234 567',
  email: 'info@serenityspa.com',
  address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
  facebook: 'https://facebook.com/serenityspa',
  zalo: 'https://zalo.me/0901234567',
  messenger: 'https://m.me/serenityspa'
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(initialGalleryImages);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(initialSiteSettings);

  return (
    <AppContext.Provider value={{
      services,
      setServices,
      blogPosts,
      setBlogPosts,
      testimonials,
      setTestimonials,
      galleryImages,
      setGalleryImages,
      siteSettings,
      setSiteSettings
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};