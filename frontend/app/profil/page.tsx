'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profil() {
  // Setup default agar personalisasi natural
  const [user, setUser] = useState({ username: 'Yor', location: 'Yogyakarta', bike_type: '-', preference: '-' });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => setUser(res.data)).catch(console.error);
    }
  }, []);

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
          {user.username.charAt(0)}
        </div>
        <div>
          <h1 className="text-2xl font-bold">Halo, {user.username}!</h1>
          <p className="text-gray-500">{user.location}</p>
        </div>
      </div>
      
      <div className="bg-cardLight dark:bg-cardDark p-5 rounded-xl shadow-sm border dark:border-gray-700 space-y-3">
        <div className="flex justify-between border-b pb-2"><span className="text-gray-500">Tipe Sepeda</span><span>{user.bike_type}</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Preferensi Rute</span><span>{user.preference}</span></div>
      </div>
    </div>
  );
}
