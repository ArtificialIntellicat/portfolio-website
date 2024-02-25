import React from 'react';
import { FaGithub } from "react-icons/fa";

type GitHubIconProps = {
  className?: string;
};

const GitHubIcon: React.FC<GitHubIconProps> = ({ className }) => (
  <a href="https://github.com/ArtificialIntellicat" target="_blank" rel="noopener noreferrer" className={className}>
    <FaGithub size={27} />
  </a>
);

export default GitHubIcon;
