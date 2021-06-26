import React, { useState } from 'react';
import Modal from './Modal/Modal';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
        <button onClick={() => setShow(true)}>Show Modal</button>
        <Modal title="My Modal" handleClose={() => setShow(false)} show={show}>
          <p>This is modal body</p>
        </Modal>
        {/* show && <Modal onClose={() => setShow(false)} show={show}/> */}
    </div>
  );
}

export default App;
