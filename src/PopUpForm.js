import React from 'react';
import {Form, reduxForm } from 'redux-form';

// import Validate from './Validate';
import FormBody from './FormBody';



// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
   
//       <input {...input} placeholder={label} type={type} />
//       {touched && error && <span>{error}</span>}
   
//   </div>
// );
const submit = values =>{
  alert(JSON.stringify(values));
};
const PopUpForm = ({ handleSubmit }) => (
    <>
  <Form onSubmit={handleSubmit(submit)}>
    <FormBody/>
   
  </Form>
   
  </>
);
const Validate = values => {
  
  const requiredFields = ['name', 'email', 'phoneNumber', 'gender', 'bloodGroup', 'city', 'state', 'pinCode', 'queryTopic'];
const errors = {};

requiredFields.forEach(field => {
  if (!values[field]) {
    errors[field] = 'Required Field';
  }
});

  return errors;
};

export default reduxForm({
  form: 'PopUpForm',
  validate: Validate,
 
})(PopUpForm);
