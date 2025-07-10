import * as FaIcons from 'react-icons/fa'
import { HiUser, HiUsers } from "react-icons/hi2";
import { FaRegHandshake, FaUsers } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import users from "@/assets/users1.png";
// import a from '@/assets/'
import loans from "@/assets/usersLoan.png";
import savings from "@/assets/userSavings.png";
import active from "@/assets/activeUsers1.png";
// import { CustomerItem } from "@/types/dashboard";
// import { FaRegHandshake } from "react-icons/fa6";

export const CUSTOMERS = [
  {
    id: 1,
    title: "Users",
    path: "/dashboard/users",
    icon: HiUsers,

  },
  {
    id: 2,
    title: "Guarantors",
    path: "/",
    icon: FaUsers,
  },
  {
    id: 3,
    title: "Loans",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 4,
    title: "Decisions Models",
    path: "/",
    icon: FaRegHandshake,
  },
  {
    id: 5,
    title: "Savings",
    path: "/",
    icon: FaRegHandshake,
  },
  {
    id: 6,
    title: "Loan Requests",
    path: "/",
    icon: GiReceiveMoney,
  },
  {
    id: 7,
    title: "White Lists",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 8,
    title: "Karma",
    path: "/",
    icon: HiUsers,
  },
];

export const BUSINESSES = [
  {
    id: 1,
    title: "Organization",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 2,
    title: "Loan Products",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 3,
    title: "Savings Products",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 4,
    title: "Fees and Charges",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 5,
    title: "Transactions",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 6,
    title: "Services",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 7,
    title: "Service Account",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 8,
    title: "Settlements",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 9,
    title: "Reports",
    path: "/",
    icon: HiUsers,
  },
];

export const SETTINGS = [
  {
    id: 1,
    title: "Preferences",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 2,
    title: "Fees and Pricing",
    path: "/",
    icon: HiUsers,
  },
  {
    id: 3,
    title: "Audit Logs",
    path: "/",
    icon: HiUsers,
  },
];

export const USERS = [
  {
    icon: users,
    title: "Users",
    description: '2,453',
  },
  {
    icon: active,
    title: "Active Users",
    description: '2,453',
  },
  {
    icon: loans,
    title: "Users with Loans",
    description: '12,453',
  },
  {
    icon: savings,
    title: "Users with Savings",
    description: '102,453',
  },
];

export const ORGANIZATION = [
  {
    organization: "Lendsqr",
    username: "Adedeji",
    email: "adedeji.lendsqr.com",
    phoneNumber: "0807890371",
    dateJoined: "2020-05-15",
    timeJoined: "10:00 am",
    status: "Inactive",
  },
  {
    organization: "Irorun",
    username: "Debby Ogana",
    email: "debby@irorun.com",
    phoneNumber: "08160780928",
    dateJoined: "2020-01-01",
    timeJoined: "10:00 am",
    status: "Pending",
  },
  {
    organization: "Lendstar",
    username: "Grace EFfiorn",
    email: "grace@lendstar.com",
    phoneNumber: "+2348090000000",
    dateJoined: "2020-01-01",
    timeJoined: "10:00 am",
    status: "Blacklisted",
  },
  {
    organization: "Lendsqr",
    username: "Tosin Dokunmu",
    email: "tosin@lendsqr.com",
    phoneNumber: "+2348090000000",
    dateJoined: "2020-01-01",
    timeJoined: "10:00 am",
    status: "Active",
  },
];

