'use client';
import EventCard from '@/components/eventCard';
import { dataTest } from '@/utils/data';
import React from 'react';
import WalletInfo from '@/components/wallet-info';

export default function Home() {
  return (
    <div className="container mx-auto px-4 mt-6">
      <div className="text-center">
        <WalletInfo />
      </div>
      {dataTest.length === 0 ? (
        <div className="my-16 p-8 border border-gray-300 rounded-lg bg-gray-100 shadow-md text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            ¡Lo sentimos! No hay eventos disponibles
          </h1>
          <h3 className="text-2xl mt-5 font-medium text-gray-700">
            Sé el primero en hacer un evento en Solana
          </h3>
          <button
            className="bg-indigo-500 w-40 text-white mt-5 font-semibold px-6 py-2 rounded hover:bg-indigo-600"
            onClick={() => alert('Próximamente')}
          >
            Crear Evento
          </button>
          <h1 className="text-4xl font-bold mt-10 text-gray-800">
            ¡No te pierdas los últimos eventos!
          </h1>
          <h3 className="text-2xl mt-5 font-medium text-gray-700">
            Forma parte de la gran comunidad de Solana
          </h3>
        </div>
      ) : (
        <div className="mt-15 grid gap-4 px-10 mb-10 lg:grid-cols-4 sm:grid-cols-2">
          {dataTest.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              ticket_price={event.ticket_price}
              token_price={event.token_price}
            />
          ))}
        </div>
      )}
    </div>
  );
}
