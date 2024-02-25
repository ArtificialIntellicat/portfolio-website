import React from 'react';
import { FaLinkedin } from "react-icons/fa";

type LinkedInIconProps = {
  className?: string;
};

const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className }) => (
  <a href="https://www.linkedin.com/in/toni-helesic-7982901b9/" target="_blank" rel="noopener noreferrer" className={className}>
    <FaLinkedin size={27} />
  </a>
);

export default LinkedInIcon;
