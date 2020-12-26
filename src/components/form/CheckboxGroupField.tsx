import React from 'react'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { FieldProps } from 'formik'

export interface CheckboxGroupOption {
  id: string
  name: string
  label: string
}
export interface CheckboxGroupProps extends FieldProps {
  disabled: boolean
  value: {
    id: string
    name: string
    label: string
  }
  options: [CheckboxGroupOption]
}

const CheckboxGroupField: React.FC<CheckboxGroupProps> = (props: CheckboxGroupProps) => {
  const { field, form, options } = props

  const { name, value: selectedValues } = field
  //const { errors } = form

  //const fieldError = getIn(errors, name)
  //const showError = getIn(touched, name) && !!fieldError

  const handleChange = (option: CheckboxGroupOption): void => {
    const index = selectedValues.findIndex((value: CheckboxGroupOption) => value.id === option.id)
    const newValues =
      index >= 0
        ? selectedValues.filter((value: CheckboxGroupOption) => value.id !== option.id)
        : [...selectedValues, option]

    form.setFieldValue(name, newValues)
  }

  return (
    <FormGroup row>
      {options.map((option) => (
        <FormControlLabel
          // TODO this  will need to be dynamic at some point
          style={{ width: '23%' }}
          key={option.id}
          control={
            <Checkbox
              checked={selectedValues.map((value: CheckboxGroupOption) => value.id).includes(option.id)}
              onChange={() => handleChange(option)}
              color="primary"
            />
          }
          label={option.label}
        />
      ))}
    </FormGroup>
  )
}

export default CheckboxGroupField
