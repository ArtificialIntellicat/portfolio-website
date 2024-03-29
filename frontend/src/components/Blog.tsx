import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { format } from 'date-fns';
import { useTranslation } from 'next-i18next';

interface PostData {
  id: string;
  title: string;
  date: string;
  tldr?: string;
  thumbnail?: string;
  skills?: string[];
  githubLink?: string;
  projectLink?: string;
  locale?: string;
}

interface BlogProps {
  allPostsData?: PostData[];
}

const Blog = () => {
  const { t, i18n } = useTranslation();
  const [allPostsData, setAllPostsData] = useState<PostData[]>([]);

  useEffect(() => {
    fetch(`/api/posts/${i18n.language}`)
      .then(response => response.json())
      .then(data => {
        if (!('error' in data)) {
          setAllPostsData(data);
        } else {
          console.error(data.error);
          setAllPostsData([]);
        }
      })
      .catch(error => {
        console.error('Failed to fetch posts:', error);
        setAllPostsData([]);
      });
  }, [i18n.language]);

  // Check if allPostsData is provided and not empty
  if (!allPostsData || allPostsData.length === 0) {
    return (
      <div className="p-6 bg-[#e8ebf7] dark:bg-[#2b2f3f] rounded-lg text-center">
        <p className="text-xl text-gray-800">{t('common:coming-soon')}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#e8ebf7] dark:bg-[#2b2f3f] rounded-lg">
      {allPostsData.map(({ id, title, date, tldr, thumbnail }) => (
        <div key={id} className="relative h-80">
          {thumbnail ? (
            <div className="absolute top-4 right-4 w-40 h-30">
              <Image src={thumbnail} alt={title} layout="fill" className="rounded-lg object-cover" />
            </div>
          ) : null}
          <p className="text-gray-400 date">{date ? format(new Date(date), 'd MMMM yyyy') : 'No date provided'}</p>
          <h3 className="text-xl text-[#7f90c4] mb-2">{title}</h3>
          <p className='mb-4'>{tldr}</p>
          <Link href={`/${i18n.language}/${id}`} className="text-[#8FA1DB] hover-effect dark:hover:text-[#d9dff3] inline-flex items-center">
            {t('common:read-more')} <FaArrowRight className="ml-1" />
          </Link>
        </div>
      ))}
      <style jsx>{`
        .date {
            margin-bottom: -20px;
        }
    `}</style>
    </div>
  );
};

export default Blog;
