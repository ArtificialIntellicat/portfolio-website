import Image from 'next/image';
import React from 'react';

const GitHubIcon = ({ className }) => (
  <a href="https://github.com/ArtificialIntellicat" target="_blank" rel="noopener noreferrer" className={className}>
    <Image src="/github-white.svg" alt="GitHub" width={30} height={30} />
  </a>
);

export default GitHubIcon;