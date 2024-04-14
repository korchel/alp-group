import React, { DetailedHTMLProps, type ChangeEvent } from "react";

export interface IFieldProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string;
  name: string;
  error: string | undefined;
  touched: boolean | undefined;
  value: string;
  onChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1,
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<T_1>) => void;
  };
}
