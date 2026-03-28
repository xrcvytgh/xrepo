'use client'
import Link from 'next/link';
import { Home, Map as MapIcon, Calendar, User, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BottomNav() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="fixed bottom-0 w-full bg-white dark:bg-cardDark border-t dark:border-gray-700 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-safe">
      <div className="flex justify-around items-center p-3 text-gray-500 dark:text-gray-400">
        <Link href="/" className="flex flex-col items-center hover:text-primary"><Home size={24} /><span className="text-xs mt-1">Home</span></Link>
        <Link href="/rute" className="flex flex-col items-center hover:text-primary"><MapIcon size={24} /><span className="text-xs mt-1">Rute</span></Link>
        
        <button onClick={handleLogout} className="bg-primary text-white p-4 rounded-full -mt-8 shadow-lg shadow-primary/30 border-4 border-white dark:border-bgDark">
          <LogOut size={24} />
        </button>

        <Link href="/event" className="flex flex-col items-center hover:text-primary"><Calendar size={24} /><span className="text-xs mt-1">Event</span></Link>
        <Link href="/profil" className="flex flex-col items-center hover:text-primary"><User size={24} /><span className="text-xs mt-1">Profil</span></Link>
      </div>
    </div>
  );
}
