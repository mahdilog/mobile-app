export const headerIcons: {
  icon: "people-outline" | "search-outline";
  size: number;
  color: string;
}[] = [
  {
    icon: "people-outline",
    size: 24,
    color: "#ADB4BD",
  },
  {
    icon: "search-outline",
    size: 24,
    color: "#ADB4BD",
  },
];

export const navigator: {
  icon: {
    active: {
      color: string;
      iconName: "earth" | "home" | "ticket";
    };
    default: {
      color: "#ADB4BD";
      iconName: "earth-outline" | "home-outline" | "ticket-outline";
    };
  };
  route: string;
}[] = [
  {
    icon: {
      active: {
        color: "#163C9F",
        iconName: "earth",
      },
      default: {
        color: "#ADB4BD",
        iconName: "earth-outline",
      },
    },
    route: "/tour",
  },
  {
    icon: {
      active: {
        color: "#163C9F",
        iconName: "home",
      },
      default: {
        color: "#ADB4BD",
        iconName: "home-outline",
      },
    },
    route: "/",
  },
  {
    icon: {
      active: {
        color: "#163C9F",
        iconName: "ticket",
      },
      default: {
        color: "#ADB4BD",
        iconName: "ticket-outline",
      },
    },
    route: "/ticket",
  },
];
