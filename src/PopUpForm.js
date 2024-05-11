import React from 'react';
import { Field,Form, reduxForm } from 'redux-form';
import TextField from './TextField';
import TextAreaField from './TextAreaField';
import SelectField from './SelectField';
import RadioGroup from './RadioGroup';
import Validate from './Validate';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
const queryTopic = ['Internship','Volunteership', 'Collabration','Partnership','Donations','SDG-17', 'Issues'];
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' }
];

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
const PopUpForm = ({ handleSubmit, reset,submitting }) => (
    
  <Form onSubmit={handleSubmit(submit)}>
    <div>
        <label>First Name</label>
      <Field name="name" component={TextField} type="text" placeholder='Enter your name'/>
    </div>
    <div>
    <label>Email</label>
      <Field name="email" component={TextField} type="email" placeholder='Enter your email'/>
    </div>
    <div>
    <label>Phone Number</label>
      <Field name="phoneNumber" component={TextField} type="number"  placeholder='Enter your phone number'/>
    </div>
    <div>
    <label>Gender</label>
    <Field name="gender" component={RadioGroup}  options={genderOptions} />

    </div>
    <div className='form-field'>
    <label>Blood Group</label>
      <Field name="bloodGroup" component={SelectField}>
 {bloodGroups.map(group => (
          <option key={group} value={group}>{group}</option>
        ))}
      </Field>
    </div>
    <div>
    <label>Address</label>
      <Field name="address" component={TextField} type="text" placeholder='Enter your address' />
    </div>
    <div>
    <label>City</label>
      <Field name="city" component={TextField} type="text" placeholder='City name'/>
    </div>
    <div>
    <label>State</label>
      <Field name="state" component={TextField} type="text" placeholder='State name'/>
    </div>
    <div>
    <label>PIN Code</label>
      <Field name="pinCode" component={TextField} type="number" placeholder='Enter your PIN Code'/>
    </div>
    <div className='form-field'>
    <label >Query</label>
      <Field name="queryTopic" component={SelectField}>

       
        {queryTopic.map(group => (
          <option key={group} value={group}>{group}</option>
        ))}
      </Field>
    </div>
    <div className='form-field'>
    <label >Message</label>
    <Field name="message"  component={TextAreaField} type='text' placeholder='Enter your Message'/>
    </div>
    <div>
      <button type="submit" disabled={submitting}>Submit</button>
   
      <button type="button" disabled={submitting} onClick={reset}>Reset</button>
    </div>
  </Form>
    
);

<Validate/>

export default reduxForm({
  form: 'PopUpForm',
  validate: Validate,
  destroyOnUnmount: false
})(PopUpForm);
