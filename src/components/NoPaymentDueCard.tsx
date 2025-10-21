export default function NoPaymentDueCard() {
  return (
    <div className="card">
      <div className="card-row">
        <i className="fa-solid fa-circle-check"></i>
        <div>
          <div className="card-title">No payment due</div>
          <div className="muted">you've paid your balance</div>
        </div>
      </div>
    </div>
  );
}
