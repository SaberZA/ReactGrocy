/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "./views/Dashboard";
import StockOverview from "./views/StockOverview";
import ShoppingList from "./views/ShoppingList";
import Recipes from "./views/Recipes";
import Calendar from "./views/Calendar";
// import UserProfile from "./views/UserProfile.js";
// import Typography from "./views/Typography.js";
// import Icons from "./views/Icons.js";
// import Maps from "./views/Maps.js";
// import Notifications from "./views/Notifications.js";
// import Upgrade from "./views/Upgrade.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-chart-pie",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/stockoverview",
    name: "Stock Overview",
    icon: "far fa-clipboard",
    component: StockOverview,
    layout: "/admin",
  },
  {
    path: "/shoppinglist",
    name: "Shopping List",
    icon: "fas fa-shopping-cart",
    component: ShoppingList,
    layout: "/admin",
  },
  {
    path: "/recipes",
    name: "Recipes",
    icon: "fas fa-fire",
    component: Recipes,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "far fa-calendar-alt",
    component: Calendar,
    layout: "/admin",
  },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },  
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
