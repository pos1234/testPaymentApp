import { useMemo } from 'react';
import BalanceCard from '../components/BalanceCard';
import NoPaymentDueCard from '../components/NoPaymentDueCard';
import DailyPointsCard from '../components/DailyPointsCard';
import TransactionsList from '../components/TransactionsList';

export default function TransactionList() {
  // Balance: random number between 0 and 1500, fixed per mount
  const { balance, limit, available } = useMemo(() => {
    const limit = 1500;
    const balance = Math.round(Math.random() * limit);
    const available = Math.max(0, limit - balance);
    return { balance, limit, available };
  }, []);

  return (
    <div className="screen">
      <header className="header">
        <i className="fa-solid fa-wallet"></i>
        <h1>Wallet</h1>
      </header>

      <section className="cards">
        <BalanceCard balance={balance} limit={limit} available={available} />
        <NoPaymentDueCard />
        <DailyPointsCard />
      </section>

      <TransactionsList />
    </div>
  );
}
