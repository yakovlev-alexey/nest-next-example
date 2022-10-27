import { AppData } from '../types/app-data';
import { Config } from '../types/config';

const prepareAppData = (config: Config): AppData => {
  const { features, basePath } = config;

  return { features, basePath };
};

export { prepareAppData };
