import { Iconify } from "react-native-iconify";

export function profileItemData(token: any, role: "Customer" | "Admin") {
  let data = [
    {
      id: 1,
      title: "سوالات متداول",
      icon: <Iconify icon="akar-icons:question" size={26} color="#6C757D" />,
      path: "FAQScreen",
    },
    {
      id: 2,
      title: "درباره ما",
      icon: <Iconify icon="icon-park-outline:attention" size={26} color="#6C757D" />,
      path: "aboutus",
    },
  ];
  if (token) {
    if (role === "Customer") {
      data.unshift(
        ...[
          {
            id: 4,
            title: "تغییر رمزعبور",
            icon: <Iconify icon="material-symbols:lock" size={26} color="#6C757D" />,
            path: "rules",
          },
          {
            id: 5,
            title: "سفرهای من",
            icon: <Iconify icon="material-symbols:history" size={26} color="#6C757D" />,
            path: "rules",
          },
          {
            id: 6,
            title: "پشتیبانی",
            icon: <Iconify icon="fa-solid:headset" size={26} color="#6C757D" />,
            path: "support",
          },
        ]
      );
    } else {
      data = [];
      data.push(
        ...[
          {
            id: 1,
            title: "لیست کاربران",
            icon: <Iconify icon="mdi:users" size={26} color="#6C757D" />,
            path: "userList",
          },
          {
            id: 2,
            title: "آژانس‌های مسافرتی",
            icon: <Iconify icon="ep:office-building" size={26} color="#6C757D" />,
            path: "agencyList",
          },
          {
            id: 3,
            title: "تورها",
            icon: <Iconify icon="game-icons:island" size={26} color="#6C757D" />,
            path: "tourList",
          },
          {
            id: 4,
            title: "لیست بلیط‌ها",
            icon: <Iconify icon="f7:tickets-fill" size={26} color="#6C757D" />,
            path: "tickets",
          },
          {
            id: 5,
            title: "پاسخ به سوالات",
            icon: <Iconify icon="octicon:question-24" size={26} color="#6C757D" />,
            path: "rules",
          },
        ]
      );
    }
  }
  return data;
}
