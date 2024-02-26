import Layout from '../../app/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { format } from 'date-fns';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
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
}
