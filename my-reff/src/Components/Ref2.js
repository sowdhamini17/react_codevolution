import React, { useRef, useEffect } from 'react';

function Ref2() {
  // 1. Accessing DOM Elements
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // 2. Storing Values Across Renders
  const prevValueRef = useRef(null);

  const handleChange = (event) => {
    prevValueRef.current = event.target.value;
    console.log(prevValueRef.current )
  };

  // 3. Imperative Handles
  const timerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
        console.log(timerRef.current)
    }, 1000);
    timerRef.current = intervalId;

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      {/* 1. Accessing DOM Elements */}
      <input ref={inputRef} type="text" />

      {/* 2. Storing Values Across Renders */}
      <input value={prevValueRef.current} onChange={handleChange} />

      {/* 3. Imperative Handles */}
      <button onClick={() => clearInterval(timerRef.current)}>Stop Timer</button>
    </div>
  );
}
export default Ref2;