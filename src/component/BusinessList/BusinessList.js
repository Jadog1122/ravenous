import React from "react";
import Business from "../Business/Business";

class BusinessList extends React.Component{
    render(){
        return(
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />

            </div>
        )
    }
}
export default BusinessList;
