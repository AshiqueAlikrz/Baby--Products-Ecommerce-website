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
import { dummyData } from "./DummyUser";
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
// import User from "./LoginAndRegisterAccount/Admin/user";
// import AdminProducts from "./LoginAndRegisterAccount/Admin/adminProducts";
// import AddProdcuts from "./LoginAndRegisterAccount/Admin/addProdcuts";
// import EditPage from "./LoginAndRegisterAccount/Admin/EditPage";
// import Info from "./LoginAndRegisterAccount/Admin/Info";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [users, setusers] = useState([]);
  const [LoginUser, setLoginUser] = useState([]);
  const [orders, setOrders] = useState([]);
  const [token, setToken] = useState([]);
  const [RegistrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // admin users

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await axios.get("http://localhost:8000/api/admin/users");
        // console.log("userData", userData);
        setusers(userData.data.data);
        
        // console.log("users",users);
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
        const productData = await axios.get("http://localhost:8000/api/admin/products");
        setProducts(productData.data.data);
        // console.log("loginuser", LoginUser);
        console.log('productData',productData);
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
          cartItems,
          setCartItems,
          isAuthenticated,
          setIsAuthenticated,
          search,
          setSearch,
          RegistrationData,
          setRegistrationData,
          LoginData,
          setLoginData,
          setProducts,
          products,
          users,
          setusers,
          LoginUser,
          setLoginUser,
          orders,
          setOrders,
          token,
          setToken,
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
