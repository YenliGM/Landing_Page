import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Briefcase, GraduationCap, Linkedin, Mail, Zap, 
  Award, Globe, Heart, ChevronLeft, ChevronRight, 
  Send, Sparkles, Loader2 
} from 'lucide-react';
import AIAgentConsultant from './IA_Agent';
import ImageCarousel from './Carousel'; // Nome corrigido aqui

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

  // Componente de Bloco movido para dentro para usar a constante 'colors' diretamente
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
          border: `1px solid ${colors.primaryIndigo}22`,
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

        {/* 01. ABOUT ME */}
        <section>
          <h2 id="about me" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2.5rem', marginBottom: '40px' }}>About Me</h2>
          <ContentBlock
            icon={<Bot color={colors.skyBlue} />}
            title="My Trajectory "
            subtitle="Where Logic Meets Strategy"
            text="I bridge the gap between developing AI agents and the business vision required to deploy them effectively. My focus is on building automated ecosystems that generate ROI and operational clarity while applying the best coding practices."
            imageLabel="IA Strategies.png" />
        </section>

        {/* 02. WORK EXPERIENCE */}
        <section>
          <h2 id="work experience" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2.5rem', marginBottom: '40px' }}>Work Experince</h2>
          <ContentBlock
            reverse
            icon={<Briefcase color={colors.skyBlue} />}
            title="Fortruss"
            subtitle="ERP Implementation & Automation | Jan 2026 - Present"
            text="Leading the implementation of the Nomus ERP system, performing process mapping, and API integration. Automating repetitive tasks to unlock team potential."
            imageLabel="Fortruss Joinville.png" />

          <ContentBlock
            icon={<Briefcase color={colors.skyBlue} />}
            title="Entrepreneurial Experience"
            subtitle="Management & Sales | Mar 2022 - Oct 2025"
            text="Developed a 'business-owner mindset' managing teams, operations and negotiations. Every line of code must serve a commercial objective."
            imageLabel="Business Management.png" />
        </section>

        {/* 03. EDUCATION */}
        <section>
          <h2 id="education" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2.5rem', marginBottom: '40px' }}>Education</h2>
          <ContentBlock
            reverse
            icon={<GraduationCap color={colors.skyBlue} />}
            title="Academic Education"
            subtitle="University of Havana, Cuba"
            text="B.S. in Computer Science. My foundation was built in an environment of high academic rigor, teaching me resilience and resource maximization."
            imageLabel="Bachelor Cuba.jpeg" />
        </section>

        {/* 04. CERTIFICATIONS */}
        <section>
          <h2 id="certifications" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2.5rem', marginBottom: '40px' }}>Certifications</h2>
          <ContentBlock
            icon={<Award color={colors.skyBlue} />}
            title="Diplomas and Certifications"
            subtitle="Hybrid Professional"
            text="Balancing technical and business acumen:"

            imageLabel={[
              "Certifications_1.png", 
              "Certifications_2.png", 
              "Certifications_3.png"
            ]}
            colors={colors}

            list={<div style={{ display: 'grid', gap: '10px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Tech: Python, SQL, Algorithms & AI Agents</li>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Business: SEBRAE Cash Flow & Management</li>
              <li style={{ display: 'flex', gap: '10px' }}><Zap size={16} color={colors.primaryIndigo} /> Finance: ANBIMA CPA 2026 - In Prep</li>
            </div>} />
        </section>

        {/* 05. BEYOND THE CODE */}
        <section>
          <h2 id="beyond the code" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2.5rem', marginBottom: '40px' }}>Beyond the Code</h2>
          <ContentBlock
            reverse
            icon={<Heart color={colors.skyBlue} />}
            title="Beyond the Code"
            subtitle="Human Side & Interests"
            text="I keep my mind sharp through digital content creation, speleology, diving, and consistent fitness discipline."
            imageLabel="Nature Exploration.jpg" />
        </section> 

        {/* 06. LANGUAGES COM EFEITO HOVER */}
        <section>
          <h2 id="languages" style={{ scrollMarginTop: '120px', fontFamily: 'Allerta Stencil', color: colors.primaryIndigo, fontSize: '2.5rem', marginBottom: '40px' }}>Languages</h2>
          
          <div style={{ 
            textAlign: 'center', 
            padding: '40px', 
            border: `1px solid ${colors.primaryIndigo}33`, 
            borderRadius: '20px', 
            marginBottom: '80px',
            backgroundColor: 'rgba(255,255,255,0.01)'
          }}>
            <h3 style={{ 
              fontFamily: 'Allerta Stencil', 
              color: colors.skyBlue, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '10px',
              marginBottom: '40px' 
            }}>
              <Globe size={24} /> 
              Communication Without Borders
            </h3>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '60px' 
            }}>
              
              {/* Mapeamento dos idiomas com efeito hover */}
              {[
                { name: 'Spanish', flag: 'es', level: 'Native' },
                { name: 'Portuguese', flag: 'br', level: 'Fluent' },
                { name: 'English', flag: 'us', level: 'Fluent' }
              ].map((lang) => (
                <motion.div 
                  key={lang.name}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    filter: 'drop-shadow(0px 0px 8px rgba(75, 69, 203, 0.5))'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '12px',
                    cursor: 'default' 
                  }}
                >
                  <img 
                    src={`https://flagcdn.com/w80/${lang.flag}.png`} 
                    alt={`${lang.name} Flag`} 
                    style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%', 
                      objectFit: 'cover', 
                      border: `2px solid ${colors.primaryIndigo}44` 
                    }} 
                  />
                  <div>
                    <p style={{ margin: 0, fontWeight: 'bold', color: colors.ghostWhite }}>{lang.name}</p>
                    <p style={{ 
                      margin: 0, 
                      fontSize: '0.7rem', 
                      opacity: 0.5, 
                      textTransform: 'uppercase', 
                      letterSpacing: '1px' 
                    }}>
                      {lang.level}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* 07. LETS CONNECT COM EFEITO HOVER */}
        <section>
          <h2 id="lets conect" style={{ 
            scrollMarginTop: '120px', 
            fontFamily: 'Allerta Stencil', 
            fontSize: '3rem', 
            color: colors.primaryIndigo, 
            textAlign: 'center' 
          }}>
            LET'S CONNECT
          </h2>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '20px', 
            marginTop: '30px', 
            paddingBottom: '100px' 
          }}>
            
            {/* Botão LinkedIn */}
            <motion.a 
              href="https://www.linkedin.com/in/yenli-machado-a1530024b" 
              target="_blank" 
              rel="noreferrer"
              whileHover={{ 
                scale: 1.05, 
                y: -5, 
                borderColor: colors.primaryIndigo,
                boxShadow: `0px 10px 20px rgba(75, 69, 203, 0.2)`
              }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                backgroundColor: '#111', 
                color: colors.skyBlue, 
                padding: '15px 30px', 
                borderRadius: '50px', 
                textDecoration: 'none', 
                border: '1px solid #333',
                transition: 'border-color 0.3s'
              }}
            >
              <Linkedin size={20} /> LinkedIn
            </motion.a>

            {/* Botão Email */}
            <motion.a 
              href="mailto:yengmpro@gmail.com" 
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                filter: 'brightness(1.2)',
                boxShadow: `0px 10px 20px rgba(75, 69, 203, 0.3)`
              }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                backgroundColor: colors.primaryIndigo, 
                color: 'white', 
                padding: '15px 30px', 
                borderRadius: '50px', 
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
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