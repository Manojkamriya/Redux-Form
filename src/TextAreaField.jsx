import React from 'react'

const TextAreaField = ({ input, label, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>

        <textarea {...input} placeholder={label} />
        {touched && error && <span>{error}</span>}
     
    </div>
  );
  export default TextAreaField