import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = () => {
  // Get dispatch function from Redux
  const dispatch = useDispatch();
  
  // Get count from Redux store
  const count = useSelector((state) => state.count);

  // Handle increment button click
  const handleIncrement = () => {
    dispatch(increment());
  };

  // Handle decrement button click
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;