import Link from 'next/link';
import EmailIcon from './EmailIcon';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#5470c8] dark:bg-[#2f3464] text-white text-center p-4 mb-0 mt-20">
      <div className="flex justify-center space-x-4 mb-4">
        <EmailIcon className="icon-hover" />
        <GitHubIcon className="icon-hover" />
        <LinkedInIcon className="icon-hover" />
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <Link href="/impressum">
          <a className="hover-effect">Impressum</a>
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Toni Helesic. All rights reserved.</p>
      <p>Powered by 
        <Link href="https://nextjs.org">
          <a className="hover-effect">Next.js</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
