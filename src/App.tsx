/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; body: string } | null>(null);
  const [activeSection, setActiveSection] = useState('main__section');
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  // Handle Scroll Spy and Smooth Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section');
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 110;

      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (id && top >= offset - 20 - headerHeight && top < offset - 20 - headerHeight + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    const header = document.querySelector('header');
    
    if (target && header) {
      const headerHeight = header.offsetHeight;
      const offsetTop = target.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
      document.body.classList.remove('_lock');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('_lock');
  };

  const openModal = (title: string, body: string) => {
    setModalContent({ title, body });
    setIsModalOpen(true);
    document.body.classList.add('_modal-open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    document.body.classList.remove('_modal-open');
  };

  const toggleModal = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (isModalOpen) {
      closeModal();
    } else {
      openModal(
        t.modal.welcomeTitle,
        t.modal.welcomeBody
      );
    }
  };

  const LanguageSwitcher = () => (
    <div className="language-switcher__wrapper">
      <div className="language-switcher__icon">
        <Languages size={16} />
      </div>
      <div className="language-switcher">
        {(['en', 'ru', 'uz'] as Language[]).map((l) => (
          <button
            key={l}
            className={`lang-btn ${lang === l ? 'active' : ''}`}
            onClick={() => setLang(l)}
          >
            {l === 'en' ? 'EN' : l === 'ru' ? 'RU' : 'UZ'}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="wrapper">
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header__container container">
          <div className="header__logo">
            <a href="#" onClick={(e) => scrollToSection(e, 'main__section')}>
              Brit<span>lex</span>
            </a>
          </div>
          <div className="header__menu">
            <div 
              className={`menu__icon ${isMenuOpen ? '_active' : ''}`} 
              onClick={toggleMenu}
            >
              <span></span>
            </div>
            <nav className={`menu__body ${isMenuOpen ? '_active' : ''}`}>
              <ul className="menu__list">
                <li>
                  <a 
                    className={`menu__link ${activeSection === 'main__section' ? 'link-active' : ''}`} 
                    href="#"
                    onClick={(e) => scrollToSection(e, 'main__section')}
                  >
                    {t.nav.home}
                  </a>
                </li>
                <li>
                  <a 
                    className={`menu__link ${activeSection === 'skills__section' ? 'link-active' : ''}`} 
                    href="#"
                    onClick={(e) => scrollToSection(e, 'skills__section')}
                  >
                    {t.nav.skills}
                  </a>
                </li>
                <li>
                  <a 
                    className={`menu__link ${activeSection === 'about-us__section' ? 'link-active' : ''}`} 
                    href="#"
                    onClick={(e) => scrollToSection(e, 'about-us__section')}
                  >
                    {t.nav.about}
                  </a>
                </li>
                <li>
                  <a 
                    className={`menu__link ${activeSection === 'pricing__section' ? 'link-active' : ''}`} 
                    href="#"
                    onClick={(e) => scrollToSection(e, 'pricing__section')}
                  >
                    {t.nav.pricing}
                  </a>
                </li>
                <li>
                  <a 
                    className={`menu__link ${activeSection === 'contact-us__section' ? 'link-active' : ''}`} 
                    href="#"
                    onClick={(e) => scrollToSection(e, 'contact-us__section')}
                  >
                    {t.nav.contacts}
                  </a>
                </li>
                <li className="mobile-only"><LanguageSwitcher /></li>
                <li><a href="#" onClick={toggleModal} className="button-lets-talk inside">{t.nav.letsTalk}</a></li>
              </ul>
            </nav>
          </div>
          <div className="header__actions">
            <LanguageSwitcher />
            <a href="#" onClick={toggleModal} className="button-lets-talk outside">{t.nav.letsTalk}</a>
          </div>
        </div>
      </header>

      <main className="main">
        {/* Main Section */}
        <section id="main__section" className="main__section section">
          <div className="main__container container">
            <div className="main__content main__row">
              <div className="main__text main__column">
                <h1 className="main__title">{t.hero.title}</h1>
                <p className="main__subtitle">
                  {t.hero.subtitle}
                </p>
                <a href="#" onClick={toggleModal} className="button button-get-started">{t.hero.getStarted}</a>
              </div>
              <div className="main__image main__column">
                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" alt="Students studying together" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills__section" className="skills__section section">
          <div className="skills__container container">
            <div className="content">
              <h2 className="skills__title content__title">{t.skills.title}</h2>
              <div className="skills__cards">
                <div className="card card__speaking">
                  <div className="card__image">
                    <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Speaking practice" />
                  </div>
                  <div className="card__content__text">
                    <h4 className="card__title">{t.skills.speaking.title}</h4>
                    <p className="card__subtitle">
                      {t.skills.speaking.text}
                    </p>
                    <div className="card__buttton">
                      <button 
                        className="button" 
                        onClick={() => openModal(
                          t.skills.speaking.title, 
                          t.skills.speaking.modal
                        )}
                      >
                        {t.skills.learnMore}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card__writing">
                  <div className="card__image">
                    <img src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop" alt="Writing workshop" />
                  </div>
                  <div className="card__content__text">
                    <h4 className="card__title">{t.skills.writing.title}</h4>
                    <p className="card__subtitle">{t.skills.writing.text}</p>
                    <div className="card__buttton">
                      <button 
                        className="button" 
                        onClick={() => openModal(
                          t.skills.writing.title, 
                          t.skills.writing.modal
                        )}
                      >
                        {t.skills.learnMore}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card__reading">
                  <div className="card__image">
                    <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop" alt="Reading literature" />
                  </div>
                  <div className="card__content__text">
                    <h4 className="card__title">{t.skills.reading.title}</h4>
                    <p className="card__subtitle">{t.skills.reading.text}</p>
                    <div className="card__buttton">
                      <button 
                        className="button" 
                        onClick={() => openModal(
                          t.skills.reading.title, 
                          t.skills.reading.modal
                        )}
                      >
                        {t.skills.learnMore}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card card__listening">
                  <div className="card__image">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" alt="Listening exercises" />
                  </div>
                  <div className="card__content__text">
                    <h4 className="card__title">{t.skills.listening.title}</h4>
                    <p className="card__subtitle">{t.skills.listening.text}</p>
                    <div className="card__buttton">
                      <button 
                        className="button" 
                        onClick={() => openModal(
                          t.skills.listening.title, 
                          t.skills.listening.modal
                        )}
                      >
                        {t.skills.learnMore}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about-us__section" className="about-us__section section">
          <div className="about-us__container container">
            <div className="about-us__content content">
              <h2 className="about-us__title content__title">{t.about.title}</h2>
              <div className="about-us__row">
                <div className="about-us__text about-us__col">
                  <p>
                    {t.about.text}
                  </p>
                  <ul className="facts-info">
                    <li className="fact__item">
                      <strong className="fact__title">800</strong>
                      <span className="fact__text">{t.about.stats.learners}</span>
                    </li>
                    <li className="fact__item">
                      <strong className="fact__title">50</strong>
                      <span className="fact__text">{t.about.stats.teachers}</span>
                    </li>
                    <li className="fact__item">
                      <strong className="fact__title">15</strong>
                      <span className="fact__text">{t.about.stats.languages}</span>
                    </li>
                  </ul>
                </div>
                <div className="about-us__image about-us__col">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="School environment" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing__section" className="pricing__section section">
          <div className="pricing__container container">
            <div className="pricing__content content">
              <h2 className="pricing__title content__title">{t.pricing.title}</h2>
              <div className="pricing__cards">
                <div className="pricing__card" onClick={() => openModal(
                  t.pricing.course1.title, 
                  t.pricing.course1.modal
                )} style={{ cursor: 'pointer' }}>
                  <div className="pricing__card-image">
                    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" alt="Self-study online course" />
                  </div>
                  <div className="pricing__card-title">{t.pricing.course1.title}</div>
                  <div className="pricing__card-text">{t.pricing.course1.text}</div>
                  <div className="pricing__card-price">
                    <div className="price-wrapper">
                      <p>$5.99 <span className="price-month">{t.pricing.perMonth}</span></p>
                    </div>
                  </div>
                </div>
                <div className="pricing__card" onClick={() => openModal(
                  t.pricing.course2.title, 
                  t.pricing.course2.modal
                )} style={{ cursor: 'pointer' }}>
                  <div className="pricing__card-image">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" alt="Live online classes" />
                  </div>
                  <div className="pricing__card-title">{t.pricing.course2.title}</div>
                  <div className="pricing__card-text">{t.pricing.course2.text}</div>
                  <div className="pricing__card-price">
                    <div className="price-wrapper">
                      <p>$12.99 <span className="price-month">{t.pricing.perMonth}</span></p>
                    </div>
                  </div>
                </div>
                <div className="pricing__card" onClick={() => openModal(
                  t.pricing.course3.title, 
                  t.pricing.course3.modal
                )} style={{ cursor: 'pointer' }}>
                  <div className="pricing__card-image">
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" alt="Personal Tuition" />
                  </div>
                  <div className="pricing__card-title">{t.pricing.course3.title}</div>
                  <div className="pricing__card-text">{t.pricing.course3.text}</div>
                  <div className="pricing__card-price">
                    <div className="price-wrapper">
                      <p>$20.99 <span className="price-month">{t.pricing.perMonth}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us__section" className="contact-us__section section">
          <div className="contact-us__container container">
            <div className="contact-us__content content">
              <h2 className="contact-us__title content__title">{t.contact.title}</h2>
              <div className="contact-us__row">
                <div className="contact-us__image contact-us__col">
                  <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop" alt="Contact person" />
                </div>
                <div className="contact-us__form contact-us__col">
                  <h2 className="contact-us__title content__title">{t.contact.title}</h2>
                  <p className="contact-us__text">
                    {t.contact.subtitle}
                  </p>
                  <div className="contact-info">
                    <p className="contact-info__item"><strong>{t.contact.name}:</strong> Ismoil</p>
                    <p className="contact-info__item"><strong>{t.contact.phone}:</strong> <a href="tel:+9989049988">+998 904 99 88</a></p>
                    <p className="contact-info__item"><strong>{t.contact.telegram}:</strong> <a href="https://t.me/Kamilov_2019" target="_blank" rel="noreferrer">@Kamilov_2019</a></p>
                  </div>
                  <form className="contact__form" onSubmit={(e) => { e.preventDefault(); alert(t.contact.success); }}>
                    <input className="contact__input" type="email" placeholder={t.contact.emailPlaceholder} required />
                    <button className="contact__submit">{t.contact.subscribe}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__content">
            <div className="footer__logo">
              <a href="#" onClick={(e) => scrollToSection(e, 'main__section')}>
                Brit<span>lex</span>
              </a>
              <span className="footer__by">{t.footer.by}</span>
            </div>
            <nav className="footer__links">
              <ul className="footer__menu">
                <li className="footer__menu-item"><a href="#" className="footer__link">{t.footer.terms}</a></li>
                <li className="footer__menu-item"><a href="#" className="footer__link">{t.footer.privacy}</a></li>
                <li className="footer__menu-item"><a href="#" className="footer__link">{t.footer.cookies}</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h3 className="modal-title">{modalContent.title}</h3>
            <div className="modal-body">
              <p>{modalContent.body}</p>
              
              <div className="modal-contact">
                <h4>{t.modal.founderTitle}</h4>
                <div className="modal-contact__info">
                  <p><strong>{t.contact.name}:</strong> Ismoil</p>
                  <p><strong>{t.contact.phone}:</strong> +998 904 99 88</p>
                </div>
                <div className="modal-actions">
                  <a href="https://t.me/Kamilov_2019" target="_blank" rel="noreferrer" className="button telegram-button">
                    {t.modal.buyAndConnect}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
