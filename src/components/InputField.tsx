import React from "react";


export const InputField: React.FC<any> = (props) => {
    const { id, label, input, placeholder }: any = props;
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
                    id={id}
                    value={value}
                    onChange={onChange}
                    className="input-field"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}