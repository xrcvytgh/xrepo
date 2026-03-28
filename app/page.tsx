export default function Home() {
  return (
    <div className="p-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-primary">Eksplorasi Jogja</h1>
        <p className="text-sm text-gray-500">Temukan rute sepeda terbaikmu hari ini.</p>
      </header>

      <div className="space-y-4">
        <div className="bg-cardLight dark:bg-cardDark p-5 rounded-xl shadow-sm border dark:border-gray-700">
          <h2 className="font-semibold mb-2">Aktivitas Terakhir</h2>
          <p className="text-sm text-gray-500">Belum ada aktivitas minggu ini. Ayo gowes!</p>
        </div>
      </div>
    </div>
  );
}
