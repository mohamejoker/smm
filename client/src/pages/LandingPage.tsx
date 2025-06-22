import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Logo from '@/components/Common/Logo';
import { 
  Star, 
  Users, 
  Zap, 
  Shield, 
  TrendingUp, 
  Globe,
  CheckCircle,
  ArrowRight,
  Play,
  Award,
  Clock,
  Target,
  MessageSquare,
  BarChart3,
  Smartphone,
  Heart,
  Sparkles,
  Rocket,
  Brain,
  Eye,
  Headphones
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Zap,
      title: 'سرعة فائقة',
      description: 'تنفيذ الطلبات في ثوانٍ معدودة'
    },
    {
      icon: Shield,
      title: 'أمان مضمون',
      description: 'حماية كاملة لحسابك ومعلوماتك'
    },
    {
      icon: Users,
      title: 'دعم 24/7',
      description: 'فريق دعم متاح على مدار الساعة'
    },
    {
      icon: TrendingUp,
      title: 'نتائج مضمونة',
      description: 'زيادة حقيقية في المتابعين والتفاعل'
    }
  ];

  const services = [
    {
      icon: Users,
      title: 'زيادة المتابعين',
      description: 'متابعين حقيقيين ومتفاعلين من جميع أنحاء العالم',
      price: 'من 5$',
      popular: true
    },
    {
      icon: Heart,
      title: 'زيادة الإعجابات',
      description: 'إعجابات سريعة وآمنة لجميع منصات التواصل',
      price: 'من 2$',
      popular: false
    },
    {
      icon: Eye,
      title: 'زيادة المشاهدات',
      description: 'مشاهدات عالية الجودة لفيديوهاتك ومحتواك',
      price: 'من 3$',
      popular: false
    },
    {
      icon: MessageSquare,
      title: 'زيادة التعليقات',
      description: 'تعليقات حقيقية ومتنوعة تزيد من تفاعل المحتوى',
      price: 'من 4$',
      popular: false
    }
  ];

  const stats = [
    { value: '+50M', label: 'متابع تم إضافتهم', icon: Users },
    { value: '+2M', label: 'طلب مكتمل', icon: CheckCircle },
    { value: '99.9%', label: 'معدل النجاح', icon: Target },
    { value: '24/7', label: 'دعم فوري', icon: Clock }
  ];

  const testimonials = [
    {
      name: 'أحمد محمد',
      role: 'مؤثر على إنستغرام',
      content: 'خدمة رائعة! زاد عدد متابعيني من 1000 إلى 50000 في شهر واحد فقط.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'فاطمة علي',
      role: 'صاحبة متجر إلكتروني',
      content: 'أفضل استثمار قمت به لتنمية أعمالي. النتائج فاقت توقعاتي بكثير.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'محمد سالم',
      role: 'منشئ محتوى',
      content: 'الدعم الفني ممتاز والخدمة سريعة جداً. أنصح بها بشدة.',
      rating: 5,
      avatar: '🎬'
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: '📷', color: 'from-pink-500 to-purple-600' },
    { name: 'TikTok', icon: '🎵', color: 'from-black to-red-600' },
    { name: 'YouTube', icon: '📺', color: 'from-red-500 to-red-700' },
    { name: 'Facebook', icon: '👥', color: 'from-blue-500 to-blue-700' },
    { name: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-600' },
    { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-800' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo size="sm" />

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Link href="/login">
                <Button variant="ghost" className="text-gray-700 hover:text-blue-600">
                  تسجيل الدخول
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  إنشاء حساب
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg animate-pulse">
              🚀 منصة التسويق الرقمي #1 في المنطقة
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              نمو ذكي لوسائل التواصل الاجتماعي
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              خدمات احترافية لزيادة متابعيك وتفاعلك على جميع منصات التواصل الاجتماعي
              <br />
              بأفضل الأسعار وأعلى جودة في السوق
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  ابدأ الآن مجاناً
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-4 rounded-full border-2 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
                >
                  <Play className="ml-2 h-5 w-5" />
                  استكشف الخدمات
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                <span>بدون كلمات مرور</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-blue-500 ml-2" />
                <span>آمن 100%</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-yellow-500 ml-2" />
                <span>ضمان الاسترداد</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              ندعم جميع المنصات الشائعة
            </h2>
            <p className="text-lg text-gray-600">
              خدماتنا متاحة على أكثر من 20 منصة تواصل اجتماعي
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-br ${platform.color} rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <div className="text-white font-semibold text-sm">{platform.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              خدماتنا المميزة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              اختر من بين مجموعة واسعة من الخدمات المصممة لتنمية حضورك الرقمي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    الأكثر طلباً
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    اطلب الآن
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              لماذا تختار منصتنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نوفر لك أفضل الخدمات والأدوات لنمو حساباتك على وسائل التواصل الاجتماعي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              لوحة تحكم متقدمة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              تحكم في جميع خدماتك وتتبع نموك من خلال لوحة تحكم سهلة الاستخدام
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/dashboard-preview.png" 
                alt="لوحة التحكم" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              ماذا يقول عملاؤنا؟
            </h2>
            <p className="text-xl text-gray-600">
              آراء حقيقية من عملاء حققوا نجاحاً باهراً معنا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">
              ابدأ رحلتك نحو النجاح اليوم
            </h2>
            <p className="text-xl mb-8 opacity-90">
              انضم إلى آلاف العملاء الذين حققوا نجاحاً باهراً مع خدماتنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  ابدأ مجاناً الآن
                  <ArrowRight className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
                >
                  استكشف الخدمات
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo variant="white" size="sm" />
              <p className="text-gray-400 mt-4">
                منصة التسويق الرقمي الرائدة في المنطقة العربية
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">الخدمات</h3>
              <ul className="space-y-2 text-gray-400">
                <li>زيادة المتابعين</li>
                <li>زيادة الإعجابات</li>
                <li>زيادة المشاهدات</li>
                <li>زيادة التعليقات</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">الدعم</h3>
              <ul className="space-y-2 text-gray-400">
                <li>مركز المساعدة</li>
                <li>اتصل بنا</li>
                <li>الأسئلة الشائعة</li>
                <li>سياسة الخصوصية</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">تواصل معنا</h3>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400 mb-2">
                <Headphones className="h-4 w-4" />
                <span>دعم 24/7</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-400">
                <MessageSquare className="h-4 w-4" />
                <span>الرد خلال دقائق</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              © 2025 TownAI. جميع الحقوق محفوظة
            </div>
            <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">صُنع بـ</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-gray-400 text-sm">في المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

