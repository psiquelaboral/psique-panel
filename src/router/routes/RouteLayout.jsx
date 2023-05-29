//libraries
import React from "react";

//components
import CustomLayout from "@components/layout";

const RouteLayout = ({ element }) => {
  return <CustomLayout>{element()}</CustomLayout>;
};

export default RouteLayout;
