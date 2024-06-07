import { userDetailsType } from "@/app/userDetails/[email]";

export const userData: { id: number; key: keyof userDetailsType; value: string }[] = [
  { id: 1, key: "userName", value: "نام کاربری" },
  { id: 2, key: "name", value: "نام" },
  { id: 3, key: "family", value: "نام خانوادگی" },
  { id: 4, key: "nationalId", value: "کد ملی" },
  { id: 5, key: "phoneNo", value: "شماره تلفن" },
  { id: 6, key: "email", value: "ایمیل" },
  { id: 7, key: "birthDate", value: "تاریخ تولد" },
];
