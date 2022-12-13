// import
import Dashboard from "views/Dashboard/Dashboard";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import Profile from "views/Dashboard/Profile";
import Business from "views/Dashboard/Business";

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
        component: Business,
        layout: "/admin",
      },
      {
        path: "/business",
        name: "Businesses",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Business,
        layout: "/admin",
      },
      {
        path: "/assesment",
        name: "Assesments",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Business,
        layout: "/admin",
      },
      {
        path: "/assesment",
        name: "Assesments",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Business,
        layout: "/admin",
      },
      {
        path: "/assesment",
        name: "Assesments",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Business,
        layout: "/admin",
      },
      {
        path: "/assesment",
        name: "Assesments",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Business,
        layout: "/admin",
      },
    ],
  },
];
export default dashRoutes;
