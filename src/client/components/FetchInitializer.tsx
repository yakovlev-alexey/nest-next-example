'use client';

import { useEffect } from 'react';
import { initializeFetch } from 'src/shared/utils/fetch';

export default function FetchInitializer({ basePath }: { basePath: string }) {
  useEffect(() => {
    initializeFetch(basePath);
  });

  return null;
}
