import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginAndRegisterAccount/LoginPage";
import RegisterAccount from "./LoginAndRegisterAccount/RegisterAccount";
import Homepage from "./LoginAndRegisterAccount/Homepage";
import ContactUs from "./LoginAndRegisterAccount/Contact";
import About from "./LoginAndRegisterAccount/about";
import AddCart from "./LoginAndRegisterAccount/AddCart";
import ViewProduct from "./LoginAndRegisterAccount/ViewProduct";
import Footer from "./LoginAndRegisterAccount/Footer";
import { useState } from "react";
import { userDataContext } from "./userDataContext";
import { productsDeatils } from "./LoginAndRegisterAccount/Products";
import KidsCloths from "./LoginAndRegisterAccount/KidsCloths";
import Babycare from "./LoginAndRegisterAccount/Babycare";
import Footwear from "./LoginAndRegisterAccount/footwear";
import Admin from "./LoginAndRegisterAccount/Admin/admin";
import Sidebar from "./LoginAndRegisterAccount/Admin/mainplate";
import SuccessAlert from "./LoginAndRegisterAccount/successAlert";
import { useEffect } from "react";
import axios from "axios";

const token =localStorage.getItem('jwt_token');



export const Axios=axios.create({
  baseURL:process.env.REACT_APP_BASE_URL,
  headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}` 
  },
})

function App() {
  // const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [users, setusers] = useState([]);
  const [LoginUser, setLoginUser] = useState([]);
  const [orders, setOrders] = useState([]);
  const userId=localStorage.getItem('id');



  // admin users

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await Axios.get("/api/admin/users");
        setusers(userData.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //show all products in homepage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await Axios.get("/api/admin/products");
        token ? setIsAuthenticated(true) : setIsAuthenticated(false)
        setProducts(productData.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // getting orders

  //

  return (
    <div className="App">
      <userDataContext.Provider
        value={{
          productsDeatils,
          // cartItems,
          // setCartItems,
          isAuthenticated,
          setIsAuthenticated,
          search,
          setSearch,
          setProducts,
          products,
          users,
          setusers,
          LoginUser,
          setLoginUser,
          orders,
          setOrders,
          userId
        }}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/registeraccount" element={<RegisterAccount />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/cartItems" element={<AddCart />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/kidsclothing" element={<KidsCloths />} />
          <Route path="/productdetails/:id" element={<ViewProduct />} />
          <Route path="/babycare" element={<Babycare />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<Sidebar />} />
          <Route path="/adminproducts" element={<Sidebar />} />
          <Route path="/addproducts" element={<Sidebar />} />
          <Route path="/editpage/:id" element={<Sidebar />} />
          <Route path="/info/:id/:name/:email" element={<Sidebar />} />
          <Route path="/payment/success" element={<SuccessAlert />} />
        </Routes>
      </userDataContext.Provider>
    </div>
  );
}

export default App;
