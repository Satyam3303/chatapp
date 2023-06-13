import { useState, useRef } from 'react';
import './App.css';
import { Auth } from './components/auth/auth';
import Cookies from 'universal-cookie';
import { Chat } from './components/chat/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState('');

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove('auth-token');
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <>
        <Auth setIsAuth={setIsAuth} />
      </>
    );
  }

  return (
    <>
    <div className="container2">
      <div>
      {room ? (
        <Chat room={room} />
      ) : (
        
        <div className='room'>
          <label>Enter Room Name:</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
        
      )}

      <div className='sign-out'>
      
        <button onClick={signUserOut}>Sign Out</button>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
