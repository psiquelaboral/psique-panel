import React from "react";
import Layout from "../../components/layout";

const RouteLayout = ({ element }) => {
  return <Layout>{element()}</Layout>;
};

export default RouteLayout;
