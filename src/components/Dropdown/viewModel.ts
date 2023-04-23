import { useField } from "react-final-form";

const useViewModel = (name: string) => {
  const { input, meta } = useField(name);
  const { value, onChange } = input;

  function handleChildClick(element: string) {
    onChange(element);
  }

  return {
    value,
    onChange,
    handleChildClick
  }
};

export default useViewModel;