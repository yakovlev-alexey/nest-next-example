import { AppData } from 'src/shared/types/app-data';
import { fetch } from 'src/shared/utils/fetch';

const getAppData = async () => {
  return await fetch<AppData>('/api/app-data');
};

export { getAppData };
