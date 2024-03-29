import Layout from '../app/layout';
import { getAllPostIds, getPostData } from './api/posts/posts';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { format } from 'date-fns';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface PostData {
  id: string;
  date: string;
  title: string;
  contentHtml: string;
}

interface PostProps {
  postData: PostData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds().map(path => ({
    params: { id: path.params.id },
    locale: path.locale,
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const postData = await getPostData(params?.id as string, locale ?? 'en');
  return {
    props: {
      postData,
      ...(await serverSideTranslations(locale as string, ['common']))
    },
  };
};

const Post: React.FC<PostProps> = ({ postData }) => {
  const { t } = useTranslation();
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
            <FaArrowLeft className="mr-2" /> {t('common:back-to-blog')}
          </Link>
          <article className='post-content'>
            <p className="text-gray-600 text-right">{postData.date ? format(new Date(postData.date), 'd MMMM yyyy') : 'No date provided'}</p>
            <h2>{postData.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default Post;