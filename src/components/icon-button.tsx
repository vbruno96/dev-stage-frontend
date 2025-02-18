import type { ComponentProps } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
  return (
    <button
      className="bg-gray-600 text-blue p-1.5 rounded-md hover:bg-blue hover:text-gray-900 cursor-pointer transition-colors duration-300"
      {...props}
    />
  )
}
