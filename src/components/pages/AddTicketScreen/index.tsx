import React from "react";
import { TextInput } from "../../bases/textInput";
import BackLayout from "@/src/layouts/backLayout";
import { Formik } from "formik";

export default function AddTicketScreen() {
  return (
    <BackLayout title="افزودن بلیط">
      <Formik
        initialValues={{ name: "" }}
        //   validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values, { resetForm }) => console.log("object")}
      >
        {({ handleSubmit, values, resetForm }) => (
          <TextInput label="name" name="name" value={values.name} />
        )}
      </Formik>
    </BackLayout>
  );
}
