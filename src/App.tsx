import React from "react";
import { Form, Field } from "react-final-form";

// Components
import { InputField } from "./components/InputField";
import { Dropdown } from "./components/Dropdown";

// Data
import DEPT_NAME from './data/department';

const App = () => {

  function handleOnSubmit(values: any) {
    console.log(values);
  }

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="container">
        <h1>Sign Up</h1>
        <div className="mt-8">
          <Form
            initialValues={{
              department: "Choose one..."
            }}
            onSubmit={handleOnSubmit}
            render={({ handleSubmit, submitting, pristine }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div className="w-full box-border">
                    <div className="grid grid-cols-2 gap-4">
                      <Field
                        name="firstname"
                        type="text"
                        id="firstname"
                        label="First Name"
                        placeholder="Your first name"
                      >
                        { props => {
                          return (
                            <InputField {...props} />
                          )
                        }}
                      </Field>
                      <Field
                        name="lastname"
                        type="text"
                        id="lastname"
                        label="Last Name"
                        placeholder="Your last name"
                      >
                        { props => {
                          return (
                            <InputField {...props} />
                          )
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
                      { props => {
                        return (
                          <InputField {...props} />
                        )
                      }}
                    </Field>
                    <div className="grid grid-cols-2 gap-4">
                      <Field
                        name="email"
                        type="email"
                        id="email"
                        label="Email"
                        placeholder="ex. you@abc.com"
                      >
                        { props => {
                          return (
                            <InputField {...props} />
                          )
                        }}
                      </Field>
                      <Field
                        name="phone"
                        type="text"
                        id="phone"
                        label="Phone Number"
                        placeholder="ex. 0x-xxx-xxxx"
                      >
                        { props => {
                          return (
                            <InputField {...props} />
                          )
                        }}
                      </Field>
                    </div>
                    <Field
                        name="department"
                        id="department"
                        label="Department"
                      >
                        { props => {
                          return (
                            <Dropdown {...props} data={DEPT_NAME} />
                          )
                        }}
                      </Field>
                  </div>
                  <button type="submit" className="btn" disabled={submitting || pristine}>
                    Sign up!
                  </button>
                </form>
              );
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
