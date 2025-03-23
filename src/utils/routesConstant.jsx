import Home from "pages/Home/Home";
import AuthForm from "pages/AuthForm/AuthForm";
import AllProducts from "pages/Products/AllProducts";
import AddProduct from "pages/Products/AddProduct";
import Orders from "pages/Orders/Orders";
import Customers from "pages/Customers/Customers";
import Chats from "pages/Chats/Chats";
import Profile from "pages/Profile/Profile";
import Settings from "pages/Settings/Settings";
import ProductDetail from "pages/Products/ProductDetail";

export const UN_AUTHENTICATED_ROUTES_URL = {
  LOGIN: "/login",
  FORGET_PASSWORD: "/forget-password",
  SIGN_UP: "/singup",
};

export const UN_AUTHENTICATED_ROUTES = [
  {
    path: UN_AUTHENTICATED_ROUTES_URL.LOGIN,
    element: <AuthForm />,
    index: true,
  },
  {
    path: UN_AUTHENTICATED_ROUTES_URL.FORGET_PASSWORD,
    element: <AuthForm />,
    index: true,
  },
  {
    path: UN_AUTHENTICATED_ROUTES_URL.SIGN_UP,
    element: <AuthForm />,
    index: true,
  },
];

export const AUTHENTICATED_ROUTES_URL = {
  HOME: "/",
  SETTING: "/setting",
  PROFILE: "/profile",
  CHATS: "/chats",
  CUSTOMER: "/customer",
  ORDERS: "/orders",
  PRODUCTS: "/products",
  ADD_PRODUCTS: "/add-products",
  EDIT_PRODUCTS: "/edit-products/:id",
  PRODUCT_DETAIL: "/product-detail/:id",
};

export const AUTHENTICATED_ROUTES = [
  {
    path: AUTHENTICATED_ROUTES_URL.HOME,
    element: <Home />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.PRODUCTS,
    element: <AllProducts />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.ADD_PRODUCTS,
    element: <AddProduct />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.EDIT_PRODUCTS,
    element: <AddProduct />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.PRODUCT_DETAIL,
    element: <ProductDetail />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.ORDERS,
    element: <Orders />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.CUSTOMER,
    element: <Customers />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.CHATS,
    element: <Chats />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.PROFILE,
    element: <Profile />,
    index: true,
  },
  {
    path: AUTHENTICATED_ROUTES_URL.SETTING,
    element: <Settings />,
    index: true,
  },
];
