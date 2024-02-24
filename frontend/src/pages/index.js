import React, { useState } from 'react'
import Layout from '../app/Layout'
import Image from 'next/image'
import ContactButton from '../components/ContactButton'
import Skills from '../components/Skills'
import ExperienceSelection from '../components/ExperienceSelection'
import FunSkills from '../components/FunSkills'
import PortfolioGallery from '../components/PortfolioGallery'
import Blog from '../components/Blog'
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [mode, setMode] = useState('serious'); // CV display mode selection

  return (
    <Layout>
      <section className="content-section">
      <section id="intro" className="text-center py-4">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl font-bold text-[#8095d6] toni">Toni Helesic</h1>
          <div className="rounded-full overflow-hidden w-52 h-52 dark:border-[#8095d6] dark:border-4">
            <Image src="/profilepic.jpeg" alt="Profile Picture of Toni" width={210} height={210} style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800 mb-2">Sustainable Syntax</p>
            <p className="text-xl font-semibold text-gray-600 mb-4">Programming with a Passion for People, Planet, and Purring Progress.</p>
            <ContactButton />
          </div>
        </div>
      </section>

        <section id="about" className='anchor-offset'>
        <div className="h2-container"><h2>&#123; About Me &#125;</h2></div>
        <p className="mb-10">
            Embarking on the path of machine learning, I bring a fusion of analytical prowess and cultural empathy. My journey is defined by a relentless pursuit of knowledge and innovation, guided by the belief that technology, when harmonized with humanistic understanding, can unveil transformative solutions.
        </p>

        <h3>The Tech Enthusiast</h3>
        <p className="mb-4">
          In the ever-evolving world of technology, my journey is marked not just by proficiency, but by a relentless quest for learning. Beyond the confines of traditional education, I've honed my skills in Python, Machine Learning, and data analysis through self-directed exploration. Each day presents an opportunity to unravel new mysteries in code, refine algorithms, and push the boundaries of what's possible in AI.
        </p>

        <h3>The Cultural Explorer</h3>
        <p className="mb-4">
          My academic endeavours in Ethnology and Cultural Anthropology have equipped me with critical skills highly pertinent to machine learning. From designing and managing research projects to ethical decision-making and interpreting complex data sets, my background ensures a comprehensive approach to problem-solving. These experiences have honed my ability to navigate diverse perspectives and cultural nuances, enriching my approach to developing globally-conscious AI solutions.
        </p>

        <h3>A Global Citizen</h3>
        <p className="mb-4">
          Each global sojourn has been more than just an adventure; it's been a chapter in understanding diverse human narratives. These experiences are integral to my approach to machine learning, providing a broad worldview essential for creating inclusive and ethical AI systems. Whether it's adapting to new environments or understanding varied human behaviours, these skills are invaluable in training and developing nuanced AI models.
        </p>

        <h3>Professionally Versatile</h3>
        <p className="mb-4">
          Whether it's web design, yoga instruction, or software development, I've embraced diverse roles that sharpened my skills and broadened my horizon. My stint at the DLR Project Management Agency and data analysis at the University of Bonn solidified my prowess in crunching numbers and deriving meaningful insights.
        </p>

        <h3>Driven by Purpose</h3>
        <p className="mb-4">
          I'm not just about codes and algorithms. My heart beats for sustainable and impactful technology. I see machine learning not just as a tool but as a medium to create technology that cares – for people, for the environment, and for the future.
        </p>

        <h3>Why Me?</h3>
        <p className="mb-4">
          Because I bring more than just technical skills. I bring a story – a blend of creativity, cultural insight, and tech-savvy. I'm on the lookout for opportunities where I can contribute to projects that are innovative, meaningful, and dare I say, a little bit quirky – much like myself.
        </p>

        <h3>Let's Connect</h3>
        <p className="mb-4">
          If you're intrigued by a coder with a flair for cultural narratives, a knack for sustainable solutions, and a portfolio that speaks volumes, let's chat. I'm all about making connections, sharing ideas, and brewing the next big thing in tech.
        </p>
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
}
