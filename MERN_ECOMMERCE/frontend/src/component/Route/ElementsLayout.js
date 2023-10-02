import React from "react";
import { Outlet } from 'react-router-dom';
import { Elements } from "@stripe/react-stripe-js";

const ElementsLayout = ({ stripe }) => (
  <Elements stripe={stripe}>
    <Outlet />
  </Elements>
);

export default ElementsLayout;