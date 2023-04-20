import * as yup from "yup";
import useValidation from "../../utils/useValidation";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formValidationSchema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phonenumber: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Invalid phone number format")
    .max(10)
});

const useViewModel = () => {
  const { validation } = useValidation(formValidationSchema);

  function handleOnSubmit(values: any) {
    console.log(values);
  }

  return {
    validation,
    handleOnSubmit,
  }
}

export default useViewModel;