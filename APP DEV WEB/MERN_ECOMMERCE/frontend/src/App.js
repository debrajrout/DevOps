import React, { useState } from "react";
import './App.css';
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import webFont from "webfontloader";
import Home from "./component/Home/Home.js";
import Loader from "./component/layout/Loader/Loader.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import axios from "axios";
import Payment from "./component/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ElementsLayout from "./component/Route/ElementsLayout.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/admin/Dashboard.js";
import ProductList from "./component/admin/ProductList.js";
import NewProduct from "./component/admin/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct";
import OrderList from "./component/admin/OrderList.js";
import ProcessOrder from "./component/admin/ProcessOrder.js";
import UsersList from "./component/admin/UsersList.js";
import UpdateUser from "./component/admin/UpdateUser.js";
import ProductReviews from "./component/admin/ProductReviews.js";

function App() {

  const { isAuthenticated, user } = useSelector(state => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    // console.log(data.stripeApiKey)

    setStripeApiKey(data.stripeApiKey);
  }

  // console.log("stripeApiKey: ",stripeApiKey);

  React.useEffect(() => {
    webFont.load({
      google:{
        families: ["Roboto", "Droid sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {/* {stripeApiKey && ( */}
        {/* <Elements stripe={loadStripe(stripeApiKey)}> */}
          {/* <ProtectedRoute exact path="/process/payment" component={Payment} /> */}
          {/* <Routes>
            <Route path="/process/payment" element={<ProtectedRoute />}>
              <Route path="/process/payment" element={<Payment />} />
            </Route>
          </Routes>
        </Elements> */}
      {/* )} */}

      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/product/:id" element={< ProductDetails />} />
        <Route exact path="/products" element={< Products />} />
        <Route path="/products/:keyword" element={< Products />} />
        <Route exact path="/search" element={< Search />} />

        {/* <Route exact path="/sad" element={< Loader />} /> */}
        {/* <Route exact path="/account/*" element={<ProtectedRoute>< Profile /></ProtectedRoute>} /> */}

        <Route path="/account" element={<ProtectedRoute />}>
          <Route path="/account" element={<Profile />} />
        </Route>

        <Route path="/me/update" element={<ProtectedRoute />}>
          <Route path="/me/update" element={<UpdateProfile />} />
        </Route>

        <Route path="/password/update" element={<ProtectedRoute />}>
          <Route path="/password/update" element={<UpdatePassword />} />
        </Route>

        <Route path="/password/forgot" element={<ForgotPassword />} />

        <Route path="/password/reset/:token" element={<ResetPassword />} />

        <Route exact path="/cart" element={<Cart />} />

        <Route exact path="/login" element={< LoginSignUp />} />

        <Route path="/login/shipping" element={<ProtectedRoute />}>
          <Route path="/login/shipping" element={<Shipping />} />
        </Route>

        <Route path="/order/confirm" element={<ProtectedRoute />}>
          <Route path="/order/confirm" element={<ConfirmOrder />} />
        </Route>

        {/* <Elements stripe={loadStripe(stripeApiKey)}>
          <Route path="/process/payment" element={<ProtectedRoute />}>
            <Route path="/process/payment" element={<Payment />} />
          </Route>
        </Elements> */}

        {/* <Route path="/process/payment" element={<ProtectedRoute />}>
          <Route
            path="/process/payment"
            element={stripeApiKey && (
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Route path="/process/payment" element={<Payment />} />
              </Elements>
            )}
          />
        </Route> */}

        <Route  element={<ProtectedRoute />}>
            {stripeApiKey && (
              <Route
                element={<ElementsLayout stripe={loadStripe(stripeApiKey)} />}
              >
                <Route path="/process/payment" element={<Payment />} />
              </Route>
            )}
        </Route>

        <Route path="/success" element={<ProtectedRoute />}>
          <Route path="/success" element={<OrderSuccess />} />
        </Route>

        <Route path="/orders" element={<ProtectedRoute />}>
          <Route path="/orders" element={<MyOrders />} />
        </Route>

        <Route path="/order/:id" element={<ProtectedRoute />}>
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        <Route path="/admin/dashboard" element={<ProtectedRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/admin/products" element={<ProtectedRoute />}>
          <Route path="/admin/products" element={<ProductList />} />
        </Route>

        <Route path="/admin/product" element={<ProtectedRoute />}>
          <Route path="/admin/product" element={<NewProduct />} />
        </Route>

        <Route path="/admin/product/:id" element={<ProtectedRoute />}>
          <Route path="/admin/product/:id" element={<UpdateProduct />} />
        </Route>

        <Route path="/admin/orders" element={<ProtectedRoute />}>
          <Route path="/admin/orders" element={<OrderList />} />
        </Route>

        <Route path="/admin/order/:id" element={<ProtectedRoute />}>
          <Route path="/admin/order/:id" element={<ProcessOrder />} />
        </Route>

        <Route path="/admin/users" element={<ProtectedRoute />}>
          <Route path="/admin/users" element={<UsersList />} />
        </Route>

        <Route path="/admin/user/:id" element={<ProtectedRoute />}>
          <Route path="/admin/user/:id" element={<UpdateUser />} />
        </Route>

        <Route path="/admin/reviews" element={<ProtectedRoute />}>
          <Route path="/admin/reviews" element={<ProductReviews />} />
        </Route>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
