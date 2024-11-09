'use client';
import React, { useEffect } from 'react';
import MyEventCard from '@/components/my-event-card';
import { dataTest } from '@/utils/my-event-data';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/navigation'; // Cambia la importación

export default function MyEvents() {
  const { publicKey } = useWallet();
  const router = useRouter(); // Inicializa `useRouter`

  useEffect(() => {
    if (!publicKey) {
      router.push('/'); // Usa `router.push` para redirigir
    }
  }, [publicKey, router]);

  return (
    <div className="my-16 flex flex-col items-center">
      <h1 className="text-4xl text-center font-bold">
        ¡Aún no tienes eventos creados!
      </h1>
      <h3 className="text-2xl text-center mt-5 font-bold">
        Sé el primero en crear uno y únete a la comunidad
      </h3>
      <button
        className="bg-indigo-300 text-black font-semibold px-4 py-2 rounded mt-5 hover:bg-indigo-400"
        onClick={() => alert('Próximamente')}
      >
        Crear Evento
      </button>
    </div>
  );
}
