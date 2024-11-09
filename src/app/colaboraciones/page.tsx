'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import CollaborationCard from '@/components/collaboration-card';
import { dataTest } from '@/utils/collaboration-data';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation'; // Importa `useRouter` en lugar de `redirect`

export default function Collaborations() {
  const { publicKey } = useWallet();
  const router = useRouter(); // Inicializa `useRouter`

  useEffect(() => {
    if (!publicKey) {
      router.push('/'); // Usa `router.push('/')` para redirigir si no hay `publicKey`
    }
  }, [publicKey, router]);

  return (
    <div>
      <div className="my-16 flex flex-col items-center">
        <h1 className="text-4xl text-center font-bold">
          Parece que no has colaborado en ningún evento
        </h1>
        <h3 className="text-2xl text-center mt-5 font-bold">
          ¡Explora los últimos eventos en Solana y participa como colaborador!
        </h3>
        <Link
          href="/"
          className="bg-indigo-300 w-50 text-black mt-5 font-semibold px-4 py-1 rounded hover:text-white hover:bg-indigo-400"
        >
          Explorar Eventos
        </Link>
      </div>
    </div>
  );
}
