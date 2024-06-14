import BackLayout from "@/src/layouts/backLayout";
import { Heading, Pressable, Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProfileContext } from "@/src/context/profile-context";
import { router } from "expo-router";
import HeaderList from "../../bases/HeaderList";

type tourListType = {
  id: number;
  title: string;
  departureDate: string;
  agencyName: string;
};

function TourItem(props: tourListType) {
  const { id, title, agencyName, departureDate } = props;
  return (
    <Pressable
      backgroundColor="#fff"
      shadow="3"
      padding="10px"
      borderRadius="10px"
      style={{ gap: 10 }}
      onPress={() =>
        router.push({
          pathname: "/tours/[id]",
          params: { id },
        })
      }
    >
      <Heading size="md" color="#3282B8">
        {title}
      </Heading>
      <View flexDirection="row-reverse" justifyContent="space-between">
        <Text fontSize="16px">{agencyName}</Text>
        <Text fontSize="16px">{departureDate}</Text>
      </View>
    </Pressable>
  );
}

export default function TourListScreen() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<tourListType[]>();
  const [loading, setLoading] = useState(false);

  const { token } = useProfileContext();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://travelorganization.monster/api/TourManagment/GetAllTourDetail`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((json) => {
        if (json.data.isSuccess) {
          setLoading(false);
          setData(json.data.data);
        }
      });
  }, []);

  return (
    <BackLayout title="لیست تورها" backgroundColor="#f5f5f5" isLoading={loading}>
      <View style={{ gap: 15 }}>
        <HeaderList
          search={search}
          setSearch={setSearch}
          submitSearch={() => console.log(search)}
          addHandler={() => router.push("/addTour/")}
        />
        {data?.map((item) => <TourItem key={item.id} {...item} />)}
      </View>
    </BackLayout>
  );
}
