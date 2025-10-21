import { useParams } from 'react-router-dom';
import TransactionDetailView from '../components/TransactionDetailView';
import type { Transaction } from '../components/TransactionsList';
import data from '../data/transactions.json';

export default function TransactionDetail() {
  const { id } = useParams();
  const list = (data as unknown as Transaction[]);
  const tx = list.find((t) => String(t.id) === String(id));

  return (
    <div className="screen">
      <header className="header">
        <a className="back" href="/">
          <i className="fa-solid fa-arrow-left"></i>
        </a>
        <h1>Transaction</h1>
      </header>
      <section className="cards">
        {tx ? (
          <TransactionDetailView tx={tx as any} />
        ) : (
          <div className="card">
            <p>Transaction not found.</p>
          </div>
        )}
      </section>
    </div>
  );
}
