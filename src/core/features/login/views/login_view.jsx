import React from 'react'
import { useAuth } from '../../../auth/hook/use_auth'

const LoginView = () => {

   const {login} = useAuth();

  return (
    <div>
      <h1>Films Project</h1>
      <button onClick={login} >Iniciar Sesión</button>


    </div>
  )
}

export default LoginView