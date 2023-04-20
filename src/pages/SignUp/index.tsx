import { FC } from "react";
import { Form, Field } from "react-final-form";

// Components
import { InputField } from "../../components/Field";
import { Dropdown } from "../../components/Dropdown";
import { InputRadio } from "../../components/Radio";
import { MultiDropdown } from "../../components/MultiDropdown";

// Data
import DEPT_NAME from "../../data/department";
import POSITION_NAME from "../../data/position";
import COLORS from "../../data/colors";

// ViewModel
import useViewModel from "./viewModel";


const SignUp: FC = () => {
  
  const { validation, handleOnSubmit } = useViewModel();

  return (
    <div className="p-4 flex h-full items-start justify-center bg-fixed sm:bg-cover sm:items-center md:h-screen">
      <div className="c-container">
        <h1 className="text-amber-600">Sign Up</h1>
        <div className="mt-8">
          <Form
            initialValues={{
              department: "Choose one...",
              colors: [],
            }}
            onSubmit={handleOnSubmit}
            validate={validation}
            render={({ handleSubmit, submitting, pristine }) => {
              return (
                <div className="w-full">
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="grid grid-cols-2 gap-4">
                      <InputField
                        type="text"
                        name="firstname"
                        label="First name"
                        placeholder="Your first name"
                      />
                      <InputField
                        type="text"
                        name="lastname"
                        label="Last name"
                        placeholder="Your last name"
                      />
                    </div>
                    <InputField
                      type="text"
                      name="company"
                      label="Company"
                      placeholder="ex. ABC Co.,Ltd."
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <InputField
                        type="text"
                        name="email"
                        label="Email"
                        placeholder="ex. you@abc.com"
                      />
                      <InputField
                        type="text"
                        name="phonenumber"
                        label="Phone number"
                        placeholder="ex. 0123456789"
                        maxChar={10}
                      />
                    </div>
                    <Dropdown
                      name="department"
                      label="Department"
                      data={DEPT_NAME}
                    />
                    <InputRadio
                      name="position"
                      label="Position"
                      data={POSITION_NAME}
                    />
                    <MultiDropdown
                      name="colors"
                      label="Favorite Colors"
                      data={COLORS}
                    />
                    <button
                      type="submit"
                      className="btn"
                      disabled={submitting || pristine}
                    >
                      Sign up!
                    </button>
                  </form>
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;