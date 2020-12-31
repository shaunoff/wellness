import React from 'react'
import PageSkeleton, { PageSkeletonProps } from '../app/PageSkeleton'
import ExerciseDetails from './ExerciseDetails'
import Workouts from './Workouts'
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter'

const Fitness: React.FC = () => <PageSkeleton {...fitnessMap} />

export const fitnessMap: PageSkeletonProps = {
  name: 'fitness',
  label: 'Fitness',
  route: '/fitness',
  SectionIcon: FitnessCenterIcon,
  Component: Fitness,
  routes: [
    {
      name: 'exercises',
      label: 'Exercises',
      Component: ExerciseDetails,
      route: '/exercises',
    },
    {
      name: 'workouts',
      label: 'Workouts',
      route: '/workouts',
      Component: Workouts,
    },
  ],
}

export default Fitness
