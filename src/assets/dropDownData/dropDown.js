import { Link } from "react-router-dom";



//user Login List
export const userLogin = [
  {
    key: "1",
    label: <Link to="/loginpage">Login</Link>,
  },
  {
    key: "2",
    label: <Link to="/registeraccount">Register Account</Link>,
  },
];


//product categories
export const category = [
  {
    key: "1",
    label: <Link to="/kidsclothing"> Kids Clothing</Link>,
  },
  {
    key: "2",
    label: <Link to="/babycare"> Baby Care</Link>,
  },
  {
    key: "3",
    label: <Link to="/footwear"> Footwear & accessories</Link>,
  },
];
