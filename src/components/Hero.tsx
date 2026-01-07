import { useLanguage } from '../contexts/LanguageContext';
import { Github, FileText, Sparkles } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-slate-700">
              {t('Software Engineering Student', 'Étudiante en génie logiciel')}
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tight">
            Nicole Antoun
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              'Transforming ideas into elegant, user-friendly solutions through clean code and thoughtful design.',
              'Transformer des idées en solutions élégantes et conviviales grâce à un code propre et une conception réfléchie.'
            )}
          </p>

          <div className="flex gap-4 justify-center items-center flex-wrap">
          <a
  href="https://www.linkedin.com/in/nicole-a-1a56a8285/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
>
  <FileText className="w-5 h-5" />
  {t('Linkedin', 'Voir CV')}
</a>

<a
  href="https://github.com/nicoledesigns"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-50 transition-all hover:scale-105 shadow-lg hover:shadow-xl border border-slate-200"
>
  <Github className="w-5 h-5" />
  {t('GitHub Profile', 'Profil GitHub')}
</a>

          </div>

          <div className="pt-8">
            <a
              href="#about"
              className="inline-block text-slate-400 hover:text-slate-600 transition-colors animate-bounce"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
