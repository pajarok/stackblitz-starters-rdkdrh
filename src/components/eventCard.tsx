import Image from 'next/image';
import React from 'react';
import { EventData as EventCardProp } from '@/utils/data';

function EventCard(event: EventCardProp) {
  return (
    
    <div className="bg-green-300 p-10 rounded-lg items-center shadow-md items-center transition-transform transform hover:shadow-xl">
      <h3 className="font-bold mb-2 text-xl text-center">{event.title}</h3>
      <div className="flex gap-6 justify-center">
        <button
          className="bg-gray-300 text-black font-semibold px-4 py-2 flex flex-col items-center"
          onClick={() => alert('Próximamente')}
        >
          Comprar Entrada
          <div className="flex flex-row items-center justify-center">
            <Image src="/sol.png" alt="logo" width={15} height={15} />
            <p className="px-1">{event.ticket_price}</p>
          </div>
        </button>

        <button
          className="bg-gray-300 text-black font-semibold px-4 py-2 flex flex-col items-center"
          onClick={() => alert('Próximamente')}
        >
          Colaborar
          <div className="flex flex-row items-center justify-center">
            <Image src="/sol.png" alt="logo" width={15} height={15} />
            <p className="px-1">{event.token_price}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default EventCard;
