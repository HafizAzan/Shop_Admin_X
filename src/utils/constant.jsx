import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  TeamOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { AUTHENTICATED_ROUTES_URL } from "./routesConstant";

export const profileDropDown = [
  { key: "1", label: "Profile", icon: <UserOutlined /> },
  { key: "2", label: "Settings", icon: <SettingOutlined /> },
  { key: "3", label: "Logout", danger: true, icon: <LogoutOutlined /> },
];

export const emailRules = [
  { required: true, message: "Please enter a valid email" },
  { type: "email", message: "Invalid email format" },
];

export const passwordRules = [
  { required: true, message: "Please enter a password" },
  {
    pattern: /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[\W_]).{6,}$/,
    message:
      "Password must be at least 6 characters long, contain 1 uppercase letter, 1 special character, and 2 numbers",
  },
];

export const sliderItems = [
  {
    key: AUTHENTICATED_ROUTES_URL.HOME,
    label: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    key: AUTHENTICATED_ROUTES_URL.ORDERS,
    label: "Orders",
    icon: <ShoppingCartOutlined />,
  },
  {
    key: AUTHENTICATED_ROUTES_URL.PRODUCTS,
    label: "Products",
    icon: <ShoppingOutlined />,
    children: [
      {
        key: AUTHENTICATED_ROUTES_URL.PRODUCTS,
        label: "All Products",
        icon: <ShoppingOutlined />,
      },
      {
        key: AUTHENTICATED_ROUTES_URL.ADD_PRODUCTS,
        label: "Add Products",
        icon: <ShoppingOutlined />,
      },
    ],
  },
  {
    key: AUTHENTICATED_ROUTES_URL.CUSTOMER,
    label: "Customers",
    icon: <TeamOutlined />,
  },
  {
    key: AUTHENTICATED_ROUTES_URL.CHATS,
    label: "Chats",
    icon: <MessageOutlined />,
  },
  {
    key: AUTHENTICATED_ROUTES_URL.PROFILE,
    label: "Profile",
    icon: <UserOutlined />,
  },
  {
    key: AUTHENTICATED_ROUTES_URL.SETTING,
    label: "Settings",
    icon: <SettingOutlined />,
  },
];

export const THEME_CONFIG = {
  token: {
    colorText: "#ffffff",
    colorLink: "#ffffff",
  },
  Table: {
    colorBgContainer: "#1a1c23",
    headerBg: "#1a1c23",
    colorText: "#ffffff",
    borderColor: "#444",
  },
  components: {
    Menu: {
      darkItemBg: "#1a1c23",
      darkItemSelectedBg: "#6c2bd9",
      darkSubMenuItemBg: "#1a1c23",
    },
    Breadcrumb: {
      colorText: "#ffffff",
      colorTextDisabled: "#cccccc",
      colorLink: "#ffffff",
    },
    Modal: {
      contentBg: "#1a1c23",
      headerBg: "#1a1c23",
      titleColor: "#1a1c23",
      colorIcon: "#ffffff",
    },
    Select: {
      colorBgContainer: "#000000",
      optionSelectedBg: "#6c2bd9",
      optionActiveBg: "#6c2bd9",
      colorText: "#fff",
      borderRadius: 4,
      optionBorderColor: "#444",
    },
    Pagination: {
      colorBgTextActive: "#6c2bd9",
      colorBgContainer: "#1a1c23",
      colorText: "#ffffff",
      borderRadius: 4,
      colorIcon: "#ffffff",
    },
  },
};

export const MESSAGES = {
  PRODUCT_DELETE: "Product Delete SucessFully!",
};

export const categoriesItems = [
  "Electronics",
  "Mobiles",
  "Laptops",
  "Cameras",
  "Clothing",
  "Men’s Fashion",
  "Women’s Fashion",
  "Shoes",
  "Bags",
  "Home & Furniture",
  "Beauty & Health",
  "Sports & Outdoor",
  "Grocery & Food",
  "Books & Stationery",
  "Toys & Baby Products",
];

export const brandsItem = [
  { value: "apple", label: "Apple" },
  { value: "samsung", label: "Samsung" },
  { value: "nike", label: "Nike" },
  { value: "adidas", label: "Adidas" },
  { value: "sony", label: "Sony" },
];

export const stkStatus = [
  { value: "in stock", label: "In Stock" },
  { value: "out of Stock", label: "Out Of Stock" },
];

export const offer = [
  { value: "discount", label: "Discount" },
  { value: "sale", label: "Sale" },
  { value: "none", label: "No Offer" },
];

export const status = [
  { value: "publish", label: "Publish" },
  { value: "draft", label: "Draft" },
];

export const productStatus = [
  { value: "all products", label: "All Products" },
  { value: "publish", label: "Publish" },
  { value: "draft", label: "Draft" },
];

export const categoriesItemsFilter = [
  { value: "electronics", label: "Electronics" },
  { value: "mobiles", label: "Mobiles" },
  { value: "laptops", label: "Laptops" },
  { value: "cameras", label: "Cameras" },
  { value: "clothing", label: "Clothing" },
  { value: "mens-fashion", label: "Men’s Fashion" },
  { value: "womens-fashion", label: "Women’s Fashion" },
  { value: "shoes", label: "Shoes" },
  { value: "bags", label: "Bags" },
  { value: "home-furniture", label: "Home & Furniture" },
  { value: "beauty-health", label: "Beauty & Health" },
  { value: "sports-outdoor", label: "Sports & Outdoor" },
  { value: "grocery-food", label: "Grocery & Food" },
  { value: "books-stationery", label: "Books & Stationery" },
  { value: "toys-baby-products", label: "Toys & Baby Products" },
  { value: "all-category", label: "All Category" },
];
