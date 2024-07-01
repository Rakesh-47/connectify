import React from "react";
import Searchbar from "./search.jsx";
import Conversations from "./conversations.jsx";
import Logout from "./logout.jsx";

const Sidebar=()=>{
    return(
        <div className="border-r border-gray-500  p-4 flex flex-col  ">
         <Searchbar/>
         <div className="divider py-3"></div>
          <Conversations/>
          <Logout/>
        </div>
    )
}

export default Sidebar