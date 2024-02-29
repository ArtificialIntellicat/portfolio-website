import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { format } from 'date-fns';

interface PostData {
  id: string;
  title: string;
  date: string;
  tldr?: string;
  thumbnail?: string;
  skills?: string[];
  githubLink?: string;
  projectLink?: string;
}

const Blog = ({ allPostsData }: { allPostsData: PostData[] }) => {
  // Check if allPostsData is provided and not empty
  if (!allPostsData || allPostsData.length === 0) {
    return (
      <div className="p-6 bg-[#e8ebf7] dark:bg-[#2b2f3f] rounded-lg text-center">
        <p className="text-xl text-gray-800">coming soon ...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#e8ebf7] dark:bg-[#2b2f3f] rounded-lg">
      {allPostsData.map(({ id, title, date, tldr, thumbnail }) => (
        <div key={id} className="relative h-80">
          {thumbnail && (
            <div className="absolute top-4 right-4 w-40 h-30">
              <Image src={thumbnail} alt={title} layout="fill" className="rounded-lg object-cover" />
            </div>
          )}
          <p className="text-gray-600 mb-4">{date ? format(new Date(date), 'd MMMM yyyy') : 'No date provided'}</p>
          <h3 className="text-xl text-[#7f90c4] mb-2">{title}</h3>
          <p className='mb-4'>{tldr}</p>
          <Link href={`/blog-posts/${id}`} className="text-[#8FA1DB] hover-effect dark:hover:text-[#d9dff3] inline-flex items-center">
            read more <FaArrowRight className="ml-1" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
