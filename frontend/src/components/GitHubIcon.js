import React from 'react';
import { FaGithub } from "react-icons/fa";

const GitHubIcon = ({ className }) => (
  <a href="https://github.com/ArtificialIntellicat" target="_blank" rel="noopener noreferrer" className={className}>
    <FaGithub size={27} />
  </a>
);

export default GitHubIcon;