import React from "react";
import CustomLayout from "../../components/layout";

const RouteLayout = ({ element }) => {
  return <CustomLayout>{element()}</CustomLayout>;
};

export default RouteLayout;
