import React from "react";
import { Form, Text, ArrayField, BasicText } from "informed";
const DynamicArraysDesc = () => {
  const validateLength = touched => {
    return !touched ? "must" : undefined;
  };

  return (
    <div>
      <ArrayField field="description" validate={validateLength}>
        {({ add, fields }) => (
          <>
            <button onClick={add} type="button" tabIndex="-1">
              Add Description
            </button>
            <br></br>
            {fields.map(({ field, key, remove }, i) => (
              <label htmlFor={i} key={key}>
                Description {i + 1}:
                <Text field={field} id={`description${i}`} />
                <button type="button" onClick={remove} tabIndex="-1">
                  Remove This Description
                </button>
              </label>
            ))}
          </>
        )}
      </ArrayField>
    </div>
  );
};
export default DynamicArraysDesc;
