import React from 'react'

const RadioGroup = ({ input, label, options, meta: { touched, error } }) => (
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

export default RadioGroup
