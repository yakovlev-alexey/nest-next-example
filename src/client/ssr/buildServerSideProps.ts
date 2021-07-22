import { ParsedUrlQuery } from 'querystring';
import { AppData } from 'src/shared/types/app-data';
import { Config } from 'src/shared/types/config';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
} from 'src/shared/types/next';

type StaticProps = {
  appData: Partial<AppData>;
};

type StaticQuery = {
  config: Config;
};

const buildServerSideProps = <P, Q extends ParsedUrlQuery = ParsedUrlQuery>(
  getServerSideProps: (ctx: GetServerSidePropsContext<Q>) => Promise<P>,
): GetServerSideProps<StaticProps & P, Partial<StaticQuery> & Q> => {
  return async (ctx) => {
    const { features } = ctx.query.config || {};

    const props = await getServerSideProps(ctx);

    return {
      props: {
        ...props,
        appData: {
          features,
        },
      },
    };
  };
};

export { buildServerSideProps };
