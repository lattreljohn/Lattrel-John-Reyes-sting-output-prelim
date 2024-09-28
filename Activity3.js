import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const sum = Number(num1) + Number(num2);

  return (
    <div>
      <input type="number" onChange={(e) => setNum1(e.target.value)} />
      <input type="number" onChange={(e) => setNum2(e.target.value)} />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default App;