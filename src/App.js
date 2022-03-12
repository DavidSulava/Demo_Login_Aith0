import React from 'react';
import './styles/index.scss';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/NavBar';
import ScanListPage from './pages/ScanListPage';


function App() {
  const {
    isAuthenticated,
  } = useAuth0();


  return (
    <>
      <NavBar/>
      {
        isAuthenticated && <ScanListPage/>
      }
    </>
  );
}

export default App;
