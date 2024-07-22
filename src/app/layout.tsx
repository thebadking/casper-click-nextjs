import { Inter } from 'next/font/google';
import './globals.css';
import ContextComp from '@/context/ContextComp';
import CasperProvider from '@/context/CasperProvider';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id={'root'} />
        <ContextComp>
          <CasperProvider>{children}</CasperProvider>
        </ContextComp>
      </body>
    </html>
  );
};

export default RootLayout;
