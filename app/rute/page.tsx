'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const MapUI = dynamic(() => import('@/components/MapUI'), { ssr: false });

export default function Rute() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/routes`)
      .then(res => setRoutes(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Peta Rute</h1>
      <div className="flex-1 rounded-xl overflow-hidden">
        <MapUI routes={routes} />
      </div>
    </div>
  );
}
