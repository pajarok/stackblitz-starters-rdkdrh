'use client';
import { useState } from 'react';

import React from 'react';

export default function Formulario() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <form
      className="border rounded bg-blue-200 px-8 pb-8 mb-4 mt-8 py-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-black text-sm font-bold m-2"
          htmlFor="username"
        >
          Nombre
        </label>
        <input
          id="username"
          type="text"
          placeholder="Nombre"
          className="border rounded w-full py-2 px-3 text-black focus:outline-indigo-300"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-black text-sm font-bold m-2"
          htmlFor="email"
        >
          Correo
        </label>
        <input
          id="email"
          type="text"
          required
          placeholder="ejemplo@email.com"
          className="border rounded w-full py-2 px-3 text-black focus:outline-indigo-300"
        />
      </div>
      <div className="mb-6">
        <label className="block text-black text-sm font-bold" htmlFor="message">
          Mensaje
        </label>
        <input
          id="mensaje"
          type="text"
          required
          placeholder="Escriba su mensaje aquí..."
          className="border rounded w-full py-7 px-3 text-black focus:outline-indigo-300"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="rounded-md bg-indigo-300 px-3.5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-500"
        >
          Enviar
        </button>
      </div>
      {sent && (
        <p className="mt-4 text-center text-purple-500">¡Mensaje Enviado!</p>
      )}
    </form>
  );
}
