import React, { useState } from 'react';
import Layout from '../app/layout';
import Image from 'next/image';
import ContactButton from '../components/ContactButton';
import Skills from '../components/Skills';
import ExperienceSelection from '../components/ExperienceSelection';
import FunSkills from '../components/FunSkills';
import PortfolioGallery from '../components/PortfolioGallery';
import Blog from '../components/Blog';
import { getSortedPostsData } from './api/posts/posts';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

type HomeProps = {
  allPostsData: {
    id: string;
    title: string;
    date: string;
    tldr: string;
    thumbnail: string;
  }[];
};

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  const { t } = useTranslation();
  const paragraphs = t('aboutme:aboutme').split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  const [mode, setMode] = useState<'serious' | 'fun'>('serious'); // CV display mode selection

  return (
    <Layout>
      <section className="content-section">
      <section id="intro" className="text-center py-4">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-[#8095d6] toni">{t('aboutme:greeting')}</h1>
          <div className="rounded-full overflow-hidden w-52 h-52 dark:border-[#8095d6] dark:border-4">
            <Image src="/profilepic.jpeg" alt="Profile Picture of Toni" width={210} height={210} style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-600 mb-4">{t('aboutme:intro')}</p>
            <ContactButton />
          </div>
        </div>
      </section>

      <section id="about" className='anchor-offset'>
        <div className="h2-container"><h2>&#123; {t('common:h-aboutme')} &#125;</h2></div>
        {paragraphs}
        <div className='mt-8'><ContactButton/></div>
      </section>

        <section id="cv" className='mt-10 anchor-offset'>
        <div className="h2-container"><h2>&#123; CV &#125;</h2></div>
        <div className='text-[#8fa1db] font-bold inline-block flex items-center justify-center mt-4 mb-10'>
          {t('common:choose-your-mode')}&#160;&#160;&#62;&#62;
          <div className="inline-block bg-[#acbae4] dark:bg-[#8d93ca] rounded-md mx-3 pr-10">
            <div className={`mode-toggle ${mode}`} onClick={() => setMode(mode === 'serious' ? 'fun' : 'serious')}>
              <span className="inline-block bg-[#8fa1db] dark:bg-[#656cb7] py-1 px-2 rounded-md text-white font-bold cursor-pointer">
                {mode === 'serious' ? t('common:serious') : t('common:fun')}
              </span>
            </div>
          </div>
        </div>
        {mode === 'serious' ? (
          <>
            <h3>Skills</h3>
            <Skills />
            <h3 className='mt-14'>{t('common:experiences')}</h3>
            <ExperienceSelection />
          </>
        ) : (
          <FunSkills />
        )}
        </section>

        <section id="portfolio" className='mt-10 anchor-offset'>
        <div className="h2-container"><h2>&#123; Portfolio &#125;</h2></div>
          <PortfolioGallery />
        </section>

        <section id="blog" className='mt-10 anchor-offset'>
        <div className="h2-container py-5"><h2>&#123; Blog &#125;</h2></div>
          <Blog />
        </section>
      </section>
      <style jsx>{`
            .toni {
                font-family: 'SciFly-Sans', sans-serif;
            }
            
            .mode-toggle {
              transition: all 0.3s ease;
            }
            
            .mode-toggle.serious {
              transform: translateX(0%);
            }
            
            .mode-toggle.fun {
              transform: translateX(100%);
            }
            .anchor-offset:before {
              content: '';
              display: block;
              height: 50px;
              margin-top: -50px;
              visibility: hidden;
              pointer-events: none;
            }         
        `}</style>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'aboutme', 'cv'])),
    },
  };
};

export default Home;
