import { TUser, TEventHandler } from "./types";

export interface IButtonProps {
  onClick: TEventHandler;
}

export interface IUserInfoProps {
  user: TUser | null;
}
