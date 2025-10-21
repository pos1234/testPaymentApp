import { formatAmountWithType, formatCurrency } from '../utils/format';
import type { Transaction } from './TransactionsList';

export default function TransactionDetailView({ tx }: { tx: Transaction }) {
  return (
    <div className="card">
      <div className="card-title">{tx.name}</div>
      <div className={`card-number ${tx.type === 'payment' ? 'positive' : 'negative'}`}>
        {formatAmountWithType(tx.amount, tx.type)}
      </div>
      <div className="divider" />
      <div className="kv">
        <div>
          <span className="key">Type</span>
          <span className="val">{tx.type}</span>
        </div>
        <div>
          <span className="key">Amount</span>
          <span className="val">{formatCurrency(tx.amount)}</span>
        </div>
        <div>
          <span className="key">Description</span>
          <span className="val">{tx.pending ? 'pending • ' : ''}{tx.description}</span>
        </div>
        <div>
          <span className="key">Authorized user</span>
          <span className="val">{tx.authorizedUser ?? '—'}</span>
        </div>
        <div>
          <span className="key">Date</span>
          <span className="val">{new Date(tx.date).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
