import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone";

const initialValues = {
  details: "",
  phoneNo: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  phoneNo: Yup.string().phone().required("Required!"),
});

const BidDetails = () => {
  const [otp, setOtp] = useState("");

  const onChangeHandler = (event) => {
    const output = event.target.value;
    if (output === 1234) {
      setOtp();
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("Form Values", formik.values);
  return (
    <div className="main">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Journey Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="details"
            onChange={formik.handleChange}
            value={formik.values.details}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter your 10 digit Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNo"
            onChange={formik.handleChange}
            value={formik.values.phoneNo}
          />
          {formik.errors.phoneNo ? (
            <div className="error">{formik.errors.phoneNo}</div>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter OTP</Form.Label>
          <Form.Control type="text" maxlength="4" onChange={onChangeHandler} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BidDetails;
