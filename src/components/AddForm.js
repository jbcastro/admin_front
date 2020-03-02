import React, { useState } from "react";

import { Form, Text, TextArea, Checkbox, Select, Option } from "informed";
import DynamicArraysGrape from "./DynamicArraysGrape";
import DynamicArraysDesc from "./DynamicArrraysDesc";

const AddForm = props => {
  const handleSubmit = props.handleSubmit;
  const onCurItemClear = props.onCurItemClear;
  const onChange = props.onChange;

  return (
    <Form
      id="myForm"
      initialValues={{ grape: [""], description: [""] }}
      onSubmit={handleSubmit}
    >
      {({ formApi }) => (
        <div>
          <br></br>
          <p class="hidden">
            <label>
              id
              <Text value="" field="_id" disabled />
            </label>
          </p>
          <label>
            Name:
            <Text value="" field="name" onBlur={onChange} />
          </label>{" "}
          <label>
            Vinyard:
            <Text field="vinyard" onBlur={onChange} />
          </label>{" "}
          <label>
            Grapes:
            <Text field="grapes" onBlur={onChange} />
          </label>{" "}
          <label>
            Year:
            <Text field="year" type="number" onBlur={onChange} />
          </label>
          <br></br>
          <br></br>
          Individual Grapes
          <DynamicArraysGrape onBlur={onChange} />
          <br></br>
          Decriptions
          <DynamicArraysDesc onBlur={onChange} />
          <br></br>
          <label>
            Place:
            <Text field="place" onBlur={onChange} />
          </label>{" "}
          <label>
            Area:
            <Text field="area" onBlur={onChange} />
          </label>{" "}
          <label>
            Country:
            <Text field="country" onBlur={onChange} />
          </label>{" "}
          <label>
            Appellation:
            <Text field="appellation" onBlur={onChange} />
          </label>{" "}
          <label>
            Price:
            <Text field="price" type="number" onBlur={onChange} />
          </label>
          <br></br>
          <label>
            Mise:
            <Select field="mise" initialValue="ap" onBlur={onChange}>
              <Option value="ap">AP</Option>

              <Option value="burg"> BURG</Option>

              <Option value="bdx"> BDX</Option>

              <Option value="flute">Flute</Option>

              <Option value="dw">DW</Option>

              <Option value="krug">Krug Flute</Option>
            </Select>
          </label>
          <label>
            Color:
            <Select field="color" initialValue="red">
              <Option value="red">Red</Option>
              <Option value="white">White</Option>
              <Option value="dessert">Dessert</Option>
              <Option value="sparkling">Sparkling</Option>
            </Select>
          </label>
          <label>
            Status:
            <Select field="status" initialValue="added">
              <Option value="added">Added</Option>
              <Option value="none">None</Option>

              <Option value="removed">Removed</Option>
              <Option value="hidden">Hidden</Option>
            </Select>
          </label>
          <label>
            Coravin: <Checkbox field="coravin" />
          </label>
          <br></br>
          <br></br>
          <label>
            Fun Fact:
            <TextArea field="funfact" onBlur={onChange} />
          </label>
          <button type="submit">submit</button>
          <button
            type="button"
            onClick={event => {
              formApi.reset();
              onCurItemClear();
            }}
          >
            Reset
          </button>
        </div>
      )}
    </Form>
  );
};

export default AddForm;
