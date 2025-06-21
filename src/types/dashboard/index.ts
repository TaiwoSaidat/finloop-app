import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

// export type CustomerItem = {
//     id: number;
//     title: string;
//     path: string;
//     icon:IconType
// }
// Props for customer, business and settings
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
