import React, { useState, useEffect, useRef } from 'react';

const faqData = [
  {
    question: 'Как быстро происходит подключение?',
    answer: 'Подключение и базовая настройка занимают не более 24 часов. Мы предоставляем персонального менеджера, который поможет на всех этапах интеграции.'
  },
  {
    question: 'Нужно ли интегрировать с CRM-системой?',
    answer: 'Интеграция не обязательна для тарифа Start, но рекомендуется для тарифа Pro, чтобы автоматизировать уведомления о процедурах и триггерные рассылки. Мы поддерживаем Yclients, Altegio, DiKiDi и другие популярные beauty-CRM.'
  },
  {
    question: 'Что будет, если клиентка недовольна?',
    answer: 'Если оценка ниже 5 звезд, система не отправит клиентку оставлять публичный отзыв. Вместо этого администратор получит мгновенное уведомление, чтобы деликатно связаться с клиенткой и решить проблему до того, как она станет публичной.'
  },
  {
    question: 'Сколько клиенток реально отвечают?',
    answer: 'В среднем 74-78% клиенток отвечают на сообщения в WhatsApp, что в 12 раз выше отклика по email (6-7%). WhatsApp воспринимается как личное общение, поэтому женщины охотнее идут на контакт с салоном.'
  },
  {
    question: 'Какие дополнительные расходы?',
    answer: 'Никаких дополнительных затрат нет. Стоимость WhatsApp Business API входит в тариф. Вы платите только фиксированную ежемесячную сумму, независимо от количества сообщений и клиенток.'
  },
  {
    question: 'Сложно ли обучить персонал?',
    answer: 'Система работает полностью автоматически. Персоналу нужно только научиться реагировать на уведомления о негативных отзывах, что занимает не более 15 минут. Мы предоставляем подробные инструкции и поддержку.'
  },
  {
    question: 'Подойдет ли для небольшого салона?',
    answer: 'Beauty Mind одинаково эффективен для салонов с 2 креслами и крупных сетей. Даже 10-15 дополнительных положительных отзывов в месяц кардинально улучшат ваш рейтинг и привлекут новых клиенток.'
  },
  {
    question: 'Есть ли гарантия возврата денег?',
    answer: 'Да, мы предоставляем 100% гарантию возврата денег в течение 14 дней. Если Beauty Mind не оправдает ваши ожидания, мы вернем всю сумму без вопросов.'
  },
  {
    question: 'Можно ли отменить подписку?',
    answer: 'Да, вы можете отменить подписку в любой момент без штрафов. У нас нет долгосрочных договоров — мы ценим вашу свободу выбора.'
  },
];

const FAQItem = ({
  item,
  isOpen,
  onClick,
  isVisible,
  delay
}) => {
  const contentRef = useRef(null);

  return (
    <div 
      className={`border-b border-[#F48CA7]/20 transition-all duration-600 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6 md:py-8 group hover:bg-[#F7D8E1]/20 transition-colors duration-300 rounded-lg px-2 -mx-2"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-xl font-bold text-[#6B5E58] group-hover:text-[#F48CA7] transition-colors duration-300 pr-4">
          {item.question}
        </h3>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F7D8E1]/50 flex items-center justify-center group-hover:bg-[#F48CA7]/20 transition-all duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`text-[#F48CA7] transition-transform duration-600 ease-out ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
        className="overflow-hidden transition-all duration-600 ease-out"
      >
        <div className="pb-6 md:pb-8 pr-12">
          <p className="text-[#6B5E58]/80 text-base md:text-lg leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-20 md:py-24 bg-[#F7D8E1]/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className={`text-center mb-16 md:mb-20 transition-all duration-600 ease-out transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter text-[#6B5E58] leading-tight">
            Часто задаваемые вопросы
          </h2>
          <p className="text-lg md:text-xl text-[#6B5E58]/70 mt-4 max-w-2xl mx-auto">
            Ответы на самые важные вопросы о Beauty Mind для салонов красоты
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-[#F48CA7]/20 p-6 md:p-8 lg:p-10">
          <div className="space-y-0">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                isVisible={isInView}
                delay={100 + (150 * index)}
              />
            ))}
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-600 ease-out transform ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '800ms' }}>
          <p className="text-[#6B5E58]/70">
            Не нашли ответ на свой вопрос?{' '}
            <a 
              href="#" 
              className="font-semibold text-[#F48CA7] hover:text-[#C5536C] transition-colors duration-300"
            >
              Свяжитесь с нами
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;