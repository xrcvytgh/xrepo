'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      router.push(res.data.role === 'admin' ? '/admin' : '/');
    } catch (err: any) {
      if (err.response?.status === 403) router.push(`/verify?email=${email}`);
      else alert('Login Gagal');
    }
  };

  return (
    <div className="p-6 flex flex-col justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">Masuk</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input className="p-3 rounded-xl border dark:bg-cardDark" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="p-3 rounded-xl border dark:bg-cardDark" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button className="bg-primary text-white p-3 rounded-xl font-semibold mt-2">Login</button>
      </form>
    </div>
  );
}
