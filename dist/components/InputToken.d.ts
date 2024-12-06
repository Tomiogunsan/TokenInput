import React from "react";
import "tslib";
export type IDataTestId = {
    "data-test-id": string;
};
export type IInputProps = {
    name?: string;
    length: number;
    id?: string;
    className?: string;
    onChange?: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    isError?: boolean;
    errorClassName?: string;
} & IDataTestId;
declare const InputToken: (props: IInputProps) => React.JSX.Element;
export default InputToken;
