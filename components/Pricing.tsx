import React, { useState, useEffect, useRef } from 'react';

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing = ({ onConnectClick }) => {
  const [isInView, setIsInView] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const Check = () => (
    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F48CA7' }}>
      <CheckIcon className="w-3 h-3 text-white" />
    </div>
  );
  
  const XMark = () => (
    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center">
      <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );

  const plans = [
    {
      name: 'QR',
      description: 'Для микросалонов и ИП.',
      subtext: 'Быстрый старт с QR-опросами',
      price: { monthly: 790, yearly: 590 },
      originalPrice: { monthly: null, yearly: 790 },
      features: [
        { text: 'QR-опросы клиенток', included: true },
        { text: 'Базовая страница отзывов', included: true },
        { text: 'Простая настройка за 10 минут', included: true },
        { text: 'Интеграция с CRM', included: false },
        { text: 'Автозапросы обратной связи через WhatsApp', included: false },
        { text: 'Перехват негатива в чат', included: false },
        { text: 'Триггерные кампании', included: false },
        { text: 'Расширенная аналитика', included: false },
      ],
      popular: false,
      cta: 'Начать с QR'
    },
    {
      name: 'Start',
      description: 'Для салонов 1–2 кресла.',
      subtext: 'Полная автоматизация отзывов',
      price: { monthly: 1990, yearly: 1490 },
      originalPrice: { monthly: null, yearly: 1990 },
      features: [
        { text: 'QR-опросы клиенток', included: true },
        { text: 'Автозапросы через WhatsApp', included: true },
        { text: 'Перехват негатива в чат', included: true },
        { text: 'Интеграция с CRM (1 система)', included: true },
        { text: 'Ссылки на отзывы: Google / Яндекс / 2ГИС', included: true },
        { text: 'Базовая аналитика салона', included: true },
        { text: 'Триггерные кампании', included: false },
        { text: 'Расширенная аналитика', included: false },
      ],
      popular: true,
      cta: 'Выбрать Start'
    },
    {
      name: 'Pro',
      description: 'Для растущих точек и мини-сетей.',
      subtext: 'Максимальный возврат клиенток',
      price: { monthly: 3490, yearly: 2590 },
      originalPrice: { monthly: null, yearly: 3490 },
      features: [
        { text: 'Всё из тарифа Start', included: true },
        { text: 'Триггеры: no-show, ДР, win-back', included: true },
        { text: 'Расширенная beauty-аналитика', included: true },
        { text: 'Уведомления о процедурах', included: true },
        { text: 'Множественные интеграции CRM', included: true },
        { text: 'Подтверждение записи клиенток', included: true },
        { text: 'Персональные сценарии', included: true },
        { text: 'NPS/CSAT опросы', included: false },
        { text: 'AI-бот и приоритетная поддержка', included: false },
      ],
      popular: false,
      cta: 'Выбрать Pro'
    },
    {
      name: 'Max',
      description: 'Для сетей и флагманских салонов.',
      subtext: 'Корпоративное решение с AI',
      price: { monthly: 5990, yearly: 4490 },
      originalPrice: { monthly: null, yearly: 5990 },
      features: [
        { text: 'Всё из тарифа Pro', included: true },
        { text: 'NPS/CSAT опросы клиенток', included: true },
        { text: 'AI-бот для автоответов', included: true },
        { text: 'AI-запись к конкретному мастеру на время', included: true },
        { text: 'Подтверждение записи клиенток', included: true },
        { text: 'Приоритетная поддержка 24/7', included: true },
        { text: 'Корпоративная аналитика', included: true },
        { text: 'Персональный менеджер', included: true },
      ],
      popular: false,
      cta: 'Скоро'
    }
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-20 md:py-24 bg-[#FFF8F5] relative overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ background: 'linear-gradient(45deg, #F48CA7, #EECFAE)' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full" style={{ background: 'linear-gradient(135deg, #EECFAE, #F48CA7)' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-[#6B5E58] leading-tight">
            Прозрачные тарифы
            <span className="bg-gradient-to-r from-[#F48CA7] to-[#C5536C] bg-clip-text text-transparent">
              {" "}для любого салона
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#6B5E58]/70 mt-6 max-w-2xl mx-auto leading-relaxed">
            От первых шагов до большой сети — выберите то, что подходит именно вам.
          </p>
          <p className="text-sm text-[#6B5E58]/70 mt-3">
            Запуск за 24 часа • Никаких подвохов
          </p>
          
          {/* Value positioning */}
          <div className="inline-flex items-center gap-2 bg-[#F7D8E1]/50 border border-[#F48CA7]/20 rounded-full px-4 py-2 mt-4">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#F48CA7' }}></div>
            <span className="text-sm font-semibold text-[#F48CA7]">
              ПЛАТИТЕ ТОЛЬКО ЗА ТО, ЧТО РЕАЛЬНО ИСПОЛЬЗУЕТЕ
            </span>
          </div>
          
          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-[#6B5E58]/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F48CA7' }}></div>
              <span>Отменить можно в любой момент</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F48CA7' }}></div>
              <span>Живая поддержка, не боты</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F48CA7' }}></div>
              <span>Попробуйте 14 дней бесплатно</span>
            </div>
          </div>
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-100 shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                billingCycle === 'monthly' 
                ? 'bg-white text-[#6B5E58] shadow-sm transform scale-105' 
                : 'text-slate-600 hover:text-[#6B5E58]'
              }`}
            >
              Месяц
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 relative ${
                billingCycle === 'yearly' 
                ? 'bg-white text-[#6B5E58] shadow-sm transform scale-105' 
                : 'text-slate-600 hover:text-[#6B5E58]'
              }`}
            >
              Год
              <span 
                className="absolute -top-2 -right-2 text-[10px] px-2 py-1 rounded-full font-bold text-white shadow-md"
                style={{ backgroundColor: '#F48CA7' }}
              >
                -25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards - теперь 4 тарифа */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-6 flex flex-col transition-all duration-700 transform hover:scale-[1.02] ${
                plan.popular 
                ? 'border-2 shadow-2xl shadow-[#F48CA7]/10 md:scale-105' 
                : 'border border-[#F48CA7]/20 shadow-lg hover:shadow-xl'
              } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: `${100 * (index + 1)}ms`,
                borderColor: plan.popular ? '#F48CA7' : undefined
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg"
                  style={{ backgroundColor: '#F48CA7' }}
                >
                  ПОПУЛЯРНЫЙ
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-extrabold text-[#6B5E58] mb-2">{plan.name}</h3>
                <p className="text-[#6B5E58]/70 text-sm mb-1">{plan.description}</p>
                <p className="text-xs text-slate-500">{plan.subtext}</p>
              </div>
              
              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-extrabold text-[#6B5E58]">
                    {plan.price[billingCycle].toLocaleString()}
                  </span>
                  <span className="text-sm text-[#6B5E58]/70">₽</span>
                  <span className="text-[#6B5E58]/70 text-sm">/мес.</span>
                </div>
                
                {billingCycle === 'yearly' && plan.originalPrice.yearly && (
                  <div className="mt-2">
                    <span className="text-sm text-slate-400 line-through">
                      {plan.originalPrice.yearly.toLocaleString()}₽/мес.
                    </span>
                    <span className="ml-2 text-xs font-semibold" style={{ color: '#F48CA7' }}>
                      Экономия {((plan.originalPrice.yearly - plan.price.yearly) * 12).toLocaleString()}₽/год
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2.5 text-sm mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    {feature.included ? <Check /> : <XMark />}
                    <span className={`leading-relaxed ${
                      feature.included ? 'text-[#6B5E58]/80' : 'text-slate-400 line-through'
                    }`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={plan.name === 'Max' ? undefined : onConnectClick}
                disabled={plan.name === 'Max'}
                className={`w-full py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-[1.02] focus:scale-[1.02] shadow-lg ${
                  plan.name === 'Max'
                  ? 'bg-slate-100 text-slate-500 cursor-not-allowed border border-slate-200'
                  : plan.popular 
                  ? 'text-white hover:shadow-xl active:scale-[0.98]' 
                  : 'bg-slate-50 text-[#6B5E58] hover:bg-[#F7D8E1]/30 border border-[#F48CA7]/20 hover:border-[#F48CA7]/40'
                }`}
                style={plan.popular && plan.name !== 'Max' ? { 
                  backgroundColor: '#F48CA7',
                  boxShadow: '0 8px 25px rgba(244, 140, 167, 0.4)'
                } : undefined}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#6B5E58]/70 mb-4">
            Не знаете, что выбрать? 
            <button 
              onClick={onConnectClick}
              className="ml-1 font-semibold text-[#F48CA7] hover:underline"
            >
              Поговорим 15 минут — поможем разобраться
            </button>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>✓ Покажем, как это работает</span>
            <span>✓ Посчитаем выгоду для вашего салона</span>
            <span>✓ Подберем идеальный тариф</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;