import React from 'react'
import { Route } from 'react-router-dom'
import ExerciseDetails from './components/fitness/ExerciseDetails'
import Navbar from './components/app/Navbar'
import Sidebar from './components/app/Sidebar'
import Grid from '@material-ui/core/Grid'
import { useAuth0 } from '@auth0/auth0-react'

const App: React.FC = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect } = useAuth0()
  console.log(user, isLoading, isAuthenticated)
  return (
    <div className="App" style={{ background: '#FAFAFD', minHeight: '100vh' }}>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <button onClick={() => loginWithRedirect()}>Log In</button>

          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          <Route path="/fitness">
            <ExerciseDetails />
          </Route>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
