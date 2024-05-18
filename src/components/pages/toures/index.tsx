import BackLayout from "@/src/layouts/backLayout";
import { Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import TourCard from "../../bases/tourCard";
import axios from "axios";
import { TourType } from "./type";

export default function Toures() {
  const [data, setData] = useState<TourType[]>();
  useEffect(() => {
    axios
      .get("https://travelorganization.monster/api/Common/Landing/GetAllTours")
      .then((json) => setData(json.data.data));
  }, [data]);
  return (
    <BackLayout title="تورهای گردشگری" backgroundColor="#f5f5f5">
      <View mb="50px" px="5px" style={{ gap: 20 }}>
        {data ? (
          data.map((tour) => (
            <TourCard
              key={tour.id}
              title={tour.title}
              details={tour.services}
              price={tour.price}
            />
          ))
        ) : (
          <Text>loading...</Text>
        )}
      </View>
    </BackLayout>
  );
}
