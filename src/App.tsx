import { Routes, Route, Navigate } from 'react-router-dom';
import TransactionList from './routes/TransactionList';
import TransactionDetail from './routes/TransactionDetail';

export default function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<TransactionList />} />
        <Route path="/transaction/:id" element={<TransactionDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
 
