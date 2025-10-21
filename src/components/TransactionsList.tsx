import data from '../data/transactions.json';
import TransactionItem from './TransactionItem';

export type Transaction = {
  id: number | string;
  type: 'payment' | 'Credit';
  amount: number;
  name: string;
  description: string;
  date: string; // ISO
  pending?: boolean;
  authorizedUser?: string;
};

export default function TransactionsList() {
  const latest = [...data].slice(0, 10) as Transaction[];
  return (
    <section className="list-section">
      <h2 className="section-title">Latest transactions</h2>
      <div className="list">
        {latest.map((t) => (
          <TransactionItem key={t.id} tx={t} />
        ))}
      </div>
    </section>
  );
}
