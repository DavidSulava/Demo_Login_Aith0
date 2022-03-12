import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

function NavBar() {

  const {
    isLoading,
    user,
    loginWithRedirect,
    logout,
    isAuthenticated
  } = useAuth0();

  return(
    <div className='nav-bar'>
      <div className='nav-bar-component-wrapper'>
        {
          !user && (
            <Button variant="primary" className="button auth" onClick={() => loginWithRedirect()}> Login </Button>
          )
        }
        {
          user && !isLoading && (
            <Button variant="primary" className="button auth" onClick={() => logout()}> LogOut </Button>
          )
        }
      </div>

    </div>
  )
}

export default NavBar