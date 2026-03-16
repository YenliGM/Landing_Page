import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Briefcase, GraduationCap, Linkedin, Mail, Zap, 
  Award, Globe, Heart, Send, Sparkles, Loader2, Menu, X 
} from 'lucide-react';
import AIAgentConsultant from './IA_Agent';
import ImageCarousel from './Carousel';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const colors = {
    ghostWhite: '#fdfffc',
    skyBlue: '#acd4f8',
    darkBg: '#03050b',
    primaryIndigo: '#4b45cb'
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Fecha o menu ao clicar (mobile)
  };

  const menuItems = ['about me', 'work experience', 'education', 'certifications', 'beyond the code', 'languages'];

  const ContentBlock = ({ title, subtitle, text, icon, imageLabel, reverse = false, list = null }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ 
          y: -10, 
          backgroundColor: 'rgba(75, 69, 203, 0.05)',
          borderColor: 'rgba(75, 69, 203, 0.4)',
          transition: { duration: 0.3 }
        }}
        viewport={{ once: true }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: '30px', 
          alignItems: 'center',
          marginBottom: '40px',
          backgroundColor: 'rgba(255,255,255,0.02)',
          padding: 'clamp(15px, 5vw, 25px)',
          borderRadius: '24px',
          border: '1px solid rgba(75, 69, 203, 0.1)',
          cursor: 'default',
          scrollMarginTop: '110px'
        }}
      >
        <div style={{ order: reverse ? 2 : 1 }}>
          <h3 style={{ 
            fontFamily: 'Allerta Stencil', 
            color: colors.primaryIndigo, 
            fontSize: '2rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px', 
            margin: '0 0 10px 0' 
          }}>
            {icon} {title}
          </h3>
          {subtitle && (
            <p style={{ color: colors.skyBlue, fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '15px' }}>
              {subtitle}
            </p>
          )}
          <p style={{ lineHeight: '1.7', opacity: 0.8, fontSize: '1rem' }}>{text}</p>
          {list && <ul style={{ marginTop: '15px', listStyle: 'none', padding: 0 }}>{list}</ul>}
        </div>
        
        <div style={{ 
          order: reverse ? 1 : 2, 
          backgroundColor: '#000', 
          borderRadius: '15px', 
          overflow: 'hidden',
          border: `1px solid ${colors.primaryIndigo}44`,
          display: 'block',
          aspectRatio: '4/3',
          position: 'relative'
        }}>
          {Array.isArray(imageLabel) ? (
            <ImageCarousel images={imageLabel} />
          ) : (
            <img 
              src={`/${imageLabel}`} 
              alt={title}
              loading="lazy"
              style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Check+FileName"; }} 
            />
          )}
        </div>
      </motion.div>
    );
  };
  
  return (
    <div style={{ backgroundColor: colors.darkBg, color: colors.ghostWhite, fontFamily: 'Anybody, sans-serif', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* BARRA SUPERIOR FIXA */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'rgba(3, 5, 11, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${colors.primaryIndigo}44`,
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ 
          width: '90%', 
          maxWidth: '1200px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          {/* LOGO / NOME */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ 
              width: '45px', height: '45px', borderRadius: '50%', 
              border: `2px solid ${colors.primaryIndigo}`, backgroundColor: '#111', 
              overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <img src="/sua-foto.jpeg" alt="Yenli Machado" style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                onError={(e) => { e.target.src = "https://via.placeholder.com/50?text=Y"; }} />
            </div>
            <span style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '1.1rem' }}>
              YENLI MACHADO
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '20px', fontWeight: 'bold', fontSize: '10px', letterSpacing: '1px' }}>
            {menuItems.map(item => (
              <button key={item} onClick={() => scrollTo(item)} style={{ background: 'none', border: 'none', color: colors.ghostWhite, cursor: 'pointer', textTransform: 'uppercase' }}>
                {item}
              </button>
            ))}
          </div>
          
          <button className="desktop-nav" onClick={() => scrollTo('lets conect')} style={{ backgroundColor: colors.primaryIndigo, color: 'white', border: 'none', padding: '10px 20px', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
            CONTATO
          </button>

          {/* MOBILE TOGGLE */}
          <button 
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', color: colors.primaryIndigo, cursor: 'pointer', display: 'none' }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, right: 0, width: '100%', height: '100vh',
              backgroundColor: colors.darkBg, zIndex: 999, display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px'
            }}
          >
            {menuItems.map(item => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)} 
                style={{ background: 'none', border: 'none', color: colors.ghostWhite, fontSize: '1.2rem', textTransform: 'uppercase', fontFamily: 'Allerta Stencil', letterSpacing: '2px' }}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('lets conect')} 
              style={{ backgroundColor: colors.primaryIndigo, color: 'white', border: 'none', padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', fontSize: '1rem' }}
            >
              CONTATO
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>
        {`
          @media (max-width: 968px) {
            .desktop-nav { display: none !important; }
            .mobile-toggle { display: block !important; }
          }
        `}
      </style>
    
      {/* HERO */}
      <header style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          style={{ fontFamily: 'Allerta Stencil', fontSize: 'clamp(2.5rem, 10vw, 7rem)', color: colors.primaryIndigo, margin: 0 }}
        >
          YENLI MACHADO
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color: colors.skyBlue, letterSpacing: 'clamp(2px, 1vw, 6px)', textTransform: 'uppercase', fontSize: '0.8rem' }}
        >
          AI Agent Manager | Full-Stack AI Developer | AI Project Manager
        </motion.p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

        {/* 01. ABOUT ME */}
        <section>
          <h2 id="about me" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>About Me</h2>
          <ContentBlock
            icon={<Bot color={colors.skyBlue} />}
            title="My Trajectory"
            subtitle="Where Logic Meets Strategy"
            text=
            "I am a Computer Science professional passionate about transforming complex processes into intelligent workflows. My journey began with a deep technical foundation in programming and evolved into strategic management, allowing me to bridge the gap between developing AI agents and the business vision required to deploy them effectively. My focus is on building automated ecosystems that generate ROI and operational clarity while applying the best coding practices."
            imageLabel="IA Strategies.png" />
        </section>

        {/* 02. WORK EXPERIENCE */}
        <section>
          <h2 id="work experience" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>Work Experience</h2>
          <ContentBlock
            reverse
            icon={<Briefcase color={colors.skyBlue} />}
            title="Fortruss"
            subtitle="ERP Implementation & Automation | Jan 2026 - Present"
            text="Leading the implementation of the Nomus ERP system, I operate at the forefront of digital transformation. My role goes beyond coding; I perform process mapping, data codification, and API integration, ensuring technology aligns with the real-world needs of manufacturing. This is where I apply my vision as an AI Agent Manager, always seeking to automate repetitive tasks to unlock the creative potential of the team."
            imageLabel="Fortruss Joinville.png" />

          <ContentBlock
            icon={<Briefcase color={colors.skyBlue} />}
            title="Entrepreneurial Experience"
            subtitle="Management & Sales | Mar 2022 - Oct 2025"
            text="As a former business owner focused on sales and customer service, I developed a ' business-owner mindset 'and  learned to manage teams, understand customer pain points, and maintain the financial health of an operation. This experience provided me with a foundation of soft skills that sets me apart: the ability to negotiate, sell an idea, and understand that every line of code must serve a commercial objective."
            imageLabel="Business Management.png" />
        </section>

        {/* 03. EDUCATION */}
        <section>
          <h2 id="education" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>Education</h2>
          <ContentBlock
            reverse
            icon={<GraduationCap color={colors.skyBlue} />}
            title="Academic Education"
            subtitle="University of Havana, Cuba"
            text="B.S. in Computer Science. My technical foundation was built in an environment of high academic rigor and creative problem-solving. Studying computer science in Cuba taught me resilience and how to maximize resources—essential skills for developing robust, efficient AI models and system integrations in today’s fast-paced tech landscape."
            imageLabel="Bachelor Cuba.jpeg" />
        </section>

        {/* 04. CERTIFICATIONS */}
        <section>
          <h2 id="certifications" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>Certifications</h2>
          <ContentBlock
            icon={<Award color={colors.skyBlue} />}
            title="Diplomas and Certifications"
            subtitle="Hybrid Professional"
            text="I am not just a coder; I am a professional who understands the ecosystem where that code lives. My certifications reflect this balance of technical and business acumen:"
            imageLabel={[
              "Certifications_1.png", 
              "Certifications_2.png", 
              "Certifications_3.png"
            ]}
            list={<div style={{ display: 'grid', gap: '10px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Tech: Python, SQL, Algorithms & AI Agents</li>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Business: SEBRAE Cash Flow & Management</li>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Finance: ANBIMA CPA 2026 - In Prep</li>
            </div>} />
        </section>

        {/* 05. BEYOND THE CODE */}
        <section>
          <h2 id="beyond the code" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>Beyond the Code</h2>
          <ContentBlock
            reverse
            icon={<Heart color={colors.skyBlue} />}
            title="Human Side & Interests"
            text="To keep my mind sharp and creativity flowing, I embrace a lifestyle rooted in exploration, discipline, and digital connection. I am a passionate storyteller who documents professional journeys to inspire and engage others, finding my personal balance through the unique perspectives gained from speleology and recreational diving. This drive for discovery is reinforced by a commitment to physical fitness, where the persistence and consistency required for strength training directly inform my approach to building resilient, high-quality software architecture."
            imageLabel="Nature Exploration.jpg" />
        </section> 

        {/* 06. LANGUAGES */}
        <section>
          <h2 id="languages" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '40px' }}>Languages</h2>
          <div style={{ textAlign: 'center', padding: 'clamp(20px, 5vw, 40px)', border: `1px solid ${colors.primaryIndigo}33`, borderRadius: '20px', marginBottom: '80px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <h3 style={{ fontFamily: 'Allerta Stencil', color: colors.skyBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
              <Globe size={24} /> Communication Without Borders
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 'clamp(30px, 8vw, 60px)' }}>
              {[
                { name: 'Spanish', flag: 'es', level: 'Native' },
                { name: 'Portuguese', flag: 'br', level: 'Fluent' },
                { name: 'English', flag: 'us', level: 'Fluent' }
              ].map((lang) => (
                <motion.div key={lang.name} whileHover={{ scale: 1.1, y: -10 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                  <img src={`https://flagcdn.com/w80/${lang.flag}.png`} alt={lang.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: `2px solid ${colors.primaryIndigo}44` }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>{lang.name}</p>
                    <p style={{ margin: 0, fontSize: '0.7rem', opacity: 0.5, textTransform: 'uppercase' }}>{lang.level}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 07. LETS CONNECT */}
        <section>
          <h2 id="lets conect" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', fontSize: 'clamp(2rem, 8vw, 3rem)', color: colors.primaryIndigo, textAlign: 'center' }}>LET'S CONNECT</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px', paddingBottom: '100px' }}>
            <motion.a href="https://www.linkedin.com/in/yenli-machado-a1530024b" target="_blank" rel="noreferrer" whileHover={{ scale: 1.05, y: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#111', color: colors.skyBlue, padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #333' }}>
              <Linkedin size={20} /> LinkedIn
            </motion.a>
            <motion.a href="mailto:yengmpro@gmail.com" whileHover={{ scale: 1.05, y: -5 }} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: colors.primaryIndigo, color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
              <Mail size={20} /> Email
            </motion.a>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '40px', opacity: 0.3, fontSize: '10px', letterSpacing: '2px' }}>
        YENLI MACHADO © 2026 | BUILT FOR THE INTERNATIONAL AI MARKET
      </footer>

      <AIAgentConsultant />
    </div>
  );
}