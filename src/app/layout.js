import { Inter } from 'next/font/google';
import '@/styles/styles.sass';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Headless Blog',
};

const RootLayout = ({ children }) =>(
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
export default RootLayout;