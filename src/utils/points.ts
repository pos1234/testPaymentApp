// Meteorological seasons start: Mar 1, Jun 1, Sep 1, Dec 1
function getSeasonStart(date: Date): Date {
  const y = date.getFullYear();
  const month = date.getMonth(); // 0-11
  // season start months: 2(Mar),5(Jun),8(Sep),11(Dec)
  const starts = [new Date(y, 2, 1), new Date(y, 5, 1), new Date(y, 8, 1), new Date(y, 11, 1)];
  let start = starts[0];
  for (const s of starts) {
    if (s <= date) start = s;
  }
  // If date before March 1, season start is Dec 1 of previous year
  if (date < starts[0]) {
    start = new Date(y - 1, 11, 1);
  }
  return start;
}

function dayOfSeason(date: Date): number {
  const start = getSeasonStart(date);
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const dDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const diffMs = dDay.getTime() - startDay.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1; // 1-based
}

export function computePointsForDay(n: number): number {
  if (n <= 1) return 2;
  if (n === 2) return 3;
  let p1 = 2; // day1
  let p2 = 3; // day2
  let p = p2;
  for (let i = 3; i <= n; i++) {
    p = Math.round(p1 + 0.6 * p2);
    p1 = p2;
    p2 = p;
  }
  return p;
}

export function getTodayPoints(date: Date): number {
  const n = dayOfSeason(date);
  return computePointsForDay(n);
}

export function formatPoints(points: number): string {
  if (points >= 1000) {
    return `${Math.round(points / 1000)}k`;
  }
  return String(points);
}
