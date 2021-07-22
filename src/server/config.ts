import type { Config } from 'src/shared/types/config';

const CONFIG: Config = {
  features: {
    blog_link: true,
  },
  basePath: process.env.BASE_PATH || '',
};

export { CONFIG };
