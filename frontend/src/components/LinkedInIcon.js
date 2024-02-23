import Image from 'next/image';
import React from 'react';

const LinkedInIcon = ({ className }) => (
  <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className={className}>
    <Image src="/linkedin-white.svg" alt="LinkedIn" width={30} height={30} />
  </a>
);

export default LinkedInIcon;