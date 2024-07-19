'use client';
import dynamic from 'next/dynamic';

export default function CasperProvider({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ClientProvider = dynamic(() => import('@/context/ClientProvider'), {
    ssr: false
  });

  return <ClientProvider>{children}</ClientProvider>;
}
