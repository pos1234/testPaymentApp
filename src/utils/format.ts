export function formatCurrency(amount: number): string {
  return amount.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
}

export function formatAmountWithType(amount: number, type: 'payment' | 'Credit'): string {
  const sign = type === 'payment' ? '+' : '-';
  return `${sign}${Math.abs(amount).toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}`;
}

export function formatDateLabel(date: Date): string {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffMs = startOfToday.getTime() - startOfDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays >= 0 && diffDays < 7) {
    return date.toLocaleDateString(undefined, { weekday: 'long' });
  }
  return date.toLocaleDateString();
}
