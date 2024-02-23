// EmailIcon.js
import Image from 'next/image';
import React from 'react';

const EmailIcon = ({ className }) => {
  const handleMailto = (e) => {
    e.preventDefault();
    window.open('mailto:antonia.helesic@gmail.com', '_blank');
  };

  return (
    <a href="mailto:antonia.helesic@gmail.com" onClick={handleMailto} className={className}>
      <Image src="/mail.png" alt="Email" width={30} height={30} />
    </a>
  );
};

export default EmailIcon;
