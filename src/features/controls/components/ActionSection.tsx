import { KeyboardEvent } from 'react'
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import { Button, Input } from '@/components'

import { ActionSectionContainer, ActionSectionTitle } from './ActionSection.styles'

interface ActionField<T extends FieldValues> {
  name: keyof T
  label: string
  labelSize?: 'small' | 'medium' | 'large'
  requiredMessage?: string
}

interface ActionSectionProps<T extends FieldValues> {
  title: string
  fields: ActionField<T>[]
  buttonText: string
  onSubmit: () => void
  register: UseFormRegister<T>
  errors: FieldErrors<T>
}

const ActionSection = <T extends FieldValues>({
  title,
  fields,
  buttonText,
  onSubmit,
  register,
  errors,
}: ActionSectionProps<T>) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSubmit()
    }
  }

  return (
    <ActionSectionContainer>
      <ActionSectionTitle>{title}</ActionSectionTitle>
      {fields.map((field) => (
        <Input
          key={field.name as string}
          type="number"
          label={field.label}
          step="1"
          labelSize={field.labelSize}
          hasError={!!errors[field.name]}
          errorMessage={errors[field.name]?.message as string}
          onKeyDown={handleKeyDown}
          {...register(field.name as Path<T>, {
            valueAsNumber: true,
            required: field.requiredMessage || `${field.label} 입력하세요.`,
          })}
        />
      ))}

      <Button type="button" onClick={onSubmit}>
        {buttonText}
      </Button>
    </ActionSectionContainer>
  )
}

export default ActionSection
