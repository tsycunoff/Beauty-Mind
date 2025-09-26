import React, { useState, useEffect, useRef } from 'react';

// Beauty-themed icons
const NotificationIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const BirthdayIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 14.546V6.546a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 6.546v9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 10.546h.01M10 10.546h.01M14 10.546h.01M18 10.546h.01M6 14.546h.01M10 14.546h.01M14 14.546h.01M18 14.546h.01" />
  </svg>
);

const ChartIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const FeatureCard = ({
  icon,
  title,
  description,
  benefit,
  isVisible,
  delay
}) => (
  <div
    className={`group relative bg-white rounded-xl p-6 md:p-8 border border-[#F48CA7]/20 transition-all duration-700 ease-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-[#F48CA7]/40 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Icon with brand colors */}
    <div 
      className="inline-flex w-14 h-14 rounded-xl items-center justify-center mb-6 text-white shadow-lg transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
      style={{ background: 'linear-gradient(135deg, #F48CA7, #C5536C)' }}
    >
      {icon}
    </div>
    
    <h3 className="text-lg font-bold text-[#F48CA7] mb-3 group-hover:scale-105 transition-transform duration-500">
      {title}
    </h3>
    
    <p className="text-sm text-[#6B5E58]/70 leading-relaxed mb-4 group-hover:text-[#6B5E58]/90 transition-colors duration-500">
      {description}
    </p>

    {/* Benefit highlight */}
    <div className="flex items-start gap-2">
      <div 
        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
        style={{ backgroundColor: '#F48CA7' }}
      />
      <p className="text-xs text-[#F48CA7] font-semibold leading-relaxed">
        {benefit}
      </p>
    </div>

    {/* Subtle accent line */}
    <div 
      className="absolute bottom-0 left-1/2 w-0 h-0.5 -translate-x-1/2 group-hover:w-16 transition-all duration-700 rounded-full"
      style={{ backgroundColor: '#F48CA7' }}
    />

    {/* Hover glow */}
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div 
        className="absolute inset-0 rounded-xl blur-xl transform scale-110"
        style={{ background: 'radial-gradient(circle at 30% 30%, rgba(244, 140, 167, 0.1), transparent 70%)' }}
      />
    </div>
  </div>
);

const Features = () => {
  const [isInView, setIsInView] = useState(false);
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

  const features = [
    {
      icon: <NotificationIcon className="w-7 h-7"/>,
      title: 'Уведомления о процедурах',
      description: 'Автоматически информируйте клиенток о каждом этапе процедуры через WhatsApp: готовность мастера, начало сеанса, завершение.',
      benefit: 'Клиентки всегда в курсе → больше доверия → больше возвратов'
    },
    {
      icon: <BirthdayIcon className="w-7 h-7"/>,
      title: 'Beauty-триггеры и напоминания',
      description: 'Умные напоминания о маникюре через 3 недели, коррекции бровей, поздравления с днём рождения и возврат "потерянных" клиенток.',
      benefit: 'Автоматический возврат клиенток → +35% к повторным визитам'
    },
    {
      icon: <ChartIcon className="w-7 h-7"/>,
      title: 'Beauty-аналитика салона',
      description: 'Отслеживайте все метрики: отзывы по мастерам, рейтинг процедур, перехваченный негатив, топ-услуги и доходность клиенток.',
      benefit: 'Понимание beauty-бизнеса → правильные решения → рост прибыли'
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="py-20 md:py-24 bg-[#F7D8E1]/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#F7D8E1]/50 border border-[#F48CA7]/20 mb-6">
            <span className="text-sm font-medium text-[#F48CA7] uppercase tracking-wide">Тариф Pro</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[#6B5E58] leading-tight mb-6">
            Больше, чем просто отзывы:{' '}
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #F48CA7 0%, #C5536C 100%)' }}
            >
              полная автоматизация салона
            </span>
          </h2>
          
          <p className="text-lg text-[#6B5E58]/70 leading-relaxed">
            <span className="text-[#F48CA7] font-semibold">Beauty Mind Pro</span> — это полноценная платформа для удержания и возврата клиенток, которая работает на ваш салон 24/7.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
              isVisible={isInView}
              delay={100 * (index + 1)}
            />
          ))}
        </div>

        {/* Premium bottom section */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-white rounded-xl border border-[#F48CA7]/20 p-6 md:p-8 shadow-sm max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#F48CA7' }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#6B5E58]">
                Все включено в тариф Pro
              </h3>
            </div>
            
            <p className="text-[#6B5E58]/70 leading-relaxed mb-6">
              Получите полный контроль над клиентским опытом: от первого визита до постоянного возврата. 
              Автоматизация, которая работает даже когда салон закрыт.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="#pricing"
                className="inline-flex items-center gap-2 justify-center rounded-md text-sm font-bold h-11 px-6 transition-all duration-600 hover:scale-105"
                style={{ 
                  backgroundColor: '#F48CA7',
                  color: 'white',
                  boxShadow: '0 3px 0 #C5536C'
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = 'translateY(1px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 2px 0 #C5536C';
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 3px 0 #C5536C';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 3px 0 #C5536C';
                }}
              >
                Смотреть тарифы
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
              
              <a 
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold h-11 px-6 border border-[#F48CA7]/30 text-[#6B5E58] hover:bg-[#F7D8E1]/30 hover:border-[#F48CA7]/50 transition-all duration-600"
              >
                Как это работает
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;