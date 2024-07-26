"use client";

import { ReactNode } from "react";

import { Radio as AriaRadio, RadioProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const focusRing = tv({
  base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

const styles = tv({
  extend: focusRing,
  base: "w-5 h-5 rounded-full border-2 bg-white dark:bg-zinc-900 transition-all",
  variants: {
    isSelected: {
      false:
        "border-gray-400 dark:border-zinc-400 group-pressed:border-gray-500 dark:group-pressed:border-zinc-300",
      true: "border-[7px] border-gray-700 dark:border-slate-300 forced-colors:!border-[Highlight] group-pressed:border-gray-800 dark:group-pressed:border-slate-200",
    },
    isInvalid: {
      true: "border-red-700 dark:border-red-600 group-pressed:border-red-800 dark:group-pressed:border-red-700 forced-colors:!border-[Mark]",
    },
    isDisabled: {
      true: "border-gray-200 dark:border-zinc-700 forced-colors:!border-[GrayText]",
    },
  },
});

const Radio = (
  props: { children: ReactNode } & Omit<RadioProps, "children">
) => {
  console.log("rrrr", props);
  return (
    <AriaRadio
      {...props}
      className="flex gap-2 items-center group text-gray-800 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 forced-colors:disabled:text-[GrayText] text-sm transition"
    >
      {({ isSelected, isInvalid, isDisabled, isFocusVisible }) => (
        <>
          <div
            className={styles({
              isSelected,
              isInvalid,
              isDisabled,
              isFocusVisible,
            })}
          />
          {props.children}
        </>
      )}
    </AriaRadio>
  );
};

export { Radio };
