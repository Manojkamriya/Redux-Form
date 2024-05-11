import React from 'react'

const Validate = values => {
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
export default Validate
