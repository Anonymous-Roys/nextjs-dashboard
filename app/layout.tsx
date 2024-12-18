import { Metadata } from 'next';
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'


export const metadata: Metadata = {
  title: {
    template: '%s | Roy Dashboard',
    default: 'Roy Dashboard'
  },
  description: 'Roy is a powerful and intuitive admin dashboard built with Next.js and Ant Design.',
  metadataBase: new URL('https://next-learn-dashboard.sh'),
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
