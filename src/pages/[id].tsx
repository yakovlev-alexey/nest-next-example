import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';
import { fetch } from 'src/shared/utils/fetch';

type TBlogProps = {
  post: BlogPost;
};

const Blog: FC<TBlogProps> = ({ post = {} }) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <h1>Blog {post.title}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<TBlogProps> = async (
  ctx,
) => {
  console.log(ctx.params, ctx.query);
  const id = ctx.query.id;

  const post = await fetch(`/api/blog-posts/${id}`);

  return { props: { post } };
};

export default Blog;
