import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Target, Users, Zap } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: GraduationCap,
      title: { en: 'Student', fr: 'Étudiante' },
      desc: { en: 'Software Engineering at Concordia University', fr: 'Génie logiciel à l\'Université Concordia' }
    },
    {
      icon: Target,
      title: { en: 'Goal-Oriented', fr: 'Orientée objectifs' },
      desc: { en: 'Creating impactful solutions for business growth', fr: 'Créer des solutions impactantes pour la croissance' }
    },
    {
      icon: Zap,
      title: { en: 'Quick Learner', fr: 'Apprentissage rapide' },
      desc: { en: 'Adapting to new technologies rapidly', fr: 'Adaptation rapide aux nouvelles technologies' }
    },
    {
      icon: Users,
      title: { en: 'Team Player', fr: 'Esprit d\'équipe' },
      desc: { en: 'Thriving in collaborative environments', fr: 'Épanouissement dans les environnements collaboratifs' }
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('About Me', 'À propos')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              {t(
                'I am a Software Engineering Student at Concordia University with strong skills in problem-solving, design, and full-stack development.',
                'Je suis étudiante en génie logiciel à l\'Université Concordia avec de solides compétences en résolution de problèmes, en design et en développement full-stack.'
              )}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              {t(
                'My goal is to transform technical knowledge into impactful, user-friendly solutions that help businesses grow.',
                'Mon objectif est de transformer les connaissances techniques en solutions impactantes et conviviales qui aident les entreprises à se développer.'
              )}
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              {t(
                'I am highly motivated, quick to learn new technologies, and thrive in collaborative environments.',
                'Je suis très motivée, j\'apprends rapidement de nouvelles technologies et je m\'épanouis dans des environnements collaboratifs.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-all hover:scale-105"
              >
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {t(item.title.en, item.title.fr)}
                </h3>
                <p className="text-sm text-slate-600">
                  {t(item.desc.en, item.desc.fr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
