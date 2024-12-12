import React, { memo } from 'react';

const Memo = memo(({ name, age }) => {
  console.log('MyComponent rendered'); // This will log only when props change
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
});

export default Memo;