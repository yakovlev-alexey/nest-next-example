import { headers } from 'next/headers';
import React from 'react';
import FetchInitializer from 'src/client/components/FetchInitializer';
import { getAppData } from 'src/client/data/appData';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('get app data in layout');
  const [appData] = await Promise.all([getAppData(), headers()]);
  console.log('get app data in layout finished', appData);

  return (
    <html>
      <body>
        {/* <FetchInitializer basePath={appData.basePath} /> */}
        <header>Some Blog</header>
        {children}
      </body>
    </html>
  );
}
