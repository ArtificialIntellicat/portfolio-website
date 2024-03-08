import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const { locale, pathname, asPath } = router;

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'de' : 'en';
    router.push(pathname, asPath, { locale: newLocale });
  };

  return (
    <div className="text-xl">
      <button onClick={switchLanguage} className="px-2 hover-effect">
        {locale === 'en' ? 'DE' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
