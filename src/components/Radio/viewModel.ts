import { useField } from "react-final-form";

const useViewModel = (name: string, type: string) => {
  const { input, meta } = useField(name, { type: type });
  const { value, onChange } = input;

  return {
    value,
    onChange,
    type,
  }
};

export default useViewModel;