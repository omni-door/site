import { useState } from 'react';


export const useLang = () => {
  const [lang, setLang] = useState('cn');

  return {
    lang,
    setLang
  };
};

export default useLang;
