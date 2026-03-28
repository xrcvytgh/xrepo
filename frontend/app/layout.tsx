import './globals.css';
import BottomNav from '@/components/BottomNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-bgLight dark:bg-bgDark text-gray-900 dark:text-gray-100 min-h-screen pb-20 font-sans">
        <main className="max-w-md mx-auto relative min-h-screen border-x dark:border-gray-800">
          {children}
        </main>
        <div className="max-w-md mx-auto relative">
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
