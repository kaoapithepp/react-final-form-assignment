import * as yup from "yup";

const useProfileFormSchema = () => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const profileFormValidationSchema = yup.object({
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
      .min(10, "Must has 10 characters")
      .max(10),
  });

  return {
    profileFormValidationSchema,
  };
};

export default useProfileFormSchema;
