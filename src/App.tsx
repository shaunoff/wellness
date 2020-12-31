import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/app/Navbar'
import Sidebar from './components/app/Sidebar'
import Grid from '@material-ui/core/Grid'
import { calendarMap } from './components/calendar/Calendar'
import { fitnessMap } from './components/fitness/Fitness'
import { dietMap } from './components/diet/Diet'
import { sleepMap } from './components/sleep/Sleep'
import { PageSkeletonProps } from './components/app/PageSkeleton'

//const routes = [{ name: 'fitness', route: '/fitness', PageIcon: FitnessCenterIcon }]
const sections: PageSkeletonProps[] = [calendarMap, fitnessMap, dietMap, sleepMap]
const App: React.FC = () => {
  return (
    <div className="App" style={{ background: '#f0f2f5', minHeight: '100vh' }}>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Sidebar sections={sections} />
        </Grid>
        <Grid item xs={10}>
          {sections.map(({ name, route, Component }: PageSkeletonProps) => (
            <Route path={route} key={name}>
              <Component />
            </Route>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}

export default App
