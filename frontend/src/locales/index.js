
import { en } from './en.js';
import { ru } from './ru.js';
import { es } from './es.js';
import { de } from './de.js';
import { fr } from './fr.js';
import { ja } from './ja.js';
import { pt } from './pt.js';
import { tr } from './tr.js';
import { zh } from './zh.js';
import { fa } from './fa.js';

export const resources = {
  en: { translation: en },
  ru: { translation: ru },
  es: { translation: es },
  de: { translation: de },
  fr: { translation: fr },
  ja: { translation: ja },
  pt: { translation: pt },
  tr: { translation: tr },
  zh: { translation: zh },
  fa: { translation: fa }
};

export const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'fa', name: 'Persian (Farsi)', nativeName: 'فارسی' }
];
