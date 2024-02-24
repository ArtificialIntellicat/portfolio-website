import React from 'react';
import { IoIosMail } from "react-icons/io";

const EmailIcon = ({ className }) => {
  const handleMailto = (e) => {
    e.preventDefault();
    window.open('mailto:antonia.helesic@gmail.com', '_blank');
  };

  return (
    <a href="mailto:antonia.helesic@gmail.com" onClick={handleMailto} className={className}>
      <IoIosMail size={30} />
    </a>
  );
};

export default EmailIcon;
