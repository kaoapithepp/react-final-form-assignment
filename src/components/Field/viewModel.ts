import { useField } from "react-final-form";

const useViewModel = (name: string, type: string) => {
  const { input, meta } = useField(name, { type: type });
  const { value, onChange } = input;

  return {
    meta,
    value,
    onChange,
  }
};

export default useViewModel;