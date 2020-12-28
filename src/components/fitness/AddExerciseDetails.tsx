import React, { RefObject, useCallback, SetStateAction, Dispatch, ChangeEvent } from 'react'
import * as Yup from 'yup'
import Box from '@material-ui/core/Box'
import { Formik, Form, Field, FormikProps } from 'formik'
import { TextField } from 'formik-material-ui'
import { gql, useMutation, useQuery } from '@apollo/client'
import CheckboxGroupField from '../form/CheckboxGroupField'
import RatingField from '../form/RatingField'
import { IExerciseDetails } from './ExerciseDetailsTable'
import { Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import Muscles, { IMuscle } from './Muscles'

const schema = Yup.object().shape({
  exerciseName: Yup.string().required(),
  equipment: Yup.string().required(),
  type: Yup.string().required(),
  difficulty: Yup.number().min(1),
  primaryMuscleId: Yup.number().required(),
})

interface IAddExerciseDetails {
  formRef: RefObject<FormikProps<ExerciseDetailsValues>>
  editData: IExerciseDetails | null
  setOpen: Dispatch<SetStateAction<boolean>>
}

const AddExerciseDetails: React.FC<IAddExerciseDetails> = ({ formRef, editData, setOpen }: IAddExerciseDetails) => {
  const [createExerciseDetail] = useMutation(CREATE_EXERCISE_DETAIL)
  const [updateExerciseDetail] = useMutation(UPDATE_EXERCISE_DETAIL)
  const { data: muscleGroups, error } = useQuery<MusclesData>(GET_MUSCLES)
  console.log(error)
  const normalizeExerciseDetail = useCallback((): ExerciseDetailsValues => {
    if (!editData) {
      return initialValues
    }
    const values: ExerciseDetailsValues = { ...editData, primaryMuscleId: '', secondaryMuscles: [] }
    values.primaryMuscleId =
      editData && ensure(editData.muscles.find((muscles) => muscles.type === 'primary')).muscle.id
    values.secondaryMuscles =
      editData && editData.muscles.filter((muscles) => muscles.type === 'secondary').map((muscle) => muscle.muscle)
    return values
  }, [editData])

  return (
    <Formik
      innerRef={formRef}
      initialValues={editData ? normalizeExerciseDetail() : initialValues}
      onSubmit={(values) => {
        if (editData) {
          console.log('gfhjfgjdshfghjs', { ...values, muscles: combineMuscles(values, editData.id).data })
          updateExerciseDetail({ variables: { ...values, muscles: combineMuscles(values, editData.id).data } })
            .then(() => setOpen(false))
            .catch((err) => console.log(err))
        } else {
          createExerciseDetail({ variables: { ...values, muscles: combineMuscles(values) } })
            .then(() => setOpen(false))
            .catch((err) => console.log(err))
        }
      }}
      validationSchema={schema}
      enableReinitialize
    >
      {({ values, setFieldValue }) => {
        if (!muscleGroups) return <div>Loading</div>
        return (
          <Box display="flex">
            <Box width="50%">
              <Form>
                <Box display="flex">
                  <Field component={TextField} label="Name" fullWidth name="exerciseName" />
                  <div style={{ width: '32px' }}></div>
                  <Field component={TextField} label="Equipment" fullWidth name="equipment" />
                </Box>
                <Spacer />
                <Box display="flex" alignItems="center">
                  <Field component={TextField} label="Type" fullWidth name="type" />
                  <div style={{ width: '32px' }}></div>
                  <Field component={RatingField} name="difficulty" label="Difficulty" max={3} />
                </Box>
                <Spacer />
                <Field
                  component={TextField}
                  name="primaryMuscleId"
                  type="text"
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target
                    const muscle = muscleGroups && muscleGroups.muscle.find((muscle) => value === muscle.id)
                    if (muscle) {
                      setFieldValue('primaryMuscleId', muscle.id)
                      setFieldValue('secondaryMuscles', [])
                    }
                  }}
                  label="Primary Muscle Group"
                  select
                  fullWidth
                >
                  {muscleGroups.muscle.map((muscle) => (
                    <MenuItem key={muscle.id} value={muscle.id}>
                      {muscle.label}
                    </MenuItem>
                  ))}
                </Field>
                <Spacer />
                <Typography variant="h6">Secondary Muscles</Typography>
                <Field
                  component={CheckboxGroupField}
                  name="secondaryMuscles"
                  options={
                    (muscleGroups && muscleGroups.muscle.filter((muscle) => muscle.id !== values.primaryMuscleId)) || []
                  }
                />
                <Spacer />
                <Field component={TextField} label="Comments" fullWidth name="comments" multiline rows={4} />
              </Form>
            </Box>
            <Box width="50%">
              <Muscles
                primaryMuscle={muscleGroups.muscle.find((muscle) => values.primaryMuscleId == muscle.id) || {}}
                secondaryMuscles={values.secondaryMuscles}
              />
            </Box>
          </Box>
        )
      }}
    </Formik>
  )
}

