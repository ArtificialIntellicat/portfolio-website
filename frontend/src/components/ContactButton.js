import Image from 'next/image';
import React from 'react';

const ContactButton = () => {
  const handleMailto = (e) => {
    e.preventDefault();
    window.open('mailto:antonia.helesic@gmail.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <a href="mailto:antonia.helesic@gmail.com" onClick={handleMailto} className="contact-button inline-flex items-center justify-center" title="Email Me">
        Connect with Me 
        <Image src="/send-big.png" alt="Send Icon" width={20} height={20} className='ml-1 white-filter'/>
      </a>
    </div>
  );
};

export default ContactButton;
