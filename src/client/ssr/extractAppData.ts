import { Request } from 'express';
import { GetServerSidePropsContext } from 'src/shared/types/next';
import { AppData } from 'src/shared/types/app-data';
import { filterUnserializable } from './filterUnserializable';
import { StaticQuery } from './buildServerSideProps';

const extractAppData = (
  ctx: GetServerSidePropsContext<Partial<StaticQuery>>,
) => {
  const { features, basePath } = ctx.query.config || {};

  const { translations } = ctx.req as Request;

  return filterUnserializable({
    features,
    basePath,
    translations,
  }) as Partial<AppData>;
};

export { extractAppData };
