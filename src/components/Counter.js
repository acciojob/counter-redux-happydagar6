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
      {/* Display counter value */}
      <h1>{count}</h1>
      
      {/* Buttons container */}
      <div>
        {/* Increment button - second child */}
        <button onClick={handleIncrement}>Increment</button>
        
        {/* Decrement button - third child */}
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;