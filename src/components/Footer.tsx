import { useLanguage } from '../contexts/LanguageContext';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Nicole Antoun</h3>
            <p className="text-slate-400">
              {t(
                'Software Engineering Student creating impactful solutions',
                'Étudiante en génie logiciel créant des solutions impactantes'
              )}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('Quick Links', 'Liens rapides')}</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t('About', 'À propos')}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  {t('Skills', 'Compétences')}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  {t('Projects', 'Projets')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t('Contact', 'Contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('Connect', 'Me suivre')}</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nicoleantounn@hotmail.com"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p className="flex items-center justify-center gap-2">
            {t('Made with', 'Fait avec')}
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            {t('by Nicole Antoun', 'par Nicole Antoun')}
          </p>
          <p className="mt-2 text-sm">© {new Date().getFullYear()} {t('All rights reserved', 'Tous droits réservés')}</p>
        </div>
      </div>
    </footer>
  );
}
