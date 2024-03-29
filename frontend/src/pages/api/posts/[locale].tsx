import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPost {
    id: string;
    title: string;
    date: string;
    thumbnail?: string;
    tldr?: string;
    skills?: string[];
    githubLink?: string;
    projectLink?: string;
    content?: string;
  }

const postsDirectory = path.join(process.cwd(), 'content', 'blog-posts');

// Function to extract text from markdown content
function extractText(markdownContent: string): string {
    // Remove Markdown headings and other non-text elements
    return markdownContent
      .replace(/(#+\s.*)|(\!\[.*\]\(.*\))/g, '') // Remove headings and images
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Retain link text, remove URL
      .replace(/(\*\*|__)(.*?)\1/g, '$2') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italics
      .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // Remove inline code
      .replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
      .trim();
  }

export default function handler(req: NextApiRequest, res: NextApiResponse<BlogPost[] | { error: string }>) {
  const { locale } = req.query;

  if (typeof locale !== 'string') {
    res.status(400).json({ error: 'Locale must be a string' });
    return;
  }

  try {
    const fileNames = fs.readdirSync(postsDirectory)
                       .filter(fileName => fileName.startsWith(`${locale}-`));
    const allPostsData: BlogPost[] = fileNames.map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title || 'No Title',
        date: matterResult.data.date || 'No Date',
        thumbnail: matterResult.data.thumbnail || null,
        tldr: matterResult.data.tldr || extractText(matterResult.content).slice(0, 350) + '...',
      };
    });

    res.status(200).json(allPostsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to read blog post files' });
  }
}