import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const InputComponent = ({
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder,
  label,
  required = false,
  className = '',
  labelClassName = '',
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';

  return (
    <div className="flex flex-col gap-2 relative">
      {/* {label && (
        <label htmlFor={id} className={`text-sm font-medium text-gray-700 ${labelClassName}`}>
          {label}
        </label>
      )} */}
      <input
        type={isPassword && showPassword ? 'text' : type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 input-focus-effect ${className}`}
      />
      {isPassword && (
        <span
          className="absolute right-4 top-[20%] translate-y-1 cursor-pointer text-gray-400 hover:text-gray-600"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
        </span>
      )}
    </div>
  );
};

export default InputComponent;
