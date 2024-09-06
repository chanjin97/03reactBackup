import React from "react";
import BasicMenu from "../components/menus/BasicMenu";

function BasicLayout({ children }) {
  return (
    <>
      <div className="bg-sb-500">
        <div className="container mx-auto bg-amber-200">
          <BasicMenu />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="bg-blue-100 flex justify-center py-5 ">visual</div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default BasicLayout;
