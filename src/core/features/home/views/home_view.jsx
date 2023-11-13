import React from 'react'
import { useAuth } from '../../../auth/hook/use_auth'

const HomeView = () => {
    const { logout } = useAuth();    

  return (
    <div>
     <h1>Home</h1>
     <button onClick={logout}>Cerrar Sesión</button>
    </div>
    )  ;
}

export default HomeView