import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: { en: 'About', fr: 'À propos' } },
    { href: '#skills', label: { en: 'Skills', fr: 'Compétences' } },
    { href: '#projects', label: { en: 'Projects', fr: 'Projets' } },
    { href: '#contact', label: { en: 'Contact', fr: 'Contact' } }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-slate-900">
            NA
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {t(link.label.en, link.label.fr)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language === 'en' ? 'FR' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
                >
                  {t(link.label.en, link.label.fr)}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
