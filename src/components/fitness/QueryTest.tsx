import React from 'react'
// import consola from 'consola'
// import { gql, useMutation, useQuery } from '@apollo/client'

// const ADD_EXERCISE = gql`
//   mutation MyMutation2($workout_id: Int, $info_id: Int) {
//     insert_exercise(objects: { workout_id: $workout_id, info_id: $info_id }) {
//       returning {
//         id
//         information {
//           infoName
//         }
//       }
//     }
//   }
// `
// const GET_EXERCISES = gql`
//   query MyQuery {
//     exercise(where: { information: { infoName: { _eq: "Shoulder Press" } } }) {
//       information {
//         infoName
//         id
//       }
//     }
//   }
// `

const AddExercise = () => {
  return <div>Query</div>
  // const [addTodo, { data }] = useMutation(ADD_EXERCISE)
  // const { data: exercises, loading } = useQuery(GET_EXERCISES)
  // console.log(exercises, loading)
  // return (
  //   <>
  //     <div
  //       onClick={() =>
  //         addTodo({ variables: { workout_id: '1', info_id: '1' } })
  //           .then((data) => consola.success(data))
  //           .catch((e: ErrorEvent) => console.log('hfdkjhfkjdshfkj', e))
  //       }
  //     >
  //       Add Exercise
  //     </div>
  //     <div
  //       onClick={() =>
  //         addTodo({ variables: { workout_id: '1', info_id: '1' } })
  //           .then((data) => consola.success(data))
  //           .catch((e: ErrorEvent) => console.log('hfdkjhfkjdshfkj', e))
  //       }
  //     >
  //       Get Exercises
  //     </div>
  //   </>
  // )
}

export default AddExercise
