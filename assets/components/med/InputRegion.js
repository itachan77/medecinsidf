import React, { useEffect, useState, useRef } from "react";
import Select, { components } from "react-select";
import { countryOptions } from "./options";

import "./autofill.css";

const Input = (props) => {
  const { autoComplete, onAutoFill } = props.selectProps;

  const onAnimationStart = !onAutoFill
    ? undefined
    : (e) => {
        const animationNames = ["onAutoFillStart", "onAutoFillCancel"];
        if (e.animationName === "onAutoFillStart") {
          //this.setAutofill();
        } else {
          //this.clearAutofill();
          //this.clearAutofilled();
        }
        animationNames.includes(e.animationName) && onAutoFill(e);
      };

  return (
    <components.Input
      {...props}
      onAnimationStart={onAnimationStart}
      autoComplete={autoComplete || props.autoComplete}
    />
  );
};

const InputRegion = (props) => {
  const options = useRef(countryOptions).current;

  // Expose a hook for JavaScript when autofill is shown
  // JavaScript can capture 'animationstart' events
  // @see https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7

  //        // Expose a hook for JS onAutoFillCancel
  // JavaScript can capture 'animationstart' events
  const onAutoFill = (e) => {
    if (e.animationName === "onAutoFillStart") {
      // do something
    }
    if (e.animationName === "onAutoFillCancel") {
      // do something
    }
  };

  const styles = {
    input: (css, state) => ({
      ...css,
      "input:-webkit-autofill": {
        animationName: "onAutoFillStart"
      },
      "input:not(:-webkit-autofill)": {
        animationName: "onAutoFillCancel"
      }
    })
  };

  return (
    <form autoComplete="on" method="POST">
      <label htmlFor="frmNameA">Choisissez une région</label>
      <Select
        styles={styles}
        placeholder="Choisissez une région"
        autoComplete="given-name"
        components={{ Input }}
        inputId="frmNameA"
        options={[{ label: "Eric Bonow", value: "eb" }]}
        onChange={onchange}
      />


      <button type={"submit"} />
    </form>
  );
};

export default InputRegion;