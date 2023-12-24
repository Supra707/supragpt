import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Features",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Chats",
    newTab: false,
    path: "/chat",
  },

  {
    id: 3,
    title: "Further plans",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Plan 1",
        newTab: false,
        path:"#",
      },
      {
        id: 34,
        title: "Plan 2",
        newTab: false,
        path: "#",
      },
      {
        id: 35,
        title: "Plan 3",
        newTab: false,
        path: "#",
      },
      {
        id: 35,
        title: "Plan 4",
        newTab: false,
        path:"#",
      },
      {
        id: 35.1,
        title: "Plan 5",
        newTab: false,
        path: "#",
      },
      {
        id: 36,
        title: "error",
        newTab: false,
        path: "/error",
      },
    ],
  },

  {
    id: 4,
    title: "Support",
    newTab: false,
    path: "/support/support",
  },
];

export default menuData;
