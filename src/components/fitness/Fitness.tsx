import React from 'react'
import PageSkeleton, { PageSkeletonProps } from '../app/PageSkeleton'
import ExerciseDetails from './ExerciseDetails'
import CreateWorkout from './CreateWorkout'
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
      label: 'Create Workout',
      route: '/create',
      Component: CreateWorkout,
    },
  ],
}

export default Fitness
