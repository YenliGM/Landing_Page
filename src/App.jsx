import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Briefcase, GraduationCap, Linkedin, Mail, Zap, Award, Globe, Heart } from 'lucide-react';

export default function App() {
  const colors = {
    ghostWhite: '#fdfffc',
    skyBlue: '#acd4f8',
    darkBg: '#03050b',
    primaryIndigo: '#4b45cb'
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Componente de Bloco com Animação corrigida
  const ContentBlock = ({ title, subtitle, text, icon, imageLabel, reverse = false, list = null }) => (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '40px', 
        alignItems: 'center',
        marginBottom: '80px',
        backgroundColor: 'rgba(255,255,255,0.02)',
        padding: '30px',
        borderRadius: '24px',
        border: '1px solid rgba(75, 69, 203, 0.1)'
      }}
    >
      <div style={{ order: reverse ? 2 : 1 }}>
        <h3 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '15px', margin: '0 0 10px 0' }}>
          {icon} {title}
        </h3>
        {subtitle && <p style={{ color: colors.skyBlue, fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '15px' }}>{subtitle}</p>}
        <p style={{ lineHeight: '1.7', opacity: 0.8 }}>{text}</p>
        {list && <ul style={{ marginTop: '15px', listStyle: 'none', padding: 0 }}>{list}</ul>}
      </div>

      <div style={{ 
        order: reverse ? 1 : 2, 
        backgroundColor: '#111', 
        height: 'auto', 
        borderRadius: '20px', 
        display: 'block', 
        alignItems: 'center', 
        justifyContent: 'center',
        border: `1px solid ${colors.primaryIndigo}33`,
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
      <img 
        src={`/${imageLabel}.jpeg`} // O Vite busca direto na pasta public
        alt={title}
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain', 
          padding: '10px'          
        }}
        onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Erro+ao+Carregar"; }} 
        />
      </div>
    </motion.div>
  );

  return (
    <div style={{ backgroundColor: colors.darkBg, color: colors.ghostWhite, fontFamily: 'Anybody, sans-serif', minHeight: '100vh' }}>
      
      {/* BARRA SUPERIOR FIXA */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        backgroundColor: 'rgba(3, 5, 11, 0.9)',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ 
              width: '50px', 
              height: '50px', 
              borderRadius: '50%', 
              border: `2px solid ${colors.primaryIndigo}`, 
              backgroundColor: '#111', 
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/sua-foto.jpeg" 
                alt="Yenli Machado" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }} 
                onError={(e) => { 
                  e.target.src = "https://via.placeholder.com/50?text=Y"; 
                }}
              />
            </div>
            <span style={{ 
              fontFamily: 'Allerta Stencil', 
              color: colors.primaryIndigo, 
              fontSize: '1.2rem' 
            }}>
              YENLI MACHADO
            </span>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            fontWeight: 'bold', 
            fontSize: '10px', 
            letterSpacing: '1px' 
          }}>
            {['about me', 'work experience', 'education', 'certifications', 'beyond the code', 'languages'].map(item => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: colors.ghostWhite, 
                  cursor: 'pointer', 
                  textTransform: 'uppercase' 
                }}
              >
                {item}
              </button>
            ))}
          </div>
          
          <button 
            onClick={() => scrollTo('lets conect')} 
            style={{ 
              backgroundColor: colors.primaryIndigo, 
              color: 'white', 
              border: 'none', 
              padding: '10px 20px', 
              borderRadius: '25px', 
              fontWeight: 'bold', 
              cursor: 'pointer' 
            }}
          >
            CONTATO
          </button>
        </div>
      </nav>
      
   <div style={{ display: 'flex', gap: '20px', fontWeight: 'bold', fontSize: '10px', letterSpacing: '1px' }}>
          {['about me', 'work experience', 'education', 'certifications', 'beyond the code', 'languages'].map(item => (
            <button key={item} onClick={() => scrollTo(item)} style={{ background: 'none', border: 'none', color: colors.ghostWhite, cursor: 'pointer', textTransform: 'uppercase' }}>
              {item}
            </button>
          ))}
        </div>
    
      {/* HERO */}
      <header style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          style={{ fontFamily: 'Allerta Stencil', fontSize: 'clamp(3rem, 10vw, 7rem)', color: colors.primaryIndigo, margin: 0 }}
        >
          YENLI MACHADO
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color: colors.skyBlue, letterSpacing: '6px', textTransform: 'uppercase' }}
        >
          AI Agent Manager | Full-Stack AI Developer | AI Project Manager
        </motion.p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>

        <section id="about me">
          <ContentBlock
            icon={<Bot color={colors.skyBlue} />}
            title="01. About Me"
            subtitle="Where Logic Meets Strategy"
            text="I bridge the gap between developing AI agents and the business vision required to deploy them effectively. My focus is on building automated ecosystems that generate ROI and operational clarity while applying the best coding practices."
            imageLabel="IA Strategies" />
        </section>

        <section id="work experience">
          <h2 style={{ fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2.5rem', marginBottom: '40px' }}>02. Work Experience</h2>
          <ContentBlock
            reverse
            icon={<Briefcase color={colors.skyBlue} />}
            title="Fortruss"
            subtitle="ERP Implementation & Automation | Jan 2026 - Present"
            text="Leading the implementation of the Nomus ERP system, performing process mapping, and API integration. Automating repetitive tasks to unlock team potential."
            imageLabel="Fortruss Joinville" />

          <ContentBlock
            icon={<Briefcase color={colors.skyBlue} />}
            title="Entrepreneurial Experience"
            subtitle="Management & Sales | Mar 2022 - Oct 2025"
            text="Developed a 'business-owner mindset' managing teams, operations and negotiations. Every line of code must serve a commercial objective."
            imageLabel="Business Management" />
        </section>

        <section id="education">
          <ContentBlock
            reverse
            icon={<GraduationCap color={colors.skyBlue} />}
            title="03. Education"
            subtitle="University of Havana, Cuba"
            text="B.S. in Computer Science. My foundation was built in an environment of high academic rigor, teaching me resilience and resource maximization."
            imageLabel="Bachelor Cuba" />
        </section>

        <section id="certifications">
          <ContentBlock
            icon={<Award color={colors.skyBlue} />}
            title="Certifications"
            subtitle="Hybrid Professional"
            text="Balancing technical and business acumen:"
            imageLabel="Certifications"
            list={<div style={{ display: 'grid', gap: '10px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Tech: Python, SQL, Algorithms & AI Agents</li>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Business: SEBRAE Cash Flow & Management</li>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Finance: ANBIMA CPA 2026 - In Prep</li>
            </div>} />
        </section>

        <section id="beyond the code">
          <ContentBlock
            reverse
            icon={<Heart color={colors.skyBlue} />}
            title="04. Beyond the Code"
            subtitle="Human Side & Interests"
            text="I keep my mind sharp through digital content creation, speleology, diving, and consistent fitness discipline."
            imageLabel="Nature Exploration" />
        </section>

        <section id="languages">
          <div style={{ textAlign: 'center', padding: '40px', border: `1px solid ${colors.primaryIndigo}33`, borderRadius: '20px', marginBottom: '80px' }}>
            <h3 style={{ fontFamily: 'Allerta Stencil', color: colors.skyBlue }}><Globe size={20} /> Languages</h3>
            <p> Spanish (Native)  |  Portuguese (Fluent)  |  English (Fluent) </p>
          </div>
        </section>

        <section id="lets conect" style={{ textAlign: 'center', paddingBottom: '100px' }}>
          <h2 style={{ fontFamily: 'Allerta Stencil', fontSize: '3rem', color: colors.primaryIndigo }}>LET'S CONNECT</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
            <a href="https://www.linkedin.com/in/yenli-machado-a1530024b" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#111', color: colors.skyBlue, padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', border: '1px solid #333' }}>
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:yengmpro@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: colors.primaryIndigo, color: 'white', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none' }}>
              <Mail size={20} /> Email
            </a>
          </div>
        </section>

      </main>

      <footer style={{ textAlign: 'center', padding: '40px', opacity: 0.3, fontSize: '10px', letterSpacing: '2px' }}>
        YENLI MACHADO © 2026 | BUILT FOR THE INTERNATIONAL AI MARKET
      </footer>
    </div>
  );
}