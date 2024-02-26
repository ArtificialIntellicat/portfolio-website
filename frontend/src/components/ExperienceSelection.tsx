import React, { useState } from 'react';

type ExperienceItem = {
  title: string;
  company: string;
  date: string;
  description?: string;
  companyUrl?: string;
  skills?: string[];
};

const ExperienceSelection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'professional' | 'academic' | 'international'>('professional');

  const professionalData = [
    {
      title: "Office Management",
      company: "NGO Global Coffee Platform",
      date: "Mar 2021 – Nov 2023",
      description: "Administration, event management, travel planning, IT support.",
      companyUrl: "https://www.globalcoffeeplatform.org",
      skills: ["event management", "travel planning", "intercultural communication"]
    },
    {
      title: "Assistant in Twitter Data Analysis with Python",
      company: "University of Bonn",
      date: "Jan 2022 – Jun 2022",
      description: "Sentiment analysis and examination of topic connections between COVID-19 and theology.",
      skills: ["machine learning", "python"]
    },
    {
      title: "Data Evaluation in Research Project",
      company: "DLR Projektträger Bonn, Department of Cultural and Political Education, Education for Sustainability",
      date: "Aug 2021 – Sep 2021",
      description: "Evaluation of qualitative data from research on craft promotion projects for children.",
      companyUrl: "https://projekttraeger.dlr.de",
      skills: ["qualitative data analysis"]
    },
    {
      title: "Software Development Assistant",
      company: "Integrated Analytics",
      date: "Feb 2020 – Feb 2021",
      description: "Front-end and back-end development of a web app for creating landing pages for companies.",
      companyUrl: "https://www.integrated-analytics.de",
      skills: ["php", "laravel", "js", "vue.js", "html", "css", "sql", "logo design"]
    },
    {
      title: "Yoga Teacher",
      company: "Starpilates & Staryoga Bonn",
      date: "Feb 2020 – Apr 2020",
      companyUrl: "https://starpilates-staryoga.teachable.com",
      skills: ["instruction"]
    },
    {
      title: "Yoga Teacher",
      company: "Die Senfbude Leipzig",
      date: "Jan 2019 – Jul 2019",
      companyUrl: "https://de-de.facebook.com/senfleipzig/",
      skills: ["instruction"]
    },
    {
      title: "Web Design Assistant",
      company: "optProjects",
      date: "Nov 2016 – Jan 2017",
      description: "Creation and maintenance of websites and webshops.",
      companyUrl: "https://www.optprojects.com",
      skills: ["php", "js", "html", "css", "wordpress"]
    }
  ];
  
  const academicData = [
    {
      title: "Master of Arts: Cultural Anthropology",
      company: "University of Bonn",
      date: "2020 - 2023",
      description: "Final Grade: 1.4",
      skills: ["qualitative research", "project management"]
    },
    {
      title: "Bachelor of Arts: Ethnology, Minor in Computer Science",
      company: "University of Leipzig",
      date: "2016 - 2020",
      description: "Final Grade: 1.8",
      skills: ["qualitative research", "project management"]
    },
    {
      title: "High School Diploma",
      company: "Ernst-Moritz-Arndt Gymnasium Bonn",
      date: "2015",
      description: "Final Grade: 1.2",
    }
  ];

  const internationalData = [
    {
      title: "Exchange Semester at Keio University Tokyo",
      company: "Japan",
      date: "2022 - 2023",
      description: "Courses in Japanese Language and Culture, Qualitative Research Methods, International Politics",
      skills: ["qualitative research", "project management", "japanese"]
    },
    {
      title: "Exchange Semester at OSLOMET and Kulturstudier Hoi An",
      company: "Vietnam",
      date: "2018",
      description: "Development Studies Program",
      skills: ["qualitative research", "project management"]
    },
    {
      title: "Exchange Semester at Universidad San Ignacio de Loyola Cusco",
      company: "Peru",
      date: "2017",
      description: "Courses in Spanish, Quechua, Biodiversity of Peru, and Photography",
      skills: ["spanish", "quechua", "photography"]
    },
    {
      title: "Developmental Volunteering",
      company: "Tanzania",
      date: "2015 – 2016",
      description: "Teaching reading, math, and writing in Kiswahili at a kindergarten",
      skills: ["project management", "instruction"]
    },
    {
      title: "Exchange Year at Blackpool Sixthform College",
      company: "England",
      date: "2012 - 2013",
      description: "Courses in Creative Media Production, Drama, and English",
      skills: ["movie production"]
    }
  ];
  

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
        <button onClick={() => setActiveCategory('professional')} className="text-[#8FA1DB] hover-effect dark:hover:text-[#d9dff3] text-xl">professional</button>
        <button onClick={() => setActiveCategory('academic')} className="text-[#8FA1DB] hover-effect dark:hover:text-[#d9dff3] text-xl">academic</button>
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
        <a href="/toni_helesic_lebenslauf.pdf" target="_blank" className="download-cv inline-flex items-center justify-center">View my CV</a>
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
