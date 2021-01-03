import { IMuscleType, IMuscle } from './muscleInterfaces'

export interface IExerciseDetailsData {
  exerciseDetails: IExerciseDetails[]
}

export interface IExerciseDetails {
  id: string | number
  exerciseName: string
  equipment: string
  difficulty: number
  type: string
  muscles: IMuscleType[]
  comments: string
}

export interface IExerciseDetailsFormValues extends IExerciseDetails {
  primaryMuscleId: number | string
  secondaryMuscles: IMuscle[]
}
