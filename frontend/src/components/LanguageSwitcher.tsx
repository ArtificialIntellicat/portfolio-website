import { useRouter } from 'next/router';

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div>
      <button onClick={() => switchLanguage('en')}>EN</button> |
      <button onClick={() => switchLanguage('de')}>DE</button>
    </div>
  );
};

export default LanguageSwitcher;
