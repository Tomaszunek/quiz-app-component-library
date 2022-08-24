import * as React from "react";
declare type ButtonStyle = {
    [property: string]: string;
};
export interface ButtonProps {
    label: string;
    style: ButtonStyle;
    onClick: () => void;
    woda: "cipa" | "angle";
}
export declare const Button: React.FunctionComponent<ButtonProps>;
export {};
