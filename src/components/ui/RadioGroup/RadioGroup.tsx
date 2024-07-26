"use client";

import React, { ReactNode } from "react";
import {
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
} from "react-aria-components";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string;
}

const RadioGroup = (props: RadioGroupProps) => {
  return (
    <AriaRadioGroup
      onChange={props.onChange}
      className={"group flex flex-col gap-2"}
      {...props}
    >
      <div>{props.label}</div>

      <div className="flex group-orientation-vertical:flex-col gap-2 group-orientation-horizontal:gap-4">
        {props.children}
      </div>
      {props.description && <div>{props.description}</div>}
      <div>{props.errorMessage || ""}</div>
    </AriaRadioGroup>
  );
};

export { RadioGroup };
