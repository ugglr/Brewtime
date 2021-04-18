import * as EN from './en';
import * as SE from './se';

export enum AvailableLocales {
  se = 'SE',
  en = 'EN',
}

export const getTranslations = (locale: AvailableLocales) => {
  if (locale === AvailableLocales.se) {
    return SE;
  }
  return EN;
};
