import useViewModel from "./viewModel";

type InputFieldProps = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  maxChar?: number;
};

export const InputField = ({ name, label, type, placeholder, maxChar }: InputFieldProps) => {
  
  const { meta, value, onChange } = useViewModel(name, type);

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
          placeholder={placeholder}
          maxLength={maxChar}
          className="text-input"
          required={meta.touched && meta.error}
        />
        {meta.touched && meta.error && (
          <p className="text-sm text-red-600 mt-1">{meta.error}</p>
        )}
      </div>
    </div>
  );
};
