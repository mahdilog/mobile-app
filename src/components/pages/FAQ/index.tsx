import BackLayout from "@/src/layouts/backLayout";
import React from "react";
import { questions } from "./constant";
import FAQItem from "../../bases/FAQItem";

export default function FAQ() {
  return (
    <BackLayout title="سوالات متداول">
      {questions.map((item) => (
        <FAQItem key={item.id} title={item.title} description={item.description} />
      ))}
    </BackLayout>
  );
}
