import Link from 'next/link';

import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';

export default async function Blog(props: any) {
  console.log(props);
  const id = props.searchParams.id || props.params.id;
  console.log('fetch blogpost ' + id);
  const post = await fetch<BlogPost>(`/api/blog-posts/${id}`);
  console.log('fetched blogpost ' + id);

  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>Blog {post.title}</h1>
    </div>
  );
}
