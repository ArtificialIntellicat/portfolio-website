import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import breaks from 'remark-breaks';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  thumbnail?: string;
  tldr?: string;
  contentHtml?: string;
}

interface PathWithLocale {
  params: {
    id: string;
  };
  locale: string;
}

const postsDirectory = path.join(process.cwd(), 'content', 'blog-posts');

export function getSortedPostsData(locale: string = 'en'): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory).filter(fileName => fileName.startsWith(`${locale}-`));
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(new RegExp(`^${locale}-|\\.md$`, 'g'), '');
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
  })
  .sort((a, b) => a.date < b.date ? 1 : -1);

  return allPostsData;
}

export const getAllPostIds = (): PathWithLocale[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths: PathWithLocale[] = fileNames.map(fileName => {
    const idWithLocale = fileName.replace(/\.md$/, '');

    return {
      params: { id: idWithLocale },
      locale: fileName.split('-')[0],
    };
  });

  return paths;
};

export async function getPostData(id: string, locale: string = 'en'): Promise<BlogPost | null> {
  const fileName = `${id}.md`;
  const fullPath = path.join(postsDirectory, fileName);
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html, { sanitize: false }).use(breaks).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      title: matterResult.data.title || 'No Title',
      date: matterResult.data.date || 'No Date',
      thumbnail: matterResult.data.thumbnail || null,
      tldr: matterResult.data.tldr || extractText(matterResult.content).slice(0, 350) + '...',
      contentHtml,
    };
  } catch (err) {
    console.error(`Failed to read markdown file: ${fullPath}`, err);
    return null;
  }
}

// Function to extract text from markdown content
function extractText(markdownContent: string): string {
  return markdownContent
    .replace(/(#+\s.*)|(\!\[.*\]\(.*\))/g, '') // Remove headings and images
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Retain link text, remove URL
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italics
    .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // Remove inline code
    .replace(/<\/?[^>]+(>|$)/g, "") // Remove HTML tags
    .trim();
}
