import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap, Lightbulb, Brain, Rocket } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto mb-24 mt-5 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            {t('about.title')}
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p className="leading-relaxed">{t('about.subtitle1')}
              </p>
              <p className="leading-relaxed">{t('about.subtitle2')}
              </p>
              <p className="font-semibold text-gray-900">
              {t('about.minititle')}
              </p>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <Zap className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                {t('about.box1_title')}
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                {t('about.box1_subtitle')}
              </p>
            </div>

            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                <Lightbulb className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
              {t('about.box2_title')}
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
              {t('about.box2_subtitle')}
              </p>
            </div>

            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                <Brain className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
              {t('about.box3_title')}
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
              {t('about.box3_subtitle')}
              </p>
            </div>

            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <Rocket className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
              {t('about.box4_title')}
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
              {t('about.box4_subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
