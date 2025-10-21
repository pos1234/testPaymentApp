import { getTodayPoints, formatPoints } from '../utils/points';

export default function DailyPointsCard() {
  const points = getTodayPoints(new Date());
  return (
    <div className="card">
      <div className="card-row">
        <i className="fa-solid fa-star"></i>
        <div>
          <div className="card-title">Daily points</div>
          <div className="card-number">{formatPoints(points)}</div>
        </div>
      </div>
    </div>
  );
}
