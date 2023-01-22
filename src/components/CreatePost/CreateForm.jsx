import React from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { createPoSchema } from "../../schemas/CreatePostSchema";

const onSubmit = (values, actions) => {
  console.log(values);
  console.log(actions);
  actions.resetForm();
};
const CreateForm = () => {
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      userid: "",
      title: "",
      quesBody: "",
    },
    validationSchema: createPoSchema,
    onSubmit,
  });
  return (
    <form className="mt-8 mx-auto  bg-indigo-100 min-w-[80vw] md:min-w-[40vw] h-[80vh] px-20 md:py-10 py-4 shadow-md">
      <div className=" flex flex-col gap-8">
        <h1 className="text-2xl md:text-3xl font-boldish">New Question</h1>
        <TextField
          id="title"
          name="title"
          label="Title"
          required
          size="small"
          value={values.title}
          onChange={handleChange}
          error={touched.title && Boolean(errors.title)}
          helperText={touched.title && errors.title}
          variant="outlined"
          placeholder="Title"
        />
        <TextField
          maxRows={16}
          id="quesBody"
          name="quesBody"
          label="Question"
          required
          size="small"
          value={values.quesBody}
          onChange={handleChange}
          error={touched.quesBody && Boolean(errors.quesBody)}
          helperText={touched.quesBody && errors.quesBody}
          variant="outlined"
          multiline
          placeholder="Type your question..."
        />
      </div>
      <div className="mt-5 flex justify-end">
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          publish
        </Button>
      </div>
    </form>
  );
};

export default CreateForm;