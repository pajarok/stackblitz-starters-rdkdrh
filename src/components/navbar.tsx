'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

function Navbar() {
  const { publicKey } = useWallet();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link href="/" className="flex items-center">
        <Image
          src="/solana.png"
          alt="logo"
          width={500}
          height={200}
          className="h-10 w-auto mr-2"
        />
        <h1 className="text-lg font-bold hidden md:block">
          Administrador de Eventos
        </h1>
      </Link>
      {publicKey && (
        <nav className="flex items-center gap-4">
          <Link
            href="/mis-eventos"
            className="m-2 px-1 font-semibold hover:text-green-300"
          >
            Eventos
          </Link>
          <Link
            href="/colaboraciones"
            className="mx-2 px-1 font-semibold hover:text-green-300"
          >
            Colaboraciones
          </Link>
        </nav>
      )}

      <WalletMultiButton style={{}} />
    </header>
  );
}

export default Navbar;
