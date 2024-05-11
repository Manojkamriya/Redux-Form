import React from 'react';
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
  export default TextField