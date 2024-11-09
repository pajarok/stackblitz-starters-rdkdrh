import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect, useState } from 'react';

export default function WalletInfo() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getAirdropOnClick = async () => {
    try {
      setIsLoading(true);
      if (!publicKey) {
        throw new Error('Wallet is not connected');
      }
      const [latestBlockhash, signature] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, 1 * LAMPORTS_PER_SOL), // Corregido
      ]);

      const transaction = {
        signature,
        blockhash: latestBlockhash.blockhash,
        lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,
      };

      const sigResult = await connection.confirmTransaction(
        transaction,
        'confirmed'
      );
      if (sigResult) {
        alert('Airdrop was confirmed');
      }
      setIsLoading(false);
    } catch (error) {
      setErrorMessage('You are rate limited for Airdrop');
      setIsLoading(false);
    }
  };

  const getBalance = async () => {
    try {
      if (!publicKey) {
        throw new Error('Wallet is not connected');
      }
      const newBalance = await connection.getBalance(publicKey);
      setBalance(newBalance / LAMPORTS_PER_SOL);
    } catch (error) {
      setErrorMessage('Error fetching balance');
    }
  };

  useEffect(() => {
    if (publicKey) {
      getBalance();
    }
  }, [publicKey, connection]);

  return (
    <main className="flex flex-col items-center p-6 mb-20 bg-green-200 rounded-lg shadow-md">
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      {publicKey ? (
        <div>
          <h1 className="text-black font-semibold text-2xl">Tu Wallet</h1>
          <h2 className="text-black font-semibold">{publicKey?.toString()}</h2>
          <h2 className="text-black font-semibold">{balance} SOL</h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={getBalance}
              type="button"
              className="bg-gray-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400"
            >
              Actualizar Saldo
            </button>
            <button
              onClick={getAirdropOnClick}
              disabled={isLoading}
              type="button"
              className="bg-gray-300 text-black font-semibold px-4 py-2 rounded basis-[50%] hover:text-white hover:bg-indigo-400 disabled:bg-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Obteniendo airdrop...' : 'Solicitar airdrop'}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-center mt-5 mb-4 font-bold">
            Conecta tu wallet
          </h1>
          <WalletMultiButton style={{}} />
        </div>
      )}
    </main>
  );
}
