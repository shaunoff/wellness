import React from 'react'
import Rating, { RatingProps } from '@material-ui/lab/Rating'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { FieldProps, getIn } from 'formik'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import Typography from '@material-ui/core/Typography'
import FormHelperText from '@material-ui/core/FormHelperText'

const useStyles = makeStyles((theme: Theme) => {
  return {
    iconFilled: {
      color: theme.palette.primary.main,
    },
    iconEmpty: {
      color: '#ccc',
    },
  }
})

export interface RatingFieldProps extends FieldProps {
  disabled: boolean
  label: string
  max: number
  readOnly: boolean
}

const RatingField: React.FC<RatingFieldProps> = (props: RatingFieldProps) => {
  const classes = useStyles()
  const { field, form, label, max = 5, readOnly } = props
  const { name, value } = field
  const { touched, errors } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  const handleChange: RatingProps['onChange'] = (_, value) => {
    form.setFieldValue(name, value)
  }

  return (
    <>
      <Typography variant="h6">{label}</Typography>
      <Rating
        name={name}
        classes={{
          iconFilled: classes.iconFilled,
          iconEmpty: classes.iconEmpty,
        }}
        value={value}
        defaultValue={1}
        precision={1}
        max={max}
        onChange={handleChange}
        readOnly={readOnly}
        icon={<FiberManualRecordIcon fontSize="inherit" />}
      />
      {showError && (
        <FormHelperText style={{ marginLeft: '16px' }} error>
          {fieldError}
        </FormHelperText>
      )}
    </>
  )
}

export default RatingField
