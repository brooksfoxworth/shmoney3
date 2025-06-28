import { ExternalLink, ArrowRight, Sparkles, TrendingUp, Users, Target } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Viva La Noche',
      category: 'Web Design',
      result: 'Stunning Digital Experience',
      image: '/assets/images/vln thumbnail.jpg',
      description: 'Crafted a stunning web design that captures the vibrant essence of Japanese cuisine and nightlife culture',
      icon: Target,
      color: 'from-blue-500 to-cyan-400',
      link: 'https://vlncatering.com/'
    },
    {
      title: '@jlew_lifts',
      category: 'Social Media Growth',
      result: 'Community Building',
      image: '/assets/images/jacob thumnail.png',
      description: 'Building an engaged fitness community through authentic storytelling',
      icon: Users,
      color: 'from-orange-500 to-pink-400',
      link: 'https://www.instagram.com/jlew_lifts/'
    },
    {
      title: 'A&I Hospitality',
      category: 'Growth Marketing',
      result: 'Market Breakthrough',
      image: '/assets/images/a&i thumbnail.jpg',
      description: 'Connecting talented hospitality professionals with top restaurants through strategic staffing solutions',
      icon: TrendingUp,
      color: 'from-purple-500 to-blue-400'
    }
  ];

  // Mobile detection
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio | Myrtle Beach Digital Marketing & Web Design</title>
        <meta name="description" content="Explore our portfolio of web design, digital marketing, videography, and website development projects in Myrtle Beach, South Carolina. See how we help local businesses make waves online." />
        <meta name="keywords" content="Myrtle Beach, South Carolina, web design, digital marketing, branding, portfolio, creative agency, SEO, social media, business growth, videography, website development" />
        <meta property="og:title" content="Portfolio | Myrtle Beach Digital Marketing & Web Design" />
        <meta property="og:description" content="Discover our Myrtle Beach-based portfolio of web design, digital marketing, videography, and website development projects. Helping South Carolina businesses grow online." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://yourdomain.com/portfolio" />
        <meta property="og:site_name" content="Your Myrtle Beach Creative Agency" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Myrtle Beach Digital Marketing & Web Design" />
        <meta name="twitter:description" content="See our Myrtle Beach, SC portfolio of web design, digital marketing, videography, and website development projects for local businesses." />
      </Helmet>
      <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-60 -translate-y-48 translate-x-48 animate-float-slow"></div>
      {/* Orange ball only on desktop */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-100 to-transparent rounded-full opacity-60 translate-y-48 -translate-x-48 animate-float-slow"></div>
      {/* Mirrored ball for symmetry */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-transparent rounded-full opacity-60 translate-y-48 translate-x-48 animate-float-slow"></div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mb-6 shadow-lg animate-pulse-slow">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Making{' '}
            <span className={
              `bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent font-extrabold relative ` +
              (!isMobile ? 'animate-gradient-shimmer' : '')
            }>
              Waves
              {!isMobile && (
                <span className="absolute left-0 top-0 w-full h-full animate-shimmer-smooth pointer-events-none"></span>
              )}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project is a new adventure. Here's how we've helped brands 
            make their mark in the digital ocean.
          </p>
        </div>

        {isMobile ? (
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            navigation={false}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            className="portfolio-swiper mb-16"
            style={{ maxWidth: '100vw', overflowX: 'hidden' }}
          >
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <SwiperSlide key={index}>
                <Card 
                  className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-white/80 backdrop-blur-sm ${project.link ? 'cursor-pointer' : ''} before:absolute before:inset-0 before:rounded-lg before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:bg-gradient-to-r before:from-blue-400 before:to-orange-400 before:blur-md before:z-20`}
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  style={{ maxWidth: 400, margin: '0 auto' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                         style={{ background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}>
                    </div>
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-2 text-white mb-2">
                            <IconComponent className="w-5 h-5" />
                            <span className="font-semibold">{project.category}</span>
                          </div>
                          <div className="text-orange-300 font-medium">{project.result}</div>
                        </div>
                      </div>
                      {/* Floating icon */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`inline-block bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                          {project.category}
                        </span>
                        {project.link ? (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-orange-500 transition-all duration-300 group/btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-6 w-6 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-transform duration-300" />
                          </a>
                        ) : (
                          <button className="text-primary hover:text-orange-500 transition-all duration-300 group/btn">
                            <ExternalLink className="h-6 w-6 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-transform duration-300" />
                          </button>
                        )}
                      </div>
                    </CardContent>
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-orange-400 transition-all duration-500 opacity-0 group-hover:opacity-50"></div>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index} 
                  className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 border-0 bg-white/80 backdrop-blur-sm ${project.link ? 'cursor-pointer' : ''}`}
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, '_blank', 'noopener,noreferrer');
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
                       style={{ background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})` }}>
                  </div>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 text-white mb-2">
                          <IconComponent className="w-5 h-5" />
                          <span className="font-semibold">{project.category}</span>
                        </div>
                        <div className="text-orange-300 font-medium">{project.result}</div>
                      </div>
                    </div>
                    {/* Floating icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`inline-block bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}>
                        {project.category}
                      </span>
                      {project.link ? (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-orange-500 transition-all duration-300 group/btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-6 w-6 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-transform duration-300" />
                        </a>
                      ) : (
                        <button className="text-primary hover:text-orange-500 transition-all duration-300 group/btn">
                          <ExternalLink className="h-6 w-6 group-hover/btn:scale-125 group-hover/btn:rotate-12 transition-transform duration-300" />
                        </button>
                      )}
                    </div>
                  </CardContent>
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-400 group-hover:to-orange-400 transition-all duration-500 opacity-0 group-hover:opacity-50"></div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Call to action with special styling */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 p-1 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group animate-pulse-cta">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gray-800 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 group-hover:bg-transparent group-hover:text-white flex items-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10">Ready to Make Waves?</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
              {/* Button shimmer */}
              <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer pointer-events-none rounded-xl"></span>
            </button>
          </div>
          <p className="text-gray-500 mt-4 text-sm">Let's create something extraordinary together</p>
        </div>
      </div>
      </section>
    </>
  );
};



// Custom animation styles for pizzazz (final seamless & natural motion)
const style = document.createElement('style');
style.innerHTML = `
@keyframes gradient-shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
.animate-gradient-shimmer {
  background-size: 200% 200%;
  animation: gradient-shimmer 7s cubic-bezier(0.4,0,0.2,1) infinite;
}
@keyframes shimmer-smooth {
  0% {
    opacity: 0.7;
    left: -60%;
  }
  100% {
    opacity: 0.7;
    left: 120%;
  }
}
.animate-shimmer-smooth {
  position: absolute;
  top: 0; left: -60%;
  width: 160%; height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.7) 60%, transparent 100%);
  filter: blur(1.2px);
  animation: shimmer-smooth 2.8s linear infinite;
  pointer-events: none;
}
@keyframes float-natural {
  0%   { transform: translateY(0) scale(1); }
  10%  { transform: translateY(-8px) scale(1.01); }
  25%  { transform: translateY(-18px) scale(1.02); }
  40%  { transform: translateY(-10px) scale(1.01); }
  50%  { transform: translateY(0) scale(1); }
  60%  { transform: translateY(10px) scale(0.99); }
  75%  { transform: translateY(18px) scale(0.98); }
  90%  { transform: translateY(8px) scale(0.99); }
  100% { transform: translateY(0) scale(1); }
}
.animate-float {
  animation: float-natural 8s cubic-bezier(0.4,0,0.2,1) infinite;
}
.animate-float-slow {
  animation: float-natural 13s cubic-bezier(0.4,0,0.2,1) infinite;
}
@keyframes pulse-cta {
  0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
  50% { box-shadow: 0 0 24px 8px rgba(59,130,246,0.15); }
}
.animate-pulse-cta { animation: pulse-cta 2.5s infinite; }
.animate-pulse-slow { animation: pulse 2.5s infinite; }
`;
if (!document.head.querySelector('style[data-portfolio-anim]')) {
  style.setAttribute('data-portfolio-anim', 'true');
  document.head.appendChild(style);
}

export default Portfolio;
