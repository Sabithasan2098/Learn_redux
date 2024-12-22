import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div className="min-h-screen flex gap-5 items-center justify-center">
      <button
        onClick={() => dispatch(increment())}
        className="bg-orange-600 px-6 py-3 rounded-md text-xl font-bold text-white"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incrementByValue(5))}
        className="bg-orange-600 px-6 py-3 rounded-md text-xl font-bold text-white"
      >
        Increment5
      </button>
      <h1 className="bg-gray-200 px-5 py-3 rounded-xl text-xl font-bold text-green-500">
        {count}
      </h1>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-600 px-6 py-3 rounded-md text-xl font-bold text-white"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
