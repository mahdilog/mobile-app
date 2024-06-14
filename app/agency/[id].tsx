import AgencyDetailsSreen from "@/src/components/pages/AgencyDetailsSreen";
import { useProfileContext } from "@/src/context/profile-context";
import BackLayout from "@/src/layouts/backLayout";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "native-base";
import React, { useEffect, useState } from "react";

export type agencyDataType = {
  address: string;
  agencyName: string;
  email: string;
  managerName: string;
  phoneNo: string;
  phoneNo2: string;
  startDate: string;
};

export default function AgencyDetails() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<agencyDataType>();

  const { token } = useProfileContext();

  useEffect(() => {
    axios
      .get(
        `https://travelorganization.monster/api/Admin/AgencyManagment/GetAgencyDetails?id=${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((json) => {
        setData(json.data.data);
      });
  }, []);

  return (
    <BackLayout title="اطلاعات تور" backgroundColor="#f5f5f5">
      {data ? <AgencyDetailsSreen data={data} /> : <Text>loading...</Text>}
    </BackLayout>
  );
}
