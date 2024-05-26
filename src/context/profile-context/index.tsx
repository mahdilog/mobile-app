import { ReactNode, createContext, useContext, useState } from "react";

type userDataType = {
  userName: string;
  name: string;
  lastName: string;
  nationalID: string;
  phoneNo: string;
  birthDate: string;
  email: string;
  role: "Customer" | "Admin";
  myTravels: any;
};

type ProfileContextType = {
  userDetails: userDataType;
  setUserDetails: React.Dispatch<React.SetStateAction<userDataType>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

const ProfileContext = createContext({} as ProfileContextType);

export function useProfileContext() {
  return useContext(ProfileContext);
}

export default function ProfileProvider({ children }: { children: ReactNode }) {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    name: "",
    lastName: "",
    nationalID: "",
    phoneNo: "",
    birthDate: "",
    email: "",
    myTravels: "",
    role: "Customer",
  } as userDataType);
  const [token, setToken] = useState("");
  return (
    <ProfileContext.Provider
      value={{ userDetails, setUserDetails, token, setToken }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
