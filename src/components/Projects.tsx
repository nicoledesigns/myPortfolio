import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Project {
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  image?: string;
  video?: string;
  tags: string[];
  link?: string;
}

export default function Projects() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects: Project[] = [
    {
      title: { en: 'Pet Website', fr: 'Site web pour animaux' },
      description: {
        en: '7-page responsive website built with HTML, CSS, and JavaScript. Designed for usability and aesthetics, earning a final grade of 97%.',
        fr: 'Site web responsive de 7 pages développé avec HTML, CSS et JavaScript. Conçu pour l\'ergonomie et l\'esthétique avec une note finale de 97%.'
      },
      video: '/videos/pet.mp4',
      tags: ['HTML', 'CSS', 'JavaScript'] ,
      //link: 'https://ephemeral-pothos-cbb6ca.netlify.app'
      link: 'https://github.com/nicoledesigns/first-project'
    },
    {
      title: { en: 'Bible App', fr: 'Application biblique' },
      description: {
        en: 'Flutter app for interactive Bible reading and reflection. Features include: read and listen to Scripture, highlight verses, take notes, daily verses, prayer calendar, verse search, and Biblical AI chat powered by gpt-4o-mini. Built with Flutter/Dart and tested on iOS simulators using Xcode.',
        fr: 'Application Flutter pour la lecture et la réflexion biblique interactives. Fonctionnalités : lecture et audio des Écritures, surlignage de versets, prise de notes, verset quotidien, calendrier de prière, recherche de versets et chat biblique alimenté par l\'IA. Développée avec Flutter/Dart et testée sur simulateur iOS via Xcode.'
      },
      image: '/images/bibleapp.png',
      tags: ['Flutter', 'Dart', 'AI', 'iOS'],
      //link: 'https://nicolebibleapp.web.app/'
      link: 'https://github.com/nicoledesigns/bible_app'
    },
    {
      title: { en: 'BikersDream', fr: 'BikersDream' },
      description: {
        en: 'Full-stack communication platform focused on privacy, usability, and collaboration. Built with React, Express.js, and SQLite. Features group channels, private messaging, and media sharing. Developed using Agile methodology.',
        fr: 'Plateforme de communication full stack axée sur la confidentialité, l\'ergonomie et la collaboration. Développée avec React, Express.js et SQLite. Fonctionnalités : canaux de groupe, messagerie privée et partage de médias. Réalisée selon la méthodologie Agile.'
      },
      video: '/videos/Bikers-small.mp4', 
      tags: ['React', 'Express.js', 'SQLite', 'Agile'],
      link: 'https://github.com/nicoledesigns/BikeSOEN343'
    },
    {
      title: { en: 'CIFAR-10 ML Pipeline', fr: 'Pipeline de classification CIFAR-10' },
      description: {
        en: 'Image classification system for CIFAR-10 using Gaussian Naive Bayes, Decision Trees, MLPs, and VGG11 CNN. Implemented data pipelines, feature extraction, training, evaluation, and automated reports. Built with Python, NumPy, scikit-learn, PyTorch, and matplotlib in a team of three.',
        fr: 'Système de classification d\'images CIFAR-10 utilisant Naive Bayes gaussien, arbres de décision, MLP et CNN VGG11. Mise en place de pipelines de données, extraction de caractéristiques, entraînement, évaluation et rapports automatisés. Réalisé avec Python, NumPy, scikit-learn, PyTorch et matplotlib au sein d\'une équipe de trois personnes.'
      },
      image: '/images/ML.png',
      tags: ['Python', 'ML', 'PyTorch', 'Computer Vision'],
      link: 'https://github.com/nicoledesigns/SOEN472'
    },
    {
      title: { en: 'ChatHaven', fr: 'ChatHaven' },
      description: {
        en: 'Full-stack communication platform focused on privacy, usability, and collaboration. Built with React, Express.js, and SQLite. Features group channels, private messaging, and media sharing. Developed using Agile methodology.',
        fr: 'Plateforme de communication full stack axée sur la confidentialité, l\'ergonomie et la collaboration. Développée avec React, Express.js et SQLite. Fonctionnalités : canaux de groupe, messagerie privée et partage de médias. Réalisée selon la méthodologie Agile.'
      },
      video: '/videos/orzo.mp4',
      tags: ['React', 'Express.js', 'SQLite', 'Agile'],
      link: 'https://github.com/nicoledesigns/-Orzo-SOEN341_Project_W25-'
    },
    {
      title: { en: 'Portfolio Website', fr: 'Site portfolio' },
      description: {
        en: 'Personal portfolio built using React, TypeScript, and Tailwind CSS. Features interactive animations, bilingual support, and responsive design. Showcases professional layout and selected projects. Added Framer Motion for smooth transitions between sections. Use of AI tools like Bolt to help brainstorm layouts and streamline repetitive coding tasks.',
        fr: 'Portfolio personnel développé avec React, TypeScript et Tailwind CSS. Animations interactives, support bilingue et design responsive. Présentation d\'une mise en page professionnelle et de projets sélectionnés. Ajout de Framer Motion pour des transitions fluides entre les sections. Utilisation d\'outils d\'IA tels que Bolt pour faciliter la conception de mises en page et rationaliser les tâches de codage répétitives.'
      },
      video: '/videos/Portfolio-small.mp4',
      tags: ['React', 'TypeScript', 'Tailwind']
    }
  ];
  

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('Featured Projects', 'Projets en vedette')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            {t(
              'A selection of projects showcasing my technical skills and creative approach',
              'Une sélection de projets mettant en valeur mes compétences techniques et mon approche créative'
            )}
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video rounded-xl overflow-hidden shadow-lg group block">
           {currentProject.video ? (
  <video
    src={currentProject.video}
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
) : (
  <img
    src={currentProject.image}
    alt={currentProject.title[language]}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
)}

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </a>

              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-3xl font-bold text-slate-900">
                  {currentProject.title[language]}
                </h3>

                <p className="text-slate-700 leading-relaxed">
                  {currentProject.description[language]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 border border-slate-200 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevProject}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all border border-slate-200"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6 text-slate-700" />
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all border border-slate-200"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
