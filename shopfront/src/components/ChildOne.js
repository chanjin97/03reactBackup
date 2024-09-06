import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterStore from "../slice/counterSlice";

function ChildOne() {
  const counter = useSelector((state) => {
    return state.counter.num;
  });
  /* () =>{} 이면은 {return ...} 있어야하고 {} 없으면 return 없오도 된다*/
  //   const counter = useSelector((state) => state.counter.num);

  const dispatch = useDispatch();
  return (
    <div>
      ChildOne{counter} <br />
      <button
        onClick={() => {
          dispatch(counterStore.actions.up(100));
        }}
      >
        클릭
      </button>{" "}
      /{" "}
      <button
        onClick={() => {
          dispatch(counterStore.actions.down(10));
        }}
      >
        다운
      </button>
    </div>
  );
}

export default ChildOne;
