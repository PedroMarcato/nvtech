import { useState, useRef, useEffect } from "react";
import "../css/CarouselCell.css";

const CarouselCell = ({ banners = [] }) => {
  const [current, setCurrent] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startX = useRef(null);

  // Garante que sempre temos exatamente 3 banners
  const defaultBanners = [
    { image: "https://i.imgur.com/iPOHVCU.png", title: "Inicial" },
    { image: "https://i.imgur.com/h9P1LCG.png", title: "Real Lacto" },
    { image: "https://i.imgur.com/Ow93R8l.png", title: "Municipio" },
    { image: "https://i.imgur.com/3mqn2Zi.png", title: "Gmaxx" }
  ];

  const displayBanners = banners.length >= 3 ? banners.slice(0, 3) : 
                        banners.length > 0 ? [...banners, ...defaultBanners].slice(0, 3) : 
                        defaultBanners;

  // Detecta se é dispositivo móvel
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Início do arrasto
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsGrabbing(true);
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    setDragOffset(0);
  };

  // Durante o arrasto
  const handleTouchMove = (e) => {
    if (!isGrabbing || startX.current === null || !isMobile) return;
    e.preventDefault(); // Previne scroll da página
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - startX.current);
  };

  // Fim do arrasto
  const handleTouchEnd = () => {
    if (!isMobile) return;
    setIsGrabbing(false);
    if (Math.abs(dragOffset) > 100) { // Reduzido para ser mais responsivo
      if (dragOffset < 0) {
        setCurrent((prev) => (prev + 1) % displayBanners.length);
      } else {
        setCurrent((prev) => (prev - 1 + displayBanners.length) % displayBanners.length);
      }
    }
    setDragOffset(0);
    startX.current = null;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  // Auto-slide apenas em mobile
  useEffect(() => {
    if (isGrabbing || !isMobile) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % displayBanners.length);
    }, 5000); // 5 segundos para melhor experiência mobile

    return () => clearInterval(interval);
  }, [isGrabbing, displayBanners.length, isMobile]);

  // Função para ir para slide específico
  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Calcula o deslocamento do slide
  const slideStyle = {
    transform: `translateX(calc(${-current * 100}% + ${dragOffset}px))`,
    transition: isGrabbing ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "transform",
  };

  // Não renderiza nada se não for mobile
  if (!isMobile) return null;

  if (!displayBanners || displayBanners.length === 0) return null;

  return (
    <div className="mobile-carousel-wrapper">
      <div
        className={`mobile-carousel-container ${isGrabbing ? "mobile-carousel-grabbing" : ""}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={() => {
          setIsGrabbing(false);
          setDragOffset(0);
          startX.current = null;
        }}
        onDragStart={handleDragStart}
      >
        <div className="mobile-carousel-inner">
          <div className="mobile-carousel-slide" style={slideStyle}>
            {displayBanners.map((banner, idx) => (
              <img
                key={idx}
                src={banner.image}
                alt={banner.title || `Banner ${idx + 1}`}
                className="mobile-carousel-banner"
                draggable={false}
                loading={idx === 0 ? "eager" : "lazy"} // Carrega primeiro banner imediatamente
              />
            ))}
          </div>
        </div>
        
        {/* Indicadores de slide */}
        <div className="mobile-carousel-indicators">
          {displayBanners.map((_, idx) => (
            <div
              key={idx}
              className={`mobile-carousel-indicator ${idx === current ? 'mobile-carousel-indicator-active' : ''}`}
              onClick={() => goToSlide(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Ir para slide ${idx + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  goToSlide(idx);
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCell;