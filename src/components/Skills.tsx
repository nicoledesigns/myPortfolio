import { useLanguage } from '../contexts/LanguageContext';
import { Code, Database, Palette, Brain, Users, Lightbulb } from 'lucide-react';

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      title: { en: 'Full-Stack Development', fr: 'Développement Full-Stack' },
      desc: { en: 'Building complete web applications from frontend to backend', fr: 'Créer des applications web complètes du frontend au backend' },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: { en: 'Machine Learning', fr: 'Apprentissage automatique' },
      desc: { en: 'Implementing intelligent systems and data-driven solutions', fr: 'Mettre en œuvre des systèmes intelligents et des solutions basées sur les données' },
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Lightbulb,
      title: { en: 'Problem Solving', fr: 'Résolution de problèmes' },
      desc: { en: 'Analytical thinking and creative approaches to challenges', fr: 'Pensée analytique et approches créatives des défis' },
      color: 'from-teal-500 to-emerald-500'
    },
    {
      icon: Users,
      title: { en: 'Team Collaboration', fr: 'Collaboration d\'équipe' },
      desc: { en: 'Working effectively in Agile and cross-functional teams', fr: 'Travailler efficacement dans des équipes Agile et interfonctionnelles' },
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Database,
      title: { en: 'Database Design', fr: 'Conception de bases de données' },
      desc: { en: 'Architecting scalable and efficient data solutions', fr: 'Concevoir des solutions de données évolutives et efficaces' },
      color: 'from-green-500 to-lime-500'
    },
    {
      icon: Palette,
      title: { en: 'UI/UX Design', fr: 'Design UI/UX' },
      desc: { en: 'Creating intuitive and beautiful user experiences', fr: 'Créer des expériences utilisateur intuitives et élégantes' },
      color: 'from-lime-500 to-yellow-500'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('Core Skills', 'Compétences Clés')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            {t(
              'A diverse skill set combining technical expertise with creative problem-solving',
              'Un ensemble de compétences diversifiées alliant expertise technique et résolution créative de problèmes'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} rounded-t-2xl`}></div>

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t(skill.title.en, skill.title.fr)}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {t(skill.desc.en, skill.desc.fr)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
