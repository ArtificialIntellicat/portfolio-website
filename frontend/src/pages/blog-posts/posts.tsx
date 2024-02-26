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
  skills?: string[];
  githubLink?: string;
  projectLink?: string;
  content?: string;
}

const postsDirectory = path.join(process.cwd(), 'src/pages/blog-posts');

export function getSortedPostsData(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory).filter(fileName => fileName.endsWith('.md'));
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Fallback for tldr
    const tldr = matterResult.data.tldr || extractText(matterResult.content).slice(0, 500) + '...';

    return {
      id,
      ...matterResult.data,
      tldr
    };
  });

  return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

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

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(breaks)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
