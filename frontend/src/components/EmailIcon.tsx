import React, { MouseEvent } from 'react';
import { IoIosMail } from "react-icons/io";

type EmailIconProps = {
  className?: string;
};

const EmailIcon: React.FC<EmailIconProps> = ({ className }) => {
  const handleMailto = (e: MouseEvent<HTMLAnchorElement>) => {
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
