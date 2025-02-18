import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {
  error?: boolean;
}

export function InputRoot({ error = false, ...props }: InputRootProps) {
  return (
    <div
      data-error={error}
      className="group h-12 flex items-center gap-2 bg-gray-800 focus-within:text-gray-100 border border-gray-600 focus-within:border-gray-100 data-[error=true]:border-danger px-4 rounded-xl"
      {...props}
    />
  );
}

interface InputIconProps extends ComponentProps<"span"> {}

export function InputIcon(props: InputIconProps) {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  );
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField(props: InputFieldProps) {
  return (
    <input
      className="flex-1 text-base placeholder:text-gray-400 outline-0"
      {...props}
    />
  );
}
