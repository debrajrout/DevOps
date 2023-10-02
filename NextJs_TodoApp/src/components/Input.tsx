import React, { Fragment, forwardRef } from "react";

interface InputProps {
  inputId: string;
  labelFor: string;
  labelText: string;
  labelClass: string;
  inputClass: string;
}

const InputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ inputId, labelFor, labelText, labelClass, inputClass }, ref) => {
  return (
    <Fragment>
      <label htmlFor={labelFor} className={labelClass}>
        {labelText}
      </label>
      <input
        type="text"
        id={inputId}
        ref={ref}
        className={`block mb-2 ${inputClass}`}
      />
    </Fragment>
  );
};

const Input = forwardRef(InputComponent);

export default Input;
