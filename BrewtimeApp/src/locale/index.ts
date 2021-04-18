import * as EN from './en';
import * as SE from './se';

export enum AvailableLocales {
  se = 'SE',
  en = 'EN',
}

type LocaleProps = {
  locale: 'EN' | 'SE';
};

export const getLocale = (locale: AvailableLocales) => {
  if (locale === AvailableLocales.se) {
    return SE;
  }

  return EN;
};
