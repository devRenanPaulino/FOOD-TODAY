import React, { forwardRef } from 'react'

type InputProps = React.ComponentProps<'input'> & {
    erro?: string | null;
    errorClassname?: string;
    label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>( 
    ({erro, errorClassname = 'text-primaria', label, ...inputProps}, ref) => {
  return (
    <div>
        <input
        {...inputProps}
        ref={ref}
        id={inputProps.name}
        className="w-full border-b-2 border-primaria outline-none focus:ring-0 focus:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(0,0,0,0.1)] focus:shadow-primaria/40 px-4 py-2"
        placeholder={label}
        />
        {erro && <p className={errorClassname}>{erro}</p>}
    </div>
  )
}
)

Input.displayName = "Input"
export default Input
