import { cva, cx } from "class-variance-authority";
import { ReactNode } from "react";

import { Radio as AriaRadio, RadioProps } from "react-aria-components";

const focusRing = cva("outline outline-blue-600 dark:outline-blue-500", {
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

const styles = cva(
  "w-6 h-6 rounded-full border-2 bg-white dark:bg-zinc-900 transition-all relative",
  {
    variants: {
      isSelected: {
        false: "border-gray-400 group-pressed:border-gray-500",
        true: "border-[3px] border-blue-500 group-pressed:border-yellow-800",
      },
      isInvalid: {
        true: "border-red-700 group-pressed:border-red-800",
      },
      isDisabled: {
        true: "border-gray-200",
      },
    },
  }
);

const selectedCircle = cva(
  "absolute inset-0 flex items-center justify-center",
  {
    variants: {
      isSelected: {
        true: "after:w-3 after:h-3 after:rounded-full after:bg-blue-500",
      },
    },
  }
);

const Radio = (
  props: { children: ReactNode } & Omit<RadioProps, "children">
) => {
  return (
    <AriaRadio
      {...props}
      className="flex gap-2 items-center group text-gray-800 disabled:text-gray-300 text-sm transition"
    >
      {({ isSelected, isInvalid, isDisabled, isFocusVisible }) => (
        <>
          <div
            className={cx(
              styles({
                isSelected,
                isInvalid,
                isDisabled,
              }),
              focusRing({ isFocusVisible })
            )}
          >
            <div className={selectedCircle({ isSelected })} />
          </div>
          {props.children}
        </>
      )}
    </AriaRadio>
  );
};

export { Radio };
