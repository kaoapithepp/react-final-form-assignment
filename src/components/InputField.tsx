import React from "react";

// interfaces
import { InputProps } from "../interfaces/InputProps";

export const InputField: React.FC<InputProps> = ({ input, placeholder, label, meta, maxChar }) => {
    const { value, onChange, type, name } = input;
    
    return (
        <div className="my-2">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="input-field"
                    placeholder={placeholder}
                    maxLength={maxChar}
                />
                {meta.touched && meta.error && <p className="text-sm text-red-600 mt-1">{meta.error}</p>}
            </div>
        </div>
    );
}