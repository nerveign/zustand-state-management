import { increase, resetStore, useCounter } from './store/counter-store';

export default function Counter() {
  const count = useCounter((state) => state.count);

  return (
    <>
      <div className="count">
        Counter : <span className="count-num">{count}</span>
      </div>
      <div className="btn-wrapper">
        <button onClick={increase}>Increment</button>
        <button onClick={resetStore}>Reset</button>
      </div>
    </>
  );
}
