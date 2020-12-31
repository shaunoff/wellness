import React from 'react'
import { gql, useQuery } from '@apollo/client'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Workouts: React.FC = () => {
  const { data: exerciseDetails, loading } = useQuery(GET_EXERCISE_DETAILS)
  if (loading) return <div>laoding</div>
  return (
    <List component="nav" aria-label="main mailbox folders">
      {exerciseDetails.exerciseDetails.map((exercise: any) => (
        <ListItem button key={exercise.id}>
          {/* <ListItemIcon>
            
          </ListItemIcon> */}
          <ListItemText primary={exercise.exerciseName} secondary={exercise.muscles[0].muscle.label} />
        </ListItem>
      ))}
    </List>
  )
}

export default Workouts

const GET_EXERCISE_DETAILS = gql`
  query ExerciseDetails {
    exerciseDetails {
      difficulty
      equipment
      exerciseName
      id
      muscles(where: { type: { _eq: "primary" } }) {
        muscle {
          name
          label
          group
        }
      }
    }
  }
`
