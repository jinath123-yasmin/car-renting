import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LinkContainer } from "react-router-bootstrap";

const initialValues = {
  location: "",
  destination: "",
  type: "",
};

const onSubmit = (values) => {
  console.log("form data", values);
};

const validationSchema = Yup.object({
  location: Yup.string().required("Required!"),
  destination: Yup.string().required("Required!"),
  type: Yup.string().required("Required!"),
});

const RentalForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="main">
      <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Source Location*</Form.Label>
            <Form.Control
              type="location"
              name="location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.errors.location ? (
              <div className="error">{formik.errors.location}</div>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Destination*</Form.Label>
            <Form.Control
              type="destination"
              name="destination"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.destination}
            />
            {formik.errors.destination ? (
              <div className="error">{formik.errors.destination}</div>
            ) : null}
          </Form.Group>
        </Row>

        <Form.Group controlId="formGridState">
          <Form.Label>Enter Car type*</Form.Label>
          <Form.Select
            defaultValue="Car Type"
            name="type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.type}
          >
            <option>Car Type</option>
            <option>HatchBack</option>
            <option>Sedan</option>
            <option>SUV</option>
          </Form.Select>
        </Form.Group>
        {formik.errors.type ? (
          <div className="error">{formik.errors.type}</div>
        ) : null}

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Number of Travellers</Form.Label>
          <Form.Control />
        </Form.Group>

        <LinkContainer to="/bid">
          <Button variant="primary" type="submit">
            Enter Bid Details
          </Button>
        </LinkContainer>
      </Form>
    </div>
  );
};

export default RentalForm;
