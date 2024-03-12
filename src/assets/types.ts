export type TCompany = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export type TUser = {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: TCompany;
  address: any;
};

export type TEventHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
