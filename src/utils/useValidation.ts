import { setIn } from "final-form";
import * as yup from "yup";

// To be passed to React Final Form
const validateUtils =
  (schema: yup.Schema<any> | (() => yup.Schema<any>)) =>
  async (values: any) => {
    if (typeof schema === "function") {
      schema = schema();
    }
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err: any) {
      const errors = err.inner.reduce((formError: any, innerError: any) => {
        return setIn(formError, innerError.path, innerError.message);
      }, {});

      return errors;
    }
  };

const useValidation = (validationSchema: any) => {
  const validation = validateUtils(validationSchema);

  return {
    validation,
  };
};

export default useValidation;
