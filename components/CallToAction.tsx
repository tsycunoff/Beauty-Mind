import React, { useState, useEffect, useRef } from 'react';

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
    <path d="m12 5 7 7-7 7"/>
  </svg>
);

const CallToAction = ({ onConnectClick }) => {
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-[#FFF8F5] relative overflow-hidden">
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <div 
        className="absolute top-20 right-20 w-24 h-24 rounded-full opacity-10 animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, #F48CA7, transparent 70%)',
          filter: 'blur(30px)',
          animationDuration: '6s'
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-8 animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, #EECFAE, transparent 70%)',
          filter: 'blur(40px)',
          animationDuration: '8s',
          animationDelay: '2s'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className={`group relative transition-all duration-1000 ease-out transform will-change-transform ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          
          {/* Main CTA container with enhanced gradients */}
          <div 
            className="relative bg-gradient-to-br from-[#F48CA7] to-[#C5536C] text-white rounded-2xl p-10 md:p-16 text-center shadow-2xl transition-all duration-700 ease-out transform hover:scale-[1.01] hover:-translate-y-1 hover:shadow-3xl overflow-hidden"
            style={{ 
              boxShadow: isHovering 
                ? '0 25px 50px -12px rgba(244, 140, 167, 0.25), 0 0 80px -20px rgba(244, 140, 167, 0.15)' 
                : '0 20px 25px -5px rgba(244, 140, 167, 0.1), 0 10px 10px -5px rgba(244, 140, 167, 0.04)'
            }}
          >
            
            {/* Enhanced background gradient overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(238, 207, 174, 0.1) 0%, transparent 50%, rgba(244, 140, 167, 0.1) 100%)' }}
            />

            {/* Subtle grid pattern for depth */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
            </div>

            {/* Animated glow effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 pointer-events-none">
              <div 
                className="absolute inset-0 rounded-2xl blur-2xl transform scale-105"
                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(238, 207, 174, 0.3), transparent 60%)' }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              
              {/* Main headline with enhanced animation */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-tight mb-6 transition-all duration-700 group-hover:scale-105">
                Готовы{' '}
                <span className="relative inline-block">
                  <span 
                    className="bg-gradient-to-r bg-clip-text text-transparent transition-all duration-700"
                    style={{ 
                      backgroundImage: isHovering 
                        ? 'linear-gradient(135deg, #EECFAE 0%, #F5E6A8 100%)' 
                        : 'linear-gradient(135deg, #EECFAE 0%, #F0D498 100%)'
                    }}
                  >
                    увеличить прибыль
                  </span>
                  {/* Animated underline */}
                  <div 
                    className="absolute -bottom-2 left-0 h-1 rounded-full transition-all duration-700 group-hover:w-full"
                    style={{ 
                      backgroundColor: '#EECFAE',
                      width: isHovering ? '100%' : '60%'
                    }}
                  />
                </span>
                {' '}салона красоты?
              </h2>
              
              {/* Enhanced description */}
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto mb-10 group-hover:text-white/95 transition-colors duration-500">
                Запустите{' '}
                <span 
                  className="font-bold transition-all duration-500"
                  style={{ color: '#EECFAE' }}
                >
                  Beauty Mind
                </span>
                {' '}за 24 часа и начните превращать каждую клиентку в постоянную.{' '}
                <span className="font-semibold text-white">
                  Без рисков и сложных интеграций.
                </span>
              </p>

              {/* Enhanced CTA button */}
              <div className="mb-8">
                <button
                  onClick={onConnectClick}
                  className="group/btn relative inline-flex items-center gap-3 justify-center rounded-xl text-lg font-bold transition-all duration-600 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300/50 disabled:pointer-events-none disabled:opacity-50 h-14 px-10 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-0.5 active:scale-[0.98] active:translate-y-0"
                  style={{ 
                    background: 'linear-gradient(135deg, #EECFAE 0%, #F0D498 100%)',
                    color: '#6B5E58',
                    boxShadow: isHovering
                      ? '0 20px 40px -10px rgba(238, 207, 174, 0.4), 0 0 60px -15px rgba(238, 207, 174, 0.2)'
                      : '0 10px 25px -5px rgba(238, 207, 174, 0.3)'
                  }}
                >
                  {/* Button background glow */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-600">
                    <div 
                      className="absolute inset-0 rounded-xl blur-md transform scale-110"
                      style={{ background: 'linear-gradient(135deg, #EECFAE, #F5E6A8)' }}
                    />
                  </div>
                  
                  <span className="relative z-10 transition-all duration-300 group-hover/btn:scale-105">
                    Оставить заявку
                  </span>
                  
                  <ArrowRightIcon className="relative z-10 w-6 h-6 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div 
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.4) 50%, transparent 70%)',
                        transform: 'translateX(-100%)',
                        animation: isHovering ? 'shimmer 1000ms ease-out' : 'none'
                      }}
                    />
                  </div>
                </button>
              </div>

              {/* Enhanced trust indicators */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                
                {/* Salon logos */}
                <div className="flex items-center gap-3 transition-all duration-500 group-hover:scale-105">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-white/20 flex items-center justify-center shadow-lg overflow-hidden transition-all duration-700 hover:scale-110">
                      <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">S</div>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-white/20 flex items-center justify-center shadow-lg overflow-hidden transition-all duration-700 hover:scale-110" style={{ transitionDelay: '50ms' }}>
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">B</div>
                    </div>
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-white/20 flex items-center justify-center shadow-lg overflow-hidden transition-all duration-700 hover:scale-110" style={{ transitionDelay: '100ms' }}>
                      <div className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center text-white text-sm font-bold">N</div>
                    </div>
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/20 flex items-center justify-center shadow-lg transition-all duration-700 hover:scale-110" style={{ transitionDelay: '150ms' }}>
                      <span className="text-white/90 text-sm font-bold">+</span>
                    </div>
                  </div>
                  <span className="text-white/80 group-hover:text-white/95 text-sm font-medium transition-colors duration-500">
                    180+ довольных салонов
                  </span>
                </div>
                
                <div className="w-px h-6 bg-white/20 group-hover:bg-white/40 hidden sm:block transition-colors duration-500" />
                
                {/* Guarantee */}
                <div className="flex items-center gap-2 text-sm text-white/80 group-hover:text-white/95 transition-all duration-500 group-hover:scale-105">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: '#22c55e' }}
                  />
                  <span className="font-medium">
                    Запуск за 24 часа • Без рисков • Поддержка 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle floating elements inside CTA */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div 
                className="absolute top-8 right-8 w-2 h-2 rounded-full animate-pulse opacity-60 group-hover:opacity-100"
                style={{ backgroundColor: '#EECFAE', animationDuration: '3s' }}
              />
              <div 
                className="absolute bottom-12 left-12 w-1.5 h-1.5 rounded-full animate-bounce opacity-40 group-hover:opacity-70"
                style={{ backgroundColor: '#22c55e', animationDelay: '1.5s', animationDuration: '2s' }}
              />
              <div 
                className="absolute top-1/3 right-16 w-1 h-1 bg-white/30 rounded-full animate-ping opacity-30 group-hover:opacity-60"
                style={{ animationDelay: '2s', animationDuration: '4s' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;