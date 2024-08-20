import React from "react";
import "tslib";
export interface IInputProps {
    name?: string;
    length: number;
    id?: string;
    className?: string;
    onSubmit?: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const InputToken: (props: IInputProps) => React.JSX.Element;
export default InputToken;
