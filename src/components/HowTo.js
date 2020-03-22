import React, { useState } from "react";
import { Form, Text, TextArea, Checkbox, Select, Option } from "informed";
import DynamicArraysGrape from "./DynamicArraysGrape";
import DynamicArraysDesc from "./DynamicArrraysDesc";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const HowTo = () => {
  const [instructions, showIntructions] = React.useState(false);
  const clickInstruction = () => {
    showIntructions(!instructions);
  };
  return (
    <div className="Howto">
      {instructions ? (
        <span>
          <Button
            type="button"
            variant="contained"
            color="primary"
            type="button"
            size="small"
            onClick={clickInstruction}
          >
            close
          </Button>
          <p></p>
          insert instructions here
        </span>
      ) : (
        <span>
          <Button
            type="button"
            variant="contained"
            color="primary"
            type="button"
            size="small"
            onClick={clickInstruction}
          >
            How to
          </Button>
        </span>
      )}
    </div>
  );
};
export default HowTo;
