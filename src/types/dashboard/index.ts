import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

// export type CustomerItem = {
//     id: number;
//     title: string;
//     path: string;
//     icon:IconType
// }
// Props for customer, business and settings sidebar items
export type CustomerProps = {
  id: number;
  title: string;
  path: string;
  icon: IconType;
};

export type UsersProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export interface IFormInput {
  email: string;
  password: string;
}
// is use
export type UsersProp = {
  createdAt: string;
  name: string;
  avatar: string | StaticImageData;
  email: string;
  organization: string;
  userName: string;
  phoneNumber: string;
  status: "pending" | "processing" | "success" | "failed";
  id: string;
  userId: string;
  bankName: string;
  bankAccount: string;
  accountName: string;
  loanAmount: string;
  currency: string;
  // address: string;
  // updatedAt: string;
};

// export type BusinessrProps = {
//   id?: number;
//   title?: string;
//   path?: string;
//   icon?: IconType;
// };

// export type SettingsProps = {
//   id?: number;
//   title?: string;
//   path?: string;
//   icon?: IconType;
// };
