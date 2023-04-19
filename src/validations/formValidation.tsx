import { setIn } from "final-form";
import * as yup from "yup";

export const useFormValidation = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formValidationSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phonenumber: yup.string().matches(phoneRegExp, "Invalid phone number format").max(10),
  });

  // To be passed to React Final Form
  const validateFormValues =
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

  const formValidation = validateFormValues(formValidationSchema);

  return {
    formValidation,
  };
};
