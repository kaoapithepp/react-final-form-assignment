import { useField } from "react-final-form";
import { includes, without } from "lodash";

const useViewModel = (name: string) => {
  const { input, meta } = useField(name);
  const { value, onChange } = input;

  function handleChildClick<T>(name: T) {
    if (includes(value, name)) {
      onChange(without(value, name));
    } else {
      onChange([...value, name]);
    }
  }

  return {
    value,
    onChange,
    handleChildClick
  }
};

export default useViewModel;