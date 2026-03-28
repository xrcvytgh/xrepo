'use client'
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapUI({ routes }: { routes: any[] }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="h-64 bg-gray-200 animate-pulse rounded-xl"></div>;

  return (
    <div className="h-96 w-full rounded-xl overflow-hidden shadow-md">
      <MapContainer center={[-7.7956, 110.3695]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {routes.map((route, idx) => (
          <Polyline key={idx} positions={route.geojson_polyline.coordinates} color="#2563eb" weight={5} />
        ))}
      </MapContainer>
    </div>
  );
}
