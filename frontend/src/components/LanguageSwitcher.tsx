import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div className="text-lg">
      <button onClick={() => switchLanguage('en')} className="px-2">EN</button>| 
      <button onClick={() => switchLanguage('de')} className="px-2">DE</button>
    </div>
  );
};

export default LanguageSwitcher;
