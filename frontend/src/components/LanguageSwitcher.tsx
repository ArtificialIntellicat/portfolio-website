import { useRouter } from 'next/navigation';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const switchLanguage = () => {
    const newLocale = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLocale);
  };

  return (
    <div className="text-xl">
      <button onClick={switchLanguage} className="px-2 hover-effect">
        {i18n.language === 'en' ? 'DE' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
