// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Admin/Tables";
import Billing from "views/Admin/Billing";
import Profile from "views/User/Profile";
import Businesses from "views/Admin/Businesses";
import MapView from "views/Admin/MapView";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <CreditIcon color="inherit" />,
    component: Billing,
    layout: "/admin",
  },
  {
    name: "ADMIN TOOLS",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: <HomeIcon color="inherit" />,
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/mapview",
        name: "Map View",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: MapView,
        layout: "/admin",
      },
      {
        path: "/business",
        name: "Businesseses",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Businesses,
        layout: "/admin",
      },
      {
        path: "/assesment",
        name: "Assesments",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Businesses,
        layout: "/admin",
      }
    ],
  },
];
export default dashRoutes;
