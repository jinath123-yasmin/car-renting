import react,{useState} from 'react';
import {Form,Button,Row,Col, Container} from 'react-bootstrap';
import {useFormik} from 'formik';
import * as Yup from 'yup'


const initialValues={
  location: '',
  destination: '',
  type: ''
}

const onSubmit= values =>{
  console.log('form data',values)
      }


 const validationSchema= Yup.object({
   location: Yup.string().required('Required!'),
   destination: Yup.string().required('Required!'),
   type: Yup.string().required('Required!')
 })


const RentalForm = () => {

const [traveller,setTraveller]=useState("")

const onChangeHandler=(event)=>{
  if(event.target.value <4 && event.target.value <6  ){
    setTraveller(event.target.value)
  }else{
    setTraveller('greater the 6 member not allowed')
  }

  if(event.target.value <4){
    setTraveller(event.target.value)
  }else{
    setTraveller('greater the 4 member not allowed')
  }
  
}

 

  

   const formik = useFormik({
     initialValues,
     onSubmit,
    validationSchema
   })

  return (
     <div className="main">
<Form onSubmit={formik.handleSubmit}>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Source Location*</Form.Label>
      <Form.Control type="location" name="location" 
     onChange={formik.handleChange} 
     onBlur={formik.handleBlur}
     value={formik.values.location} />
     {formik.errors.location ? <div className='error'>{formik
    .errors
    .location}</div> : null }
    </Form.Group>
    

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Destination*</Form.Label>
      <Form.Control type="destination" name="destination"
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       value={formik.values.destination}   />
       {formik.errors.destination ? <div className='error'>{formik
    .errors
    .destination}</div> : null }
    </Form.Group>
    
  </Row>

    <Form.Group  controlId="formGridState">
      <Form.Label>Enter Car type*</Form.Label>
      <Form.Select defaultValue="Car Type" name="type"
       onChange={formik.handleChange} 
       onBlur={formik.handleBlur}
       value={formik.values.type} >
         <option>Car Type</option>
        <option>HatchBack</option>
        <option>Sedan</option>
        <option>SUV</option>
      </Form.Select>
    </Form.Group>
    {formik.errors.type ? <div className='error'>{formik
    .errors
    .type}</div> : null }
 
    <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Number of Travellers</Form.Label>
    <Form.Control   
    onChange={onChangeHandler} value={formik.values.type === "SUV" ? traveller 
    : formik.values.type === "HatchBack" ? traveller : null}/>
    
  </Form.Group>

  <Button variant="primary" type="submit">
    Enter Bid Details
  </Button>
 
</Form>

    </div>
  )
}

export default RentalForm
