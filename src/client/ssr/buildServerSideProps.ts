import { ParsedUrlQuery } from 'querystring';
import { Config } from 'src/shared/types/config';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
} from 'src/shared/types/next';

type StaticProps = {
  features: Config['features'];
};

type StaticQuery = {
  config: Config;
};

const buildServerSideProps = <P, Q extends ParsedUrlQuery = ParsedUrlQuery>(
  getServerSideProps: (ctx: GetServerSidePropsContext<Q>) => Promise<P>,
): GetServerSideProps<Partial<StaticProps> & P, Partial<StaticQuery> & Q> => {
  return async (ctx) => {
    const { features } = ctx.query.config || {};

    const props = await getServerSideProps(ctx);

    return {
      props: {
        ...props,
        features,
      },
    };
  };
};

export { buildServerSideProps };
