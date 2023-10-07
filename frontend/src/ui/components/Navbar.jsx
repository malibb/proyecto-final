import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';
import '../css/navbar.css'

export const Navbar = () => {
  
  const {onLogoutApp} = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogout = () => {
    onLogoutApp()
    navigate('/auth/login', {replace: true});    
  }

  return (
    <>
     <nav>
        <div className='title'>
          <h1>Bienvenido al modulo de tareass</h1>
        </div>

        <div>
          <button onClick={onLogout}>
            Logout
          </button>
        </div>



     </nav>
    </>
  )
}

