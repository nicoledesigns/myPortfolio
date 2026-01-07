import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const quotes = [
    {
      text: { en: "Programming isn't about what you know; it's about what you can figure out.", fr: "Programmer ne consiste pas à savoir ce que vous savez, mais à savoir ce que vous pouvez résoudre." },
      author: "Chris Pine"
    },
    {
      text: { en: "First, solve the problem. Then, write the code.", fr: "D'abord, résolvez le problème. Ensuite, écrivez le code." },
      author: "John Johnson"
    },
    {
      text: { en: "Simplicity is the soul of efficiency.", fr: "La simplicité est l'âme de l'efficacité." },
      author: "Austin Freeman"
    },
    {
      text: { en: "Programs must be written for people to read, and only incidentally for machines to execute.", fr: "Les programmes doivent être écrits pour que les humains les lisent, et seulement accessoirement pour que les machines les exécutent." },
      author: "Harold Abelson"
    },
    {
      text: { en: "The only way to do great work is to love what you do.", fr: "La seule façon de faire un excellent travail est d'aimer ce que vous faites." },
      author: "Steve Jobs"
    },
    {
      text: { en: "AI is not just a tool; it’s a partner for human creativity.", fr: "L'IA n'est pas juste un outil ; c'est un partenaire pour la créativité humaine." },
      author: "Satya Nadella"
    }
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const handleNewQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote);
    setQuote(newQuote);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {t("Daily Inspiration", "Inspiration Quotidienne")}
        </h2>
        <p className="text-lg text-slate-700 mb-12">
          {t("A little motivation for every software engineer out there!", "Un peu de motivation pour chaque développeur !")}
        </p>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200">
          <p className="text-xl md:text-2xl font-medium text-slate-800 mb-4">
            "{t(quote.text.en, quote.text.fr)}"
          </p>
          <p className="text-right text-lg font-semibold text-slate-600">
            — {quote.author}
          </p>
          <button
            onClick={handleNewQuote}
            className="inline-flex items-center gap-2 mt-6 bg-slate-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-slate-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <RefreshCw className="w-5 h-5" />
            {t("New Quote", "Nouvelle Citation")}
          </button>
        </div>
      </div>
    </section>
  );
}
