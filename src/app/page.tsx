'use client';

import dynamic from 'next/dynamic';

const Page = dynamic(() => import('./templates/home').then((mod) => mod.Page), {
  ssr: false,
  loading: () => <div>Page Lazy Loading...</div>,
});

export default function Home() {
  return <Page />;
}
