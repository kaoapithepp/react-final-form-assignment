import { useField } from "react-final-form";

const useViewModel = (name: string) => {
  const { input, meta } = useField(name);
  const { value, onChange } = input;

  return {
    value,
    onChange,
  }
};

export default useViewModel;