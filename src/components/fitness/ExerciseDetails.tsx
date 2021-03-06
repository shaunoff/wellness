import React, { useState, useRef } from 'react'
import { FormikProps } from 'formik'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import ExerciseDetailsTable from './ExerciseDetailsTable'
import AddExerciseDetails from './AddExerciseDetails'
import Button from '@material-ui/core/Button'
// Interfaces
import { IExerciseDetailsFormValues, IExerciseDetails } from './exerciseDetailsInterfaces'

const ExerciseDetails: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [editData, setEditData] = useState<IExerciseDetails | null>(null)
  const handleClose = () => {
    setOpen(false)
    setEditData(null)
  }
  const formRef = useRef<FormikProps<IExerciseDetailsFormValues>>(null)

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit()
    }
  }
  const editExercise = (data: IExerciseDetails) => {
    setOpen(true)
    setEditData(data)
  }
  return (
    <div>
      <Dialog onClose={handleClose} open={open} maxWidth="lg">
        <DialogTitle id="max-width-dialog-title">
          <Typography variant="h4">Create Exercise</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <AddExerciseDetails formRef={formRef} editData={editData} setOpen={setOpen} />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <ExerciseDetailsTable editExercise={editExercise} />
    </div>
  )
}

export default ExerciseDetails
