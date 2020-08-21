import {
  createContext,
  useState,
  useCallback
} from 'react';
import locale_cn from '@locale/cn';
import locale_en from '@locale/en';

const locales = {
  cn: locale_cn,
  en: locale_en
};

const initLang = 'cn';
const ctxInitState = {
  lang: initLang,
  locale: locales[initLang],
  setLang: (lang: string) => console.warn('初始化未完成')
};

export const UseLocale = createContext(ctxInitState);


export const UseLocaleProvider = (props: any) => {
  const setLang = useCallback(function (lang: string) {
    let locale = locales[lang as keyof typeof locales];
    if (!locale) {
      locale = ctxInitState.locale;
      lang = ctxInitState.lang;
    }
    setState(states => ({
      ...states,
      locale,
      lang
    }));
  }, []);

  const initState = {
    lang: props?.lang ?? ctxInitState.lang,
    locale: locales[props?.lang as keyof typeof locales] ?? ctxInitState.locale,
    setLang
  };

  const [state, setState] = useState(initState);

  return (
    <UseLocale.Provider value={ state } >
      { props.children }
    </UseLocale.Provider>
  );
};

export default UseLocaleProvider;
