import { TextField } from "@mui/material";
import { LogButton } from "./LogButton";
import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/RegisterSchema";

const onSubmit = (values, actions) => {
  actions.resetForm();
};

const LogForm = () => {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} className="gap-8 flex flex-col w-72 h-56">
      <TextField
        id="email"
        name="email"
        label="Email"
        required
        size="small"
        value={values.email}
        onChange={handleChange}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        required
        size="small"
        value={values.password}
        onChange={handleChange}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
      />
      <LogButton />
    </form>
  );
};

export default LogForm;
