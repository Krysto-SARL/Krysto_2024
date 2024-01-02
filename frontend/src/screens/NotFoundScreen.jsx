import React from 'react'
import { Link } from 'react-router-dom'



const NotFoundScreen = () => {
  return (
    <>
      <h1>OUPS</h1>
      <h2>La page que vous demandée n'existe pas</h2>

      <Link className='btn btn-light my-3' to="/"> Retour</Link>
    </>
  )
}

export default NotFoundScreen
