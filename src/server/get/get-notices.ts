'use server';

import { secret } from '@/config/secret';
import { IDataTable } from '@/types';

export const getNotices = async (): Promise<IDataTable[]> => {
  const res = await fetch(
    `${secret.apiBaseUrl}/portfolio/info?page_name=notices`,
    {
      cache: 'no-store',
    }
  );
  return await res.json();
};
