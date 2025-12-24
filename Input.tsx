import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
export function Input({
  label,
  error,
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || props.name;
  return <div className="w-full">
      {label && <label htmlFor={inputId} className="block text-sm font-medium text-[#2C2C2C] mb-1.5">
          {label}
        </label>}
      <input id={inputId} className={`
          flex h-12 w-full rounded-none border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 
          focus:outline-none focus:border-[#C9A961] focus:ring-1 focus:ring-[#C9A961]
          disabled:cursor-not-allowed disabled:opacity-50
          transition-colors duration-200
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `} {...props} />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>;
}