import React from "react";
import BingMap from "./BingMap";

export default class Map extends React.Component {   
    render() {       
        return(
            <div>
                <h1>MAP</h1>
                <BingMap style={{ width: "500px", height: "500px" }} />
            </div>
        );
    }
}
