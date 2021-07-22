import { Config } from './config';

export type AppData = Pick<Config, 'basePath' | 'features'>;
