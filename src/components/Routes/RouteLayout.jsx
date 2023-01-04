import React from "react";
import Layout from "../layout";

const RouteLayout = ({ element }) => {
  return <Layout>{element()}</Layout>;
};

export default RouteLayout;
