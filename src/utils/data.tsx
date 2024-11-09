export interface EventData {
  title: string;
  ticket_price: string;
  token_price: string;
}
 
export const dataTest: EventData[] = [
  {
    title: 'Solana Meetup 2025',
    ticket_price: '15 SOL',
    token_price: '0.5 SOL',
  },
  {
    title: 'Solana Hackathon',
    ticket_price: 'Free',
    token_price: '0 SOL',
  },
  {
    title: 'NFT Launch Event',
    ticket_price: '20 SOL',
    token_price: '0.75 SOL',
  },
  {
    title: 'Crypto Workshop',
    ticket_price: '10 SOL',
    token_price: '0.3 SOL',
  },
];
