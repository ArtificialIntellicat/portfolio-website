import Layout from '../../../app/layout';
import { getAllPostIds, getPostData } from '../../api/posts/posts';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { format } from 'date-fns';
import { GetStaticProps, GetStaticPaths } from 'next';

interface PostData {
  id: string;
  date: string;
  contentHtml: string;
}

interface PostProps {
  postData: PostData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

const Post: React.FC<PostProps> = ({ postData }) => {
  if (!postData) {
    return (
      <Layout>
        <section className="content-section">
          <div className="p-4">
            <p>Sorry, the requested post could not be found.</p>
          </div>
        </section>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <section className="content-section">
        <div className="p-4">
          <Link href="/#blog" className="inline-flex items-center mb-4">
            <FaArrowLeft className="mr-2" /> Back to Blog
          </Link>
          <article>
            <p className="text-gray-600 text-right">{postData.date ? format(new Date(postData.date), 'd MMMM yyyy') : 'No date provided'}</p>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Post;