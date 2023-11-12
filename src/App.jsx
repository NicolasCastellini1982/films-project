import React from 'react'
import { Router, RouterProvider } from 'react-router-dom'
import { appRouter } from './core/routes/app_router'

const App = () => {
  return (
    <>
      <RouterProvider  router = {appRouter} />    
    </>
  )
}

export default App