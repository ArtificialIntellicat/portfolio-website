import React, { useState } from 'react';

const FunSkills = () => {
  const [currentYear, setCurrentYear] = useState(2015); // Starting year

  // Experience Milestones
  const milestones = [
    {
      type: "professional",
      date: "Mar 2021 – Nov 2023",
      title: "Office Management at NGO Global Coffee Platform",
      company: "NGO Global Coffee Platform",
      description: "Where coffee meets impact! Managed diverse events and championed efficient office operations, brewing a perfect blend of administration and travel planning.",
      skills: ["event management", "travel planning", "intercultural communication"],
      companyUrl: "https://www.globalcoffeeplatform.org"
    },
    {
      type: "professional",
      date: "Jan 2022 – Jun 2022",
      title: "Assistant in Twitter Data Analysis at University of Bonn",
      company: "University of Bonn",
      description: "Analyzing tweets to unravel global narratives! Employed Python to dissect sentiments and connections between COVID-19 and theology, decoding the digital pulse.",
      skills: ["machine learning", "python"]
    },
    {
      type: "professional",
      date: "Aug 2021 – Sep 2021",
      title: "Data Evaluation in Research Project at DLR Projektträger Bonn",
      company: "DLR Projektträger Bonn",
      description: "A deep dive into data for educational enlightenment! Evaluated qualitative data, shaping future craft promotion projects and nurturing young minds.",
      skills: ["qualitative data analysis"],
      companyUrl: "https://projekttraeger.dlr.de"
    },
    {
      type: "professional",
      date: "Feb 2020 – Feb 2021",
      title: "Software Development Assistant at Integrated Analytics",
      company: "Integrated Analytics",
      description: "Coding solutions for the digital world! Developed both front-end and back-end of a web app, crafting bespoke digital experiences for businesses.",
      skills: ["php", "laravel", "js", "vue.js", "html", "css", "sql", "logo design"],
      companyUrl: "https://www.integrated-analytics.de"
    },
    {
      type: "professional",
      date: "Feb 2020 – Apr 2020",
      title: "Yoga Teacher at Starpilates & Staryoga Bonn",
      company: "Starpilates & Staryoga Bonn",
      description: "Harmonizing mind and body, one pose at a time! Guided students through transformative yoga journeys, fostering wellness and inner peace.",
      skills: ["instruction"],
      companyUrl: "https://starpilates-staryoga.teachable.com"
    },
    {
    type: "professional",
    date: "Jan 2019 – Jul 2019",
    title: "Yoga Teacher at Die Senfbude Leipzig",
    company: "Die Senfbude Leipzig",
    description: "Embracing flexibility beyond the mat! Guided Leipzig's yogis through journeys of self-discovery and tranquility, one breath at a time.",
    skills: ["instruction"],
    companyUrl: "https://de-de.facebook.com/senfleipzig/"
    },
    {
    type: "professional",
    date: "Nov 2016 – Jan 2017",
    title: "Web Design Assistant at optProjects",
    company: "optProjects",
    description: "Crafting digital canvases! Played a pivotal role in creating and maintaining sleek, user-friendly websites and webshops.",
    skills: ["php", "js", "html", "css", "wordpress"],
    companyUrl: "https://www.optprojects.com"
    },
    {
      type: "academic",
      date: "2020 - 2023",
      title: "Master of Arts in Cultural Anthropology",
      company: "University of Bonn",
      description: "A scholarly odyssey into the depths of cultures! Achieved a top-tier grade while mastering the art of qualitative research and project management.",
      skills: ["qualitative research", "project management"]
    },
    {
      type: "academic",
      date: "2016 - 2020",
      title: "Bachelor of Arts in Ethnology with Computer Science",
      company: "University of Leipzig",
      description: "Where tradition meets technology! Blended the study of cultures with computer science, paving a unique path in ethnology.",
      skills: ["qualitative research", "project management"]
    },
    {
      type: "academic",
      date: "2015",
      title: "High School Diploma",
      company: "Ernst-Moritz-Arndt Gymnasium Bonn",
      description: "Laying the educational foundation with flying colors! Excelled academically, setting the stage for future success.",
    },
    {
      type: "international",
      date: "2022 - 2023",
      title: "Exchange Semester at Keio University Tokyo, Japan",
      description: "Immersed in the Land of the Rising Sun! Delved into the intricacies of Japanese language and culture, honing skills in qualitative research and international politics.",
      skills: ["qualitative research", "project management", "japanese"]
    },
    {
      type: "international",
      date: "2018",
      title: "Exchange Semester in Vietnam at OLSOMET and Kulturstudier Hoi An",
      description: "A cultural and educational adventure in Vietnam! Explored development studies, gaining insights into diverse global perspectives.",
      skills: ["qualitative research", "project management"]
    },
    {
      type: "international",
      date: "2017",
      title: "Exchange Semester at Universidad San Ignacio de Loyola Cusco, Peru",
      description: "A Peruvian academic escapade! Mastered Spanish and Quechua while unraveling Peru's rich biodiversity and capturing its beauty through photography.",
      skills: ["spanish", "quechua", "photography"]
    },
    {
      type: "international",
      date: "2015 – 2016",
      title: "Developmental Volunteering in Tanzania",
      description: "Touching lives in Tanzania! Contributed to early childhood education, teaching essential skills and fostering a love for learning.",
      skills: ["project management", "instruction"]
    },
    {
      type: "international",
      date: "2012 - 2013",
      title: "Exchange Year at Blackpool Sixthform College, England",
      description: "A year of creative exploration in England! Dived into media production, drama, and English, setting the stage for a diverse educational journey.",
      skills: ["movie production"]
    }
  ];  
  
  // Skills with value
  const skills = [
    { name: "Python", value: 5 },
    { name: "Machine Learning", value: 4 },
    { name: "PHP", value: 6 },
    { name: "HTML / CSS", value: 10 },
    { name: "Flask", value: 5 },
    { name: "Vue", value: 4 },
    { name: "Java", value: 2 },
    { name: "SQL", value: 6 },
    { name: "JavaScript", value: 4 },
    { name: "German", value: 10 },
    { name: "English", value: 9 },
    { name: "Spanish", value: 6 },
    { name: "French", value: 4 },
    { name: "Japanese", value: 2 },
    { name: "Project Management", value: 7 },
    { name: "Qualitative Data Analysis", value: 8 },
    { name: "Quantitative Data Analysis", value: 5 },
    { name: "Intercultural Communication", value: 8 },
    { name: "Wordpress", value: 9 },
    { name: "Laravel", value: 2 },
    { name: "Next.js", value: 5 }
  ];

  // Function to handle timeline progression
  const handleTimelineProgress = (year) => {
    setCurrentYear(year);
  };

  // Render the component
  return (
    <div className="skills-game">
      <div className="timeline">
        {milestones.map(milestone => (
          <button key={milestone.year} onClick={() => handleTimelineProgress(milestone.year)}>
            {milestone.year}
          </button>
        ))}
      </div>
      <div className="unlocked-skills">
        {skills.filter(skill => milestones.some(milestone => milestone.year <= currentYear && milestone.unlockedSkills.includes(skill.name)))
               .map(skill => (
                 <div key={skill.name}>
                   <h3>{skill.name}</h3>
                   <p>Level: {skill.level}</p>
                   {/* Additional skill details */}
                 </div>
               ))}
      </div>
    </div>
  );
};

export default FunSkills;
