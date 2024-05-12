import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/user/LoginPage";
import RegisterAccount from "./pages/user/RegisterAccount";
import Homepage from "./pages/user/Homepage";
import ContactUs from "./pages/user/Contact";
import About from "./pages/user/about";
import AddCart from "./pages/user/AddCart";
import ViewProduct from "./pages/user/ViewProduct";
import Footer from "./components/Footer";
import { useState } from "react";
import { userDataContext } from "./context/userDataContext";
// import { productsDeatils } from "./LoginAndRegisterAccount/Products";
import KidsCloths from "./components/KidsCloths";
import Babycare from "./components/Babycare";
import Footwear from "./components/footwear";
import Admin from "./pages/admin/adminPage";
import Sidebar from "./pages/admin/mainplate";
import SuccessAlert from "./components/successAlert";
import ShowMoreProducts from "./components/showMoreProducts";
import { useEffect } from "react";
import axios from "axios";
import { userLogin, Category, category } from "./assets/dropDownData/dropDown";

const token = localStorage.getItem("jwt_token");

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

function App() {
  // const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [users, setusers] = useState([]);
  const [LoginUser, setLoginUser] = useState([]);
  const [orders, setOrders] = useState([]);
  const userId = localStorage.getItem("id");
  const userName = localStorage.getItem("name");

  // admin all users

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
        token ? setIsAuthenticated(true) : setIsAuthenticated(false);
        setProducts(productData.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //user Logout List
  const HandleLogout = () => {
    setIsAuthenticated(false);
    localStorage.clear();
  };

  const userLogout = [
    {
      key: "1",
      label: (
        <Link to="/" onClick={HandleLogout}>
          Logout
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link to="/" onClick={HandleLogout}>
          My orders
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link to="/" onClick={HandleLogout}>
          Settings
        </Link>
      ),
    },
  ];

  return (
    <div className="App">
      <userDataContext.Provider
        value={{
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
          userId,
          userName,
          userLogout,
          userLogin,
          category,
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
          <Route path="/showmoreproducts" element={<ShowMoreProducts />} />
        </Routes>
      </userDataContext.Provider>
    </div>
  );
}

export default App;
