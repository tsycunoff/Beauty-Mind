import React, { useState, useEffect, useRef } from 'react';

const FeatureCard = ({
  title,
  description,
  icon,
  isVisible,
  delay
}) => (
  <div
    className={`group relative bg-white rounded-xl p-6 border border-[#F48CA7]/20 transition-all duration-700 ease-out transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-[#F48CA7]/40 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div 
      className="inline-flex w-12 h-12 rounded-lg items-center justify-center mb-4 text-white shadow-md transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-3"
      style={{ background: 'linear-gradient(135deg, #F48CA7, #C5536C)' }}
    >
      {icon}
    </div>
    
    <h3 className="text-lg font-bold text-[#F48CA7] mb-3 group-hover:scale-105 transition-transform duration-500">
      {title}
    </h3>
    
    <p className="text-sm text-[#6B5E58]/70 leading-relaxed group-hover:text-[#6B5E58]/90 transition-colors duration-500">
      {description}
    </p>

    {/* Subtle accent line */}
    <div 
      className="absolute bottom-0 left-1/2 w-0 h-0.5 -translate-x-1/2 group-hover:w-12 transition-all duration-700 rounded-full"
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

const SaaSDescription = () => {
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
      title: "Облачная платформа",
      description: "Работает в облаке — никаких серверов, установок и головной боли с IT в салоне",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      )
    },
    {
      title: "Простые интеграции",
      description: "Подключается к Yclients, Altegio, DiKiDi за 15 минут — без программистов",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      )
    },
    {
      title: "Рост вместе с салоном",
      description: "От маленького салона до сети из сотен филиалов — без ограничений по клиенткам",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Работает 24/7",
      description: "Система никогда не спит — клиентки получают ответы мгновенно, даже в выходные",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} id="saas" className="py-20 md:py-24 bg-[#FFF8F5] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating elements */}
      <div 
        className="absolute top-20 right-20 w-24 h-24 rounded-full opacity-10 animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, #F48CA7, transparent 70%)',
          filter: 'blur(30px)',
          animationDuration: '4s'
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-8 animate-pulse"
        style={{ 
          background: 'radial-gradient(circle, #EECFAE, transparent 70%)',
          filter: 'blur(40px)',
          animationDuration: '6s',
          animationDelay: '2s'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[#6B5E58] leading-tight mb-6">
            Что такое{' '}
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #F48CA7 0%, #C5536C 100%)' }}
            >
              Beauty Mind?
            </span>
          </h2>
          
          <p className="text-lg text-[#6B5E58]/70 leading-relaxed">
            <span className="text-[#F48CA7] font-semibold">Beauty Mind</span> — это облачная платформа, 
            специально созданная для салонов красоты. Никакого сложного ПО — 
            просто умная автоматизация, которая увеличивает вашу прибыль.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isVisible={isInView}
              delay={100 * (index + 1)}
            />
          ))}
        </div>

        {/* Benefits section */}
        <div className={`transition-all duration-1000 delay-500 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <div className="bg-white rounded-xl border border-[#F48CA7]/20 p-8 md:p-10 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#6B5E58] mb-6">
                  Почему владелицы салонов выбирают облачные решения?
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Нет капитальных затрат — платите только за результат",
                    "Автоматические обновления — новые фишки без простоев", 
                    "Безопасность данных клиенток — защита как в банках",
                    "Техподдержка 24/7 — мы всегда рядом с вашим салоном"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                        style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)' }}
                      >
                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#6B5E58]/80 leading-relaxed">
                        <strong className="text-[#F48CA7]">{benefit.split('—')[0]}—</strong>
                        {benefit.split('—')[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-xl text-white mb-4 shadow-lg transition-transform duration-500 hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #F48CA7, #C5536C)' }}
                >
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-[#6B5E58] mb-2">Умная автоматизация для beauty</h4>
                <p className="text-[#6B5E58]/70 leading-relaxed">
                  Система изучает поведение ваших клиенток и сама оптимизирует общение для максимальной прибыли салона
                </p>
                
                {/* Accent dot */}
                <div 
                  className="w-2 h-2 rounded-full mx-auto mt-4 animate-pulse"
                  style={{ backgroundColor: '#F48CA7' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaaSDescription;