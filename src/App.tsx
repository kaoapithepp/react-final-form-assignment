import React from "react";
import { Form, Field } from "react-final-form";

// Components
import { InputField } from "./components/InputField";
import { Dropdown } from "./components/Dropdown";
import { InputRadio } from "./components/InputRadio";
import { MultiDropdown } from "./components/MultiDropdown";

// Data
import DEPT_NAME from "./data/department";
import POSITION_NAME from "./data/position";
import COLORS from "./data/colors";

// Validation
import { useFormValidation } from "./validations/formValidation";

const App: React.FC = () => {
  const { formValidation } = useFormValidation();

  function handleOnSubmit(values: any) {
    console.log(values);
  }

  return (
    <div className="p-4 flex items-center justify-center sm:items-start">
      <div className="c-container">
        <h1 className="text-amber-600">Sign Up</h1>
        <div className="mt-8">
          <Form
            initialValues={{
              department: "Choose one...",
            }}
            onSubmit={handleOnSubmit}
            validate={formValidation}
            render={({ handleSubmit, submitting, pristine }) => {
              return (
                <div className="w-full">
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="grid grid-cols-2 gap-4">
                      <Field
                        name="firstname"
                        type="text"
                        id="firstname"
                        label="First Name"
                        placeholder="Your first name"
                      >
                        {({ input, label, placeholder, meta }) => {
                          return (
                            <>
                              <InputField
                                input={input}
                                meta={meta}
                                placeholder={placeholder}
                                label={label}
                              />
                            </>
                          );
                        }}
                      </Field>
                      <Field
                        name="lastname"
                        type="text"
                        id="lastname"
                        label="Last Name"
                        placeholder="Your last name"
                      >
                        {({ input, label, placeholder, meta }) => {
                          return (
                            <>
                              <InputField
                                input={input}
                                meta={meta}
                                placeholder={placeholder}
                                label={label}
                              />
                            </>
                          );
                        }}
                      </Field>
                    </div>
                    <Field
                      name="company"
                      type="text"
                      id="company"
                      label="Company"
                      placeholder="ex. ABC Co., Ltd."
                    >
                      {({ input, label, placeholder, meta }) => {
                        return (
                          <>
                            <InputField
                              input={input}
                              meta={meta}
                              placeholder={placeholder}
                              label={label}
                            />
                          </>
                        );
                      }}
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                      <Field
                        name="email"
                        type="text"
                        id="email"
                        label="Email"
                        placeholder="ex. you@abc.com"
                      >
                        {({ input, label, placeholder, meta }) => {
                          return (
                            <>
                              <InputField
                                input={input}
                                meta={meta}
                                placeholder={placeholder}
                                label={label}
                              />
                            </>
                          );
                        }}
                      </Field>
                      <Field
                        name="phonenumber"
                        type="text"
                        id="phonenumber"
                        label="Phone Number"
                        placeholder="ex. 0123456789"
                      >
                        {({ input, label, placeholder, meta }) => {
                          return (
                            <>
                              <InputField
                                input={input}
                                meta={meta}
                                placeholder={placeholder}
                                label={label}
                                maxChar={10}
                              />
                            </>
                          );
                        }}
                      </Field>
                    </div>
                    <Field name="department" id="department" label="Department">
                      {({ input, label, placeholder, meta }) => {
                        return (
                          <>
                            <Dropdown
                              input={input}
                              label={label}
                              data={DEPT_NAME}
                            />
                          </>
                        );
                      }}
                    </Field>
                    <Field
                      name="position"
                      id="position"
                      label="Position"
                      type="radio"
                    >
                      {({ input, label, placeholder, meta }) => {
                        return (
                          <InputRadio
                            input={input}
                            label={label}
                            meta={meta}
                            data={POSITION_NAME}
                          />
                        );
                      }}
                    </Field>
                    <Field name="colors" id="colors" label="Favorite Color">
                      {({ input, label, placeholder, meta }) => {
                        return (
                          <>
                            <MultiDropdown
                              input={input}
                              label={label}
                              data={COLORS}
                            />
                          </>
                        );
                      }}
                    </Field>
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

export default App;
