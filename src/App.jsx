import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const colors = {
    primary: '#C41E3A',
    accent: '#F5A623',
    cream: '#FFF8F0',
    dark: '#2C1810',
    warmGray: '#8B7355'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Merci pour votre message ! Nous vous répondrons rapidement.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Georgia', serif;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-flicker {
          animation: flicker 2s ease-in-out infinite;
        }
        
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .delay-4 { animation-delay: 0.8s; }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-tagline {
            font-size: 1.2rem !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .about-content {
            flex-direction: column !important;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .nav-links {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .section-padding {
            padding: 60px 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem !important;
          }
        }
      `}</style>

      <div style={{ backgroundColor: colors.cream, minHeight: '100vh' }}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(44, 24, 16, 0.95)',
          padding: '15px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          boxShadow: '0 2px 20px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '2rem' }} className="animate-flicker">🔥</span>
            <span style={{
              color: colors.cream,
              fontSize: '1.5rem',
              fontWeight: 'bold',
              fontStyle: 'italic'
            }}>
              Délice Pizza
            </span>
          </div>
          
          <div className="nav-links" style={{
            display: 'flex',
            gap: '30px'
          }}>
            {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('à ', '')}`}
                style={{
                  color: colors.cream,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  transition: 'color 0.3s',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = colors.accent}
                onMouseLeave={(e) => e.target.style.color = colors.cream}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: colors.cream,
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            backgroundColor: colors.dark,
            padding: '20px',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {['Accueil', 'Services', 'À propos', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('à ', '')}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: colors.cream,
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  padding: '10px 0',
                  borderBottom: `1px solid ${colors.warmGray}`
                }}
              >
                {item}
              </a>
            ))}
          </div>
        )}

        {/* Hero Section */}
        <section id="accueil" style={{
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${colors.dark} 0%, #4A2C2A 50%, ${colors.primary} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            fontSize: '4rem',
            opacity: 0.3
          }} className="animate-float">🍕</div>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            fontSize: '3rem',
            opacity: 0.3
          }} className="animate-float delay-2">🌿</div>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            fontSize: '2.5rem',
            opacity: 0.3
          }} className="animate-float delay-3">🍅</div>

          <div style={{
            textAlign: 'center',
            padding: '20px',
            maxWidth: '900px'
          }}>
            <div className="animate-fadeInUp" style={{
              marginBottom: '20px'
            }}>
              <span style={{
                fontSize: '5rem',
                display: 'block',
                marginBottom: '10px'
              }} className="animate-pulse">🔥</span>
            </div>
            
            <h1 className="hero-title animate-fadeInUp delay-1" style={{
              color: colors.cream,
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontFamily: 'Georgia, serif'
            }}>
              Délice <span style={{ color: colors.accent }}>Pizza</span>
            </h1>
            
            <p className="hero-tagline animate-fadeInUp delay-2" style={{
              color: colors.cream,
              fontSize: '1.5rem',
              marginBottom: '15px',
              fontStyle: 'italic',
              opacity: 0.9
            }}>
              La vraie pizza au feu de bois, livrée chez vous !
            </p>
            
            <p className="animate-fadeInUp delay-2" style={{
              color: colors.accent,
              fontSize: '1.1rem',
              marginBottom: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              📍 Buchy
            </p>
            
            <div className="animate-fadeInUp delay-3" style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#contact" style={{
                backgroundColor: colors.primary,
                color: colors.cream,
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(196, 30, 58, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.accent
                e.target.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.primary
                e.target.style.transform = 'translateY(0)'
              }}>
                Commander
              </a>
              <a href="tel:0235XXXXXX" style={{
                backgroundColor: 'transparent',
                color: colors.cream,
                padding: '15px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                border: `2px solid ${colors.cream}`,
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.cream
                e.target.style.color = colors.dark
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.color = colors.cream
              }}>
                📞 02 35 XX XX XX
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: colors.cream,
            opacity: 0.7
          }} className="animate-float">
            <span style={{ fontSize: '2rem' }}>↓</span>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding" style={{
          padding: '100px 40px',
          backgroundColor: colors.cream
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ 
                color: colors.primary, 
                fontSize: '1rem', 
                textTransform: 'uppercase',
                letterSpacing: '3px'
              }}>
                Ce que nous proposons
              </span>
              <h2 style={{
                color: colors.dark,
                fontSize: '2.8rem',
                marginTop: '10px',
                fontFamily: 'Georgia, serif'
              }}>
                Nos <span style={{ color: colors.primary }}>Services</span>
              </h2>
              <div style={{
                width: '80px',
                height: '4px',
                backgroundColor: colors.accent,
                margin: '20px auto',
                borderRadius: '2px'
              }}></div>
            </div>

            <div className="services-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '30px'
            }}>
              {[
                { icon: '🔥', title: 'Pizzas au feu de bois', desc: 'Pâte fine et croustillante, cuite dans notre four traditionnel pour un goût authentique incomparable' },
                { icon: '🛍️', title: 'Vente à emporter', desc: 'Commandez et récupérez votre pizza chaude directement à notre comptoir' },
                { icon: '🛵', title: 'Livraison à domicile', desc: 'Livraison dans Buchy et environs - Minimum de commande 25€' },
                { icon: '☀️', title: 'Terrasse sur place', desc: 'Profitez de nos pizzas en terrasse dans une ambiance conviviale' }
              ].map((service, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFF',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 40px rgba(44, 24, 16, 0.1)',
                  transition: 'all 0.3s',
                  border: '2px solid transparent',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)'
                  e.currentTarget.style.borderColor = colors.accent
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(44, 24, 16, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(44, 24, 16, 0.1)'
                }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: colors.cream,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '2.5rem'
                  }}>
                    {service.icon}
                  </div>
                  <h3 style={{
                    color: colors.dark,
                    fontSize: '1.3rem',
                    marginBottom: '15px',
                    fontFamily: 'Georgia, serif'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: colors.warmGray,
                    lineHeight: '1.7',
                    fontSize: '0.95rem'
                  }}>
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional info */}
            <div style={{
              marginTop: '50px',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '30px'
            }}>
              {[
                { icon: '🅿️', text: 'Parking gratuit' },
                { icon: '♿', text: 'Accessible PMR' },
                { icon: '🐕', text: 'Animaux acceptés' },
                { icon: '💳', text: 'CB acceptée' }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: colors.dark,
                  fontSize: '0.95rem',
                  backgroundColor: '#FFF',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* À propos Section */}
        <section id="propos" className="section-padding" style={{
          padding: '100px 40px',
          background: `linear-gradient(135deg, ${colors.dark} 0%, #3D2317 100%)`
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="about-content" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '60px'
            }}>
              {/* Left side - Image/Illustration */}
              <div style={{
                flex: '1',
                position: 'relative'
              }}>
                <div style={{
                  backgroundColor: colors.primary,
                  borderRadius: '20px',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    fontSize: '8rem',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    🍕
                  </div>
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    fontSize: '4rem',
                    opacity: 0.3
                  }}>🔥</div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: '-10px',
                    fontSize: '3rem',
                    opacity: 0.3
                  }}>🌿</div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  backgroundColor: colors.accent,
                  color: colors.dark,
                  padding: '20px 30px',
                  borderRadius: '15px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}>
                  Fait maison 🤌
                </div>
              </div>

              {/* Right side - Content */}
              <div style={{ flex: '1' }}>
                <span style={{ 
                  color: colors.accent, 
                  fontSize: '1rem', 
                  textTransform: 'uppercase',
                  letterSpacing: '3px'
                }}>
                  Notre histoire
                </span>
                <h2 style={{
                  color: colors.cream,
                  fontSize: '2.5rem',
                  marginTop: '10px',
                  marginBottom: '30px',
                  fontFamily: 'Georgia, serif',
                  lineHeight: '1.3'
                }}>
                  L'art de la pizza <span style={{ color: colors.accent }}>artisanale</span>
                </h2>
                
                <p style={{
                  color: colors.cream,
                  opacity: 0.9,
                  lineHeight: '1.8',
                  marginBottom: '20px',
                  fontSize: '1.05rem'
                }}>
                  Chez <strong style={{ color: colors.accent }}>Délice Pizza</strong>, nous perpétuons la tradition de la vraie pizza italienne. Notre four à bois, cœur de notre établissement, confère à chaque pizza cette saveur unique et authentique que vous recherchez.
                </p>
                
                <p style={{
                  color: colors.cream,
                  opacity: 0.9,
                  lineHeight: '1.8',
                  marginBottom: '30px',
                  fontSize: '1.05rem'
                }}>
                  Des ingrédients frais soigneusement sélectionnés, une pâte préparée chaque jour et une cuisson maîtrisée : voilà les secrets de nos pizzas à la croûte fine et croustillante. Découvrez nos classiques revisités et nos créations originales !
                </p>

                <div style={{
                  display: 'flex',
                  gap: '40px',
                  marginTop: '30px'
                }}>
                  {[
                    { number: '100%', label: 'Fait maison' },
                    { number: '400°C', label: 'Four à bois' },
                    { number: '∞', label: 'Amour' }
                  ].map((stat, index) => (
                    <div key={index}>
                      <div style={{
                        color: colors.accent,
                        fontSize: '2rem',
                        fontWeight: 'bold'
                      }}>
                        {stat.number}
                      </div>
                      <div style={{
                        color: colors.cream,
                        opacity: 0.7,
                        fontSize: '0.9rem'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding" style={{
          padding: '100px 40px',
          backgroundColor: colors.cream
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ 
                color: colors.primary, 
                fontSize: '1rem', 
                textTransform: 'uppercase',
                letterSpacing: '3px'
              }}>
                Contactez-nous
              </span>
              <h2 style={{
                color: colors.dark,
                fontSize: '2.8rem',
                marginTop: '10px',
                fontFamily: 'Georgia, serif'
              }}>
                Envie d'une <span style={{ color: colors.primary }}>pizza</span> ?
              </h2>
              <div style={{
                width: '80px',
                height: '4px',
                backgroundColor: colors.accent,
                margin: '20px auto',
                borderRadius: '2px'
              }}></div>
            </div>

            <div className="contact-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '50px'
            }}>
              {/* Contact Info */}
              <div>
                <h3 style={{
                  color: colors.dark,
                  fontSize: '1.5rem',
                  marginBottom: '30px',
                  fontFamily: 'Georgia, serif'
                }}>
                  Nos coordonnées
                </h3>

                {[
                  { icon: '📍', title: 'Adresse', content: 'Buchy, Normandie' },
                  { icon: '📞', title: 'Téléphone', content: '02 35 XX XX XX' },
                  { icon: '✉️', title: 'Email', content: 'contact@delice-pizza.fr' },
                  { icon: '🕐', title: 'Livraison', content: 'Minimum 25€ de commande' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    marginBottom: '25px',
                    padding: '20px',
                    backgroundColor: '#FFF',
                    borderRadius: '15px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: colors.cream,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{
                        color: colors.dark,
                        fontSize: '1rem',
                        marginBottom: '5px'
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        color: colors.warmGray,
                        fontSize: '1.05rem'
                      }}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div style={{
                backgroundColor: '#FFF',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  color: colors.dark,
                  fontSize: '1.5rem',
                  marginBottom: '30px',
                  fontFamily: 'Georgia, serif'
                }}>
                  Envoyez-nous un message
                </h3>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      color: colors.dark,
                      marginBottom: '8px',
                      fontSize: '0.95rem'
                    }}>
                      Votre nom
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: `2px solid ${colors.cream}`,
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = colors.cream}
                    />
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{
                      display: 'block',
                      color: colors.dark,
                      marginBottom: '8px',
                      fontSize: '0.95rem'
                    }}>
                      Votre email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: `2px solid ${colors.cream}`,
                        borderRadius: '10px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = colors.cream}
                    />
                  </div>

                  <div style={{ marginBottom: '25px' }}>
                    <label style={{
                      display: 'block',
                      color: colors.dark,
                      marginBottom: '8px',
                      fontSize: '0.95rem'
                    }}>
                      Votre message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '15px',
                        border: `2px solid ${colors.cream}`,
                        borderRadius: '10px',
                        fontSize: '1rem',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                        transition: 'border-color 0.3s',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = colors.primary}
                      onBlur={(e) => e.target.style.borderColor = colors.cream}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: colors.primary,
                      color: colors.cream,
                      padding: '18px',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      boxShadow: '0 5px 20px rgba(196, 30, 58, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = colors.accent
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = colors.primary
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    Envoyer le message 🍕
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          backgroundColor: colors.dark,
          color: colors.cream,
          padding: '50px 40px 30px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '2rem' }}>🔥</span>
              <span style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                fontStyle: 'italic'
              }}>
                Délice Pizza
              </span>
            </div>
            
            <p style={{
              opacity: 0.8,
              marginBottom: '30px',
              fontStyle: 'italic'
            }}>
              La vraie pizza au feu de bois, livrée chez vous !
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              marginBottom: '30px',
              flexWrap: 'wrap'
            }}>
              <span>📍 Buchy</span>
              <span>📞 02 35 XX XX XX</span>
              <span>✉️ contact@delice-pizza.fr</span>
            </div>

            <div style={{
              borderTop: `1px solid ${colors.warmGray}`,
              paddingTop: '20px',
              opacity: 0.6,
              fontSize: '0.9rem'
            }}>
              © 2024 Délice Pizza - Tous droits réservés | Fait avec ❤️ et beaucoup de mozzarella
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}