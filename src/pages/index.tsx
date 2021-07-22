import Link from 'next/link';
import { FC } from 'react';
import { useFeature } from 'src/client/hooks/useFeatures';
import { buildServerSideProps } from 'src/client/ssr/buildServerSideProps';
import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';

type THomeProps = {
  blogPosts: BlogPost[];
};

const Home: FC<THomeProps> = ({ blogPosts }) => {
  const linkFeature = useFeature('blog_link');

  return (
    <div>
      <h1>Home</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          {linkFeature ? (
            <>
              {title}
              <Link href={`${id}`}> Link</Link>
            </>
          ) : (
            <Link href={`/${id}`}>{title}</Link>
          )}
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = buildServerSideProps<THomeProps>(async () => {
  const blogPosts = await fetch('/api/blog-posts');

  return { blogPosts };
});

export default Home;
