import React from 'react'
const SelectField = ({ input, label, meta: { touched, error }, children }) => (
    <div>
      <label>{label}</label>
  
        <select {...input}>
          {children}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
  );

export default SelectField
