import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  description?: string;
  companyUrl?: string;
  skills?: string[];
};

const ExperienceSelection: React.FC = () => {
  const { t } = useTranslation('cv');
  const [activeCategory, setActiveCategory] = useState<'professional' | 'academic' | 'international'>('professional');

  const professionalData: ExperienceItem[] = t('professional', { returnObjects: true }) as ExperienceItem[];
  const academicData: ExperienceItem[] = t('academic', { returnObjects: true }) as ExperienceItem[];
  const internationalData: ExperienceItem[] = t('international', { returnObjects: true }) as ExperienceItem[];  
  

  const renderTimeline = (data: ExperienceItem[]) => {
    return data.map((item, index) => (
      <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
          <p className='timeline-date'>{item.date}</p>
          <h4>{item.title}</h4>
          <p>{item.companyUrl ? <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">{item.company}</a> : item.company}</p>
          <p className='timeline-description'>{item.description}</p>
          <div className="skills">
            {item.skills && item.skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="skill-node">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="cv">
      <div className="category-selector mt-5">
        <button onClick={() => setActiveCategory('professional')} className="text-[#8FA1DB] hover-effect dark:hover:text-[#d9dff3] text-xl">{t('common:professional')}</button>
        <button onClick={() => setActiveCategory('academic')} className="text-[#8FA1DB] hover-effect dark:hover:text-[#d9dff3] text-xl">{t('common:academic')}</button>
        <button onClick={() => setActiveCategory('international')} className="text-[#8FA1DB] hover-effect dark:hover:text-[#d9dff3] text-xl">international</button>
      </div>
      <div className={`timeline ${activeCategory === 'professional' ? 'show' : ''}`}>
        {activeCategory === 'professional' && renderTimeline(professionalData)}
      </div>
      <div className={`timeline ${activeCategory === 'academic' ? 'show' : ''}`}>
        {activeCategory === 'academic' && renderTimeline(academicData)}
      </div>
      <div className={`timeline ${activeCategory === 'international' ? 'show' : ''}`}>
        {activeCategory === 'international' && renderTimeline(internationalData)}
      </div>
      <div className='mt-20 flex flex-col items-center'>
        <a href="/toni_helesic_lebenslauf.pdf" target="_blank" className="download-cv inline-flex items-center justify-center">{t('common:view-my-cv')}</a>
      </div>
      <style jsx global>{`
        /* Timeline Styles */
        .timeline {
          position: relative;
          transition: opacity 2s ease;
          opacity: 0;
        }
        
        .timeline.show {
          opacity: 1;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background-color: #bcbbe9;
        }

        .timeline-dot {
          width: 10px;
          height: 10px;
          background-color: #9e9ee0;
          border-radius: 50%;
          position: absolute;
          left: calc(50% - 4px); /* Center the dot */
          top: 50%; /* Adjust based on content */
        }

        .timeline-item {
          position: relative;
          margin-bottom: -50px; /* Space between items */
        }

        .timeline-item.left {
          padding-right: 51%;
        }

        .timeline-item.right {
          padding-left: 52%;
        }

        .timeline-content {
          max-width: 250px;
          padding: 10px;
        }
        
        .timeline-item.left .timeline-content {
          margin-left: auto;
        }
        
        .timeline-item.right .timeline-content {
          margin-right: auto;
        }

        /* Category Selector Styles */
        .category-selector {
          text-align: center;
          margin-bottom: 20px;
        }

        .category-selector button {
          background: none;
          border: none;
          font-weight: bold;
          margin: 0 10px;
          cursor: pointer;
        }

        /* Experience Item Styles */
        .timeline-content h4 {
          font-size: 18px;
          font-weight: bold;
        }

        .timeline-content p {
          font-size: 16px;
          color: #666;
          margin-bottom: 5px;
        }

        .timeline-content .timeline-description, .timeline-content .timeline-date {
          font-size: 14px;
          color: #979797;
          display: block; 
        }   
      `}</style>
    </section>
  );
};

export default ExperienceSelection;
