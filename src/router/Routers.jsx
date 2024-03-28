import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import News from "../pages/News";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import User from "../components/User";
import StockU from "../components/StockU";
import Charts from "../components/Charts";
import Community from "../components/Community";
import Strategies from "../components/Strategies";
import Admindashboard from "../layout/Admindashboard";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import Modal from "../components/Modal";
import SubscriptionPlan from "../components/SubscriptionPlan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/news",
        element: <PrivateRouter><News /></PrivateRouter>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile/>,
      },
      {
        path: "/user",
        element: <User/>,
      }
    ],
  },
  {
    path: "/stock",
    element:<StockU/>
  },
  {
    path: "/login",
    element: <Modal/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/charts",
    element: <Charts/>
  },
  {
    path: "/community",
    element: <Community/>
  },
  {
    path: "/strategies",
    element: <Strategies/>
  },
  {
    path: "dashboard",
    element: <PrivateRouter><Admindashboard/></PrivateRouter>,
    children: [
      {
        path: "",
      element: <Dashboard/>
      },
      {
        path: "users",
        element: <Users/>
      },
    ]
  },
  {
    path: "/SubscriptionPlan",
    element: <SubscriptionPlan/>
  }
]);
export default router;