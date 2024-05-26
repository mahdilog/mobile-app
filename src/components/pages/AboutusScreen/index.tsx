import BackLayout from "@/src/layouts/backLayout";
import { Text, View } from "native-base";
import React, { ReactNode } from "react";
import { Iconify } from "react-native-iconify";
import Logo from "../../bases/logo";

function AboutUsDetails({ icon, value }: { icon: ReactNode; value: string }) {
  return (
    <View flexDirection="row-reverse" style={{ gap: 7 }} alignItems="center">
      {icon}
      <Text fontSize="16px" color="#000" style={{ fontWeight: 700 }}>
        {value}
      </Text>
    </View>
  );
}

const DATA = [
  {
    id: 1,
    icon: <Iconify icon="ic:baseline-phone" size={25} color="#224763" />,
    value: "021-33322791",
  },
  {
    id: 2,
    icon: <Iconify icon="ic:baseline-phone" size={25} color="#224763" />,
    value: "09100526551",
  },
  {
    id: 3,
    icon: <Iconify icon="mdi:gmail" size={25} color="#224763" />,
    value: "novateam@gmail.com",
  },
  {
    id: 4,
    icon: <Iconify icon="mdi:location" size={25} color="#224763" />,
    value: "تهران ، خیابان پیروزی ، جنب بانک ملت ، طبقه 2",
  },
];

export default function AboutusScreen() {
  return (
    <BackLayout title="درباره ما">
      <View justifyContent="space-between" style={{ flex: 1 }}>
        <View style={{ gap: 40 }}>
          <Text lineHeight={25} color="#000">
            گروه برنامه نویسی نوا(NOVA) در سال 2012 با هدف ایجاد تغییر و تحول در فضای وب ایران
            فعالیت رسمی خود را آغاز کرد. ما هرسال با تلاش و پشتکار بسیار، همگام با استانداردهای روز
            دنیا گام برداشتیم و طی این سال‌ها توانستیم نقش مهمی در اشتغال‌زایی، آموزش و تربیت نیروی
            حرفه‌ای در صنعت وب ایفا کنیم. در کنار این ارزش‌آفرینی مستمر توانستیم سیمای وب ایران را
            همان‌طور که از نام‌ش پیداست تا اندازه چشمگیری تغییر دهیم و سطح توقع مخاطبین از وب فارسی
            را به سوی زیبایی‌شناسی در کنار کارایی عمیق و ارزش‌آفرین افزایش دهیم.
          </Text>
          <View style={{ gap: 8 }}>
            {DATA.map((item) => (
              <AboutUsDetails key={item.id} icon={item.icon} value={item.value} />
            ))}
          </View>
        </View>
        <Logo />
      </View>
    </BackLayout>
  );
}
