import React from "react";
import { Field } from "react-final-form";
export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <Field
    name={String(props.name)}
    render={({ input }) => (
      <label className="title flex flex-col">
        {props.title}
        <input
          className="form-input mt-1 p-0 h-8 rounded border-gray-200 indent-3 focus:border-inherit focus:shadow-none focus:ring-gray-200"
          {...props}
          {...input}
        />
      </label>
    )}
  />
);
