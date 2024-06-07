import UserDetailsScreen from "@/src/components/pages/UserDetailsScreen";
import { useProfileContext } from "@/src/context/profile-context";
import BackLayout from "@/src/layouts/backLayout";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";

export type userDetailsType = {
  birthDate: string;
  email: string;
  family: string;
  name: string;
  nationalId: string;
  phoneNo: string;
  userName: string;
};

export default function UserDetails() {
  const { token } = useProfileContext();

  const { email } = useLocalSearchParams();
  const [data, setData] = useState<userDetailsType>({} as userDetailsType);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://travelorganization.monster/api/Admin/UserManagment/GetUserDetails?email=${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((json) => {
        setData(json.data.data);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <BackLayout title="اطلاعات کاربر" backgroundColor="#f5f5f5" isLoading={loading}>
      <UserDetailsScreen {...data} />
    </BackLayout>
  );
}
