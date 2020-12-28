import React from 'react'
import { Route } from 'react-router-dom'
import ExerciseDetails from './components/fitness/ExerciseDetails'
import Navbar from './components/app/Navbar'
import Sidebar from './components/app/Sidebar'
import Grid from '@material-ui/core/Grid'

const App: React.FC = () => {
  return (
    <div className="App" style={{ background: '#f0f2f5', minHeight: '100vh' }}>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs={2}>
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
