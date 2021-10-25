import React, { useEffect, useState, useRef } from "react";
import Select, { components } from "react-select";
import { countryOptions } from "./options";

import "./autofill.css";


const Input = (props) => {

  state = {
    term: ''
}


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

      onChange = e => {
        this.setState({term: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault();
        //A compléter plus tard

        //on appelle specialTerm qui modifie le state term du composant Input
        this.props.onFormSubmit(this.state.term);
        this.props.specialTermProps(this.state.term)
    }


  return (
    <components.Input
      {...props}
      onAnimationStart={onAnimationStart}
      autoComplete={autoComplete || props.autoComplete}
    />
  );
};

const ExempleSelect = (props) => {
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
      <Select
        styles={styles}
        placeholder="Full name"
        autoComplete="given-name"
        components={{ Input }}
        inputId="frmNameA"
        options={
          countryOptions
        }
        value={this.state.term}
        onChange={this.onChange}

      />
    </form>
  );
};

export default ExempleSelect;