import { Link } from 'react-router-dom';
import type { Transaction } from './TransactionsList';
import { formatAmountWithType, formatDateLabel } from '../utils/format';
import { randomDarkColorFromSeed } from '../utils/colors';

export default function TransactionItem({ tx }: { tx: Transaction }) {
  const seed = String(tx.id) + tx.name;
  const bg = randomDarkColorFromSeed(seed);

  return (
    <Link to={`/transaction/${tx.id}`} className="list-item">
      <div className="avatar" style={{ backgroundColor: bg }}>
        <i className="fa-solid fa-store"></i>
      </div>
      <div className="item-content">
        <div className="row">
          <div className="name">{tx.name}</div>
          <div className={`amount ${tx.type === 'payment' ? 'positive' : 'negative'}`}>
            {formatAmountWithType(tx.amount, tx.type)}
          </div>
        </div>
        <div className="row small muted">
          <div className="desc">
            {tx.pending && <span className="badge">pending</span>}
            {tx.description}
          </div>
          <div className="date">
            {tx.authorizedUser ? (
              <>
                <span className="auth">{tx.authorizedUser}</span>
                <span> • </span>
                {formatDateLabel(new Date(tx.date))}
              </>
            ) : (
              formatDateLabel(new Date(tx.date))
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
