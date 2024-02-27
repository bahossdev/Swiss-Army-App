import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import { useState, useEffect } from 'react';
import Notification from './components/Notification';

function App() {

  const [timedPopup, setTimedPopup] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000 );
  },[]);

  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
        {/* if datetime.now === */}
        <Notification trigger={timedPopup} setTrigger={setTimedPopup}>
          <p>Hi.</p>
        </Notification>
      </main>
    </>
  );
}

export default App
