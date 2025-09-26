import React, { useState, useEffect } from 'react';

// WhatsApp Icon для чатов
const WhatsAppIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const Hero = ({ onTryFreeClick }) => {
  const [chatStep, setChatStep] = useState(0);
  const [isIslandExpanded, setIsIslandExpanded] = useState(false);
  const [islandContentVisible, setIslandContentVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const timeouts = [];
    const schedule = (fn, delay) => {
        timeouts.push(setTimeout(fn, delay));
    };

    const animateAndProceed = (nextStep) => {
        setIsIslandExpanded(true);
        schedule(() => setIslandContentVisible(true), 300);
        schedule(() => setIslandContentVisible(false), 2000);
        schedule(() => setIsIslandExpanded(false), 2300);
        schedule(() => setChatStep(nextStep), 2500);
    };

    if (chatStep === 0) {
        schedule(() => animateAndProceed(1), 1000);
    } else if (chatStep === 1) {
        schedule(() => animateAndProceed(2), 2500);
    } else if (chatStep === 2) {
        schedule(() => animateAndProceed(3), 2500);
    } else if (chatStep === 3) {
        schedule(() => setChatStep(0), 3000);
    }
    
    return () => {
        timeouts.forEach(clearTimeout);
    };
  }, [chatStep]);
  
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Beauty фон с мягкими тонами */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F5] via-white to-[#F7D8E1]/30"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-96 h-96 bg-[#F48CA7]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#EECFAE]/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`flex flex-col items-start text-left transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.9] mb-8 text-[#6B5E58]">
              <span className="block">Повысьте рейтинг</span>
              <span className="block">салона красоты</span>
              <span className="block">и верните до</span>
              <span className="inline-block text-[#F48CA7] relative">
                50%
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-[#F48CA7]/60" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,6 Q25,2 50,4 T100,3" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.7"/>
                </svg>
              </span>
              <span className="block">клиенток</span>
            </h1>
            
            <p className="max-w-xl text-[#6B5E58]/80 text-xl leading-relaxed mb-10">
              <span className="font-semibold text-[#F48CA7]">Beauty Mind</span> — автоматизированная платформа для сбора отзывов, перехвата негатива и возврата клиенток.
            </p>
            
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-6 mb-12">
              <button
                onClick={onTryFreeClick}
                className="group inline-flex items-center justify-center rounded-xl text-lg font-bold transition-all duration-300 bg-[#F48CA7] text-white hover:bg-[#C5536C] hover:shadow-xl h-14 px-10 shadow-lg transform hover:scale-105"
              >
                <span>Демо за 15 минут</span>
                <svg className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-xl text-lg font-medium transition-all duration-300 border-2 border-[#F48CA7]/30 bg-white/80 backdrop-blur-sm hover:bg-[#F7D8E1]/30 text-[#6B5E58] h-14 px-8 group"
              >
                <span>Как это работает</span>
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
            
            <div className="flex items-center text-sm text-[#6B5E58]/70">
              <div className="flex -space-x-2 mr-4">
                {/* Логотипы салонов красоты с fallback */}
                <div className="w-12 h-12 bg-white rounded-full border-3 border-white shadow-lg flex items-center justify-center overflow-hidden">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-lg font-bold">S</div>
                </div>
                <div className="w-12 h-12 bg-white rounded-full border-3 border-white shadow-lg flex items-center justify-center overflow-hidden">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-lg font-bold">B</div>
                </div>
                <div className="w-12 h-12 bg-white rounded-full border-3 border-white shadow-lg flex items-center justify-center overflow-hidden">
                  <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center text-white text-lg font-bold">N</div>
                </div>
                <div className="w-12 h-12 bg-slate-100 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                  <span className="text-slate-600 text-base font-bold">+</span>
                </div>
              </div>
              <span className="font-medium">Растущая сеть салонов красоты</span>
            </div>
          </div>
          
          {/* iPhone 16 Pro с Beauty демо-сценарием */}
          <div className={`relative w-full max-w-xs mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-slate-900 p-1 rounded-[3.5rem] shadow-2xl w-[320px] h-[680px] lg:w-[340px] lg:h-[720px]">
              <div className="relative bg-white rounded-[3.25rem] overflow-hidden h-full flex flex-col">
                {/* Dynamic Island */}
                <div className={`absolute top-3 left-1/2 transform -translate-x-1/2 bg-black z-20 transition-all duration-700 ease-out ${
                    isIslandExpanded ? 'w-48 h-9' : 'w-32 h-7'
                } rounded-full flex items-center justify-center px-3`}>
                    {islandContentVisible && (
                        <div className="flex items-center gap-2 text-white text-xs font-medium whitespace-nowrap animate-fade-in">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                                <WhatsAppIcon className="w-3 h-3 text-white" />
                            </div>
                            <span>Новое сообщение</span>
                        </div>
                    )}
                </div>
                
                {/* WhatsApp Header для салона */}
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-4 flex items-center gap-3 border-b border-slate-200 flex-shrink-0 pt-12">
                  <div className="w-10 h-10 bg-[#F48CA7] rounded-full flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base text-slate-800">Ваш Салон Красоты</p>
                    <p className="text-xs text-green-600 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      онлайн
                    </p>
                  </div>
                </div>
                
                {/* Beauty Chat Messages */}
                <div className="p-4 space-y-4 bg-gradient-to-b from-slate-50 to-slate-100 flex-1">
                  <div className={`transform transition-all duration-1000 ${chatStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-lg max-w-[85%] shadow-sm border border-slate-200">
                      <p className="text-sm text-slate-800 leading-relaxed">Привет! 💅 Оцените, пожалуйста, качество процедуры от 1 до 5 ⭐</p>
                    </div>
                  </div>

                  <div className={`flex justify-end transform transition-all duration-1000 ${chatStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <div className="bg-[#F48CA7] text-white p-4 rounded-2xl rounded-br-lg shadow-sm max-w-[75%]">
                      <p className="text-base font-medium">⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>

                  <div className={`transform transition-all duration-1000 ${chatStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-lg max-w-[85%] shadow-sm border border-slate-200">
                      <p className="text-sm text-slate-800 mb-3 leading-relaxed">Спасибо! 🌸 Поделитесь впечатлениями на Яндекс.Картах!</p>
                      <a href="#" className="inline-flex items-center gap-2 text-sm text-[#F48CA7] font-medium bg-[#F48CA7]/10 px-3 py-2 rounded-lg hover:bg-[#F48CA7]/20 transition-colors">
                        <span>Оставить отзыв</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Дополнительное сообщение для beauty-контекста */}
                  {chatStep === 0 && (
                    <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
                      <div className="bg-white p-4 rounded-2xl rounded-bl-lg max-w-[85%] shadow-sm border border-slate-200">
                        <p className="text-sm text-slate-800 leading-relaxed">Не забудьте записаться на следующую процедуру! 💆‍♀️</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Home indicator */}
                <div className="flex justify-center py-2 flex-shrink-0">
                  <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;