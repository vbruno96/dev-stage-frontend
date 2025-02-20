import type { ComponentProps } from 'react'

interface InputReadonlyRootProps extends ComponentProps<'div'> {}

export function InputReadonlyRoot(props: InputReadonlyRootProps) {
  return (
    <div
      className="flex items-center gap-2 bg-gray-800 border border-gray-600 pl-4 pr-2 py-3 rounded-xl"
      {...props}
    />
  )
}

interface InputReadonlyIconProps extends ComponentProps<'span'> {}

export function InputReadonlyIcon(props: InputReadonlyIconProps) {
  return <span className="text-gray-100 text-xl leading-0" {...props} />
}

interface InputReadonlyFieldProps extends ComponentProps<'input'> {}

export function InputReadonlyField(props: InputReadonlyFieldProps) {
  return (
    <input className="flex-1 text-gray-100" type="text" readOnly {...props} />
  )
}
