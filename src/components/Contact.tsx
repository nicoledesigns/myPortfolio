import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('Get in Touch', 'Contactez-moi')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            {t(
              'Have a project in mind or want to collaborate? Feel free to reach out!',
              'Vous avez un projet en tête ou souhaitez collaborer ? N\'hésitez pas à me contacter !'
            )}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {t('Message Sent!', 'Message envoyé !')}
              </h3>
              <p className="text-slate-600">
                {t(
                  'Thank you for reaching out. I\'ll get back to you soon!',
                  'Merci de m\'avoir contacté. Je vous répondrai bientôt !'
                )}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('Name', 'Nom')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('Your name', 'Votre nom')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('Email', 'Courriel')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder={t('your.email@example.com', 'your.email@example.com')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  {t('Message', 'Message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder={t('Your message...', 'Votre message...')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-900 text-white py-4 px-6 rounded-lg font-medium hover:bg-slate-800 transition-all hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {t('Sending...', 'Envoi en cours...')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('Send Message', 'Envoyer le message')}
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:nicoleantounn@hotmail.com"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <Mail className="w-5 h-5" />
            nicoleantounn@hotmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
