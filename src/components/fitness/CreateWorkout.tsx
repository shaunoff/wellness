import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { Formik, Form, Field, FieldArray, FieldArrayRenderProps } from 'formik'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Dialog from '@material-ui/core/Dialog'
import CheckIcon from '@material-ui/icons/Check'
import Button from '@material-ui/core/Button'
import { InputBase } from 'formik-material-ui'
import { Checkbox } from 'formik-material-ui'
import ExerciseDetailsList from './ExerciseDetailsList'
import Muscles from './Muscles'
import { primaryMuscle, secondaryMuscles } from './ExerciseDetailsTable'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Workout_Insert_Input } from '../../generated/graphql'
//Interfaces
import { IExerciseDetails } from './exerciseDetailsInterfaces'

const useStyles = makeStyles((theme: Theme) => {
  return {
    input: {
      textAlign: 'center',
      width: '30px',
      padding: '4px',
      ...theme.typography.h6,
    },
  }
})

interface IWorkoutFormValues {
  exercises: IExercise[]
}

interface ISet {
  mass: number
  reps: number
  completed: boolean
}

interface IExercise {
  exerciseDetails: IExerciseDetails
  sets: ISet[]
}

const initialValues: IWorkoutFormValues = {
  exercises: [],
}
//rename function
const normalizeData = (values: IWorkoutFormValues): Workout_Insert_Input[] => {
  const testy = values.exercises.map((value) => {
    return {
      exercise: {
        data: [
          {
            exerciseDetailsId:
              typeof value.exerciseDetails.id === 'string'
                ? parseInt(value.exerciseDetails.id)
                : value.exerciseDetails.id,
            sets: {
              data: value.sets,
            },
          },
        ],
      },
    }
  })
  return testy
}

const CreateWorkout: React.FC = () => {
  const [createWorkout] = useMutation(CREATE_WORKOUT)
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const test = normalizeData(values)
        console.log('obj', test)
        createWorkout({
          variables: {
            exercises: test,
          },
        })
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <div style={{ width: '50%' }}>
              <FieldArray
                name={`exercises`}
                render={(exerciseArray: WorkoutArrayHelper<IExercise>) => (
                  <>
                    {values.exercises.map((exercise, index: number) => (
                      <Paper style={{ margin: '16px' }} elevation={1} key={index}>
                        <FieldArray
                          name={`exercises[${index}].sets`}
                          render={(setArray: WorkoutArrayHelper<ISet>) => (
                            <>
                              <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Box display="flex" alignItems="center" padding="8px">
                                  <Muscles
                                    width={'50px'}
                                    primaryMuscle={primaryMuscle(exercise.exerciseDetails.muscles)}
                                    secondaryMuscles={secondaryMuscles(exercise.exerciseDetails.muscles)}
                                  />
                                  <Typography variant="h6" style={{ padding: '8px' }}>
                                    {`${exercise.exerciseDetails.exerciseName} (${exercise.exerciseDetails.equipment})`}
                                  </Typography>
                                </Box>
                                <Box>
                                  <MoreVertIcon />
                                </Box>
                              </Box>
                              <Box padding="0px 16px">
                                <Table size="small">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell align="center">Set</TableCell>
                                      <TableCell align="center">Previous</TableCell>
                                      <TableCell align="center">Lbs</TableCell>
                                      <TableCell align="center">Reps</TableCell>
                                      <TableCell align="center">
                                        <CheckIcon fontSize="small" />
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {exercise.sets.map((set, setIndex: number) => (
                                      <TableRow
                                        style={{
                                          background: set.completed ? '#fafafa' : 'white',
                                        }}
                                        key={setIndex}
                                      >
                                        <TableCell align="center">
                                          <Typography variant="h6">{setIndex + 1}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Typography variant="h6" color="textSecondary">
                                            25lb X 8
                                          </Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                          <Field
                                            inputProps={{
                                              className: classes.input,
                                            }}
                                            component={InputBase}
                                            name={`exercises[${index}].sets[${setIndex}].mass`}
                                          />
                                        </TableCell>
                                        <TableCell align="center">
                                          <Field
                                            inputProps={{
                                              className: classes.input,
                                            }}
                                            component={InputBase}
                                            name={`exercises[${index}].sets[${setIndex}].reps`}
                                          />
                                        </TableCell>
                                        <TableCell align="center">
                                          <Field
                                            component={Checkbox}
                                            name={`exercises[${index}].sets[${setIndex}].completed`}
                                            color="primary"
                                          />
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                                <Box display="flex" justifyContent="center" padding="16px">
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    onClick={() => setArray.push({ mass: 0, reps: 0, completed: false })}
                                  >
                                    Add Set
                                  </Button>
                                </Box>
                              </Box>
                            </>
                          )}
                        />
                      </Paper>
                    ))}
                    <Box display="flex" justifyContent="center">
                      <Button variant="contained" color="primary" size="small" onClick={() => setOpen(true)}>
                        Add Exercise
                      </Button>
                    </Box>
                    <Dialog open={open} onClose={() => setOpen(false)}>
                      <ExerciseDetailsList
                        onSubmit={(selected: IExerciseDetails[]) => {
                          selected.forEach((exercise) =>
                            exerciseArray.push({
                              exerciseDetails: exercise,
                              sets: [
                                {
                                  mass: 0,
                                  reps: 0,
                                  completed: false,
                                },
                              ],
                            }),
                          )

                          setOpen(false)
                        }}
                      />
                    </Dialog>
                  </>
                )}
              />
              <button type="submit">fhjdshfkjsdf</button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default CreateWorkout

const CREATE_WORKOUT = gql`
  mutation CreateWorkout($exercises: [workout_insert_input!]!) {
    insert_workout(objects: $exercises) {
      returning {
        id
      }
    }
  }
`

interface WorkoutArrayHelper<T> extends FieldArrayRenderProps {
  push: (obj: T) => void
}
