import React, { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";
// The problematic "video.css" import that was here has been REMOVED.

// Import Swiper for the carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { PlayCircle } from 'lucide-react';
import './Gallery.css';

// Vimeo embed info for each video
const galleryVideos = [
  {
    vimeoUrl: 'https://player.vimeo.com/video/1096808301?badge=0&autopause=0&player_id=0&app_id=58479',
    thumbnail: '/assets/images/gallerythumbnails/@jlew_lifts.avif',
    title: '@jlew_lifts',
    category: 'Demo'
  },
  {
    vimeoUrl: 'https://player.vimeo.com/video/1096801705?badge=0&autopause=0&player_id=0&app_id=58479',
    thumbnail: '/assets/images/gallerythumbnails/A&I Hospitality.jpg',
    title: 'A&I Hospitality',
    category: 'Demo'
  },
  {
    vimeoUrl: 'https://player.vimeo.com/video/1096810585?badge=0&autopause=0&player_id=0&app_id=58479',
    thumbnail: '/assets/images/gallerythumbnails/Tre Sorelle.avif',
    title: 'Tre Sorelle',
    category: 'Demo'
  },
  {
    vimeoUrl: 'https://player.vimeo.com/video/1096809566?badge=0&autopause=0&player_id=0&app_id=58479',
    thumbnail: "/assets/images/gallerythumbnails/Shephard's Kitchen x Viva La Noche.avif",
    title: "Shephard's Kitchen x Viva La Noche",
    category: 'Demo'
  },
];

const Gallery: React.FC = () => {
  const [modalIndex, setModalIndex] = useState(-1);


  // Use a local mobile detection hook to avoid require and hook call issues
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent horizontal scroll on mobile by setting CSS on mount
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      document.body.style.width = '100vw';
      document.documentElement.style.width = '100vw';
    } else {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.body.style.width = '';
      document.documentElement.style.width = '';
    }
    return () => {
      document.body.style.overflowX = '';
      document.documentElement.style.overflowX = '';
      document.body.style.width = '';
      document.documentElement.style.width = '';
    };
  }, [isMobile]);

  // No slides needed for iframe modal

  return (
    <>
      <section
        id="gallery"
        className="py-20 px-4 bg-gradient-to-br from-blue-200 via-white to-orange-200 overflow-hidden relative"
        style={{ maxWidth: '100vw', overflowX: 'hidden' }}
      >
        {/* Original decorative background shapes */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-100 via-pink-100 to-yellow-100 opacity-30 rounded-full blur-2xl z-0" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 opacity-40 rounded-full blur-3xl z-0" aria-hidden="true"></div>
        <div className="absolute top-1/3 right-0 w-40 h-40 bg-gradient-to-tr from-yellow-200 via-pink-100 to-blue-100 opacity-30 rounded-full blur-2xl z-0" aria-hidden="true"></div>
        {/* Extra decorative shapes */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-br from-pink-200 via-blue-100 to-purple-100 opacity-30 rounded-full blur-2xl z-0" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-24 bg-gradient-to-tr from-blue-100 via-yellow-100 to-pink-100 opacity-20 rounded-full blur-2xl z-0 rotate-12" aria-hidden="true"></div>
        <div className="absolute top-2/3 left-1/3 w-24 h-24 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 opacity-20 rounded-full blur-2xl z-0" aria-hidden="true"></div>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Gallery</h2>
          <p className="text-lg text-gray-600 mt-2">A look into our creative process and results.</p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          navigation={!isMobile}
          loop={true}
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={isMobile ? 20 : 40}
          pagination={{ clickable: true }}
          className="portfolio-swiper"
          style={{ maxWidth: '100vw', overflowX: 'hidden' }}
        >
          {galleryVideos.map((video, idx) => (
            <SwiperSlide key={idx} onClick={() => setModalIndex(idx)}>
              <div
                className="gallery-item"
                style={isMobile ? { maxWidth: '100vw', margin: '0 auto', overflowX: 'hidden' } : {}}
              >
                <div
                className="gallery-thumbnail"
                style={isMobile ? { width: '100%', maxWidth: 400, height: 200, margin: '0 auto', overflow: 'hidden', borderRadius: '0.75rem' } : {}}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="thumbnail-image"
                    style={isMobile ? { width: '100%', maxWidth: 400, height: 200, objectFit: 'cover', margin: '0 auto', display: 'block', borderRadius: '0.75rem' } : {}}
                  />
                  <div className="thumbnail-overlay">
                    <PlayCircle size={isMobile ? 96 : 64} className="play-icon" />
                  </div>
                </div>
                <h3 className="gallery-title text-gray-800">{video.title}</h3>
                {/* Removed category display */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Custom Vimeo Modal */}
      {modalIndex >= 0 && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setModalIndex(-1)}
        >
          <div
            style={
              isMobile
                ? { position: 'relative', width: '98vw', maxWidth: 700, aspectRatio: '16/9', background: '#000' }
                : { position: 'relative', width: '90vw', maxWidth: 1200, aspectRatio: '16/9', background: '#000' }
            }
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src={galleryVideos[modalIndex].vimeoUrl}
              style={isMobile ? { width: '100%', height: '100%', minHeight: 300, border: 0 } : { width: '100%', height: '100%', border: 0 }}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              title={galleryVideos[modalIndex].title}
            />
            <button
              onClick={() => setModalIndex(-1)}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                borderRadius: 4,
                padding: '6px 12px',
                cursor: 'pointer',
                fontSize: 24,
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;