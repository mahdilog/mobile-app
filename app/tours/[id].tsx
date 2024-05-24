import TourDetailsScreen from "@/src/components/pages/TourDetailsScreen";
import BackLayout from "@/src/layouts/backLayout";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "native-base";
import React, { useEffect, useState } from "react";

export default function TourDetails() {
  const { id } = useLocalSearchParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://travelorganization.monster/api/Common/Landing/GetToursDetail?tourid=${id}`)
      .then((json) => {
        setData(json.data.data);
        console.log(json.data.data);
      });
  }, []);
  return (
    <BackLayout title="اطلاعات تور" backgroundColor="#f5f5f5">
      {data ? <TourDetailsScreen data={data} /> : <Text>loading...</Text>}
    </BackLayout>
  );
}
