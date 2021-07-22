import {
  GetServerSidePropsResult,
  GetServerSidePropsContext as GetServerSidePropsContextBase,
} from 'next';
import { ParsedUrlQuery } from 'querystring';

export type GetServerSidePropsContext<Q = ParsedUrlQuery> = Omit<
  GetServerSidePropsContextBase,
  'query'
> & { query: Q };

export type GetServerSideProps<P, Q = ParsedUrlQuery> = (
  ctx: GetServerSidePropsContext<Q>,
) => Promise<GetServerSidePropsResult<P>>;
