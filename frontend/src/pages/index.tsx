import React, { useState } from 'react';
import Layout from '../app/layout';
import Image from 'next/image';
import ContactButton from '../components/ContactButton';
import Skills from '../components/Skills';
import ExperienceSelection from '../components/ExperienceSelection';
import FunSkills from '../components/FunSkills';
import PortfolioGallery from '../components/PortfolioGallery';
import Blog from '../components/Blog';
import { getSortedPostsData } from 'lib/posts';
import { GetStaticProps } from 'next';

type HomeProps = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  const [mode, setMode] = useState<'serious' | 'fun'>('serious'); // CV display mode selection

  return (
    <Layout>
      <section className="content-section">
      <section id="intro" className="text-center py-4">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-[#8095d6] toni">Hey, I'm Toni.</h1>
          <div className="rounded-full overflow-hidden w-52 h-52 dark:border-[#8095d6] dark:border-4">
            <Image src="/profilepic.jpeg" alt="Profile Picture of Toni" width={210} height={210} style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-600 mb-4">Navigating the exciting world of AI with a commitment to ethical and sustainable solutions. In the realm of machine learning, I'm a seeker of inclusive data science approaches and a believer in tech for good.</p>
            <ContactButton />
          </div>
        </div>
      </section>

        <section id="about" className='anchor-offset'>
        <div className="h2-container"><h2>&#123; About Me &#125;</h2></div>
        <p className="mb-2">It all started at 12, with a desire to shout my love for Nintendogs and Pokémon from the digital rooftops of my very own website. I discovered the rabbit hole into the wonderland of web development. Post-school, armed with a backpack and curiosity, I ventured off, eventually embracing the study of Ethnology/Cultural Anthropology after a volunteer service in Tanzania. Even amidst remote landscapes and deep talk interviews, the rabbit kept luring me back to tech jobs. It was precisely this unusual path that led me deep into the fascinating world of data.</p>

        <p className="mb-2">Now, as a devotee of creative writing, I must invoke a metaphor: Imagine data as an infinite, unsorted archive full of books. We humans are the archivists, curating which tales get the spotlight and which fade into dusty corners. But how does our perception influence which stories we elevate? Before we can fully answer that question, a machine starts its internship in the archive. Amidst this sea of narratives, it begins to weave patterns, extracting wisdom where we saw none. Its potential dawns on us. How far do we let this intern roam? Will it remain an assistant, become a colleague, or rise to be our boss? What tools and values do we impart to it on its journey?</p>

        <p className="mb-2">These questions captivate me. I aim to use my unique blend of Cultural Anthropology and Computer Science to forge new paths in the world of Machine Learning - paths that are not only technically innovative but also socially and ecologically sustainable. Because, at the end of the day, it's not just about what machines can learn from data or what humans can learn from machines, but also how machines and humans can learn together.</p>

        <p className="mb-2">While contemplating these deeply philosophical questions, I enjoy curling up with my cats and an endless supply of tea, immersing myself in the pages of a captivating book, engaging in the art of human stacking through acrobatics, or coding to the energetic beats of drum and bass or the soothing rhythms of organic downtempo.</p>

        <p className="mb-2">If you're looking for a collaborator who blends a passion for machine learning with a zest for life, let's connect. My journey has taught me to think outside the box, a skill I bring to every project. Together, we can create AI solutions that are not only innovative but also grounded in real-world, human experiences.</p>

        <ContactButton />
      </section>

        <section id="cv" className='mt-10 anchor-offset'>
        <div className="h2-container"><h2>&#123; CV &#125;</h2></div>
        <div className='text-[#8fa1db] font-bold inline-block flex items-center justify-center mt-4 mb-10'>
          choose your mode&#160;&#160;&#62;&#62;
          <div className="inline-block bg-[#acbae4] dark:bg-[#8d93ca] rounded-md mx-3 pr-10">
            <div className={`mode-toggle ${mode}`} onClick={() => setMode(mode === 'serious' ? 'fun' : 'serious')}>
              <span className="inline-block bg-[#8fa1db] dark:bg-[#656cb7] py-1 px-2 rounded-md text-white font-bold cursor-pointer">
                {mode === 'serious' ? 'serious' : 'fun'}
              </span>
            </div>
          </div>
        </div>
        {mode === 'serious' ? (
          <>
            <h3>Skills</h3>
            <Skills />
            <h3 className='mt-14'>Experiences</h3>
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
          <Blog allPostsData={allPostsData} />
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
