import React, { useContext } from "react";
import { Context } from "../store/appContext";
import LeftNavbar from "../component/leftnavbarcomp";
import { GetCredits } from "./getcredits";
import { Princing } from "../component/getcredits";
export const Dashboard = () => {
  return (
    <div>
     {/* <LeftNavbar />  testing the pricing page, when testing done create a proper page for it */}
       <Princing />
    </div>
  );
};



