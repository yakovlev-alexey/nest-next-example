import Link from 'next/link';
import { getAppData } from 'src/client/data/appData';
import { useFeature } from 'src/client/hooks/useFeatures';
import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';

export default async function Home() {
  console.log('get app data on home');
  const { features } = await getAppData();
  console.log('get app data on home finished');
  const linkFeature = useFeature(features, 'blog_link');

  const blogPosts = await fetch<BlogPost[]>('/api/blog-posts');

  return (
    <div>
      <h1>Home</h1>
      {blogPosts.map(({ title, id }) => (
        <div key={id}>
          {linkFeature ? (
            <>
              {title}
              <Link href={`/${id}`}> Link</Link>
            </>
          ) : (
            <Link href={`/${id}`}>{title}</Link>
          )}
        </div>
      ))}
    </div>
  );
}
