import React, { useState } from 'react';
import Modal from './Modal/Modal';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal onClose={() => setShow(false)} show={show}/>
    </div>
  );
}

export default App;
