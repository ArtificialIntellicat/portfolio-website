import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const PortfolioGallery = () => {
    const projects = [
        {
          title: "Cat Breed Classifier",
          description: "A beginner's foray into machine learning, this project features a convolutional neural network to identify cat breeds from images. It highlights my initial steps in AI, focusing on practical application of Python and TensorFlow.",
          skills: ["Python", "TensorFlow", "Keras"],
          githubLink: "https://github.com/artificialintellicat/cat-breed-classifier",
          projectLink: "/projects/cat-breed-classifier",
          thumbnail: "/images/cat-breed-classifier-thumbnail.jpg"
        },
      ];

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center p-4 bg-[#e8ebf7] dark:bg-[#2b2f3f] rounded-lg">
          <div className="flex-1">
            <p className="text-[#7f90c4] text-xl font-bold mb-2">{project.title}</p>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="mb-4">
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-node inline-block bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{skill}</span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center blue-filter icon-hover">
                <Image src="/github-white.svg" alt="GitHub" width={24} height={24} />
              </Link>
              <Link href={project.projectLink} className="text-[#8FA1DB] hover-effect dark:hover:text-[#d9dff3] inline-flex items-center">
                  view project <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="flex-1 mt-4 md:mt-0 md:ml-4">
            <Image src={project.thumbnail} alt={project.title} width={200} height={150} layout="responsive" className="rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGallery;
