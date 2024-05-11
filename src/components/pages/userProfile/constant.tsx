import { Iconify } from "react-native-iconify";

export function profileItemData(token: any) {
  const data = [
    {
      id: 1,
      title: "سوالات متداول",
      icon: <Iconify icon="akar-icons:question" size={30} color="#6C757D" />,
      path: "rules",
    },
    {
      id: 2,
      title: "درباره ما",
      icon: <Iconify icon="icon-park-outline:attention" size={30} color="#6C757D" />,
      path: "rules",
    },
  ];
  if (token) {
    data.unshift(
      ...[
        {
          id: 4,
          title: "تغییر رمزعبور",
          icon: <Iconify icon="material-symbols:lock" size={30} color="#6C757D" />,
          path: "rules",
        },
        {
          id: 5,
          title: "سفرهای من",
          icon: <Iconify icon="material-symbols:history" size={30} color="#6C757D" />,
          path: "rules",
        },
        {
          id: 6,
          title: "پشتیبانی",
          icon: <Iconify icon="fa-solid:headset" size={30} color="#6C757D" />,
          path: "rules",
        },
      ]
    );
  }
  return data;
}
