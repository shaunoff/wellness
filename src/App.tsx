import React from 'react'
import { Route } from 'react-router-dom'
import ExerciseDetails from './components/fitness/ExerciseDetails'

const App: React.FC = () => {
  return (
    <div className="App">
      <span>sdghsgdjhs</span>
      <Route path="/fitness">
        <ExerciseDetails />
      </Route>
    </div>
  )
}

export default App
