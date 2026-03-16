import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Briefcase, GraduationCap, Linkedin, Mail, Zap, 
  Award, Globe, Heart, Menu, X, ChevronUp 
} from 'lucide-react';
import AIAgentConsultant from './IA_Agent';
import ImageCarousel from './Carousel';

/**
 * COMPONENT: App
 * Description: Multilingual Professional Portfolio for Yenli Machado.
 * Features: Dynamic language switching, responsive design, and "Scroll to Top" functionality.
 */
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en'); // Default language: English
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Design System Colors
  const colors = {
    ghostWhite: '#fdfffc',
    skyBlue: '#acd4f8',
    darkBg: '#03050b',
    primaryIndigo: '#4b45cb'
  };

  // Monitor scroll position to show/hide "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Content Dictionary for Localization
  const t = {
    en: {
      nav: ['about me', 'work experience', 'education', 'certifications', 'beyond the code', 'languages'],
      contact: 'CONTACT',
      heroSub: 'AI Agent Manager | Full-Stack AI Developer | AI Project Manager',
      aboutTitle: 'About Me',
      aboutSub: 'Where Logic Meets Strategy',
      aboutText: 'I am a Computer Science professional passionate about transforming complex processes into intelligent workflows. My journey began with a deep technical foundation in programming and evolved into strategic management, allowing me to bridge the gap between developing AI agents and the business vision required to deploy them effectively.',
      expTitle: 'Work Experience',
      fortrussSub: 'ERP Implementation & Automation | Jan 2026 - Present',
      fortrussText: 'While leading the implementation of the Nomus ERP system, I operate at the forefront of digital transformation. My role goes beyond coding; I perform process mapping and API integration, ensuring technology aligns with the real-world needs of manufacturing.',
      entrepSub: 'Management & Sales | Mar 2022 - Oct 2025',
      entrepText: 'As a former business owner, I developed a "business-owner mindset." This experience provided me with soft skills like negotiation and understanding that every line of code must serve a commercial objective.',
      eduTitle: 'Education',
      eduSub: 'University of Havana, Cuba',
      eduText: 'B.S. in Computer Science. My technical foundation was built in an environment of high academic rigor. Studying in Cuba taught me resilience and how to maximize resources—essential for building robust AI models.',
      certTitle: 'Certifications',
      certSub: 'Hybrid Professional',
      certText: 'I am not just a coder; I am a professional who understands the ecosystem where that code lives:',
      certList: ['Tech: Python, SQL, Algorithms & AI Agents', 'Business: SEBRAE Cash Flow & Business Management', 'Finance: ANBIMA CPA 2026 - In Prep'],
      beyondTitle: 'Beyond the Code',
      beyondText: 'To keep my mind sharp, I embrace a lifestyle rooted in exploration and discipline. I find balance through speleology, recreational diving, and fitness training, which informs my approach to building resilient software architecture.',
      langTitle: 'Languages',
      langSub: 'Communication Without Borders',
      connect: "LET'S CONNECT",
      footer: 'YENLI MACHADO © 2026 | BUILT FOR THE INTERNATIONAL AI MARKET'
    },
    es: {
      nav: ['sobre mí', 'experiencia', 'educación', 'certificaciones', 'más allá del código', 'idiomas'],
      contact: 'CONTACTO',
      heroSub: 'Gestora de Agentes de IA | IA Full-Stack Programadora |  Gestora de Proyectos IA ',
      aboutTitle: 'Sobre Mí',
      aboutSub: 'Donde la Lógica se une a la Estrategia',
      aboutText: 'Soy una profesional de Ciencias de la Computación apasionada por transformar procesos complejos en flujos de trabajo inteligentes. Mi viaje comenzó con una sólida base técnica en programación y evolucionó hacia la gestión estratégica, permitiéndome cerrar la brecha entre el desarrollo de agentes de IA y la visión empresarial.',
      expTitle: 'Experiencia Laboral',
      fortrussSub: 'Implementación ERP y Automatización | Ene 2026 - Presente',
      fortrussText: 'Liderando la implementación del sistema ERP Nomus, opero a la vanguardia de la transformación digital. Mi función va más allá del código; realizo mapeo de procesos e integración de APIs, asegurando que la tecnología se alinee con las necesidades de fabricación.',
      entrepSub: 'Gestión y Ventas | Mar 2022 - Oct 2025',
      entrepText: 'Como ex dueña y fundadora de negocio, desarrollé una mentalidad empresarial. Esta experiencia me brindó habilidades blandas como la negociación y la comprensión de que cada línea de código debe cumplir un objetivo comercial.',
      eduTitle: 'Educación',
      eduSub: 'Universidad de La Habana, Cuba',
      eduText: 'Licenciatura en Ciencias de la Computación. Mi base técnica se construyó en un entorno de alto rigor académico. Estudiar en Cuba me enseñó resiliencia y cómo maximizar recursos, habilidades esenciales para desarrollar modelos de IA robustos.',
      certTitle: 'Certificaciones',
      certSub: 'Profesional Híbrido',
      certText: 'No soy solo una programadora; soy una profesional que entiende el ecosistema donde vive ese código:',
      certList: ['Tech: Python, SQL, Algoritmos y Agentes de IA', 'Negocios: Gestión SEBRAE', 'Finanzas: ANBIMA CPA 2026 - En Prep'],
      beyondTitle: 'Más Allá del Código',
      beyondText: 'Para mantener mi mente aguda, adopto un estilo de vida basado en la exploración y la disciplina. Encuentro equilibrio a través de la espeleología, el buceo recreativo y el entrenamiento físico, lo que transforma mi enfoque para construir arquitectura de software resistente.',
      langTitle: 'Idiomas',
      langSub: 'Comunicación Sin Fronteras',
      connect: 'CONECTEMOS',
      footer: 'YENLI MACHADO © 2026 | CONSTRUIDO PARA EL MERCADO INTERNACIONAL DE IA'
    },
    pt: {
      nav: ['sobre mim', 'experiência', 'educação', 'certificações', 'além do código', 'idiomas'],
      contact: 'CONTATO',
      heroSub: 'Gerente de Agentes de IA | Desenvolvedor Full-Stack de IA | Gerente de Projetos de IA',
      aboutTitle: 'Sobre Mim',
      aboutSub: 'Onde a Lógica Encontra a Estratégia',
      aboutText: 'Sou uma profissional de Ciência da Computação apaixonada por transformar processos complexos em fluxos de trabalho inteligentes. Minha jornada começou com uma base técnica profunda em programação e evoluiu para a gestão estratégica, permitindo-me unir o desenvolvimento de agentes de IA à visão de negócios.',
      expTitle: 'Experiência Profissional',
      fortrussSub: 'Implementação ERP e Automação | Jan 2026 - Presente',
      fortrussText: 'Liderando a implementação do sistema ERP Nomus, atuo na linha de frente da transformação digital. Meu papel vai além do código; realizo mapeamento de processos e integração de APIs, garantindo que a tecnologia se alinhe às necessidades reais da manufatura.',
      entrepSub: 'Gestão e Vendas | Mar 2022 - Out 2025',
      entrepText: 'Como ex-proprietária de empresa, desenvolvi uma mentalidade de dona de negócio. Essa experiência me proporcionou habilidades interpessoais como negociação e a compreensão de que cada linha de código deve servir a um objetivo comercial.',
      eduTitle: 'Educação',
      eduSub: 'Universidade de Havana, Cuba',
      eduText: 'Bacharelado em Ciência da Computação. Minha base técnica foi construída em um ambiente de alto rigor acadêmico. Estudar em Cuba me ensinou resiliência e como maximizar recursos, habilidades essenciais para modelos de IA robustos.',
      certTitle: 'Certificações',
      certSub: 'Profissional Híbrido',
      certText: 'Não sou apenas uma programadora; sou uma profissional que entende o ecossistema onde esse código vive:',
      certList: ['Tech: Python, SQL, Algoritmos e Agentes de IA', 'Negócios: Gestão SEBRAE', 'Finanzas: ANBIMA CPA 2026 - Em Prep'],
      beyondTitle: 'Além do Código',
      beyondText: 'Para manter minha mente afiada, adoto um estilo de vida baseado na exploração e disciplina. Encontro equilíbrio através da espeleologia, mergulho recreativo e musculação, que transformam minha abordagem na construção de arquiteturas de software resilientes.',
      langTitle: 'Idiomas',
      langSub: 'Comunicação Sem Fronteiras',
      connect: 'VAMOS CONECTAR',
      footer: 'YENLI MACHADO © 2026 | CONSTRUÍDO PARA O MERCADO INTERNACIONAL DE IA'
    }
  };

  const scrollTo = (index) => {
    const id = t.en.nav[index]; 
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reusable Content Block Component
  const ContentBlock = ({ title, subtitle, text, icon, imageLabel, reverse = false, list = null }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, backgroundColor: 'rgba(75, 69, 203, 0.05)', borderColor: 'rgba(75, 69, 203, 0.4)' }}
      viewport={{ once: true }}
      style={{ 
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
        gap: '30px', alignItems: 'center', marginBottom: '40px', backgroundColor: 'rgba(255,255,255,0.02)',
        padding: 'clamp(15px, 5vw, 25px)', borderRadius: '24px', border: '1px solid rgba(75, 69, 203, 0.1)',
        cursor: 'default', scrollMarginTop: '110px'
      }}
    >
      <div style={{ order: reverse ? 2 : 1 }}>
        <h3 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '15px', margin: '0 0 10px 0' }}>
          {icon} {title}
        </h3>
        {subtitle && <p style={{ color: colors.skyBlue, fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px' }}>{subtitle}</p>}
        <p style={{ lineHeight: '1.7', opacity: 0.8, fontSize: '1rem' }}>{text}</p>
        {list && <ul style={{ marginTop: '15px', listStyle: 'none', padding: 0 }}>{list}</ul>}
      </div>
      <div style={{ order: reverse ? 1 : 2, backgroundColor: '#000', borderRadius: '15px', overflow: 'hidden', border: `1px solid ${colors.primaryIndigo}44`, aspectRatio: '4/3', position: 'relative' }}>
        {Array.isArray(imageLabel) ? <ImageCarousel images={imageLabel} /> : <img src={`/${imageLabel}`} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Check+FileName"; }} />}
      </div>
    </motion.div>
  );

  return (
    <div style={{ backgroundColor: colors.darkBg, color: colors.ghostWhite, fontFamily: 'Anybody, sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* NAVIGATION BAR */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, backgroundColor: 'rgba(3, 5, 11, 0.95)', backdropFilter: 'blur(10px)', borderBottom: `1px solid ${colors.primaryIndigo}44`, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '90%', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '45px', height: '45px', borderRadius: '50%', border: `2px solid ${colors.primaryIndigo}`, backgroundColor: '#111', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/sua-foto.jpeg" alt="Yenli Machado" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = "https://via.placeholder.com/50?text=Y"; }} />
            </div>
            <span style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '1.1rem' }}>YENLI MACHADO</span>
          </div>

          <div className="desktop-nav" style={{ display: 'flex', gap: '20px', fontWeight: 'bold', fontSize: '10px', letterSpacing: '1px' }}>
            {t[lang].nav.map((item, index) => (
              <button key={item} onClick={() => scrollTo(index)} style={{ background: 'none', border: 'none', color: colors.ghostWhite, cursor: 'pointer', textTransform: 'uppercase' }}>{item}</button>
            ))}
          </div>
          
          <button className="desktop-nav" onClick={() => document.getElementById('lets conect')?.scrollIntoView({behavior: 'smooth'})} style={{ backgroundColor: colors.primaryIndigo, color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
            {t[lang].contact}
          </button>

          <button className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ background: 'none', border: 'none', color: colors.primaryIndigo, cursor: 'pointer', display: 'none' }}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} style={{ position: 'fixed', top: 0, right: 0, width: '100%', height: '100vh', backgroundColor: colors.darkBg, zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
            {t[lang].nav.map((item, index) => (
              <button key={item} onClick={() => scrollTo(index)} style={{ background: 'none', border: 'none', color: colors.ghostWhite, fontSize: '1.2rem', textTransform: 'uppercase', fontFamily: 'Allerta Stencil' }}>{item}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media (max-width: 968px) { .desktop-nav { display: none !important; } .mobile-toggle { display: block !important; } }`}</style>
    
      {/* HERO SECTION */}
      <header style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ fontFamily: 'Allerta Stencil', fontSize: 'clamp(2.5rem, 10vw, 7rem)', color: colors.primaryIndigo, margin: 0 }}>YENLI MACHADO</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ color: colors.skyBlue, letterSpacing: 'clamp(2px, 1vw, 6px)', textTransform: 'uppercase', fontSize: '0.8rem' }}>{t[lang].heroSub}</motion.p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

        {/* 01. ABOUT ME */}
        <section id="about me" style={{ scrollMarginTop: '120px' }}>
          <h2 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>{t[lang].aboutTitle}</h2>
          <ContentBlock icon={<Bot color={colors.skyBlue} />} title={t[lang].aboutTitle} subtitle={t[lang].aboutSub} text={t[lang].aboutText} imageLabel="IA Strategies.png" />
        </section>

        {/* 02. WORK EXPERIENCE */}
        <section id="work experience" style={{ scrollMarginTop: '120px' }}>
          <h2 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>{t[lang].expTitle}</h2>
          <ContentBlock reverse icon={<Briefcase color={colors.skyBlue} />} title="Fortruss" subtitle={t[lang].fortrussSub} text={t[lang].fortrussText} imageLabel="Fortruss Joinville.png" />
          <ContentBlock icon={<Briefcase color={colors.skyBlue} />} title={lang === 'en' ? "Entrepreneurship" : lang === 'es' ? "Emprendimiento" : "Empreendedorismo"} subtitle={t[lang].entrepSub} text={t[lang].entrepText} imageLabel="Business Management.png" />
        </section>

        {/* 03. EDUCATION */}
        <section id="education" style={{ scrollMarginTop: '120px' }}>
          <h2 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>{t[lang].eduTitle}</h2>
          <ContentBlock reverse icon={<GraduationCap color={colors.skyBlue} />} title={t[lang].eduTitle} subtitle={t[lang].eduSub} text={t[lang].eduText} imageLabel="Bachelor Cuba.jpeg" />
        </section>

        {/* 04. CERTIFICATIONS */}
        <section id="certifications" style={{ scrollMarginTop: '120px' }}>
          <h2 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>{t[lang].certTitle}</h2>
          <ContentBlock icon={<Award color={colors.skyBlue} />} title={t[lang].certTitle} subtitle={t[lang].certSub} text={t[lang].certText} imageLabel={["Certifications_1.png", "Certifications_2.png", "Certifications_3.png"]}
            list={<div style={{ display: 'grid', gap: '10px', fontSize: '0.9rem' }}>
              {t[lang].certList.map((item, i) => <li key={i} style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> {item}</li>)}
            </div>} />
        </section>

        {/* 05. BEYOND THE CODE */}
        <section id="beyond the code" style={{ scrollMarginTop: '120px' }}>
          <h2 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>{t[lang].beyondTitle}</h2>
          <ContentBlock reverse icon={<Heart color={colors.skyBlue} />} title={t[lang].beyondTitle} text={t[lang].beyondText} imageLabel="Nature Exploration.jpg" />
        </section> 

        {/* 06. LANGUAGES - SELECTOR */}
        <section id="languages" style={{ scrollMarginTop: '120px' }}>
          <h2 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>{t[lang].langTitle}</h2>
          <div style={{ textAlign: 'center', padding: 'clamp(20px, 5vw, 40px)', border: `1px solid ${colors.primaryIndigo}33`, borderRadius: '20px', marginBottom: '80px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <h3 style={{ fontFamily: 'Allerta Stencil', color: colors.skyBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
              <Globe size={24} /> {t[lang].langSub}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(30px, 8vw, 60px)' }}>
              {[
                { name: 'Spanish', code: 'es', flag: 'es', level: lang === 'es' ? 'Nativo' : lang === 'pt' ? 'Nativo' : 'Native' },
                { name: 'Portuguese', code: 'pt', flag: 'br', level: lang === 'en' ? 'Fluent' : 'Fluente' },
                { name: 'English', code: 'en', flag: 'us', level: lang === 'en' ? 'Fluent' : 'Fluente' }
              ].map((language) => (
                <motion.div key={language.code} onClick={() => setLang(language.code)} whileHover={{ scale: 1.1, y: -10 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', opacity: lang === language.code ? 1 : 0.5 }}>
                  <img src={`https://flagcdn.com/w80/${language.flag}.png`} alt={language.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: lang === language.code ? `3px solid ${colors.primaryIndigo}` : `2px solid transparent` }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{language.name}</p>
                    <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.8, textTransform: 'uppercase' }}>{language.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. LETS CONNECT */}
        <section id="lets conect" style={{ scrollMarginTop: '120px' }}>
          <h2 style={{ fontFamily: 'Allerta Stencil', fontSize: 'clamp(2rem, 8vw, 3rem)', color: colors.primaryIndigo, textAlign: 'center' }}>{t[lang].connect}</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px', paddingBottom: '100px' }}>
            <motion.a href="https://www.linkedin.com/in/yenli-machado-a1530024b" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, y: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#111', color: colors.skyBlue, padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #333' }}>
              <Linkedin size={20} /> LinkedIn
            </motion.a>
            <motion.a href="mailto:yengmpro@gmail.com" whileHover={{ scale: 1.05, y: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: colors.primaryIndigo, color: 'white', padding: '15px 30px', borderRadius: '25px', textDecoration: 'none', fontWeight: 'bold' }}>
              <Mail size={20} /> Email
            </motion.a>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '40px', opacity: 0.3, fontSize: '10px', letterSpacing: '2px' }}>
        {t[lang].footer}
      </footer>

      {/* FLOATING SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1, backgroundColor: colors.ghostWhite, color: colors.primaryIndigo }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '100px', // Positioned above the AI Agent
              right: '30px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: colors.primaryIndigo,
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1001,
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              transition: 'background-color 0.3s ease'
            }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AIAgentConsultant />
    </div>
  );
}