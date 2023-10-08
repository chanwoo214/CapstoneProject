import React from 'react'
import ProtectedLayout from '../layouts/ProtectedLayout'

const HomePage = () => {
  return (
    <ProtectedLayout>
    <div className="welcome-text">
      <h1>Welcome!</h1>
      <h2>Looking for a system to manage your clients?</h2>
      <h3>Sign Up!</h3>
    </div>
    </ProtectedLayout>
  )
}

export default HomePage