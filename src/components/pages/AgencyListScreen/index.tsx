import { useProfileContext } from "@/src/context/profile-context";
import BackLayout from "@/src/layouts/backLayout";
import axios from "axios";
import { router } from "expo-router";
import { Heading, Image, Pressable, Text, View } from "native-base";
import React, { useEffect, useState } from "react";

type dataType = {
  id: number;
  agencyName: string;
};

function AgencyItem(props: dataType) {
  const { id, agencyName } = props;
  return (
    <Pressable
      flexDirection="row-reverse"
      backgroundColor="#fff"
      alignItems="center"
      paddingY="5px"
      paddingX="10px"
      borderRadius="10px"
      style={{ gap: 10 }}
      shadow="2"
      onPress={() => router.push({ pathname: "/agency/[id]", params: { id: id } })}
    >
      <View borderColor="#ddd" borderWidth="1px" borderRadius="50px" padding="5px">
        <Image
          source={require("@/src/assets/images/Iranair_logo.jpg")}
          alt="Agency Logo"
          height="40px"
          width="40px"
          borderRadius="50px"
        />
      </View>
      <Heading size="sm">{agencyName}</Heading>
    </Pressable>
  );
}

export default function AgencyListScreen() {
  const { token } = useProfileContext();
  const [data, setData] = useState<dataType[]>();

  useEffect(() => {
    console.log(token);
    (function () {
      axios
        .get("https://travelorganization.monster/api/Admin/AgencyManagment/GetAllAgencies", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((json) => {
          if (json.data.isSuccess) {
            setData(json.data.data);
          }
        })
        .catch((error) => console.log(error));
    })();
  }, []);

  return (
    <BackLayout title="لیست آژانس‌ها" backgroundColor="#f5f5f5">
      <View style={{ gap: 15 }}>
        {data?.map((item) => (
          <AgencyItem key={item.id} id={item.id} agencyName={item.agencyName} />
        ))}
      </View>
    </BackLayout>
  );
}