function ensure<T>(argument: T | undefined | null): T {
  if (argument === undefined || argument === null) {
    throw new TypeError('must always  be there')
  }

  return argument
}

const CREATE_EXERCISE_DETAIL = gql`
  mutation CreateExerciseDetail(
    $id: Int
    $exerciseName: String
    $equipment: String
    $type: String
    $difficulty: Int
    $comments: String
    $muscles: exerciseDetails_muscle_arr_rel_insert_input
  ) {
    insert_exerciseDetails_one(
      object: {
        exerciseName: $exerciseName
        equipment: $equipment
        type: $type
        difficulty: $difficulty
        muscles: $muscles
        comments: $comments
      }
    ) {
      id
      exerciseName
    }
  }
`
const UPDATE_EXERCISE_DETAIL = gql`
  mutation updateExerciseDetails(
    $id: Int!
    $difficulty: Int
    $equipment: String
    $exerciseName: String
    $type: String
    $comments: String
    $muscles: [exerciseDetails_muscle_insert_input!]!
  ) {
    update_exerciseDetails_by_pk(
      pk_columns: { id: $id }
      _set: {
        difficulty: $difficulty
        equipment: $equipment
        exerciseName: $exerciseName
        type: $type
        comments: $comments
      }
    ) {
      id
    }
    delete_exerciseDetails_muscle(where: { exerciseDetailsId: { _eq: $id } }) {
      affected_rows
    }
    insert_exerciseDetails_muscle(objects: $muscles) {
      returning {
        exerciseDetailsId
      }
    }
  }
`

const combineMuscles = (values: ExerciseDetailsValues, exerciseDetailsId?: IExerciseDetails['id']) => {
  const { primaryMuscleId, secondaryMuscles } = values
  return {
    data: [
      { muscleId: primaryMuscleId, type: 'primary', ...(exerciseDetailsId && { exerciseDetailsId }) },
      ...secondaryMuscles.map((muscle) => ({
        muscleId: parseInt(muscle.id),
        type: 'secondary',
        ...(exerciseDetailsId && { exerciseDetailsId }),
      })),
    ],
  }
}

const GET_MUSCLES = gql`
  query GetMuscles {
    muscle {
      name
      label
      id
    }
  }
`

interface MusclesData {
  muscle: IMuscle[]
}

export interface ExerciseDetailsValues extends IExerciseDetails {
  primaryMuscleId: number | string
  secondaryMuscles: IMuscle[]
}

const initialValues: ExerciseDetailsValues = {
  id: '',
  exerciseName: '',
  equipment: '',
  type: '',
  difficulty: 0,
  primaryMuscleId: '',
  secondaryMuscles: [],
  comments: '',
  muscles: [],
}

const Spacer = () => <div style={{ height: '16px' }} />

export default AddExerciseDetails
