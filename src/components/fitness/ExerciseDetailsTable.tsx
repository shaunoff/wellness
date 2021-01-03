import React from 'react'
import { gql, useMutation, useSubscription } from '@apollo/client'
import { Theme, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@material-ui/core/Typography'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Rating from '@material-ui/lab/Rating'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import Muscles from './Muscles'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
// interfaces
import { IExerciseDetailsData, IExerciseDetails } from './exerciseDetailsInterfaces'
import { IMuscleType, IMuscle } from './muscleInterfaces'

const useStyles = makeStyles((theme: Theme) => {
  return {
    chip: {
      marginRight: '1em',
    },
    iconFilled: {
      color: theme.palette.primary.main,
    },
    iconEmpty: {
      color: '#ccc',
    },
  }
})
interface IAddExerciseDetailsTable {
  editExercise: (data: IExerciseDetails) => void
}

export const primaryMuscle = (muscles: IMuscleType[]): Partial<IMuscle> => {
  const primaryMuscle = muscles.find((muscle) => {
    return muscle.type === 'primary'
  })
  if (!primaryMuscle) return {}
  return primaryMuscle.muscle
}

export const secondaryMuscles = (muscles: IMuscleType[]): IMuscle[] => {
  const secondaryMuscles = muscles.filter((muscle) => {
    return muscle.type === 'secondary'
  })
  return secondaryMuscles.map((muscle): IMuscle => muscle.muscle)
}

const ExerciseDetailsTable: React.FC<IAddExerciseDetailsTable> = ({ editExercise }: IAddExerciseDetailsTable) => {
  const classes = useStyles()
  const { data: exerciseDetails } = useSubscription<IExerciseDetailsData>(EXERCISE_DETAILS_SUBSCRIPTION)
  const [deleteExerciseDetail] = useMutation(DELETE_EXERCISE_DETAIL)

  const handleDelete = (id: IExerciseDetails['id']) => {
    deleteExerciseDetail({ variables: { id } }).catch((err) => console.log(err))
  }

  if (!exerciseDetails) return <div>Loading</div>
  return (
    <Paper style={{ margin: '16px 0px', padding: '16px' }} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width={200}>Exercise Name</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Primary Muscle</TableCell>
            <TableCell>Secondary Muscles</TableCell>
            <TableCell>Equipment</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Level</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {exerciseDetails.exerciseDetails.map((row: IExerciseDetails) => (
            <TableRow key={row.id}>
              <TableCell>
                <Typography variant="h6">{row.exerciseName}</Typography>
                <Typography variant="body2">{row.comments}</Typography>
              </TableCell>
              <TableCell>
                <div style={{ width: '80px' }}>
                  <Muscles
                    primaryMuscle={primaryMuscle(row.muscles)}
                    secondaryMuscles={secondaryMuscles(row.muscles)}
                  />
                </div>
              </TableCell>
              <TableCell>
                {row.muscles
                  .filter((muscleType) => muscleType.type === 'primary')
                  .map((muscleType) => (
                    <Chip
                      className={classes.chip}
                      key={muscleType.muscle.id}
                      label={muscleType.muscle.label}
                      color="primary"
                    />
                  ))}
              </TableCell>
              <TableCell>
                {row.muscles
                  .filter((muscle) => muscle.type === 'secondary')
                  .map((muscle) => (
                    <Chip
                      className={classes.chip}
                      key={muscle.muscle.id}
                      label={muscle.muscle.label}
                      variant="outlined"
                      color="primary"
                    />
                  ))}
              </TableCell>
              <TableCell>{row.equipment}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>
                <Rating
                  classes={{
                    iconFilled: classes.iconFilled,
                    iconEmpty: classes.iconEmpty,
                  }}
                  value={row.difficulty}
                  precision={1}
                  max={3}
                  readOnly
                  icon={<FiberManualRecordIcon fontSize="inherit" />}
                />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => editExercise(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

const EXERCISE_DETAILS_SUBSCRIPTION = gql`
  subscription ExerciseDetailsSubscription {
    exerciseDetails(order_by: { exerciseName: asc }) {
      equipment
      exerciseName
      difficulty
      id
      type
      comments
      muscles {
        type
        muscle {
          name
          id
          label
        }
      }
    }
  }
`
const DELETE_EXERCISE_DETAIL = gql`
  mutation DeleteExerciseDetail($id: Int) {
    delete_exerciseDetails(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`

export default ExerciseDetailsTable
