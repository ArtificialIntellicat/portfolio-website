import React, { useState, useEffect } from 'react';

const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldSlideOut, setShouldSlideOut] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setShouldSlideOut(true);
    setTimeout(() => {
      localStorage.setItem('cookieConsent', 'true');
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-[#7792E8] text-white py-4 px-8 flex justify-between items-center transition-transform duration-300 ${shouldSlideOut ? 'translate-y-full' : 'translate-y-0'}`}
    >
      <p className="text-center px-4">
      {`This website is using cookies, but don't worry! They're just here to make your experience better - no unnecessary analytics or marketing in the mix. 🍪 Enjoy our site with all the essential flavors intact!`}
      </p>
      <button
        onClick={handleAccept}
        className="bg-white text-[#7792E8] hover:bg-[#586CAA] hover:text-white font-bold py-2 px-4 rounded transition-colors duration-150"
      >
        Yum, I love cookies!
      </button>
    </div>
  );
};

export default CookieConsentBanner;
