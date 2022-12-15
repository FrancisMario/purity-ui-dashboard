// import
import Dashboard from "views/Admin/Dashboard";
import Tables from "views/Admin/Tables";
import Billing from "views/Admin/Billing";
import Profile from "views/User/Profile";
import Businesses from "views/Admin/Businesses";
import MapView from "views/Admin/MapView";
import Assesments from "views/Admin/Assesments";
import MyAssesment from "views/User/Assesment";
import SignUp from "views/Auth/SignUp";
import SignIn from "views/Auth/SignIn";

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
    name: "User Menu",
    category: "account",
    state: "pageCollapse",
    views: [
  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/myassesments",
    name: "My Assesments",
    icon: <CreditIcon color="inherit" />,
    component: MyAssesment,
    layout: "/admin",
  },
]},
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
        name: "Businesses",
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
        component: Assesments,
        layout: "/admin",
      }
    ],
  },

  {
    path: "/signup",
    name: "Register",
    icon: <CreditIcon color="inherit" />,
    component: SignUp,
    secondaryNavbar: false,
    layout: "/auth",
  },
  {
    path: "/login-page",
    name: "Register",
    icon: <CreditIcon color="inherit" />,
    component: SignIn,
    secondaryNavbar: false,
    layout: "/auth",
  },
];
export default dashRoutes;
