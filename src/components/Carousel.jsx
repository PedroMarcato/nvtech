import { useState, useRef, useEffect } from "react";
import "../css/Carousel.css";

const Carousel = ({ banners }) => {
  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startX = useRef(null);


  // Início do arrasto
  const handleTouchStart = (e) => {
    setIsGrabbing(true);
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    setDragOffset(0);
  };

  // Durante o arrasto
  const handleTouchMove = (e) => {
    if (!isGrabbing || startX.current === null) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setDragOffset(clientX - startX.current);
  };

  // Fim do arrasto
  const handleTouchEnd = () => {
    setIsGrabbing(false);
    if (Math.abs(dragOffset) > 150) {
      if (dragOffset < 0) {
        setCurrent((prev) => (prev + 1) % banners.length);
      } else {
        setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
      }
    }
    setDragOffset(0);
    startX.current = null;
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  // Auto-slide
  useEffect(() => {
    if (!open || isGrabbing) return; // só passa se estiver aberto e não estiver arrastando
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000); // troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [open, isGrabbing, banners.length]);

  // Calcula o deslocamento do slide
  const slideStyle = {
    transform: `translateX(calc(${-current * 100}% + ${dragOffset}px))`,
    transition: isGrabbing ? "none" : "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "transform",
  };

   if (!banners || banners.length === 0) return null;

  return (
    <div className="carousel-outer">
        
      {!open ? (
        <button onClick={() => setOpen(true)}>
            <i className={`fa-solid fa-angle-up${open ? " rotate" : ""}`}></i>Mostrar Serviços
        </button>
      ) : (
        <div>
          <button onClick={() => setOpen(false)}>
            <i className={`fa-solid fa-angle-up${open ? " rotate" : ""}`}></i>Esconder Serviços
          </button>
          <div
            className={`carousel-container${open ? " open" : ""} ${isGrabbing ? " grabbing" : ""}`}
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
            <div className="carousel-inner">
            <div className="carousel-slide" style={slideStyle}>
              {banners.map((banner, idx) => (
                <img
                  key={idx}
                  src={banner.image}
                  alt="Banner"
                  className="carousel-banner"
                  draggable={false}
                />
              ))}
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;