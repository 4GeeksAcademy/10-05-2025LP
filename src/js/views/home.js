import React from "react";
import { Link } from "react-router-dom";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Box } from "../component/herosection";

export const Home = () => (
  <div className="text-center mt-5">

           <Box /> 
          <a href="#" className="btn frame">
            If you see this green button, bootstrap is working
          </a>
        
  </div>
);

export default Home;
