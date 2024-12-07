
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/reducers/counterSlice";
import { RootState } from "../store/store";

export default function About  () {
  const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
      <>
        <div>
          <h1>About Page</h1>
          <h2>{count}</h2>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
    </div>    
    </>);
  };