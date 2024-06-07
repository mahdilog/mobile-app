import { useProfileContext } from "@/src/context/profile-context";
import BackLayout from "@/src/layouts/backLayout";
import axios from "axios";
import { Text, View } from "native-base";
import React, { useEffect, useState } from "react";
import TicketScreenHeader from "../../bases/ticketScreenHeader";
import AdminTicketCard from "../../bases/AdminTicketCard";

export type DataTicketType = {
  agencyName: string;
  origin: string;
  destination: string;
  departureDate: string;
  departureTime: string;
};

export default function TicketsScreen() {
  const { token } = useProfileContext();
  const [data, setData] = useState<DataTicketType[]>([] as DataTicketType[]);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState("bus");
  const [search, setSearch] = useState("");

  function SubmitSearch() {
    setLoading(true);
    axios
      .get(
        `https://travelorganization.monster/api/Admin/TicketsManagement/SeachTickets?type=${service}&searchkey=${search}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((json) => {
        console.log(json);
        if (json.data.isSuccess) {
          setLoading(false);
          setData(json.data.data);
        }
      });
  }

  useEffect(() => {
    SubmitSearch();
  }, [service]);

  return (
    <BackLayout title="لیست بلیط ها" backgroundColor="#f5f5f5" isLoading={loading}>
      <TicketScreenHeader
        service={service}
        setService={setService}
        search={search}
        setSearch={setSearch}
        submitSearch={SubmitSearch}
      />
      <View mt="20px" style={{ gap: 15 }}>
        {data ? (
          data.map((ticket, index) => <AdminTicketCard key={index} {...ticket} />)
        ) : (
          <Text>دیتایی وچود ندارد</Text>
        )}
      </View>
    </BackLayout>
  );
}
