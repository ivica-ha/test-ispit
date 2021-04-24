import React from 'react';
import './global-style.scss';
import Message from './component/Message/Message';
import Menu from './component/Menu/Menu';

function App() {
  return (
    <>
      <Menu />
      <div className={`container`}>
        <div className='messages'>
          <Message key={1} />
          <Message key={2} currentUser={true} />
        </div>
      </div>
    </>
  );
}

export default App;
