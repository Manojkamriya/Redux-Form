import React from 'react';
import { Field,Form, reduxForm } from 'redux-form';

const TextField = (props) => {
    const { meta = {} } = props;
    const inputProps = {
      type: props.type || "text",
      className: props.className,
      name: props.input.name,
      id: props.input.id,
      readOnly: props.readOnly,
      autoFocus: props.autoFocus,
      autoComplete: props.autoComplete,
      placeholder: props.placeholder,
      maxLength: props.maxLength,
      value: meta.unconrolled ? undefined : props.input.value,
      onChange: props.input.onChange,
      onKeyUp: props.onKeyUp,
      onBlur: props.onBlur,
      step: props.step || "",
      min: props.min || "",
    };
  
    return (
      <>
        <input {...props} {...inputProps} />
        {meta.touched && meta.error ? (
          <div style={{ color: "red" }}>{meta.error}</div>
        ) : null}
      </>
    );
  };
  const textareaField = ({ input, label, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>

        <textarea {...input} placeholder={label} />
        {touched && error && <span>{error}</span>}
     
    </div>
  );
  
const selectField = ({ input, label, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>

      <select {...input}>
        {children}
      </select>
      {touched && error && <span>{error}</span>}
  </div>
);
const radioGroup = ({ input, label, options, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
     
        {options.map((option, index) => (
          <label key={index}>
            <input type="radio" {...input} value={option.value} checked={input.value === option.value} />
            {option.label}
          </label>
        ))}
        {touched && error && <span>{error}</span>}
      
    </div>
  );
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
    <Field name="gender" component={radioGroup}  options={genderOptions} />

    </div>
    <div className='form-field'>
    <label>Blood Group</label>
      <Field name="bloodGroup" component={selectField}>
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
      <Field name="queryTopic" component={selectField}>

       
        {queryTopic.map(group => (
          <option key={group} value={group}>{group}</option>
        ))}
      </Field>
    </div>
    <div className='form-field'>
    <label >Message</label>
    <Field name="message"  component={textareaField} type='text' placeholder='Enter your Message'/>
    </div>
    <div>
      <button type="submit" disabled={submitting}>Submit</button>
   
      <button type="button" disabled={submitting} onClick={reset}>Reset</button>
    </div>
  </Form>
    
);

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  }
  if (!values.gender) {
    errors.gender = 'Required';
  }
  if (!values.bloodGroup) {
    errors.bloodGroup = 'Required';
  }
  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.state) {
    errors.state = 'Required';
  }
  if (!values.pinCode) {
    errors.pinCode = 'Required';
  }
  if (!values.queryTopic) {
    errors.queryTopic = 'Required';
  }
  
  return errors;
};
export default reduxForm({
  form: 'PopUpForm',
  validate: validate,
  destroyOnUnmount: false
})(PopUpForm);
