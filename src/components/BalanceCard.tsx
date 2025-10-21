import { formatCurrency } from '../utils/format';

export default function BalanceCard({ balance, limit, available }: { balance: number; limit: number; available: number }) {
  return (
    <div className="card card-balance">
      <div className="card-row">
        <div>
          <div className="card-title">Maximum card limit</div>
          <div className="card-value">{formatCurrency(limit)}</div>
        </div>
        <i className="fa-solid fa-credit-card"></i>
      </div>
      <div className="divider" />
      <div className="grid-2">
        <div>
          <div className="muted">Card balance</div>
          <div className="card-number">{formatCurrency(balance)}</div>
        </div>
        <div>
          <div className="muted">Available</div>
          <div className="card-number positive">{formatCurrency(available)}</div>
        </div>
      </div>
    </div>
  );
}
