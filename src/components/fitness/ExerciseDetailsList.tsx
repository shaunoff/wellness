import React, { useEffect, useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import useDebouncedQuery from '../../hooks/useDebouncedQuery'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import ListItemText from '@material-ui/core/ListItemText'
import Muscles from './Muscles'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { primaryMuscle, secondaryMuscles } from './ExerciseDetailsTable'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { GET_MUSCLES } from './AddExerciseDetails'
//Interfaces
import { IExerciseDetailsData, IExerciseDetails } from './exerciseDetailsInterfaces'
import { IMusclesData } from './muscleInterfaces'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '3px',
    '&$selected': {
      backgroundColor: 'white',
      borderLeft: `3px solid ${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: 'white',
      },
    },
  },
  selected: {},
}))

interface IExerciseDetailsList {
  onSubmit: (selected: IExerciseDetails[]) => void
}

const ExerciseDetailsList: React.FC<IExerciseDetailsList> = ({ onSubmit }: IExerciseDetailsList) => {
  const classes = useStyles()
  const [selected, setSelected] = useState<IExerciseDetails[]>([])
  const [search, setSearch] = useState('')
  const [muscleFilter, setMuscleFilter] = useState('')
  const [loadExerciseDetails, { called, loading, data: exerciseDetails }] = useDebouncedQuery<IExerciseDetailsData>(
    GET_EXERCISE_DETAILS,
    {},
    600,
  )
  const { data: muscleGroups } = useQuery<IMusclesData>(GET_MUSCLES)

  useEffect(() => {
    loadExerciseDetails()
  }, [])

  useEffect(() => {
    if (called) {
      loadExerciseDetails({
        variables: { search: `%${search}%`, muscle: `%${muscleFilter === 'All Muscles' ? '' : muscleFilter}%` },
      })
    }
  }, [search, muscleFilter])

  const handleSelectedExercise = (exercise: IExerciseDetails) => {
    const exerciseExists = selected.find((selectedExercise) => exercise.id === selectedExercise.id)
    if (exerciseExists) {
      setSelected(selected.filter((selectedExercise) => exercise.id !== selectedExercise.id))
    } else {
      setSelected([...selected, exercise])
    }
  }
  //if (!called || loading) return
  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Box display="flex">
        <TextField
          label="Search Exercise"
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          onChange={(event) => {
            setMuscleFilter(event.target.value)
          }}
          label="Primary Muscle Group"
          select
          style={{ width: '300px', marginLeft: '16px' }}
          //fullWidth
        >
          <MenuItem value="All Muscles">All Muscles</MenuItem>
          {muscleGroups &&
            muscleGroups.muscle.map((muscle) => (
              <MenuItem key={muscle.id} value={muscle.label}>
                {muscle.label}
              </MenuItem>
            ))}
        </TextField>
      </Box>
      {!called || loading || !exerciseDetails ? (
        <div>laoding</div>
      ) : (
        <>
          <List component="nav" aria-label="main mailbox folders">
            {exerciseDetails.exerciseDetails.map((exercise: IExerciseDetails) => (
              <>
                <ListItem
                  key={exercise.id}
                  button
                  selected={!!selected.find((selected) => selected.id == exercise.id)}
                  classes={{ root: classes.root, selected: classes.selected }}
                  onClick={() => handleSelectedExercise(exercise)}
                >
                  <Muscles
                    width={'50px'}
                    primaryMuscle={primaryMuscle(exercise.muscles)}
                    secondaryMuscles={secondaryMuscles(exercise.muscles)}
                  />
                  <ListItemText primary={exercise.exerciseName} secondary={primaryMuscle(exercise.muscles).label} />
                </ListItem>
                <Divider />
              </>
            ))}
          </List>
          <Button variant="contained" color="primary" onClick={() => onSubmit(selected)}>
            Add Exercise
          </Button>
        </>
      )}
    </Paper>
  )
}

export default ExerciseDetailsList

const GET_EXERCISE_DETAILS = gql`
  query ExerciseDetails($search: String, $muscle: String) {
    exerciseDetails(where: { exerciseName: { _ilike: $search }, muscles: { muscle: { label: { _ilike: $muscle } } } }) {
      difficulty
      equipment
      exerciseName
      id
      muscles {
        type
        muscle {
          name
          label
          group
        }
      }
    }
  }
`
