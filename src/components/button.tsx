import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button 
      className="w-full h-12 flex items-center justify-between bg-gray-500 text-blue px-5 font-semibold rounded-xl hover:bg-blue hover:text-gray-900 cursor-pointer transition-colors duration-300"
      {...props}
    />
  )
}