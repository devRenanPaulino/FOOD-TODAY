import { type ReactNode } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secundary';
  icon?: ReactNode;
  children: ReactNode;
}

const Button = ({variant = 'primary', className, icon, children, ...props}: ButtonProps) => {

  const baseStyle = 'px-4 py-2 flex gap-4 items-center justify-center w-full font-bold text-white rounded-[15px] transition-all duration-200 active:scale-95 disabled:opacity-50';
  
  const variants = {
    primary: "bg-primaria hover:brightness-110",
    secondary: "bg-texto hover:bg-slate-700",
  };

  return (
    <button
    className={`${baseStyle} ${variants[variant]} ${className}`}
    {...props}
    >
      {icon && <span className="w-6 h-6">{icon}</span>}
      {children}
    </button>
  )
}

export default Button