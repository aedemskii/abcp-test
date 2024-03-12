import React from "react";
import { IButtonProps } from "../assets/interfaces";

export const Button: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      get random user
    </button>
  );
};
